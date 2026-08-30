import React from "react";
import { LastFmApi } from "../api/lastfm";
import { getArtistName, getTrackName, LastFmTrack } from "../api/types";
import { navigateToArtist, navigateToTrack } from "../navigation/tidalNavigate";
import { ArtworkImage } from "./ArtworkImage";

interface TopTracksTabProps {
  tracks: LastFmTrack[];
  loading: boolean;
}

export const TopTracksTab: React.FC<TopTracksTabProps> = ({ tracks, loading }) => {
  const maxPlaycount = React.useMemo(() => {
    if (!tracks.length) return 1;
    return Math.max(...tracks.map((t) => parseInt(t.playcount || "1", 10)));
  }, [tracks]);

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
        <div className="lfm-empty-title">No Tracks Found</div>
        <div className="lfm-empty-desc">No scrobbled tracks found for the selected timeframe.</div>
      </div>
    );
  }

  return (
    <div className="lfm-track-list">
      {tracks.map((track, idx) => {
        const rank = track["@attr"]?.rank ? parseInt(track["@attr"].rank, 10) : idx + 1;
        const playcount = parseInt(track.playcount || "0", 10);
        const barWidth = Math.max(8, Math.round((playcount / maxPlaycount) * 100));
        const imgUrl = LastFmApi.getImageUrl(track.image);
        const trackTitle = getTrackName(track);
        const artistName = getArtistName(track.artist);

        return (
          <div
            key={`${trackTitle}-${idx}`}
            className="lfm-track-row"
            onClick={(e) => navigateToTrack(trackTitle, artistName, e)}
            title={`Play "${trackTitle}" on TIDAL`}
          >
            <div className="lfm-track-left">
              <div className="lfm-track-rank">#{rank}</div>
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
                <div
                  className="lfm-track-artist lfm-clickable-text"
                  onClick={(e) => navigateToArtist(artistName, e)}
                  title={`View artist "${artistName}" on TIDAL`}
                >
                  {artistName}
                </div>
              </div>
            </div>

            <div className="lfm-track-right">
              <div className="lfm-scrobble-bar-container">
                <div className="lfm-scrobble-count">{playcount.toLocaleString()} plays</div>
                <div className="lfm-scrobble-bar">
                  <div className="lfm-scrobble-bar-fill" style={{ width: `${barWidth}%` }} />
                </div>
              </div>
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
