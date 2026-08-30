import { findModuleProperty, ftch, ReactiveStore } from "@luna/core";
import { statsStorage } from "../components/Settings";
import {
  LastFmAlbum,
  LastFmArtist,
  LastFmLovedTrack,
  LastFmRecentTrack,
  LastFmRecentTracksResponse,
  LastFmTimePeriod,
  LastFmTopAlbumsResponse,
  LastFmTopArtistsResponse,
  LastFmTopTracksResponse,
  LastFmTrack,
  LastFmUserInfoResponse,
  LastFmUser,
} from "./types";

interface LastfmStorage {
  username?: string;
  defaultPeriod?: LastFmTimePeriod;
  itemsLimit?: number;
  customApiKey?: string;
  customApiSecret?: string;
}

const FALLBACK_API_KEY = "4a9f5581a9cdf20a699f540b52a508b0";
const API_ROOT = "https://ws.audioscrobbler.com/2.0/";

export class LastFmApi {
  private static resolvedApiKey?: string;

  /**
   * Retrieves the active Last.fm username either from our storage or from
   * TidaLuna's official LastFM plugin storage.
   */
  public static async getActiveUsername(): Promise<string | undefined> {
    if (statsStorage?.username && statsStorage.username.trim()) {
      return statsStorage.username.trim();
    }

    try {
      const ourStorage = await ReactiveStore.getPluginStorage<LastfmStorage>("LastFMStats");
      if (ourStorage?.username && ourStorage.username.trim()) {
        return ourStorage.username.trim();
      }
    } catch {}

    try {
      const officialPluginStore = await ReactiveStore.getPluginStorage<{ session?: { name?: string } }>("LastFM");
      if (officialPluginStore?.session?.name) {
        return officialPluginStore.session.name;
      }
    } catch {}

    return undefined;
  }

  /**
   * Resolves the API key (custom -> official plugin -> tidal exposed -> fallback)
   */
  public static async getApiKey(): Promise<string> {
    if (this.resolvedApiKey) return this.resolvedApiKey;

    try {
      const ourStorage = await ReactiveStore.getPluginStorage<LastfmStorage>("LastFMStats");
      if (ourStorage?.customApiKey && ourStorage.customApiKey.trim()) {
        return (this.resolvedApiKey = ourStorage.customApiKey.trim());
      }
    } catch {}

    try {
      const apiKeyProp = findModuleProperty<string>((key, value) => key === "lastFmApiKey" && typeof value === "string");
      if (apiKeyProp?.value) {
        return (this.resolvedApiKey = apiKeyProp.value);
      }
    } catch {}

    return (this.resolvedApiKey = FALLBACK_API_KEY);
  }

  /**
   * Executes a GET request to Last.fm API 2.0
   */
  private static async request<T>(method: string, params: Record<string, any> = {}): Promise<T> {
    const apiKey = await this.getApiKey();
    const query = new URLSearchParams({
      method,
      api_key: apiKey,
      format: "json",
      ...params,
    });

    const url = `${API_ROOT}?${query.toString()}`;
    const data = await ftch.json<any>(url);

    if (data?.error) {
      throw new Error(`Last.fm Error [${data.error}]: ${data.message || "Unknown error"}`);
    }

    return data as T;
  }

  public static async getUserInfo(username: string): Promise<LastFmUser> {
    const res = await this.request<LastFmUserInfoResponse>("user.getInfo", { user: username });
    if (!res.user) throw new Error("No user found with username " + username);
    return res.user;
  }

  public static async getTopTracks(
    username: string,
    period: LastFmTimePeriod = "7day",
    limit: number = 20,
    page: number = 1
  ): Promise<{ tracks: LastFmTrack[]; total: number }> {
    const res = await this.request<LastFmTopTracksResponse>("user.getTopTracks", {
      user: username,
      period,
      limit,
      page,
    });
    const tracks = res.toptracks?.track ? (Array.isArray(res.toptracks.track) ? res.toptracks.track : [res.toptracks.track]) : [];
    const total = parseInt(res.toptracks?.["@attr"]?.total || `${tracks.length}`, 10);
    return { tracks, total };
  }

  public static async getTopArtists(
    username: string,
    period: LastFmTimePeriod = "7day",
    limit: number = 20,
    page: number = 1
  ): Promise<{ artists: LastFmArtist[]; total: number }> {
    const res = await this.request<LastFmTopArtistsResponse>("user.getTopArtists", {
      user: username,
      period,
      limit,
      page,
    });
    const artists = res.topartists?.artist ? (Array.isArray(res.topartists.artist) ? res.topartists.artist : [res.topartists.artist]) : [];
    const total = parseInt(res.topartists?.["@attr"]?.total || `${artists.length}`, 10);
    return { artists, total };
  }

