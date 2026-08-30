import React from "react";
import { LastFmApi } from "../api/lastfm";
import { LastFmUser } from "../api/types";

interface ProfileHeaderProps {
  user?: LastFmUser;
  loading?: boolean;
}

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({ user }) => {
  const avatarUrl = user?.image ? LastFmApi.getImageUrl(user.image) : "";

  const formatNumber = (val?: string | number) => {
    if (!val) return "0";
    const num = typeof val === "string" ? parseInt(val, 10) : val;
    return isNaN(num) ? "0" : num.toLocaleString();
  };

  const memberSince = user?.registered?.unixtime
    ? new Date(parseInt(user.registered.unixtime, 10) * 1000).toLocaleDateString(undefined, {
        year: "numeric",
        month: "short",
      })
    : "";

  const userUrl = user?.url || (user?.name ? `https://www.last.fm/user/${user.name}` : "");

  return (
    <div className="lfm-glass-card lfm-profile-header">
      <div className="lfm-profile-left">
        <div className="lfm-avatar-wrapper">
          {avatarUrl ? (
            <img src={avatarUrl} alt={user?.name || "User Avatar"} className="lfm-avatar" />
          ) : (
            <div
              className="lfm-avatar"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "24px",
                fontWeight: 700,
                color: "var(--lfm-accent-lavender)",
              }}
            >
              {user?.name ? user.name[0].toUpperCase() : ""}
            </div>
          )}
        </div>

        <div className="lfm-profile-info">
          <h1>
            {userUrl ? (
              <a
                href={userUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="lfm-username-link"
                title="View Last.fm profile in browser"
              >
                <span>{user?.name || "Last.fm User"}</span>
                <svg
                  viewBox="0 0 24 24"
                  width="14"
                  height="14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ display: "inline-block", verticalAlign: "middle", opacity: 0.7 }}
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            ) : (
              <span>{user?.name || "Last.fm User"}</span>
            )}
          </h1>
          {memberSince && <div className="lfm-profile-subtitle">Member since {memberSince}</div>}
        </div>
      </div>

      <div className="lfm-header-stats">
        <div className="lfm-stat-box">
          <div className="lfm-stat-num">{formatNumber(user?.playcount)}</div>
          <div className="lfm-stat-label">Scrobbles</div>
        </div>

        {user?.artist_count && (
          <div className="lfm-stat-box">
            <div className="lfm-stat-num">{formatNumber(user.artist_count)}</div>
            <div className="lfm-stat-label">Artists</div>
          </div>
        )}

        {user?.album_count && (
          <div className="lfm-stat-box">
            <div className="lfm-stat-num">{formatNumber(user.album_count)}</div>
            <div className="lfm-stat-label">Albums</div>
          </div>
        )}

        {user?.track_count && (
          <div className="lfm-stat-box">
            <div className="lfm-stat-num">{formatNumber(user.track_count)}</div>
            <div className="lfm-stat-label">Tracks</div>
          </div>
        )}
      </div>
    </div>
  );
};
