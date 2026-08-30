import React from "react";
import { LastFmApi } from "../api/lastfm";
import { LastFmArtist } from "../api/types";
import { navigateToArtist } from "../navigation/tidalNavigate";
import { ArtworkImage } from "./ArtworkImage";

interface TopArtistsTabProps {
  artists: LastFmArtist[];
  loading: boolean;
}

export const TopArtistsTab: React.FC<TopArtistsTabProps> = ({ artists, loading }) => {
  if (loading && !artists.length) {
    return (
      <div className="lfm-card-grid">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="lfm-item-card lfm-skeleton" style={{ height: "240px" }} />
        ))}
      </div>
    );
  }

  if (!artists.length) {
    return (
      <div className="lfm-glass-card lfm-empty-state">
        <div className="lfm-empty-title">No Artists Found</div>
        <div className="lfm-empty-desc">No scrobbled artists found for the selected timeframe.</div>
      </div>
    );
  }

  return (
    <div className="lfm-card-grid">
      {artists.map((artist, idx) => {
        const rank = artist["@attr"]?.rank ? parseInt(artist["@attr"].rank, 10) : idx + 1;
        const playcount = parseInt(artist.playcount || "0", 10);
        const imgUrl = LastFmApi.getImageUrl(artist.image);

        return (
          <div
            key={`${artist.name}-${idx}`}
            className="lfm-item-card"
            onClick={(e) => navigateToArtist(artist.name, e)}
            title={`View artist "${artist.name}" on TIDAL`}
          >
            <div className="lfm-item-rank">#{rank}</div>
            <div className="lfm-avatar-container lfm-clickable-image">
              <ArtworkImage
                type="artist"
                name={artist.name}
                initialUrl={imgUrl}
                alt={artist.name}
                className="lfm-artist-avatar"
              />
            </div>
            <div
              className="lfm-item-name lfm-clickable-text"
              onClick={(e) => navigateToArtist(artist.name, e)}
              title={`View artist "${artist.name}" on TIDAL`}
            >
              {artist.name}
            </div>
            <div className="lfm-item-scrobbles">{playcount.toLocaleString()} plays</div>
          </div>
        );
      })}
    </div>
  );
};
