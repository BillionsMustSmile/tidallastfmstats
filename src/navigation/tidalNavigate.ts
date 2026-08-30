import { redux, TidalApi } from "@luna/lib";

// Cache for Tidal entity IDs
const artistIdCache: Record<string, number | string> = {};
const albumIdCache: Record<string, number | string> = {};
const trackIdCache: Record<string, number | string> = {};

export function setCachedArtistId(name: string, id: number | string) {
  if (name && id) artistIdCache[name.trim().toLowerCase()] = id;
}

export function setCachedAlbumId(name: string, artistName: string, id: number | string) {
  if (name && id) albumIdCache[`${name.trim().toLowerCase()}:${(artistName || "").trim().toLowerCase()}`] = id;
}

export function setCachedTrackId(name: string, artistName: string, id: number | string) {
  if (name && id) trackIdCache[`${name.trim().toLowerCase()}:${(artistName || "").trim().toLowerCase()}`] = id;
}

/**
 * Navigate to Tidal's Artist page (/artist/:id or /search/:name)
 */
export async function navigateToArtist(artistName: string, e?: React.MouseEvent) {
  if (e) {
    e.preventDefault();
    e.stopPropagation();
  }
  if (!artistName || !artistName.trim() || artistName === "Unknown Artist") return;
  const cleanName = artistName.trim();
  const cachedId = artistIdCache[cleanName.toLowerCase()];

  if (cachedId) {
    try {
      redux.actions["router/PUSH"]({ pathname: `/artist/${cachedId}` });
      return;
    } catch {}
  }

  // Search Tidal to find exact artist ID
  try {
    const searchUrl = `https://desktop.tidal.com/v1/search?query=${encodeURIComponent(cleanName)}&limit=3&types=ARTISTS&${TidalApi.queryArgs()}`;
    const res = await TidalApi.fetch<{ artists?: { items?: { name: string; id: number }[] } }>(searchUrl);
    if (res?.artists?.items?.length) {
      const match =
        res.artists.items.find((a) => a.name.toLowerCase() === cleanName.toLowerCase()) ||
        res.artists.items[0];
      if (match?.id) {
        artistIdCache[cleanName.toLowerCase()] = match.id;
        redux.actions["router/PUSH"]({ pathname: `/artist/${match.id}` });
        return;
      }
    }
  } catch {}

  // Fallback to Tidal search page
  try {
    redux.actions["router/PUSH"]({ pathname: `/search/${encodeURIComponent(cleanName)}` });
  } catch (err) {
    console.warn("[LastFMStats] Failed to navigate to artist:", err);
  }
}

/**
 * Navigate to Tidal's Album page (/album/:id or /search/:name)
 */
export async function navigateToAlbum(albumName: string, artistName: string = "", e?: React.MouseEvent) {
  if (e) {
    e.preventDefault();
    e.stopPropagation();
  }
  if (!albumName || !albumName.trim()) return;
  const cleanAlbum = albumName.trim();
  const cleanArtist = (artistName || "").trim();
  const key = `${cleanAlbum.toLowerCase()}:${cleanArtist.toLowerCase()}`;
  const cachedId = albumIdCache[key];

  if (cachedId) {
    try {
      redux.actions["router/PUSH"]({ pathname: `/album/${cachedId}` });
      return;
    } catch {}
  }

  const query = `${cleanAlbum} ${cleanArtist}`.trim();

  // Search Tidal to find exact album ID
  try {
    const searchUrl = `https://desktop.tidal.com/v1/search?query=${encodeURIComponent(query)}&limit=3&types=ALBUMS&${TidalApi.queryArgs()}`;
    const res = await TidalApi.fetch<{ albums?: { items?: { title: string; id: number }[] } }>(searchUrl);
    if (res?.albums?.items?.length) {
      const match = res.albums.items[0];
      if (match?.id) {
        albumIdCache[key] = match.id;
        redux.actions["router/PUSH"]({ pathname: `/album/${match.id}` });
        return;
      }
    }
  } catch {}

  // Fallback to Tidal search page
  try {
    redux.actions["router/PUSH"]({ pathname: `/search/${encodeURIComponent(query)}` });
  } catch (err) {
    console.warn("[LastFMStats] Failed to navigate to album:", err);
  }
}

/**
 * Navigate to Tidal's Track/Search page
 */
export async function navigateToTrack(trackName: string, artistName: string = "", e?: React.MouseEvent) {
  if (e) {
    e.preventDefault();
    e.stopPropagation();
  }
  if (!trackName || !trackName.trim()) return;
  const cleanTrack = trackName.trim();
  const cleanArtist = (artistName || "").trim();
  const key = `${cleanTrack.toLowerCase()}:${cleanArtist.toLowerCase()}`;
  const cachedId = trackIdCache[key];

  if (cachedId) {
    try {
      redux.actions["router/PUSH"]({ pathname: `/track/${cachedId}` });
      return;
    } catch {}
  }

  const query = `${cleanTrack} ${cleanArtist}`.trim();

  // Search Tidal to find exact track ID
  try {
    const searchUrl = `https://desktop.tidal.com/v1/search?query=${encodeURIComponent(query)}&limit=3&types=TRACKS&${TidalApi.queryArgs()}`;
    const res = await TidalApi.fetch<{ tracks?: { items?: { title: string; id: number; album?: { id: number } } }[] }>(searchUrl);
    if (res?.tracks?.items?.length) {
      const match = res.tracks.items[0];
      if (match?.id) {
        trackIdCache[key] = match.id;
        redux.actions["router/PUSH"]({ pathname: `/track/${match.id}` });
        return;
      }
    }
  } catch {}

  // Fallback to Tidal search page
  try {
    redux.actions["router/PUSH"]({ pathname: `/search/${encodeURIComponent(query)}` });
  } catch (err) {
    console.warn("[LastFMStats] Failed to navigate to track:", err);
  }
}
