import { ftch } from "@luna/core";
import { TidalApi } from "@luna/lib";
import { setCachedAlbumId, setCachedArtistId, setCachedTrackId } from "../navigation/tidalNavigate";

// In-memory cache for resolved artwork URLs and extracted colors
const artworkCache: Record<string, Promise<string>> = {};
const resolvedCache: Record<string, string> = {};
const colorCache: Record<string, string> = {};

// Filter out Last.fm's default placeholder images
const LASTFM_PLACEHOLDERS = [
  "2a96cbd8b46e442fc41c2b86b821562f",
  "c67d77b49463c0f4236c5796328a6b78",
  "4128a6eb29f94943c9d206c08e625904",
];

export const isPlaceholderUrl = (url?: string): boolean => {
  if (!url || !url.trim()) return true;
  return LASTFM_PLACEHOLDERS.some((ph) => url.includes(ph));
};

/**
 * Extracts the most vibrant RGB color string (e.g. "200, 182, 255") from an image.
 * Uses fetch -> data URL conversion to bypass canvas CORS taint restrictions.
 */
export async function getArtworkDominantColor(url: string): Promise<string> {
  if (!url || !url.trim() || isPlaceholderUrl(url)) return "200, 182, 255";
  if (colorCache[url]) return colorCache[url];

  try {
    // 1. Fetch image directly via fetch to convert to Data URL and prevent canvas taint
    let dataUrl = url;
    if (!url.startsWith("data:")) {
      const res = await fetch(url);
      const blob = await res.blob();
      dataUrl = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result as string);
        reader.readAsDataURL(blob);
      });
    }

    // 2. Draw to offscreen canvas
    const rgb = await new Promise<string>((resolve) => {
      const img = new Image();
      img.onload = () => {
        try {
          const canvas = document.createElement("canvas");
          const size = 32;
          canvas.width = size;
          canvas.height = size;
          const ctx = canvas.getContext("2d");
          if (!ctx) return resolve("200, 182, 255");

          ctx.drawImage(img, 0, 0, size, size);
          const data = ctx.getImageData(0, 0, size, size).data;

          let bestR = 200, bestG = 182, bestB = 255;
          let maxScore = -1;

          for (let i = 0; i < data.length; i += 4) {
            const r = data[i];
            const g = data[i + 1];
            const b = data[i + 2];
            const a = data[i + 3];
            if (a < 128) continue;

            const max = Math.max(r, g, b);
            const min = Math.min(r, g, b);
            const brightness = (max + min) / 2;
            const delta = max - min;

            // Skip very dark black (< 25) or washed out white (> 240)
            if (brightness < 25 || brightness > 240) continue;

            const saturation = delta === 0 ? 0 : delta / (brightness <= 128 ? max + min : 510 - max - min);
            const score = saturation * 3 + (brightness > 60 && brightness < 190 ? 1 : 0.3);

            if (score > maxScore) {
              maxScore = score;
              bestR = r;
              bestG = g;
              bestB = b;
            }
          }

          // If image was largely monochrome or low saturation, give a clean ambient tone
          if (maxScore <= 0.15) {
            bestR = 175;
            bestG = 185;
            bestB = 215;
          }

          resolve(`${bestR}, ${bestG}, ${bestB}`);
        } catch (e) {
          console.warn("[LastFMStats] Color extraction error:", e);
          resolve("200, 182, 255");
        }
      };
      img.onerror = () => resolve("200, 182, 255");
      img.src = dataUrl;
    });

    colorCache[url] = rgb;
    return rgb;
  } catch (err) {
    console.warn("[LastFMStats] Fetch for color extraction failed:", err);
    return "200, 182, 255";
  }
}

/**
 * Formats a Tidal image UUID into a full-resolution 1280x1280 or 750x750 CDN image URL
 */
export function formatTidalCoverUrl(uuid?: string, res = "1280"): string {
  if (!uuid || !uuid.trim()) return "";
  const parts = uuid.trim().split("-").join("/");
  return `https://resources.tidal.com/images/${parts}/${res}x${res}.jpg`;
}

/**
 * Resolves full-resolution artist image
 */
export async function getArtistImage(artistName: string): Promise<string> {
  if (!artistName || !artistName.trim() || artistName === "Unknown Artist") return "";
  const cleanName = artistName.trim();
  const key = `artist:${cleanName.toLowerCase()}`;
  if (resolvedCache[key]) return resolvedCache[key];
  if (artworkCache[key]) return artworkCache[key];

  artworkCache[key] = (async () => {
    try {
      const searchUrl = `https://desktop.tidal.com/v1/search?query=${encodeURIComponent(cleanName)}&limit=5&types=ARTISTS&${TidalApi.queryArgs()}`;
      const tidalRes = await TidalApi.fetch<{ artists?: { items?: { name: string; picture?: string; id?: number }[] } }>(searchUrl);
      if (tidalRes?.artists?.items?.length) {
        const match =
          tidalRes.artists.items.find((a) => a.picture && a.name.toLowerCase() === cleanName.toLowerCase()) ||
          tidalRes.artists.items.find((a) => a.picture) ||
          tidalRes.artists.items[0];

        if (match?.id) {
          setCachedArtistId(cleanName, match.id);
        }

        if (match?.picture) {
          const url = formatTidalCoverUrl(match.picture, "750");
          if (url) return (resolvedCache[key] = url);
        }
      }
    } catch (e) {
      console.warn("[LastFMStats] Failed to fetch Tidal artist picture:", e);
    }

    try {
      const itunesUrl = `https://itunes.apple.com/search?term=${encodeURIComponent(cleanName)}&entity=album&limit=1`;
      const itunesData = await ftch.json<any>(itunesUrl).catch(() => null);
      if (itunesData?.results?.[0]?.artworkUrl100) {
        const url = itunesData.results[0].artworkUrl100.replace("100x100bb", "600x600bb");
        return (resolvedCache[key] = url);
      }
    } catch {}

    return (resolvedCache[key] = "");
  })();

  return artworkCache[key];
}

