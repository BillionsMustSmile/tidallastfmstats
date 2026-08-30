export type LastFmTimePeriod =
  | "7day"
  | "1month"
  | "3month"
  | "6month"
  | "12month"
  | "overall";

export interface LastFmImage {
  "#text": string;
  size: "small" | "medium" | "large" | "extralarge" | "mega" | "";
}

export interface LastFmUser {
  name: string;
  realname?: string;
  url: string;
  image?: LastFmImage[];
  country?: string;
  age?: string;
  gender?: string;
  playcount: string;
  artist_count?: string;
  album_count?: string;
  track_count?: string;
  registered: {
    unixtime: string;
    "#text": string;
  };
}

export interface LastFmArtist {
  name: string;
  playcount: string;
  mbid?: string;
  url: string;
  image?: LastFmImage[];
  streamable?: string;
  "@attr"?: {
    rank: string;
  };
}

export interface LastFmTrackArtist {
  name?: string;
  mbid?: string;
  url?: string;
  "#text"?: string;
}

export interface LastFmTrack {
  name: string;
  playcount: string;
  mbid?: string;
  url: string;
  duration?: string;
  streamable?: {
    fulltrack: string;
    "#text": string;
  };
  artist: LastFmTrackArtist | string;
  image?: LastFmImage[];
  "@attr"?: {
    rank: string;
  };
}

export interface LastFmAlbum {
  name: string;
  playcount: string;
  mbid?: string;
  url: string;
  artist: {
    name?: string;
    mbid?: string;
    url?: string;
    "#text"?: string;
  } | string;
  image?: LastFmImage[];
  "@attr"?: {
    rank: string;
  };
}

export interface LastFmRecentTrack {
  name: string;
  artist: {
    name?: string;
    mbid?: string;
    url?: string;
    "#text"?: string;
  } | string;
  album: {
    name?: string;
    mbid?: string;
    "#text"?: string;
  } | string;
  image?: LastFmImage[];
  url: string;
  mbid?: string;
  date?: {
    uts: string;
    "#text": string;
  };
  "@attr"?: {
    nowplaying: "true" | "false";
  };
}

export interface LastFmLovedTrack {
  name: string;
  mbid?: string;
  url: string;
  date: {
    uts: string;
    "#text": string;
  };
  artist: {
    name?: string;
    mbid?: string;
    url?: string;
    "#text"?: string;
  } | string;
  image?: LastFmImage[];
}

export interface LastFmTopArtistsResponse {
  topartists: {
    artist: LastFmArtist[];
    "@attr": {
      user: string;
      page: string;
      perPage: string;
      totalPages: string;
      total: string;
    };
  };
}

export interface LastFmTopTracksResponse {
  toptracks: {
    track: LastFmTrack[];
    "@attr": {
      user: string;
      page: string;
      perPage: string;
      totalPages: string;
      total: string;
    };
  };
}

export interface LastFmTopAlbumsResponse {
  topalbums: {
    album: LastFmAlbum[];
    "@attr": {
      user: string;
      page: string;
      perPage: string;
      totalPages: string;
      total: string;
    };
  };
}

export interface LastFmRecentTracksResponse {
  recenttracks: {
    track: LastFmRecentTrack[];
    "@attr": {
      user: string;
      page: string;
      perPage: string;
      totalPages: string;
      total: string;
    };
  };
}

export interface LastFmUserInfoResponse {
  user: LastFmUser;
}

export function getArtistName(artist: any): string {
  if (!artist) return "Unknown Artist";
  if (typeof artist === "string") return artist.trim() || "Unknown Artist";
  return (artist.name || artist["#text"] || "").trim() || "Unknown Artist";
}

export function getAlbumName(album: any): string {
  if (!album) return "";
  if (typeof album === "string") return album.trim();
  return (album.name || album["#text"] || "").trim();
}

export function getTrackName(track: any): string {
  if (!track) return "Unknown Track";
  if (typeof track === "string") return track.trim() || "Unknown Track";
  return (track.name || track.title || "").trim() || "Unknown Track";
}
