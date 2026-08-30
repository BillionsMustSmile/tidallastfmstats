import React, { useCallback, useEffect, useState } from "react";
import { LastFmApi } from "../api/lastfm";
import {
  LastFmAlbum,
  LastFmArtist,
  LastFmRecentTrack,
  LastFmTimePeriod,
  LastFmTrack,
  LastFmUser,
} from "../api/types";
import { OverviewTab } from "./OverviewTab";
import { ProfileHeader } from "./ProfileHeader";
import { RecentTracksTab } from "./RecentTracksTab";
import { statsStorage } from "./Settings";
import { TimeframeTabs } from "./TimeframeTabs";
import { TopAlbumsTab } from "./TopAlbumsTab";
import { TopArtistsTab } from "./TopArtistsTab";
import { TopTracksTab } from "./TopTracksTab";

type TabId = "overview" | "tracks" | "artists" | "albums" | "recent";

export const LastfmStatsPage: React.FC = () => {
  const [username, setUsername] = useState<string>(statsStorage.username || "");
  const [period, setPeriod] = useState<LastFmTimePeriod>(statsStorage.defaultPeriod || "7day");
  const [activeTab, setActiveTab] = useState<TabId>("overview");

  const [user, setUser] = useState<LastFmUser | undefined>(undefined);
  const [topTracks, setTopTracks] = useState<LastFmTrack[]>([]);
  const [topArtists, setTopArtists] = useState<LastFmArtist[]>([]);
  const [topAlbums, setTopAlbums] = useState<LastFmAlbum[]>([]);
  const [recentTracks, setRecentTracks] = useState<LastFmRecentTrack[]>([]);

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>(undefined);
  const [showUserInput, setShowUserInput] = useState<boolean>(false);
  const [inputUsername, setInputUsername] = useState<string>("");

  // Initialize username on mount if not already in storage
  useEffect(() => {
    (async () => {
      if (!username) {
        const detected = await LastFmApi.getActiveUsername();
        if (detected) {
          setUsername((statsStorage.username = detected));
        } else {
          setShowUserInput(true);
        }
      }
    })();
  }, []);

  const isFetchingRef = React.useRef(false);

  const fetchStats = useCallback(
    async (targetUsername?: string, targetPeriod?: LastFmTimePeriod, isBackground = false) => {
      const u = targetUsername || username;
      const p = targetPeriod || period;
      if (!u) {
        setShowUserInput(true);
        return;
      }

      if (isFetchingRef.current) return;
      isFetchingRef.current = true;

      if (!isBackground) {
        setLoading(true);
        setError(undefined);
      }

      try {
        const limit = statsStorage.itemsLimit || 20;

        const [userInfoRes, tracksRes, artistsRes, albumsRes, recentRes] = await Promise.allSettled([
          LastFmApi.getUserInfo(u),
          LastFmApi.getTopTracks(u, p, limit),
          LastFmApi.getTopArtists(u, p, limit),
          LastFmApi.getTopAlbums(u, p, limit),
          LastFmApi.getRecentTracks(u, limit),
        ]);

        if (userInfoRes.status === "fulfilled") {
          setUser(userInfoRes.value);
        }
        if (tracksRes.status === "fulfilled") {
          setTopTracks(tracksRes.value.tracks);
        }
        if (artistsRes.status === "fulfilled") {
          setTopArtists(artistsRes.value.artists);
        }
        if (albumsRes.status === "fulfilled") {
          setTopAlbums(albumsRes.value.albums);
        }
        if (recentRes.status === "fulfilled") {
          setRecentTracks(recentRes.value.tracks);
        }

        const errors = [userInfoRes, tracksRes, artistsRes, albumsRes, recentRes]
          .filter((r) => r.status === "rejected")
          .map((r) => (r as PromiseRejectedResult).reason?.message);

        if (errors.length === 5 && !isBackground) {
          setError(errors[0] || "Failed to fetch Last.fm stats. Please check your username.");
        }
      } catch (err: any) {
        if (!isBackground) {
          setError(err?.message || "An unexpected error occurred while fetching stats.");
        }
      } finally {
        if (!isBackground) {
          setLoading(false);
        }
        isFetchingRef.current = false;
      }
    },
    [username, period]
  );

  // Initial load and on parameter change
  useEffect(() => {
    if (username) {
      fetchStats();
    }
  }, [username, period, fetchStats]);

  // Subtle 2-second background auto-refresh for live activity
  useEffect(() => {
    if (!username) return;
    const interval = setInterval(() => {
      fetchStats(undefined, undefined, true);
    }, 2000);
    return () => clearInterval(interval);
  }, [username, fetchStats]);

  const handlePeriodChange = (newPeriod: LastFmTimePeriod) => {
    setPeriod(newPeriod);
  };

  const handleSaveUsername = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputUsername.trim()) {
      const cleanUser = inputUsername.trim();
      setUsername(cleanUser);
      statsStorage.username = cleanUser;
      setShowUserInput(false);
      setInputUsername("");
    }
  };

  return (
    <div className="lfm-stats-container">
      {/* Set Username Modal */}
      {showUserInput && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.85)",
            backdropFilter: "blur(12px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
          }}
        >
          <div className="lfm-glass-card" style={{ width: "420px", maxWidth: "90%" }}>
            <h2 style={{ marginTop: 0, marginBottom: "8px", fontSize: "20px" }}>
              Connect Last.fm Account
            </h2>
            <p style={{ color: "var(--lfm-text-secondary)", fontSize: "14px", marginBottom: "20px" }}>
              Enter your Last.fm username to view listening statistics and top charts.
            </p>
            <form onSubmit={handleSaveUsername}>
              <input
                type="text"
                value={inputUsername}
                onChange={(e) => setInputUsername(e.target.value)}
                placeholder="e.g. RJ or your Last.fm username"
                autoFocus
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  borderRadius: "8px",
                  border: "1px solid var(--lfm-border-glass-hover)",
                  backgroundColor: "rgba(0, 0, 0, 0.4)",
                  color: "#ffffff",
                  fontSize: "15px",
                  boxSizing: "border-box",
                  marginBottom: "20px",
                  outline: "none",
                }}
              />
              <div style={{ display: "flex", gap: "10px", justifyContent: "flex-end" }}>
                {username && (
                  <button
                    type="button"
                    className="lfm-btn-action"
                    onClick={() => setShowUserInput(false)}
                  >
                    Cancel
                  </button>
                )}
                <button type="submit" className="lfm-btn-action primary">
                  Save & View Stats
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Profile Header */}
      {username && (
        <ProfileHeader user={user} loading={loading} />
      )}

      {/* Error Alert */}
      {error && (
        <div
          className="lfm-glass-card"
          style={{
            borderColor: "rgba(227, 27, 35, 0.5)",
            background: "rgba(227, 27, 35, 0.1)",
            marginBottom: "24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <strong>Error loading stats: </strong>
            <span>{error}</span>
          </div>
          <button className="lfm-btn-action primary" onClick={() => fetchStats()}>
            Retry
          </button>
        </div>
      )}

      {/* Controls & Nav Bar */}
      <div className="lfm-controls-bar">
        <div className="lfm-nav-tabs">
          <button
            className={`lfm-tab-btn ${activeTab === "overview" ? "active" : ""}`}
            onClick={() => setActiveTab("overview")}
          >
            Overview
          </button>
          <button
            className={`lfm-tab-btn ${activeTab === "tracks" ? "active" : ""}`}
            onClick={() => setActiveTab("tracks")}
          >
            Top Tracks
          </button>
          <button
            className={`lfm-tab-btn ${activeTab === "artists" ? "active" : ""}`}
            onClick={() => setActiveTab("artists")}
          >
            Top Artists
          </button>
          <button
            className={`lfm-tab-btn ${activeTab === "albums" ? "active" : ""}`}
            onClick={() => setActiveTab("albums")}
          >
            Top Albums
          </button>
          <button
            className={`lfm-tab-btn ${activeTab === "recent" ? "active" : ""}`}
            onClick={() => setActiveTab("recent")}
          >
            Live Scrobbles
          </button>
        </div>

        {activeTab !== "recent" && (
          <TimeframeTabs period={period} onChange={handlePeriodChange} disabled={loading} />
        )}
      </div>

      {/* Active Tab View */}
      {activeTab === "overview" && (
        <OverviewTab
          tracks={topTracks}
          artists={topArtists}
          albums={topAlbums}
          recent={recentTracks}
          loading={loading}
          onSelectTab={setActiveTab}
        />
      )}

      {activeTab === "tracks" && <TopTracksTab tracks={topTracks} loading={loading} />}

      {activeTab === "artists" && <TopArtistsTab artists={topArtists} loading={loading} />}

      {activeTab === "albums" && <TopAlbumsTab albums={topAlbums} loading={loading} />}

      {activeTab === "recent" && <RecentTracksTab tracks={recentTracks} loading={loading} />}
    </div>
  );
};