/**
 * Resolves full-resolution track artwork
 */
export async function getTrackArtwork(trackName: string, artistName: string): Promise<string> {
  if (!trackName) return "";
  const cleanTrack = trackName.trim();
  const cleanArtist = (artistName || "").trim();
  const query = `${cleanTrack} ${cleanArtist}`.trim();
  const key = `track:${cleanTrack.toLowerCase()}:${cleanArtist.toLowerCase()}`;

  if (resolvedCache[key]) return resolvedCache[key];
  if (artworkCache[key]) return artworkCache[key];

  artworkCache[key] = (async () => {
    try {
      const searchUrl = `https://desktop.tidal.com/v1/search?query=${encodeURIComponent(query)}&limit=5&types=TRACKS&${TidalApi.queryArgs()}`;
      const tidalRes = await TidalApi.fetch<{ tracks?: { items?: { title: string; id?: number; album?: { id?: number; cover?: string; videoCover?: string } }[] } }>(searchUrl);
      if (tidalRes?.tracks?.items?.length) {
        const match = tidalRes.tracks.items.find((t) => t.album?.cover) || tidalRes.tracks.items[0];
        if (match?.id) {
          setCachedTrackId(cleanTrack, cleanArtist, match.id);
        }
        if (match?.album?.id) {
          setCachedAlbumId(match.title || "", cleanArtist, match.album.id);
        }

        const coverUuid = match?.album?.cover || match?.album?.videoCover;
        if (coverUuid) {
          const url = formatTidalCoverUrl(coverUuid, "1280");
          if (url) return (resolvedCache[key] = url);
        }
      }
    } catch (e) {
      console.warn("[LastFMStats] Failed to fetch Tidal track cover:", e);
    }

    try {
      const itunesUrl = `https://itunes.apple.com/search?term=${encodeURIComponent(query)}&entity=song&limit=1`;
      const itunesData = await ftch.json<any>(itunesUrl).catch(() => null);
      if (itunesData?.results?.[0]?.artworkUrl100) {
        const url = itunesData.results[0].artworkUrl100.replace("100x100bb", "600x600bb");
        return (resolvedCache[key] = url);
      }
    } catch {}

    return (resolvedCache[key] = "");
  })();

  return artworkCache[key];
}

/**
 * Resolves full-resolution album artwork
 */
export async function getAlbumArtwork(albumName: string, artistName: string): Promise<string> {
  if (!albumName) return "";
  const cleanAlbum = albumName.trim();
  const cleanArtist = (artistName || "").trim();
  const query = `${cleanAlbum} ${cleanArtist}`.trim();
  const key = `album:${cleanAlbum.toLowerCase()}:${cleanArtist.toLowerCase()}`;

  if (resolvedCache[key]) return resolvedCache[key];
  if (artworkCache[key]) return artworkCache[key];

  artworkCache[key] = (async () => {
    try {
      const searchUrl = `https://desktop.tidal.com/v1/search?query=${encodeURIComponent(query)}&limit=5&types=ALBUMS&${TidalApi.queryArgs()}`;
      const tidalRes = await TidalApi.fetch<{ albums?: { items?: { title: string; id?: number; cover?: string; videoCover?: string } }[] }>(searchUrl);
      if (tidalRes?.albums?.items?.length) {
        const match = tidalRes.albums.items.find((a) => a.cover) || tidalRes.albums.items[0];
        if (match?.id) {
          setCachedAlbumId(cleanAlbum, cleanArtist, match.id);
        }

        const coverUuid = match?.cover || match?.videoCover;
        if (coverUuid) {
          const url = formatTidalCoverUrl(coverUuid, "1280");
          if (url) return (resolvedCache[key] = url);
        }
      }
    } catch (e) {
      console.warn("[LastFMStats] Failed to fetch Tidal album cover:", e);
    }

    try {
      const itunesUrl = `https://itunes.apple.com/search?term=${encodeURIComponent(query)}&entity=album&limit=1`;
      const itunesData = await ftch.json<any>(itunesUrl).catch(() => null);
      if (itunesData?.results?.[0]?.artworkUrl100) {
        const url = itunesData.results[0].artworkUrl100.replace("100x100bb", "600x600bb");
        return (resolvedCache[key] = url);
      }
    } catch {}

    return (resolvedCache[key] = "");
  })();

  return artworkCache[key];
}