  public static async getTopAlbums(
    username: string,
    period: LastFmTimePeriod = "7day",
    limit: number = 20,
    page: number = 1
  ): Promise<{ albums: LastFmAlbum[]; total: number }> {
    const res = await this.request<LastFmTopAlbumsResponse>("user.getTopAlbums", {
      user: username,
      period,
      limit,
      page,
    });
    const albums = res.topalbums?.album ? (Array.isArray(res.topalbums.album) ? res.topalbums.album : [res.topalbums.album]) : [];
    const total = parseInt(res.topalbums?.["@attr"]?.total || `${albums.length}`, 10);
    return { albums, total };
  }

  public static async getRecentTracks(
    username: string,
    limit: number = 20,
    page: number = 1
  ): Promise<{ tracks: LastFmRecentTrack[]; total: number }> {
    const res = await this.request<LastFmRecentTracksResponse>("user.getRecentTracks", {
      user: username,
      limit,
      page,
      extended: 1,
    });
    const tracks = res.recenttracks?.track ? (Array.isArray(res.recenttracks.track) ? res.recenttracks.track : [res.recenttracks.track]) : [];
    const total = parseInt(res.recenttracks?.["@attr"]?.total || `${tracks.length}`, 10);
    return { tracks, total };
  }

  /**
   * Retrieves the user's loved tracks from Last.fm
   */
  public static async getLovedTracks(
    username: string,
    limit: number = 50,
    page: number = 1
  ): Promise<{ tracks: LastFmLovedTrack[]; total: number }> {
    const res = await this.request<{ lovedtracks?: { track?: LastFmLovedTrack[]; "@attr"?: { total?: string } } }>(
      "user.getLovedTracks",
      {
        user: username,
        limit,
        page,
      }
    );
    const tracks = res.lovedtracks?.track ? (Array.isArray(res.lovedtracks.track) ? res.lovedtracks.track : [res.lovedtracks.track]) : [];
    const total = parseInt(res.lovedtracks?.["@attr"]?.total || `${tracks.length}`, 10);
    return { tracks, total };
  }

  /**
   * Retrieves all loved tracks across pagination (up to maxCount)
   */
  public static async getAllLovedTracks(username: string, maxCount = 1000): Promise<LastFmLovedTrack[]> {
    const allTracks: LastFmLovedTrack[] = [];
    let page = 1;
    const limit = 50;

    while (allTracks.length < maxCount) {
      const { tracks, total } = await this.getLovedTracks(username, limit, page);
      if (!tracks.length) break;

      allTracks.push(...tracks);
      page++;

      if (allTracks.length >= total) break;
    }

    return allTracks;
  }

  /**
   * Retrieves the user's total scrobble count for a specific artist
   */
  public static async getArtistPlaycount(artist: string, username?: string): Promise<number> {
    if (!artist || !artist.trim()) return 0;
    const user = username || (await this.getActiveUsername());
    if (!user) return 0;

    try {
      const res = await this.request<{ artist?: { stats?: { userplaycount?: string | number } } }>("artist.getInfo", {
        artist: artist.trim(),
        username: user,
        autocorrect: 1,
      });
      const count = res.artist?.stats?.userplaycount;
      return typeof count === "string" ? parseInt(count, 10) || 0 : count || 0;
    } catch (err) {
      console.warn("[LastFMStats] Failed to get artist playcount:", err);
      return 0;
    }
  }

  /**
   * Retrieves the user's total scrobble count for a specific album
   */
  public static async getAlbumPlaycount(artist: string, album: string, username?: string): Promise<number> {
    if (!artist || !album) return 0;
    const user = username || (await this.getActiveUsername());
    if (!user) return 0;

    try {
      const res = await this.request<{ album?: { userplaycount?: string | number } }>("album.getInfo", {
        artist: artist.trim(),
        album: album.trim(),
        username: user,
        autocorrect: 1,
      });
      const count = res.album?.userplaycount;
      return typeof count === "string" ? parseInt(count, 10) || 0 : count || 0;
    } catch (err) {
      console.warn("[LastFMStats] Failed to get album playcount:", err);
      return 0;
    }
  }

  /**
   * Helper to pick the best available image URL from Last.fm image array
   */
  public static getImageUrl(images?: { "#text": string; size: string }[]): string {
    if (!images || images.length === 0) return "";
    const priority = ["mega", "extralarge", "large", "medium", "small"];
    for (const size of priority) {
      const match = images.find((img) => img.size === size && img["#text"]);
      if (match && match["#text"].trim()) return match["#text"];
    }
    const anyImg = images.find((img) => img["#text"] && img["#text"].trim());
    return anyImg ? anyImg["#text"] : "";
  }
}
