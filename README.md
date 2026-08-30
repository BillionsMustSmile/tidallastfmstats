# TidaLuna Last.fm Stats Plugin (`LastFMStats`)

A modern, glassmorphic **TidaLuna plugin** for `tidal-hifi` on Arch Linux. Import and display rich Last.fm statistics, top tracks, top artists, top albums, and live scrobble feeds directly inside Tidal with seamless theme and dynamic background inheritance.

---

## ✨ Features

- **Sidebar Navigation**: Seamlessly adds a **Last.fm Stats** button in the left sidebar menu (below Music, Explore, Feed) matching Tidal's native navigation styles and active highlights.
- **Dynamic Background Integration**: Uses glassmorphism styling with `background: transparent` that automatically inherits whatever background canvas, theme, or CoverTheme dynamic album art is active over the rest of Tidal.
- **Interactive Listening Stats**:
  - **Overview Tab**: Summary view of your top tracks, artists, albums, and live activity at a glance.
  - **Top Tracks Tab**: Ranked track scrobbles with playcount progress bars and instant Tidal search/playback links.
  - **Top Artists Tab**: Artist cards with photo avatars, playcounts, and one-click Tidal search navigation.
  - **Top Albums Tab**: Album artwork cards with scrobble counts and Tidal links.
  - **Live Scrobbles Tab**: Real-time recent scrobbles with animated **"Now Playing"** equalizer bars and relative timestamps.
- **Flexible Timeframes**: Switch between **7 Days**, **30 Days**, **3 Months**, **6 Months**, **1 Year**, and **All Time**.
- **Auto-Detection**: Automatically detects your connected Last.fm username if you are already using TidaLuna's official LastFM plugin, or lets you enter any Last.fm username.
- **TidaLuna Settings**: Integrated into the Luna UI settings panel with options for username, default timeframe, items limit, and custom API keys.

---

## 📁 Project Structure

```
/home/srich/Projects/tidallastfmstats
├── build.js                   # Automated esbuild bundler
├── serve.js                   # Local DEV store server (http://127.0.0.1:3000)
├── install.js                 # Build & install helper script
├── package.json               # Plugin manifest & npm commands
├── tsconfig.json              # TypeScript configuration
├── dist/
│   ├── LastFMStats.mjs        # Bundled plugin ES module
│   ├── LastFMStats.json       # Plugin manifest with content hash
│   └── store.json             # Local DEV plugin store manifest
└── src/
    ├── index.tsx              # Plugin entry point: Page registration, Styles, Sidebar button
    ├── api/
    │   ├── lastfm.ts          # Last.fm 2.0 API client
    │   └── types.ts           # TypeScript type definitions
    ├── components/
    │   ├── LastfmStatsPage.tsx# Main dashboard container & navigation
    │   ├── ProfileHeader.tsx  # User profile, avatars, milestones
    │   ├── TimeframeTabs.tsx  # Timeframe selector (7d, 30d, 3m, 6m, 1y, overall)
    │   ├── OverviewTab.tsx    # Summary highlights & charts
    │   ├── TopTracksTab.tsx   # Top tracks list with Tidal playback triggers
    │   ├── TopArtistsTab.tsx  # Top artists grid
    │   ├── TopAlbumsTab.tsx   # Top albums grid
    │   ├── RecentTracksTab.tsx# Live scrobble feed with equalizer pulse
    │   └── Settings.tsx       # Luna UI settings tab component
    ├── navigation/
    │   └── sidebarButton.ts   # Sidebar DOM observer & navigation injector
    └── styles/
        ├── stats.css          # Glassmorphic React CSS stylesheet
        └── sidebar.css        # Native-matching sidebar item styles
```

---

## 🛠️ Build & Installation Instructions

### 1. Build the Plugin
To compile and bundle the TypeScript and React CSS into `dist/`:
```bash
ELECTRON_RUN_AS_NODE=1 electron40 build.js
```

### 2. Start the Local Dev Server
```bash
ELECTRON_RUN_AS_NODE=1 electron40 serve.js
```
The server will start at `http://127.0.0.1:3000`.

### 3. Install in Tidal / TidaLuna
1. Launch `tidal-hifi`.
2. Click your **Profile avatar** in Tidal -> click **Luna Settings**.
3. Go to the **Plugin Store** tab:
   - `http://127.0.0.1:3000` is automatically detected as the local DEV store.
   - Click **Install** next to **LastFMStats**.
   - Alternatively, under **Install from URL**, enter:
     ```
     http://127.0.0.1:3000/LastFMStats
     ```
4. Once installed, the **Last.fm Stats** button will appear in your left sidebar navigation!

---

## 🎨 Theme & Background Compatibility
This plugin does not override the app background with an opaque color. Instead, all cards and panels use translucent glass (`rgba(255, 255, 255, 0.04)` to `0.08)` with backdrop blur and CSS variable references (`--cover-DarkVibrant`, `--cover-Vibrant`). Whether you use Tidal's default theme, CoverTheme, or any custom Luna CSS theme, the visual aesthetic seamlessly blends with the rest of the application.
