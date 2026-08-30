import React, { useEffect, useState } from "react";
import { getAlbumArtwork, getArtistImage, getTrackArtwork, isPlaceholderUrl } from "../api/artwork";

interface ArtworkImageProps {
  type: "artist" | "track" | "album" | "user";
  name: string;
  artistName?: string;
  initialUrl?: string;
  alt?: string;
  className?: string;
  style?: React.CSSProperties;
  fallbackIcon?: string;
}

export const ArtworkImage: React.FC<ArtworkImageProps> = ({
  type,
  name,
  artistName = "",
  initialUrl,
  alt = "",
  className = "",
  style = {},
  fallbackIcon = "",
}) => {
  const [imageUrl, setImageUrl] = useState<string>(() => {
    if (type === "artist") return ""; // Always resolve high-res Tidal artist picture
    return isPlaceholderUrl(initialUrl) ? "" : initialUrl || "";
  });
  const [loaded, setLoaded] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);

  useEffect(() => {
    let isCancelled = false;

    // Reset error when name or initialUrl changes
    setHasError(false);

    (async () => {
      let resolved = "";
      if (type === "artist") {
        resolved = await getArtistImage(name);
      } else if (type === "track") {
        resolved = await getTrackArtwork(name, artistName);
      } else if (type === "album") {
        resolved = await getAlbumArtwork(name, artistName);
      }

      if (!isCancelled) {
        if (resolved) {
          setImageUrl(resolved);
        } else if (!isPlaceholderUrl(initialUrl)) {
          setImageUrl(initialUrl || "");
        }
      }
    })();

    return () => {
      isCancelled = true;
    };
  }, [type, name, artistName, initialUrl]);

  if (imageUrl && !hasError) {
    return (
      <img
        src={imageUrl}
        alt={alt || name}
        className={className}
        style={{
          opacity: loaded ? 1 : 0.4,
          transition: "opacity 0.25s ease-in-out, transform 0.3s ease",
          objectFit: "cover",
          ...style,
        }}
        onLoad={() => setLoaded(true)}
        onError={() => {
          // If 1280 failed, try 750 or fallback
          if (imageUrl.includes("/1280x1280.jpg")) {
            setImageUrl(imageUrl.replace("/1280x1280.jpg", "/750x750.jpg"));
          } else if (imageUrl.includes("/750x750.jpg")) {
            setImageUrl(imageUrl.replace("/750x750.jpg", "/640x640.jpg"));
          } else {
            setHasError(true);
          }
        }}
      />
    );
  }

  // Fallback placeholder with clean letter initial or minimal note SVG
  const initial = name ? name[0].toUpperCase() : fallbackIcon;

  return (
    <div
      className={className}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background:
          type === "artist"
            ? "linear-gradient(135deg, rgba(227, 27, 35, 0.25), rgba(200, 182, 255, 0.15))"
            : "rgba(255, 255, 255, 0.05)",
        color: type === "artist" ? "var(--lfm-accent-lavender)" : "rgba(255, 255, 255, 0.4)",
        fontWeight: 700,
        fontSize: type === "artist" ? "24px" : "14px",
        userSelect: "none",
        ...style,
      }}
    >
      {initial || (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" style={{ opacity: 0.4 }}>
          <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
        </svg>
      )}
    </div>
  );
};
