import React, { useEffect, useState } from "react";
import { getArtworkDominantColor, getTrackArtwork } from "../api/artwork";
import { LastFmApi } from "../api/lastfm";
import { getAlbumName, getArtistName, getTrackName, LastFmRecentTrack } from "../api/types";
import { navigateToAlbum, navigateToArtist, navigateToTrack } from "../navigation/tidalNavigate";
import { ArtworkImage } from "./ArtworkImage";

interface RecentTracksTabProps {
  tracks: LastFmRecentTrack[];
  loading: boolean;
}

export const RecentTracksTab: React.FC<RecentTracksTabProps> = ({ tracks, loading }) => {
  const [dominantColor, setDominantColor] = useState<string>("200, 182, 255");

  const formatTime = (uts?: string) => {
    if (!uts) return "Recently";
    const timestamp = parseInt(uts, 10) * 1000;
    const diff = Date.now() - timestamp;
    const minutes = Math.floor(diff / 60000);
    if (minutes < 1) return "Just now";
    if (minutes < 60) return `${minutes}m ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h ago`;
    const days = Math.floor(hours / 24);
    if (days < 7) return `${days}d ago`;
    return new Date(timestamp).toLocaleDateString(undefined, {
      month: "short",
      day: "numeric",
    });
  };

  const nowPlayingTrack = tracks.find((t) => t["@attr"]?.nowplaying === "true");

  useEffect(() => {
    if (!nowPlayingTrack) return;
    let isCancelled = false;
    const title = getTrackName(nowPlayingTrack);
    const artist = getArtistName(nowPlayingTrack.artist);

    (async () => {
      let cover = await getTrackArtwork(title, artist);
      if (!cover) {
        cover = LastFmApi.getImageUrl(nowPlayingTrack.image);
      }
      if (cover && !isCancelled) {
        const rgb = await getArtworkDominantColor(cover);
        if (!isCancelled && rgb) {
          setDominantColor(rgb);
        }
      }
    })();

    return () => {
      isCancelled = true;
    };
  }, [nowPlayingTrack?.name, nowPlayingTrack?.artist]);

  if (loading && !tracks.length) {
    return (
      <div className="lfm-track-list">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="lfm-track-row lfm-skeleton" style={{ height: "64px" }} />
        ))}
      </div>
    );
  }

  if (!tracks.length) {
    return (
      <div className="lfm-glass-card lfm-empty-state">
        <div className="lfm-empty-title">No Recent Scrobbles</div>
        <div className="lfm-empty-desc">Start playing music to see your live scrobbles here!</div>
      </div>
    );
  }

  return (
    <div className="lfm-track-list">
      {tracks.map((track, idx) => {
        const isNowPlaying = track["@attr"]?.nowplaying === "true";
        const imgUrl = LastFmApi.getImageUrl(track.image);
        const timeStr = isNowPlaying ? "Scrobbling now" : formatTime(track.date?.uts);
        const trackTitle = getTrackName(track);
        const artistName = getArtistName(track.artist);
        const albumName = getAlbumName(track.album);

        const customStyle: React.CSSProperties | undefined =
          isNowPlaying && dominantColor
            ? {
                background: `linear-gradient(135deg, rgba(${dominantColor}, 0.22) 0%, rgba(${dominantColor}, 0.08) 100%)`,
                borderColor: `rgba(${dominantColor}, 0.5)`,
                boxShadow: `0 8px 32px rgba(${dominantColor}, 0.22), inset 0 1px 1px rgba(255, 255, 255, 0.25)`,
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
              }
            : undefined;

        return (
          <div
            key={`${trackTitle}-${idx}`}
            className={`lfm-track-row ${isNowPlaying ? "lfm-now-playing-row" : ""}`}
            style={customStyle}
            onClick={(e) => navigateToTrack(trackTitle, artistName, e)}
            title={`Play "${trackTitle}" on TIDAL`}
          >
            <div className="lfm-track-left">
              <div
                className="lfm-clickable-image"
                onClick={(e) => navigateToTrack(trackTitle, artistName, e)}
                title={`View "${trackTitle}" on TIDAL`}
              >
                <ArtworkImage
                  type="track"
                  name={trackTitle}
                  artistName={artistName}
                  initialUrl={imgUrl}
                  alt={trackTitle}
                  className="lfm-track-image"
                />
              </div>

              <div className="lfm-track-info">
                <div
                  className="lfm-track-title lfm-clickable-text"
                  onClick={(e) => navigateToTrack(trackTitle, artistName, e)}
                  title={`View "${trackTitle}" on TIDAL`}
                >
                  {trackTitle}
                </div>
                <div className="lfm-track-artist">
                  <span
                    className="lfm-clickable-text"
                    onClick={(e) => navigateToArtist(artistName, e)}
                    title={`View artist "${artistName}" on TIDAL`}
                  >
                    {artistName}
                  </span>
                  {albumName && (
                    <>
                      <span style={{ margin: "0 6px", opacity: 0.5 }}>-</span>
                      <span
                        className="lfm-clickable-text"
                        onClick={(e) => navigateToAlbum(albumName, artistName, e)}
                        title={`View album "${albumName}" on TIDAL`}
                        style={{ opacity: 0.8 }}
                      >
                        {albumName}
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>

            <div className="lfm-track-right">
              {isNowPlaying ? (
                <div className="lfm-scrobbling-indicator">
                  <div
                    className="lfm-spinning-circle"
                    style={{
                      borderTopColor: `rgb(${dominantColor})`,
                      borderRightColor: `rgba(${dominantColor}, 0.3)`,
                    }}
                  />
                  <span
                    style={{
                      color: `rgb(${dominantColor})`,
                      fontSize: "13px",
                      fontWeight: 600,
                      letterSpacing: "0.02em",
                    }}
                  >
                    Scrobbling
                  </span>
                </div>
              ) : (
                <div className="lfm-track-time">{timeStr}</div>
              )}

              <button
                className="lfm-play-btn"
                onClick={(e) => navigateToTrack(trackTitle, artistName, e)}
                title={`Play "${trackTitle}" on TIDAL`}
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
