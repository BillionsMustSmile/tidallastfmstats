import React from "react";
import { LastFmApi } from "../api/lastfm";
import { getAlbumName, getArtistName, LastFmAlbum } from "../api/types";
import { navigateToAlbum, navigateToArtist } from "../navigation/tidalNavigate";
import { ArtworkImage } from "./ArtworkImage";

interface TopAlbumsTabProps {
  albums: LastFmAlbum[];
  loading: boolean;
}

export const TopAlbumsTab: React.FC<TopAlbumsTabProps> = ({ albums, loading }) => {
  if (loading && !albums.length) {
    return (
      <div className="lfm-card-grid">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="lfm-item-card lfm-skeleton" style={{ height: "240px" }} />
        ))}
      </div>
    );
  }

  if (!albums.length) {
    return (
      <div className="lfm-glass-card lfm-empty-state">
        <div className="lfm-empty-title">No Albums Found</div>
        <div className="lfm-empty-desc">No scrobbled albums found for the selected timeframe.</div>
      </div>
    );
  }

  return (
    <div className="lfm-card-grid">
      {albums.map((album, idx) => {
        const rank = album["@attr"]?.rank ? parseInt(album["@attr"].rank, 10) : idx + 1;
        const playcount = parseInt(album.playcount || "0", 10);
        const imgUrl = LastFmApi.getImageUrl(album.image);
        const albumTitle = getAlbumName(album);
        const artistName = getArtistName(album.artist);

        return (
          <div
            key={`${albumTitle}-${idx}`}
            className="lfm-item-card"
            onClick={(e) => navigateToAlbum(albumTitle, artistName, e)}
            title={`View album "${albumTitle}" on TIDAL`}
          >
            <div className="lfm-item-rank">#{rank}</div>
            <div
              className="lfm-album-cover-container lfm-clickable-image"
              onClick={(e) => navigateToAlbum(albumTitle, artistName, e)}
              title={`View album "${albumTitle}" on TIDAL`}
            >
              <ArtworkImage
                type="album"
                name={albumTitle}
                artistName={artistName}
                initialUrl={imgUrl}
                alt={albumTitle}
                className="lfm-album-cover"
              />
            </div>
            <div
              className="lfm-item-name lfm-clickable-text"
              onClick={(e) => navigateToAlbum(albumTitle, artistName, e)}
              title={`View album "${albumTitle}" on TIDAL`}
            >
              {albumTitle}
            </div>
            <div
              className="lfm-item-sub lfm-clickable-text"
              onClick={(e) => navigateToArtist(artistName, e)}
              title={`View artist "${artistName}" on TIDAL`}
            >
              {artistName}
            </div>
            <div className="lfm-item-scrobbles">{playcount.toLocaleString()} plays</div>
          </div>
        );
      })}
    </div>
  );
};
