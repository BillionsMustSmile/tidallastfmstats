import React from "react";
import { LastFmAlbum, LastFmArtist, LastFmRecentTrack, LastFmTrack } from "../api/types";
import { RecentTracksTab } from "./RecentTracksTab";
import { TopAlbumsTab } from "./TopAlbumsTab";
import { TopArtistsTab } from "./TopArtistsTab";
import { TopTracksTab } from "./TopTracksTab";

interface OverviewTabProps {
  tracks: LastFmTrack[];
  artists: LastFmArtist[];
  albums: LastFmAlbum[];
  recent: LastFmRecentTrack[];
  loading: boolean;
  onSelectTab: (tab: "overview" | "tracks" | "artists" | "albums" | "recent") => void;
}

export const OverviewTab: React.FC<OverviewTabProps> = ({
  tracks,
  artists,
  albums,
  recent,
  loading,
  onSelectTab,
}) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "32px", marginTop: "16px" }}>
      {/* Top Section: Top Tracks & Recent Scrobbles side-by-side on desktop */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(420px, 1fr))", gap: "24px" }}>
        {/* Top Tracks Card */}
        <div className="lfm-glass-card">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
            <h2 style={{ margin: 0, fontSize: "18px", fontWeight: 700 }}>Top Tracks</h2>
            <button className="lfm-btn-action" onClick={() => onSelectTab("tracks")} style={{ padding: "4px 10px", fontSize: "12px" }}>
              View All
            </button>
          </div>
          <TopTracksTab tracks={tracks.slice(0, 5)} loading={loading} />
        </div>

        {/* Live Recent Scrobbles Card */}
        <div className="lfm-glass-card">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
            <h2 style={{ margin: 0, fontSize: "18px", fontWeight: 700 }}>Live Activity</h2>
            <button className="lfm-btn-action" onClick={() => onSelectTab("recent")} style={{ padding: "4px 10px", fontSize: "12px" }}>
              View All
            </button>
          </div>
          <RecentTracksTab tracks={recent.slice(0, 5)} loading={loading} />
        </div>
      </div>

      {/* Top Artists Card */}
      <div className="lfm-glass-card">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
          <h2 style={{ margin: 0, fontSize: "18px", fontWeight: 700 }}>Top Artists</h2>
          <button className="lfm-btn-action" onClick={() => onSelectTab("artists")} style={{ padding: "4px 10px", fontSize: "12px" }}>
            View All
          </button>
        </div>
        <TopArtistsTab artists={artists.slice(0, 6)} loading={loading} />
      </div>

      {/* Top Albums Card */}
      <div className="lfm-glass-card">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
          <h2 style={{ margin: 0, fontSize: "18px", fontWeight: 700 }}>Top Albums</h2>
          <button className="lfm-btn-action" onClick={() => onSelectTab("albums")} style={{ padding: "4px 10px", fontSize: "12px" }}>
            View All
          </button>
        </div>
        <TopAlbumsTab albums={albums.slice(0, 6)} loading={loading} />
      </div>
    </div>
  );
};
