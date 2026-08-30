var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// dynamicExternals:@luna/core
var require_core = __commonJS({
  "dynamicExternals:@luna/core"(exports, module) {
    var mod = window.luna?.core?.modules?.["@luna/core"];
    if (mod === void 0 && typeof window.require === "function") {
      try {
        mod = window.require("@luna/core");
      } catch (e) {
      }
    }
    if (mod === void 0) {
      throw new Error("Cannot find module @luna/core in luna.core.modules");
    }
    try {
      window.luna?.core?.LunaPlugin?.getByName("@luna/core")?.addDependant(
        window.luna?.core?.LunaPlugin?.getByName("LastFMStats")
      );
    } catch (e) {
    }
    module.exports = mod;
  }
});

// dynamicExternals:@luna/lib
var require_lib = __commonJS({
  "dynamicExternals:@luna/lib"(exports, module) {
    var mod = window.luna?.core?.modules?.["@luna/lib"];
    if (mod === void 0 && typeof window.require === "function") {
      try {
        mod = window.require("@luna/lib");
      } catch (e) {
      }
    }
    if (mod === void 0) {
      throw new Error("Cannot find module @luna/lib in luna.core.modules");
    }
    try {
      window.luna?.core?.LunaPlugin?.getByName("@luna/lib")?.addDependant(
        window.luna?.core?.LunaPlugin?.getByName("LastFMStats")
      );
    } catch (e) {
    }
    module.exports = mod;
  }
});

// dynamicExternals:@luna/ui
var require_ui = __commonJS({
  "dynamicExternals:@luna/ui"(exports, module) {
    var mod = window.luna?.core?.modules?.["@luna/ui"];
    if (mod === void 0 && typeof window.require === "function") {
      try {
        mod = window.require("@luna/ui");
      } catch (e) {
      }
    }
    if (mod === void 0) {
      throw new Error("Cannot find module @luna/ui in luna.core.modules");
    }
    try {
      window.luna?.core?.LunaPlugin?.getByName("@luna/ui")?.addDependant(
        window.luna?.core?.LunaPlugin?.getByName("LastFMStats")
      );
    } catch (e) {
    }
    module.exports = mod;
  }
});

// dynamicExternals:react
var require_react = __commonJS({
  "dynamicExternals:react"(exports, module) {
    var mod = window.luna?.core?.modules?.["react"];
    if (mod === void 0 && typeof window.require === "function") {
      try {
        mod = window.require("react");
      } catch (e) {
      }
    }
    if (mod === void 0) {
      throw new Error("Cannot find module react in luna.core.modules");
    }
    try {
      window.luna?.core?.LunaPlugin?.getByName("react")?.addDependant(
        window.luna?.core?.LunaPlugin?.getByName("LastFMStats")
      );
    } catch (e) {
    }
    module.exports = mod;
  }
});

// dynamicExternals:react/jsx-runtime
var require_jsx_runtime = __commonJS({
  "dynamicExternals:react/jsx-runtime"(exports, module) {
    var mod = window.luna?.core?.modules?.["react/jsx-runtime"];
    if (mod === void 0 && typeof window.require === "function") {
      try {
        mod = window.require("react/jsx-runtime");
      } catch (e) {
      }
    }
    if (mod === void 0) {
      throw new Error("Cannot find module react/jsx-runtime in luna.core.modules");
    }
    try {
      window.luna?.core?.LunaPlugin?.getByName("react/jsx-runtime")?.addDependant(
        window.luna?.core?.LunaPlugin?.getByName("LastFMStats")
      );
    } catch (e) {
    }
    module.exports = mod;
  }
});

// src/index.tsx
var import_core4 = __toESM(require_core(), 1);
var import_lib4 = __toESM(require_lib(), 1);
var import_ui2 = __toESM(require_ui(), 1);

// src/components/LastfmStatsPage.tsx
var import_react5 = __toESM(require_react(), 1);

// src/api/lastfm.ts
var import_core2 = __toESM(require_core(), 1);

// src/components/Settings.tsx
var import_react = __toESM(require_react(), 1);
var import_core = __toESM(require_core(), 1);
var import_ui = __toESM(require_ui(), 1);
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var statsStorage = await import_core.ReactiveStore.getPluginStorage(
  "LastFMStats",
  {
    username: "",
    defaultPeriod: "7day",
    itemsLimit: 20,
    customApiKey: "",
    enableSidebarButton: true
  }
);
var Settings = () => {
  const [username, setUsername] = import_react.default.useState(statsStorage.username);
  const [defaultPeriod, setDefaultPeriod] = import_react.default.useState(statsStorage.defaultPeriod);
  const [itemsLimit, setItemsLimit] = import_react.default.useState(statsStorage.itemsLimit);
  const [customApiKey, setCustomApiKey] = import_react.default.useState(statsStorage.customApiKey);
  const handleAutoDetect = async () => {
    const detected = await LastFmApi.getActiveUsername();
    if (detected) {
      setUsername(statsStorage.username = detected);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_ui.LunaSettings, { title: "Last.fm User Profile", desc: "Configure your Last.fm account details to import stats", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_ui.LunaTextSetting,
        {
          title: "Last.fm Username",
          desc: "Your public Last.fm profile username",
          value: username,
          placeholder: "e.g. RJ, musicfan99",
          onChange: (e) => {
            setUsername(statsStorage.username = e.target.value.trim());
          }
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_ui.LunaButtonSetting,
        {
          title: "Auto-detect Username",
          desc: "Detect username automatically from TidaLuna LastFM session",
          onClick: handleAutoDetect,
          children: "Auto-detect"
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_ui.LunaSettings, { title: "Display & Stats Options", desc: "Default time periods and view preferences", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
        import_ui.LunaSelectSetting,
        {
          title: "Default Timeframe",
          desc: "The default time period loaded when opening the Stats page",
          value: defaultPeriod,
          onChange: (e) => {
            const val = e.target.value;
            setDefaultPeriod(statsStorage.defaultPeriod = val);
          },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.LunaSelectItem, { value: "7day", children: "Last 7 Days" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.LunaSelectItem, { value: "1month", children: "Last 30 Days (1 Month)" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.LunaSelectItem, { value: "3month", children: "Last 90 Days (3 Months)" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.LunaSelectItem, { value: "6month", children: "Last 180 Days (6 Months)" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.LunaSelectItem, { value: "12month", children: "Last 365 Days (1 Year)" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.LunaSelectItem, { value: "overall", children: "All Time" })
          ]
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
        import_ui.LunaSelectSetting,
        {
          title: "Items Per Page",
          desc: "Number of tracks, artists, and albums to display per category",
          value: itemsLimit,
          onChange: (e) => {
            const val = Number(e.target.value);
            setItemsLimit(statsStorage.itemsLimit = val);
          },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.LunaSelectItem, { value: 10, children: "10 items" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.LunaSelectItem, { value: 20, children: "20 items" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.LunaSelectItem, { value: 50, children: "50 items" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.LunaSelectItem, { value: 100, children: "100 items" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.LunaSettings, { title: "Advanced API Settings", desc: "Optional custom Last.fm API Key", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      import_ui.LunaTextSetting,
      {
        title: "Custom API Key",
        desc: "Leave blank to use Tidal's built-in Last.fm API key",
        value: customApiKey,
        placeholder: "Optional 32-character API key",
        onChange: (e) => {
          setCustomApiKey(statsStorage.customApiKey = e.target.value.trim());
        }
      }
    ) })
  ] });
};

// src/api/lastfm.ts
var FALLBACK_API_KEY = "4a9f5581a9cdf20a699f540b52a508b0";
var API_ROOT = "https://ws.audioscrobbler.com/2.0/";
var LastFmApi = class {
  static resolvedApiKey;
  /**
   * Retrieves the active Last.fm username either from our storage or from
   * TidaLuna's official LastFM plugin storage.
   */
  static async getActiveUsername() {
    if (statsStorage?.username && statsStorage.username.trim()) {
      return statsStorage.username.trim();
    }
    try {
      const ourStorage = await import_core2.ReactiveStore.getPluginStorage("LastFMStats");
      if (ourStorage?.username && ourStorage.username.trim()) {
        return ourStorage.username.trim();
      }
    } catch {
    }
    try {
      const officialPluginStore = await import_core2.ReactiveStore.getPluginStorage("LastFM");
      if (officialPluginStore?.session?.name) {
        return officialPluginStore.session.name;
      }
    } catch {
    }
    return void 0;
  }
  /**
   * Resolves the API key (custom -> official plugin -> tidal exposed -> fallback)
   */
  static async getApiKey() {
    if (this.resolvedApiKey) return this.resolvedApiKey;
    try {
      const ourStorage = await import_core2.ReactiveStore.getPluginStorage("LastFMStats");
      if (ourStorage?.customApiKey && ourStorage.customApiKey.trim()) {
        return this.resolvedApiKey = ourStorage.customApiKey.trim();
      }
    } catch {
    }
    try {
      const apiKeyProp = (0, import_core2.findModuleProperty)((key, value) => key === "lastFmApiKey" && typeof value === "string");
      if (apiKeyProp?.value) {
        return this.resolvedApiKey = apiKeyProp.value;
      }
    } catch {
    }
    return this.resolvedApiKey = FALLBACK_API_KEY;
  }
  /**
   * Executes a GET request to Last.fm API 2.0
   */
  static async request(method, params = {}) {
    const apiKey = await this.getApiKey();
    const query = new URLSearchParams({
      method,
      api_key: apiKey,
      format: "json",
      ...params
    });
    const url = `${API_ROOT}?${query.toString()}`;
    const data = await import_core2.ftch.json(url);
    if (data?.error) {
      throw new Error(`Last.fm Error [${data.error}]: ${data.message || "Unknown error"}`);
    }
    return data;
  }
  static async getUserInfo(username) {
    const res = await this.request("user.getInfo", { user: username });
    if (!res.user) throw new Error("No user found with username " + username);
    return res.user;
  }
  static async getTopTracks(username, period = "7day", limit = 20, page = 1) {
    const res = await this.request("user.getTopTracks", {
      user: username,
      period,
      limit,
      page
    });
    const tracks = res.toptracks?.track ? Array.isArray(res.toptracks.track) ? res.toptracks.track : [res.toptracks.track] : [];
    const total = parseInt(res.toptracks?.["@attr"]?.total || `${tracks.length}`, 10);
    return { tracks, total };
  }
  static async getTopArtists(username, period = "7day", limit = 20, page = 1) {
    const res = await this.request("user.getTopArtists", {
      user: username,
      period,
      limit,
      page
    });
    const artists = res.topartists?.artist ? Array.isArray(res.topartists.artist) ? res.topartists.artist : [res.topartists.artist] : [];
    const total = parseInt(res.topartists?.["@attr"]?.total || `${artists.length}`, 10);
    return { artists, total };
  }
  static async getTopAlbums(username, period = "7day", limit = 20, page = 1) {
    const res = await this.request("user.getTopAlbums", {
      user: username,
      period,
      limit,
      page
    });
    const albums = res.topalbums?.album ? Array.isArray(res.topalbums.album) ? res.topalbums.album : [res.topalbums.album] : [];
    const total = parseInt(res.topalbums?.["@attr"]?.total || `${albums.length}`, 10);
    return { albums, total };
  }
  static async getRecentTracks(username, limit = 20, page = 1) {
    const res = await this.request("user.getRecentTracks", {
      user: username,
      limit,
      page,
      extended: 1
    });
    const tracks = res.recenttracks?.track ? Array.isArray(res.recenttracks.track) ? res.recenttracks.track : [res.recenttracks.track] : [];
    const total = parseInt(res.recenttracks?.["@attr"]?.total || `${tracks.length}`, 10);
    return { tracks, total };
  }
  /**
   * Retrieves the user's loved tracks from Last.fm
   */
  static async getLovedTracks(username, limit = 50, page = 1) {
    const res = await this.request(
      "user.getLovedTracks",
      {
        user: username,
        limit,
        page
      }
    );
    const tracks = res.lovedtracks?.track ? Array.isArray(res.lovedtracks.track) ? res.lovedtracks.track : [res.lovedtracks.track] : [];
    const total = parseInt(res.lovedtracks?.["@attr"]?.total || `${tracks.length}`, 10);
    return { tracks, total };
  }
  /**
   * Retrieves all loved tracks across pagination (up to maxCount)
   */
  static async getAllLovedTracks(username, maxCount = 1e3) {
    const allTracks = [];
    let page = 1;
    const limit = 50;
    while (allTracks.length < maxCount) {
      const { tracks, total } = await this.getLovedTracks(username, limit, page);
      if (!tracks.length) break;
      allTracks.push(...tracks);
      page++;
      if (allTracks.length >= total) break;
    }
    return allTracks;
  }
  /**
   * Retrieves the user's total scrobble count for a specific artist
   */
  static async getArtistPlaycount(artist, username) {
    if (!artist || !artist.trim()) return 0;
    const user = username || await this.getActiveUsername();
    if (!user) return 0;
    try {
      const res = await this.request("artist.getInfo", {
        artist: artist.trim(),
        username: user,
        autocorrect: 1
      });
      const count = res.artist?.stats?.userplaycount;
      return typeof count === "string" ? parseInt(count, 10) || 0 : count || 0;
    } catch (err) {
      console.warn("[LastFMStats] Failed to get artist playcount:", err);
      return 0;
    }
  }
  /**
   * Retrieves the user's total scrobble count for a specific album
   */
  static async getAlbumPlaycount(artist, album, username) {
    if (!artist || !album) return 0;
    const user = username || await this.getActiveUsername();
    if (!user) return 0;
    try {
      const res = await this.request("album.getInfo", {
        artist: artist.trim(),
        album: album.trim(),
        username: user,
        autocorrect: 1
      });
      const count = res.album?.userplaycount;
      return typeof count === "string" ? parseInt(count, 10) || 0 : count || 0;
    } catch (err) {
      console.warn("[LastFMStats] Failed to get album playcount:", err);
      return 0;
    }
  }
  /**
   * Helper to pick the best available image URL from Last.fm image array
   */
  static getImageUrl(images) {
    if (!images || images.length === 0) return "";
    const priority = ["mega", "extralarge", "large", "medium", "small"];
    for (const size of priority) {
      const match = images.find((img) => img.size === size && img["#text"]);
      if (match && match["#text"].trim()) return match["#text"];
    }
    const anyImg = images.find((img) => img["#text"] && img["#text"].trim());
    return anyImg ? anyImg["#text"] : "";
  }
};

// src/components/RecentTracksTab.tsx
var import_react3 = __toESM(require_react(), 1);

// src/api/artwork.ts
var import_core3 = __toESM(require_core(), 1);
var import_lib2 = __toESM(require_lib(), 1);

// src/navigation/tidalNavigate.ts
var import_lib = __toESM(require_lib(), 1);
var artistIdCache = {};
var albumIdCache = {};
var trackIdCache = {};
function setCachedArtistId(name, id) {
  if (name && id) artistIdCache[name.trim().toLowerCase()] = id;
}
function setCachedAlbumId(name, artistName, id) {
  if (name && id) albumIdCache[`${name.trim().toLowerCase()}:${(artistName || "").trim().toLowerCase()}`] = id;
}
function setCachedTrackId(name, artistName, id) {
  if (name && id) trackIdCache[`${name.trim().toLowerCase()}:${(artistName || "").trim().toLowerCase()}`] = id;
}
async function navigateToArtist(artistName, e) {
  if (e) {
    e.preventDefault();
    e.stopPropagation();
  }
  if (!artistName || !artistName.trim() || artistName === "Unknown Artist") return;
  const cleanName = artistName.trim();
  const cachedId = artistIdCache[cleanName.toLowerCase()];
  if (cachedId) {
    try {
      import_lib.redux.actions["router/PUSH"]({ pathname: `/artist/${cachedId}` });
      return;
    } catch {
    }
  }
  try {
    const searchUrl = `https://desktop.tidal.com/v1/search?query=${encodeURIComponent(cleanName)}&limit=3&types=ARTISTS&${import_lib.TidalApi.queryArgs()}`;
    const res = await import_lib.TidalApi.fetch(searchUrl);
    if (res?.artists?.items?.length) {
      const match = res.artists.items.find((a) => a.name.toLowerCase() === cleanName.toLowerCase()) || res.artists.items[0];
      if (match?.id) {
        artistIdCache[cleanName.toLowerCase()] = match.id;
        import_lib.redux.actions["router/PUSH"]({ pathname: `/artist/${match.id}` });
        return;
      }
    }
  } catch {
  }
  try {
    import_lib.redux.actions["router/PUSH"]({ pathname: `/search/${encodeURIComponent(cleanName)}` });
  } catch (err) {
    console.warn("[LastFMStats] Failed to navigate to artist:", err);
  }
}
async function navigateToAlbum(albumName, artistName = "", e) {
  if (e) {
    e.preventDefault();
    e.stopPropagation();
  }
  if (!albumName || !albumName.trim()) return;
  const cleanAlbum = albumName.trim();
  const cleanArtist = (artistName || "").trim();
  const key = `${cleanAlbum.toLowerCase()}:${cleanArtist.toLowerCase()}`;
  const cachedId = albumIdCache[key];
  if (cachedId) {
    try {
      import_lib.redux.actions["router/PUSH"]({ pathname: `/album/${cachedId}` });
      return;
    } catch {
    }
  }
  const query = `${cleanAlbum} ${cleanArtist}`.trim();
  try {
    const searchUrl = `https://desktop.tidal.com/v1/search?query=${encodeURIComponent(query)}&limit=3&types=ALBUMS&${import_lib.TidalApi.queryArgs()}`;
    const res = await import_lib.TidalApi.fetch(searchUrl);
    if (res?.albums?.items?.length) {
      const match = res.albums.items[0];
      if (match?.id) {
        albumIdCache[key] = match.id;
        import_lib.redux.actions["router/PUSH"]({ pathname: `/album/${match.id}` });
        return;
      }
    }
  } catch {
  }
  try {
    import_lib.redux.actions["router/PUSH"]({ pathname: `/search/${encodeURIComponent(query)}` });
  } catch (err) {
    console.warn("[LastFMStats] Failed to navigate to album:", err);
  }
}
async function navigateToTrack(trackName, artistName = "", e) {
  if (e) {
    e.preventDefault();
    e.stopPropagation();
  }
  if (!trackName || !trackName.trim()) return;
  const cleanTrack = trackName.trim();
  const cleanArtist = (artistName || "").trim();
  const key = `${cleanTrack.toLowerCase()}:${cleanArtist.toLowerCase()}`;
  const cachedId = trackIdCache[key];
  if (cachedId) {
    try {
      import_lib.redux.actions["router/PUSH"]({ pathname: `/track/${cachedId}` });
      return;
    } catch {
    }
  }
  const query = `${cleanTrack} ${cleanArtist}`.trim();
  try {
    const searchUrl = `https://desktop.tidal.com/v1/search?query=${encodeURIComponent(query)}&limit=3&types=TRACKS&${import_lib.TidalApi.queryArgs()}`;
    const res = await import_lib.TidalApi.fetch(searchUrl);
    if (res?.tracks?.items?.length) {
      const match = res.tracks.items[0];
      if (match?.id) {
        trackIdCache[key] = match.id;
        import_lib.redux.actions["router/PUSH"]({ pathname: `/track/${match.id}` });
        return;
      }
    }
  } catch {
  }
  try {
    import_lib.redux.actions["router/PUSH"]({ pathname: `/search/${encodeURIComponent(query)}` });
  } catch (err) {
    console.warn("[LastFMStats] Failed to navigate to track:", err);
  }
}

// src/api/artwork.ts
var artworkCache = {};
var resolvedCache = {};
var colorCache = {};
var LASTFM_PLACEHOLDERS = [
  "2a96cbd8b46e442fc41c2b86b821562f",
  "c67d77b49463c0f4236c5796328a6b78",
  "4128a6eb29f94943c9d206c08e625904"
];
var isPlaceholderUrl = (url) => {
  if (!url || !url.trim()) return true;
  return LASTFM_PLACEHOLDERS.some((ph) => url.includes(ph));
};
async function getArtworkDominantColor(url) {
  if (!url || !url.trim() || isPlaceholderUrl(url)) return "200, 182, 255";
  if (colorCache[url]) return colorCache[url];
  try {
    let dataUrl = url;
    if (!url.startsWith("data:")) {
      const res = await fetch(url);
      const blob = await res.blob();
      dataUrl = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.readAsDataURL(blob);
      });
    }
    const rgb = await new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        try {
          const canvas = document.createElement("canvas");
          const size = 32;
          canvas.width = size;
          canvas.height = size;
          const ctx = canvas.getContext("2d");
          if (!ctx) return resolve("200, 182, 255");
          ctx.drawImage(img, 0, 0, size, size);
          const data = ctx.getImageData(0, 0, size, size).data;
          let bestR = 200, bestG = 182, bestB = 255;
          let maxScore = -1;
          for (let i = 0; i < data.length; i += 4) {
            const r = data[i];
            const g = data[i + 1];
            const b = data[i + 2];
            const a = data[i + 3];
            if (a < 128) continue;
            const max = Math.max(r, g, b);
            const min = Math.min(r, g, b);
            const brightness = (max + min) / 2;
            const delta = max - min;
            if (brightness < 25 || brightness > 240) continue;
            const saturation = delta === 0 ? 0 : delta / (brightness <= 128 ? max + min : 510 - max - min);
            const score = saturation * 3 + (brightness > 60 && brightness < 190 ? 1 : 0.3);
            if (score > maxScore) {
              maxScore = score;
              bestR = r;
              bestG = g;
              bestB = b;
            }
          }
          if (maxScore <= 0.15) {
            bestR = 175;
            bestG = 185;
            bestB = 215;
          }
          resolve(`${bestR}, ${bestG}, ${bestB}`);
        } catch (e) {
          console.warn("[LastFMStats] Color extraction error:", e);
          resolve("200, 182, 255");
        }
      };
      img.onerror = () => resolve("200, 182, 255");
      img.src = dataUrl;
    });
    colorCache[url] = rgb;
    return rgb;
  } catch (err) {
    console.warn("[LastFMStats] Fetch for color extraction failed:", err);
    return "200, 182, 255";
  }
}
function formatTidalCoverUrl(uuid, res = "1280") {
  if (!uuid || !uuid.trim()) return "";
  const parts = uuid.trim().split("-").join("/");
  return `https://resources.tidal.com/images/${parts}/${res}x${res}.jpg`;
}
async function getArtistImage(artistName) {
  if (!artistName || !artistName.trim() || artistName === "Unknown Artist") return "";
  const cleanName = artistName.trim();
  const key = `artist:${cleanName.toLowerCase()}`;
  if (resolvedCache[key]) return resolvedCache[key];
  if (artworkCache[key]) return artworkCache[key];
  artworkCache[key] = (async () => {
    try {
      const searchUrl = `https://desktop.tidal.com/v1/search?query=${encodeURIComponent(cleanName)}&limit=5&types=ARTISTS&${import_lib2.TidalApi.queryArgs()}`;
      const tidalRes = await import_lib2.TidalApi.fetch(searchUrl);
      if (tidalRes?.artists?.items?.length) {
        const match = tidalRes.artists.items.find((a) => a.picture && a.name.toLowerCase() === cleanName.toLowerCase()) || tidalRes.artists.items.find((a) => a.picture) || tidalRes.artists.items[0];
        if (match?.id) {
          setCachedArtistId(cleanName, match.id);
        }
        if (match?.picture) {
          const url = formatTidalCoverUrl(match.picture, "750");
          if (url) return resolvedCache[key] = url;
        }
      }
    } catch (e) {
      console.warn("[LastFMStats] Failed to fetch Tidal artist picture:", e);
    }
    try {
      const itunesUrl = `https://itunes.apple.com/search?term=${encodeURIComponent(cleanName)}&entity=album&limit=1`;
      const itunesData = await import_core3.ftch.json(itunesUrl).catch(() => null);
      if (itunesData?.results?.[0]?.artworkUrl100) {
        const url = itunesData.results[0].artworkUrl100.replace("100x100bb", "600x600bb");
        return resolvedCache[key] = url;
      }
    } catch {
    }
    return resolvedCache[key] = "";
  })();
  return artworkCache[key];
}
async function getTrackArtwork(trackName, artistName) {
  if (!trackName) return "";
  const cleanTrack = trackName.trim();
  const cleanArtist = (artistName || "").trim();
  const query = `${cleanTrack} ${cleanArtist}`.trim();
  const key = `track:${cleanTrack.toLowerCase()}:${cleanArtist.toLowerCase()}`;
  if (resolvedCache[key]) return resolvedCache[key];
  if (artworkCache[key]) return artworkCache[key];
  artworkCache[key] = (async () => {
    try {
      const searchUrl = `https://desktop.tidal.com/v1/search?query=${encodeURIComponent(query)}&limit=5&types=TRACKS&${import_lib2.TidalApi.queryArgs()}`;
      const tidalRes = await import_lib2.TidalApi.fetch(searchUrl);
      if (tidalRes?.tracks?.items?.length) {
        const match = tidalRes.tracks.items.find((t) => t.album?.cover) || tidalRes.tracks.items[0];
        if (match?.id) {
          setCachedTrackId(cleanTrack, cleanArtist, match.id);
        }
        if (match?.album?.id) {
          setCachedAlbumId(match.title || "", cleanArtist, match.album.id);
        }
        const coverUuid = match?.album?.cover || match?.album?.videoCover;
        if (coverUuid) {
          const url = formatTidalCoverUrl(coverUuid, "1280");
          if (url) return resolvedCache[key] = url;
        }
      }
    } catch (e) {
      console.warn("[LastFMStats] Failed to fetch Tidal track cover:", e);
    }
    try {
      const itunesUrl = `https://itunes.apple.com/search?term=${encodeURIComponent(query)}&entity=song&limit=1`;
      const itunesData = await import_core3.ftch.json(itunesUrl).catch(() => null);
      if (itunesData?.results?.[0]?.artworkUrl100) {
        const url = itunesData.results[0].artworkUrl100.replace("100x100bb", "600x600bb");
        return resolvedCache[key] = url;
      }
    } catch {
    }
    return resolvedCache[key] = "";
  })();
  return artworkCache[key];
}
async function getAlbumArtwork(albumName, artistName) {
  if (!albumName) return "";
  const cleanAlbum = albumName.trim();
  const cleanArtist = (artistName || "").trim();
  const query = `${cleanAlbum} ${cleanArtist}`.trim();
  const key = `album:${cleanAlbum.toLowerCase()}:${cleanArtist.toLowerCase()}`;
  if (resolvedCache[key]) return resolvedCache[key];
  if (artworkCache[key]) return artworkCache[key];
  artworkCache[key] = (async () => {
    try {
      const searchUrl = `https://desktop.tidal.com/v1/search?query=${encodeURIComponent(query)}&limit=5&types=ALBUMS&${import_lib2.TidalApi.queryArgs()}`;
      const tidalRes = await import_lib2.TidalApi.fetch(searchUrl);
      if (tidalRes?.albums?.items?.length) {
        const match = tidalRes.albums.items.find((a) => a.cover) || tidalRes.albums.items[0];
        if (match?.id) {
          setCachedAlbumId(cleanAlbum, cleanArtist, match.id);
        }
        const coverUuid = match?.cover || match?.videoCover;
        if (coverUuid) {
          const url = formatTidalCoverUrl(coverUuid, "1280");
          if (url) return resolvedCache[key] = url;
        }
      }
    } catch (e) {
      console.warn("[LastFMStats] Failed to fetch Tidal album cover:", e);
    }
    try {
      const itunesUrl = `https://itunes.apple.com/search?term=${encodeURIComponent(query)}&entity=album&limit=1`;
      const itunesData = await import_core3.ftch.json(itunesUrl).catch(() => null);
      if (itunesData?.results?.[0]?.artworkUrl100) {
        const url = itunesData.results[0].artworkUrl100.replace("100x100bb", "600x600bb");
        return resolvedCache[key] = url;
      }
    } catch {
    }
    return resolvedCache[key] = "";
  })();
  return artworkCache[key];
}

// src/api/types.ts
function getArtistName(artist) {
  if (!artist) return "Unknown Artist";
  if (typeof artist === "string") return artist.trim() || "Unknown Artist";
  return (artist.name || artist["#text"] || "").trim() || "Unknown Artist";
}
function getAlbumName(album) {
  if (!album) return "";
  if (typeof album === "string") return album.trim();
  return (album.name || album["#text"] || "").trim();
}
function getTrackName(track) {
  if (!track) return "Unknown Track";
  if (typeof track === "string") return track.trim() || "Unknown Track";
  return (track.name || track.title || "").trim() || "Unknown Track";
}

// src/components/ArtworkImage.tsx
var import_react2 = __toESM(require_react(), 1);
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
var ArtworkImage = ({
  type,
  name,
  artistName = "",
  initialUrl,
  alt = "",
  className = "",
  style = {},
  fallbackIcon = ""
}) => {
  const [imageUrl, setImageUrl] = (0, import_react2.useState)(() => {
    if (type === "artist") return "";
    return isPlaceholderUrl(initialUrl) ? "" : initialUrl || "";
  });
  const [loaded, setLoaded] = (0, import_react2.useState)(false);
  const [hasError, setHasError] = (0, import_react2.useState)(false);
  (0, import_react2.useEffect)(() => {
    let isCancelled = false;
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
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      "img",
      {
        src: imageUrl,
        alt: alt || name,
        className,
        style: {
          opacity: loaded ? 1 : 0.4,
          transition: "opacity 0.25s ease-in-out, transform 0.3s ease",
          objectFit: "cover",
          ...style
        },
        onLoad: () => setLoaded(true),
        onError: () => {
          if (imageUrl.includes("/1280x1280.jpg")) {
            setImageUrl(imageUrl.replace("/1280x1280.jpg", "/750x750.jpg"));
          } else if (imageUrl.includes("/750x750.jpg")) {
            setImageUrl(imageUrl.replace("/750x750.jpg", "/640x640.jpg"));
          } else {
            setHasError(true);
          }
        }
      }
    );
  }
  const initial = name ? name[0].toUpperCase() : fallbackIcon;
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    "div",
    {
      className,
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: type === "artist" ? "linear-gradient(135deg, rgba(227, 27, 35, 0.25), rgba(200, 182, 255, 0.15))" : "rgba(255, 255, 255, 0.05)",
        color: type === "artist" ? "var(--lfm-accent-lavender)" : "rgba(255, 255, 255, 0.4)",
        fontWeight: 700,
        fontSize: type === "artist" ? "24px" : "14px",
        userSelect: "none",
        ...style
      },
      children: initial || /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("svg", { viewBox: "0 0 24 24", width: "16", height: "16", fill: "currentColor", style: { opacity: 0.4 }, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" }) })
    }
  );
};

// src/components/RecentTracksTab.tsx
var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
var RecentTracksTab = ({ tracks, loading }) => {
  const [dominantColor, setDominantColor] = (0, import_react3.useState)("200, 182, 255");
  const formatTime = (uts) => {
    if (!uts) return "Recently";
    const timestamp = parseInt(uts, 10) * 1e3;
    const diff = Date.now() - timestamp;
    const minutes = Math.floor(diff / 6e4);
    if (minutes < 1) return "Just now";
    if (minutes < 60) return `${minutes}m ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h ago`;
    const days = Math.floor(hours / 24);
    if (days < 7) return `${days}d ago`;
    return new Date(timestamp).toLocaleDateString(void 0, {
      month: "short",
      day: "numeric"
    });
  };
  const nowPlayingTrack = tracks.find((t) => t["@attr"]?.nowplaying === "true");
  (0, import_react3.useEffect)(() => {
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
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "lfm-track-list", children: Array.from({ length: 8 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "lfm-track-row lfm-skeleton", style: { height: "64px" } }, i)) });
  }
  if (!tracks.length) {
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "lfm-glass-card lfm-empty-state", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "lfm-empty-title", children: "No Recent Scrobbles" }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "lfm-empty-desc", children: "Start playing music to see your live scrobbles here!" })
    ] });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "lfm-track-list", children: tracks.map((track, idx) => {
    const isNowPlaying = track["@attr"]?.nowplaying === "true";
    const imgUrl = LastFmApi.getImageUrl(track.image);
    const timeStr = isNowPlaying ? "Scrobbling now" : formatTime(track.date?.uts);
    const trackTitle = getTrackName(track);
    const artistName = getArtistName(track.artist);
    const albumName = getAlbumName(track.album);
    const customStyle = isNowPlaying && dominantColor ? {
      background: `linear-gradient(135deg, rgba(${dominantColor}, 0.22) 0%, rgba(${dominantColor}, 0.08) 100%)`,
      borderColor: `rgba(${dominantColor}, 0.5)`,
      boxShadow: `0 8px 32px rgba(${dominantColor}, 0.22), inset 0 1px 1px rgba(255, 255, 255, 0.25)`,
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)"
    } : void 0;
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
      "div",
      {
        className: `lfm-track-row ${isNowPlaying ? "lfm-now-playing-row" : ""}`,
        style: customStyle,
        onClick: (e) => navigateToTrack(trackTitle, artistName, e),
        title: `Play "${trackTitle}" on TIDAL`,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "lfm-track-left", children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
              "div",
              {
                className: "lfm-clickable-image",
                onClick: (e) => navigateToTrack(trackTitle, artistName, e),
                title: `View "${trackTitle}" on TIDAL`,
                children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                  ArtworkImage,
                  {
                    type: "track",
                    name: trackTitle,
                    artistName,
                    initialUrl: imgUrl,
                    alt: trackTitle,
                    className: "lfm-track-image"
                  }
                )
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "lfm-track-info", children: [
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                "div",
                {
                  className: "lfm-track-title lfm-clickable-text",
                  onClick: (e) => navigateToTrack(trackTitle, artistName, e),
                  title: `View "${trackTitle}" on TIDAL`,
                  children: trackTitle
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "lfm-track-artist", children: [
                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                  "span",
                  {
                    className: "lfm-clickable-text",
                    onClick: (e) => navigateToArtist(artistName, e),
                    title: `View artist "${artistName}" on TIDAL`,
                    children: artistName
                  }
                ),
                albumName && /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_jsx_runtime3.Fragment, { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { style: { margin: "0 6px", opacity: 0.5 }, children: "-" }),
                  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                    "span",
                    {
                      className: "lfm-clickable-text",
                      onClick: (e) => navigateToAlbum(albumName, artistName, e),
                      title: `View album "${albumName}" on TIDAL`,
                      style: { opacity: 0.8 },
                      children: albumName
                    }
                  )
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "lfm-track-right", children: [
            isNowPlaying ? /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "lfm-scrobbling-indicator", children: [
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                "div",
                {
                  className: "lfm-spinning-circle",
                  style: {
                    borderTopColor: `rgb(${dominantColor})`,
                    borderRightColor: `rgba(${dominantColor}, 0.3)`
                  }
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                "span",
                {
                  style: {
                    color: `rgb(${dominantColor})`,
                    fontSize: "13px",
                    fontWeight: 600,
                    letterSpacing: "0.02em"
                  },
                  children: "Scrobbling"
                }
              )
            ] }) : /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "lfm-track-time", children: timeStr }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
              "button",
              {
                className: "lfm-play-btn",
                onClick: (e) => navigateToTrack(trackTitle, artistName, e),
                title: `Play "${trackTitle}" on TIDAL`,
                children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", { viewBox: "0 0 24 24", width: "16", height: "16", fill: "currentColor", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M8 5v14l11-7z" }) })
              }
            )
          ] })
        ]
      },
      `${trackTitle}-${idx}`
    );
  }) });
};

// src/components/TopAlbumsTab.tsx
var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);
var TopAlbumsTab = ({ albums, loading }) => {
  if (loading && !albums.length) {
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "lfm-card-grid", children: Array.from({ length: 12 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "lfm-item-card lfm-skeleton", style: { height: "240px" } }, i)) });
  }
  if (!albums.length) {
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "lfm-glass-card lfm-empty-state", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "lfm-empty-title", children: "No Albums Found" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "lfm-empty-desc", children: "No scrobbled albums found for the selected timeframe." })
    ] });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "lfm-card-grid", children: albums.map((album, idx) => {
    const rank = album["@attr"]?.rank ? parseInt(album["@attr"].rank, 10) : idx + 1;
    const playcount = parseInt(album.playcount || "0", 10);
    const imgUrl = LastFmApi.getImageUrl(album.image);
    const albumTitle = getAlbumName(album);
    const artistName = getArtistName(album.artist);
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
      "div",
      {
        className: "lfm-item-card",
        onClick: (e) => navigateToAlbum(albumTitle, artistName, e),
        title: `View album "${albumTitle}" on TIDAL`,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "lfm-item-rank", children: [
            "#",
            rank
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            "div",
            {
              className: "lfm-album-cover-container lfm-clickable-image",
              onClick: (e) => navigateToAlbum(albumTitle, artistName, e),
              title: `View album "${albumTitle}" on TIDAL`,
              children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                ArtworkImage,
                {
                  type: "album",
                  name: albumTitle,
                  artistName,
                  initialUrl: imgUrl,
                  alt: albumTitle,
                  className: "lfm-album-cover"
                }
              )
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            "div",
            {
              className: "lfm-item-name lfm-clickable-text",
              onClick: (e) => navigateToAlbum(albumTitle, artistName, e),
              title: `View album "${albumTitle}" on TIDAL`,
              children: albumTitle
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            "div",
            {
              className: "lfm-item-sub lfm-clickable-text",
              onClick: (e) => navigateToArtist(artistName, e),
              title: `View artist "${artistName}" on TIDAL`,
              children: artistName
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "lfm-item-scrobbles", children: [
            playcount.toLocaleString(),
            " plays"
          ] })
        ]
      },
      `${albumTitle}-${idx}`
    );
  }) });
};

// src/components/TopArtistsTab.tsx
var import_jsx_runtime5 = __toESM(require_jsx_runtime(), 1);
var TopArtistsTab = ({ artists, loading }) => {
  if (loading && !artists.length) {
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "lfm-card-grid", children: Array.from({ length: 12 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "lfm-item-card lfm-skeleton", style: { height: "240px" } }, i)) });
  }
  if (!artists.length) {
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "lfm-glass-card lfm-empty-state", children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "lfm-empty-title", children: "No Artists Found" }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "lfm-empty-desc", children: "No scrobbled artists found for the selected timeframe." })
    ] });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "lfm-card-grid", children: artists.map((artist, idx) => {
    const rank = artist["@attr"]?.rank ? parseInt(artist["@attr"].rank, 10) : idx + 1;
    const playcount = parseInt(artist.playcount || "0", 10);
    const imgUrl = LastFmApi.getImageUrl(artist.image);
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
      "div",
      {
        className: "lfm-item-card",
        onClick: (e) => navigateToArtist(artist.name, e),
        title: `View artist "${artist.name}" on TIDAL`,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "lfm-item-rank", children: [
            "#",
            rank
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "lfm-avatar-container lfm-clickable-image", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
            ArtworkImage,
            {
              type: "artist",
              name: artist.name,
              initialUrl: imgUrl,
              alt: artist.name,
              className: "lfm-artist-avatar"
            }
          ) }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
            "div",
            {
              className: "lfm-item-name lfm-clickable-text",
              onClick: (e) => navigateToArtist(artist.name, e),
              title: `View artist "${artist.name}" on TIDAL`,
              children: artist.name
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "lfm-item-scrobbles", children: [
            playcount.toLocaleString(),
            " plays"
          ] })
        ]
      },
      `${artist.name}-${idx}`
    );
  }) });
};

// src/components/TopTracksTab.tsx
var import_react4 = __toESM(require_react(), 1);
var import_jsx_runtime6 = __toESM(require_jsx_runtime(), 1);
var TopTracksTab = ({ tracks, loading }) => {
  const maxPlaycount = import_react4.default.useMemo(() => {
    if (!tracks.length) return 1;
    return Math.max(...tracks.map((t) => parseInt(t.playcount || "1", 10)));
  }, [tracks]);
  if (loading && !tracks.length) {
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "lfm-track-list", children: Array.from({ length: 8 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "lfm-track-row lfm-skeleton", style: { height: "64px" } }, i)) });
  }
  if (!tracks.length) {
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "lfm-glass-card lfm-empty-state", children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "lfm-empty-title", children: "No Tracks Found" }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "lfm-empty-desc", children: "No scrobbled tracks found for the selected timeframe." })
    ] });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "lfm-track-list", children: tracks.map((track, idx) => {
    const rank = track["@attr"]?.rank ? parseInt(track["@attr"].rank, 10) : idx + 1;
    const playcount = parseInt(track.playcount || "0", 10);
    const barWidth = Math.max(8, Math.round(playcount / maxPlaycount * 100));
    const imgUrl = LastFmApi.getImageUrl(track.image);
    const trackTitle = getTrackName(track);
    const artistName = getArtistName(track.artist);
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
      "div",
      {
        className: "lfm-track-row",
        onClick: (e) => navigateToTrack(trackTitle, artistName, e),
        title: `Play "${trackTitle}" on TIDAL`,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "lfm-track-left", children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "lfm-track-rank", children: [
              "#",
              rank
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
              "div",
              {
                className: "lfm-clickable-image",
                onClick: (e) => navigateToTrack(trackTitle, artistName, e),
                title: `View "${trackTitle}" on TIDAL`,
                children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
                  ArtworkImage,
                  {
                    type: "track",
                    name: trackTitle,
                    artistName,
                    initialUrl: imgUrl,
                    alt: trackTitle,
                    className: "lfm-track-image"
                  }
                )
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "lfm-track-info", children: [
              /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
                "div",
                {
                  className: "lfm-track-title lfm-clickable-text",
                  onClick: (e) => navigateToTrack(trackTitle, artistName, e),
                  title: `View "${trackTitle}" on TIDAL`,
                  children: trackTitle
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
                "div",
                {
                  className: "lfm-track-artist lfm-clickable-text",
                  onClick: (e) => navigateToArtist(artistName, e),
                  title: `View artist "${artistName}" on TIDAL`,
                  children: artistName
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "lfm-track-right", children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "lfm-scrobble-bar-container", children: [
              /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "lfm-scrobble-count", children: [
                playcount.toLocaleString(),
                " plays"
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "lfm-scrobble-bar", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "lfm-scrobble-bar-fill", style: { width: `${barWidth}%` } }) })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
              "button",
              {
                className: "lfm-play-btn",
                onClick: (e) => navigateToTrack(trackTitle, artistName, e),
                title: `Play "${trackTitle}" on TIDAL`,
                children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("svg", { viewBox: "0 0 24 24", width: "16", height: "16", fill: "currentColor", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("path", { d: "M8 5v14l11-7z" }) })
              }
            )
          ] })
        ]
      },
      `${trackTitle}-${idx}`
    );
  }) });
};

// src/components/OverviewTab.tsx
var import_jsx_runtime7 = __toESM(require_jsx_runtime(), 1);
var OverviewTab = ({
  tracks,
  artists,
  albums,
  recent,
  loading,
  onSelectTab
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { style: { display: "flex", flexDirection: "column", gap: "32px", marginTop: "16px" }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(420px, 1fr))", gap: "24px" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "lfm-glass-card", children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h2", { style: { margin: 0, fontSize: "18px", fontWeight: 700 }, children: "Top Tracks" }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("button", { className: "lfm-btn-action", onClick: () => onSelectTab("tracks"), style: { padding: "4px 10px", fontSize: "12px" }, children: "View All" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(TopTracksTab, { tracks: tracks.slice(0, 5), loading })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "lfm-glass-card", children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h2", { style: { margin: 0, fontSize: "18px", fontWeight: 700 }, children: "Live Activity" }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("button", { className: "lfm-btn-action", onClick: () => onSelectTab("recent"), style: { padding: "4px 10px", fontSize: "12px" }, children: "View All" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(RecentTracksTab, { tracks: recent.slice(0, 5), loading })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "lfm-glass-card", children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h2", { style: { margin: 0, fontSize: "18px", fontWeight: 700 }, children: "Top Artists" }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("button", { className: "lfm-btn-action", onClick: () => onSelectTab("artists"), style: { padding: "4px 10px", fontSize: "12px" }, children: "View All" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(TopArtistsTab, { artists: artists.slice(0, 6), loading })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "lfm-glass-card", children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h2", { style: { margin: 0, fontSize: "18px", fontWeight: 700 }, children: "Top Albums" }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("button", { className: "lfm-btn-action", onClick: () => onSelectTab("albums"), style: { padding: "4px 10px", fontSize: "12px" }, children: "View All" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(TopAlbumsTab, { albums: albums.slice(0, 6), loading })
    ] })
  ] });
};

// src/components/ProfileHeader.tsx
var import_jsx_runtime8 = __toESM(require_jsx_runtime(), 1);
var ProfileHeader = ({ user }) => {
  const avatarUrl = user?.image ? LastFmApi.getImageUrl(user.image) : "";
  const formatNumber = (val) => {
    if (!val) return "0";
    const num = typeof val === "string" ? parseInt(val, 10) : val;
    return isNaN(num) ? "0" : num.toLocaleString();
  };
  const memberSince = user?.registered?.unixtime ? new Date(parseInt(user.registered.unixtime, 10) * 1e3).toLocaleDateString(void 0, {
    year: "numeric",
    month: "short"
  }) : "";
  const userUrl = user?.url || (user?.name ? `https://www.last.fm/user/${user.name}` : "");
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "lfm-glass-card lfm-profile-header", children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "lfm-profile-left", children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "lfm-avatar-wrapper", children: avatarUrl ? /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("img", { src: avatarUrl, alt: user?.name || "User Avatar", className: "lfm-avatar" }) : /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
        "div",
        {
          className: "lfm-avatar",
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "24px",
            fontWeight: 700,
            color: "var(--lfm-accent-lavender)"
          },
          children: user?.name ? user.name[0].toUpperCase() : ""
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "lfm-profile-info", children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h1", { children: userUrl ? /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
          "a",
          {
            href: userUrl,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "lfm-username-link",
            title: "View Last.fm profile in browser",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { children: user?.name || "Last.fm User" }),
              /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
                "svg",
                {
                  viewBox: "0 0 24 24",
                  width: "14",
                  height: "14",
                  fill: "none",
                  stroke: "currentColor",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  style: { display: "inline-block", verticalAlign: "middle", opacity: 0.7 },
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" }),
                    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("polyline", { points: "15 3 21 3 21 9" }),
                    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("line", { x1: "10", y1: "14", x2: "21", y2: "3" })
                  ]
                }
              )
            ]
          }
        ) : /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { children: user?.name || "Last.fm User" }) }),
        memberSince && /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "lfm-profile-subtitle", children: [
          "Member since ",
          memberSince
        ] })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "lfm-header-stats", children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "lfm-stat-box", children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "lfm-stat-num", children: formatNumber(user?.playcount) }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "lfm-stat-label", children: "Scrobbles" })
      ] }),
      user?.artist_count && /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "lfm-stat-box", children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "lfm-stat-num", children: formatNumber(user.artist_count) }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "lfm-stat-label", children: "Artists" })
      ] }),
      user?.album_count && /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "lfm-stat-box", children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "lfm-stat-num", children: formatNumber(user.album_count) }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "lfm-stat-label", children: "Albums" })
      ] }),
      user?.track_count && /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "lfm-stat-box", children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "lfm-stat-num", children: formatNumber(user.track_count) }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "lfm-stat-label", children: "Tracks" })
      ] })
    ] })
  ] });
};

// src/components/TimeframeTabs.tsx
var import_jsx_runtime9 = __toESM(require_jsx_runtime(), 1);
var PERIODS = [
  { id: "7day", label: "7 Days" },
  { id: "1month", label: "30 Days" },
  { id: "3month", label: "3 Months" },
  { id: "6month", label: "6 Months" },
  { id: "12month", label: "1 Year" },
  { id: "overall", label: "All Time" }
];
var TimeframeTabs = ({ period, onChange, disabled }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "lfm-timeframe-selector", children: PERIODS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
    "button",
    {
      className: `lfm-time-btn ${period === p.id ? "active" : ""}`,
      onClick: () => onChange(p.id),
      disabled,
      children: p.label
    },
    p.id
  )) });
};

// src/components/LastfmStatsPage.tsx
var import_jsx_runtime10 = __toESM(require_jsx_runtime(), 1);
var LastfmStatsPage = () => {
  const [username, setUsername] = (0, import_react5.useState)(statsStorage.username || "");
  const [period, setPeriod] = (0, import_react5.useState)(statsStorage.defaultPeriod || "7day");
  const [activeTab, setActiveTab] = (0, import_react5.useState)("overview");
  const [user, setUser] = (0, import_react5.useState)(void 0);
  const [topTracks, setTopTracks] = (0, import_react5.useState)([]);
  const [topArtists, setTopArtists] = (0, import_react5.useState)([]);
  const [topAlbums, setTopAlbums] = (0, import_react5.useState)([]);
  const [recentTracks, setRecentTracks] = (0, import_react5.useState)([]);
  const [loading, setLoading] = (0, import_react5.useState)(false);
  const [error, setError] = (0, import_react5.useState)(void 0);
  const [showUserInput, setShowUserInput] = (0, import_react5.useState)(false);
  const [inputUsername, setInputUsername] = (0, import_react5.useState)("");
  (0, import_react5.useEffect)(() => {
    (async () => {
      if (!username) {
        const detected = await LastFmApi.getActiveUsername();
        if (detected) {
          setUsername(statsStorage.username = detected);
        } else {
          setShowUserInput(true);
        }
      }
    })();
  }, []);
  const isFetchingRef = import_react5.default.useRef(false);
  const fetchStats = (0, import_react5.useCallback)(
    async (targetUsername, targetPeriod, isBackground = false) => {
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
        setError(void 0);
      }
      try {
        const limit = statsStorage.itemsLimit || 20;
        const [userInfoRes, tracksRes, artistsRes, albumsRes, recentRes] = await Promise.allSettled([
          LastFmApi.getUserInfo(u),
          LastFmApi.getTopTracks(u, p, limit),
          LastFmApi.getTopArtists(u, p, limit),
          LastFmApi.getTopAlbums(u, p, limit),
          LastFmApi.getRecentTracks(u, limit)
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
        const errors = [userInfoRes, tracksRes, artistsRes, albumsRes, recentRes].filter((r) => r.status === "rejected").map((r) => r.reason?.message);
        if (errors.length === 5 && !isBackground) {
          setError(errors[0] || "Failed to fetch Last.fm stats. Please check your username.");
        }
      } catch (err) {
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
  (0, import_react5.useEffect)(() => {
    if (username) {
      fetchStats();
    }
  }, [username, period, fetchStats]);
  (0, import_react5.useEffect)(() => {
    if (!username) return;
    const interval = setInterval(() => {
      fetchStats(void 0, void 0, true);
    }, 2e3);
    return () => clearInterval(interval);
  }, [username, fetchStats]);
  const handlePeriodChange = (newPeriod) => {
    setPeriod(newPeriod);
  };
  const handleSaveUsername = (e) => {
    e.preventDefault();
    if (inputUsername.trim()) {
      const cleanUser = inputUsername.trim();
      setUsername(cleanUser);
      statsStorage.username = cleanUser;
      setShowUserInput(false);
      setInputUsername("");
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "lfm-stats-container", children: [
    showUserInput && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
      "div",
      {
        style: {
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
          zIndex: 9999
        },
        children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "lfm-glass-card", style: { width: "420px", maxWidth: "90%" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("h2", { style: { marginTop: 0, marginBottom: "8px", fontSize: "20px" }, children: "Connect Last.fm Account" }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { style: { color: "var(--lfm-text-secondary)", fontSize: "14px", marginBottom: "20px" }, children: "Enter your Last.fm username to view listening statistics and top charts." }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("form", { onSubmit: handleSaveUsername, children: [
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
              "input",
              {
                type: "text",
                value: inputUsername,
                onChange: (e) => setInputUsername(e.target.value),
                placeholder: "e.g. RJ or your Last.fm username",
                autoFocus: true,
                style: {
                  width: "100%",
                  padding: "12px 16px",
                  borderRadius: "8px",
                  border: "1px solid var(--lfm-border-glass-hover)",
                  backgroundColor: "rgba(0, 0, 0, 0.4)",
                  color: "#ffffff",
                  fontSize: "15px",
                  boxSizing: "border-box",
                  marginBottom: "20px",
                  outline: "none"
                }
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { style: { display: "flex", gap: "10px", justifyContent: "flex-end" }, children: [
              username && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                "button",
                {
                  type: "button",
                  className: "lfm-btn-action",
                  onClick: () => setShowUserInput(false),
                  children: "Cancel"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("button", { type: "submit", className: "lfm-btn-action primary", children: "Save & View Stats" })
            ] })
          ] })
        ] })
      }
    ),
    username && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(ProfileHeader, { user, loading }),
    error && /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
      "div",
      {
        className: "lfm-glass-card",
        style: {
          borderColor: "rgba(227, 27, 35, 0.5)",
          background: "rgba(227, 27, 35, 0.1)",
          marginBottom: "24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("strong", { children: "Error loading stats: " }),
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { children: error })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("button", { className: "lfm-btn-action primary", onClick: () => fetchStats(), children: "Retry" })
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "lfm-controls-bar", children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "lfm-nav-tabs", children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
          "button",
          {
            className: `lfm-tab-btn ${activeTab === "overview" ? "active" : ""}`,
            onClick: () => setActiveTab("overview"),
            children: "Overview"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
          "button",
          {
            className: `lfm-tab-btn ${activeTab === "tracks" ? "active" : ""}`,
            onClick: () => setActiveTab("tracks"),
            children: "Top Tracks"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
          "button",
          {
            className: `lfm-tab-btn ${activeTab === "artists" ? "active" : ""}`,
            onClick: () => setActiveTab("artists"),
            children: "Top Artists"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
          "button",
          {
            className: `lfm-tab-btn ${activeTab === "albums" ? "active" : ""}`,
            onClick: () => setActiveTab("albums"),
            children: "Top Albums"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
          "button",
          {
            className: `lfm-tab-btn ${activeTab === "recent" ? "active" : ""}`,
            onClick: () => setActiveTab("recent"),
            children: "Live Scrobbles"
          }
        )
      ] }),
      activeTab !== "recent" && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(TimeframeTabs, { period, onChange: handlePeriodChange, disabled: loading })
    ] }),
    activeTab === "overview" && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
      OverviewTab,
      {
        tracks: topTracks,
        artists: topArtists,
        albums: topAlbums,
        recent: recentTracks,
        loading,
        onSelectTab: setActiveTab
      }
    ),
    activeTab === "tracks" && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(TopTracksTab, { tracks: topTracks, loading }),
    activeTab === "artists" && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(TopArtistsTab, { artists: topArtists, loading }),
    activeTab === "albums" && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(TopAlbumsTab, { albums: topAlbums, loading }),
    activeTab === "recent" && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(RecentTracksTab, { tracks: recentTracks, loading })
  ] });
};

// src/navigation/sidebarButton.ts
var import_lib3 = __toESM(require_lib(), 1);
var TIDAL_LOGO_SVG = `
<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" class="lfm-tidal-logo-fixed">
  <path d="M12.012 3.992L8.008 7.996 4.004 3.992 0 7.996 4.004 12l4.004-4.004L12.012 12l-4.004 4.004 4.004 4.004 4.004-4.004L12.012 12l4.004-4.004-4.004-4.004zM16.042 7.996l3.979-3.979L24 7.996l-3.979 3.979z"/>
</svg>
`;
var MUSIC_ICON_SVG = `
<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" class="lfm-music-icon-fixed">
  <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
</svg>
`;
var LASTFM_LOGO_SVG = `
<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
  <path d="M10.584 17.21l-.88-2.392s-1.43 1.594-3.573 1.594c-1.897 0-3.244-1.649-3.244-4.288 0-3.382 1.704-4.591 3.381-4.591 2.42 0 3.189 1.567 3.849 3.574l.88 2.749c.88 2.666 2.529 4.81 7.285 4.81 3.409 0 5.718-1.044 5.718-3.793 0-2.227-1.265-3.381-3.63-3.931l-1.758-.385c-1.21-.275-1.567-.77-1.567-1.595 0-.934.742-1.484 1.952-1.484 1.32 0 2.034.495 2.144 1.677l2.749-.33c-.22-2.474-1.924-3.492-4.729-3.492-2.474 0-4.893.935-4.893 3.932 0 1.87.907 3.051 3.189 3.601l1.87.44c1.402.33 1.869.907 1.869 1.704 0 1.017-.99 1.43-2.86 1.43-2.776 0-3.93-1.457-4.59-3.464l-.907-2.75c-1.155-3.573-2.997-4.893-6.653-4.893C2.144 5.333 0 7.89 0 12.233c0 4.18 2.144 6.434 5.993 6.434 3.106 0 4.591-1.457 4.591-1.457z"/>
</svg>
`;
var initSidebarButton = (unloads2, statsPage2) => {
  const buttonId = "luna-sidebar-lastfm";
  const isCurrentStatsPage = () => {
    return window.location.search === "?LastfmStats";
  };
  const updateActiveState = (isStatsPage) => {
    const btn = document.getElementById(buttonId);
    if (!btn) return;
    if (isStatsPage) {
      btn.classList.add("active");
      btn.setAttribute("aria-current", "page");
    } else {
      btn.classList.remove("active");
      btn.removeAttribute("aria-current");
    }
  };
  const fixSidebarIcons = () => {
    const tidalLogoElem = document.querySelector('[aria-label="TIDAL"]') || document.querySelector('[data-test="sidebar-logo"]');
    if (tidalLogoElem) {
      const svg = tidalLogoElem.querySelector("svg");
      if (svg) {
        svg.outerHTML = TIDAL_LOGO_SVG;
      }
    }
    const musicItem = document.querySelector('[data-test="sidebar-music"]');
    if (musicItem) {
      const svg = musicItem.querySelector("svg");
      if (svg && !svg.classList.contains("lfm-music-icon-fixed")) {
        svg.outerHTML = MUSIC_ICON_SVG;
      }
    }
  };
  const insertButton = () => {
    fixSidebarIcons();
    if (document.getElementById(buttonId)) return;
    const anchorElem = document.querySelector('[data-test="sidebar-feed"]') || document.querySelector('[data-test="sidebar-explore"]') || document.querySelector('[data-test="sidebar-music"]');
    if (!anchorElem) return;
    if (anchorElem.closest("header") || anchorElem.getAttribute("aria-label") === "TIDAL") {
      return;
    }
    const buttonElem = document.createElement("a");
    buttonElem.id = buttonId;
    buttonElem.className = `${anchorElem.className} lfm-sidebar-item`;
    buttonElem.setAttribute("data-test", "sidebar-lastfm-stats");
    buttonElem.href = "#";
    buttonElem.title = "Last.fm Stats";
    buttonElem.classList.remove("active");
    buttonElem.removeAttribute("aria-current");
    buttonElem.innerHTML = `
      <span class="lfm-sidebar-icon">${LASTFM_LOGO_SVG}</span>
      <span class="lfm-sidebar-label">Last.fm Stats</span>
    `;
    buttonElem.onclick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      statsPage2.open();
    };
    const anchorLi = anchorElem.closest("li");
    if (anchorLi && anchorLi.parentElement) {
      const liWrapper = document.createElement("li");
      liWrapper.appendChild(buttonElem);
      anchorLi.parentElement.insertBefore(liWrapper, anchorLi.nextSibling);
    } else if (anchorElem.parentElement) {
      anchorElem.parentElement.insertBefore(buttonElem, anchorElem.nextSibling);
    }
    updateActiveState(isCurrentStatsPage());
    unloads2.add(() => {
      const el = document.getElementById(buttonId);
      if (el?.parentElement?.tagName.toLowerCase() === "li") {
        el.parentElement.remove();
      } else {
        el?.remove();
      }
    });
  };
  (0, import_lib3.observe)(
    unloads2,
    '[data-test="sidebar-feed"], [data-test="sidebar-explore"], [data-test="sidebar-music"], [aria-label="TIDAL"]',
    () => {
      insertButton();
      fixSidebarIcons();
    }
  );
  import_lib3.redux.intercept("router/NAVIGATED", unloads2, (payload) => {
    const isStatsPage = payload?.search === "?LastfmStats";
    updateActiveState(isStatsPage);
    fixSidebarIcons();
  });
};

// src/styles/stats.css
var stats_default = `/* ==========================================================================
   TidaLuna Last.fm Stats Plugin - Stylesheet
   Material UI (MUI) Design Language & Lavender Theme
   ========================================================================== */

@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,400&family=Roboto+Mono:wght@400;500;700&display=swap');

:root {
  --lfm-primary: #e31b23;
  --lfm-primary-hover: #ff334b;
  --lfm-accent-lavender: #c8b6ff;
  --lfm-accent-lavender-pink: #e0aaff;
  --lfm-accent-pink-bar: linear-gradient(90deg, #d8a4f0, #f8a5c2);
  --lfm-bg-glass: rgba(18, 18, 26, 0.55);
  --lfm-bg-card: rgba(255, 255, 255, 0.04);
  --lfm-bg-card-hover: rgba(255, 255, 255, 0.08);
  --lfm-border-glass: rgba(255, 255, 255, 0.08);
  --lfm-border-glass-hover: rgba(255, 255, 255, 0.16);
  --lfm-text-primary: #ffffff;
  --lfm-text-secondary: rgba(255, 255, 255, 0.7);
  --lfm-text-muted: rgba(255, 255, 255, 0.45);

  /* Material UI Typography System */
  --lfm-font-family: "Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif;
  --lfm-font-mono: "Roboto Mono", "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;
}

/* Base Headings */
h1, h2, h3, h4, h5, h6 {
  font-family: var(--lfm-font-family) !important;
  font-weight: 600 !important;
  letter-spacing: -0.01em !important;
  text-transform: none !important;
}

/* Container & Page Layout */
.lfm-stats-container {
  width: 100%;
  max-width: 1380px;
  margin: 0 auto;
  padding: 8px 32px 80px 32px;
  box-sizing: border-box;
  color: var(--lfm-text-primary);
  font-family: var(--lfm-font-family);
  animation: lfm-fade-in 0.3s ease-out;
  background: transparent !important;
}

@keyframes lfm-fade-in {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Glass Card */
.lfm-glass-card {
  background: var(--lfm-bg-glass);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid var(--lfm-border-glass);
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  width: 100%;
  box-sizing: border-box;
}

.lfm-glass-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.15), transparent);
}

.lfm-glass-card:hover {
  border-color: var(--lfm-border-glass-hover);
  background: rgba(255, 255, 255, 0.055);
}

/* Header & Profile Section */
.lfm-profile-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 28px;
  flex-wrap: wrap;
}

.lfm-profile-left {
  display: flex;
  align-items: center;
  gap: 20px;
}

.lfm-avatar-wrapper {
  position: relative;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  padding: 0;
  background: none;
  box-shadow: none;
  overflow: hidden;
  flex-shrink: 0;
}

.lfm-avatar {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  background-color: rgba(255, 255, 255, 0.05);
}

.lfm-profile-info h1 {
  margin: 0 0 4px 0;
  font-family: var(--lfm-font-family) !important;
  font-size: 28px;
  font-weight: 700;
  letter-spacing: -0.02em !important;
  line-height: 1.2;
  text-transform: none !important;
}

.lfm-username-link {
  color: var(--lfm-text-primary);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: color 0.2s ease;
  font-family: var(--lfm-font-family) !important;
  text-transform: none !important;
}

.lfm-username-link:hover {
  color: var(--lfm-accent-lavender);
}

.lfm-profile-subtitle {
  color: var(--lfm-text-muted);
  font-family: var(--lfm-font-family);
  font-size: 14px;
  font-weight: 400;
  margin-top: 2px;
}

/* Profile Stat Pills */
.lfm-header-stats {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.lfm-stat-box {
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 12px 20px;
  min-width: 110px;
  text-align: center;
}

.lfm-stat-box .lfm-stat-num {
  font-family: var(--lfm-font-family);
  font-size: 22px;
  font-weight: 700;
  color: #ffffff;
  line-height: 1.2;
}

.lfm-stat-box .lfm-stat-label {
  font-family: var(--lfm-font-family) !important;
  font-size: 11px;
  font-weight: 500;
  color: var(--lfm-text-muted);
  text-transform: uppercase !important;
  letter-spacing: 0.08em !important;
  margin-top: 4px;
}

/* Timeframe Bar & Navigation Tabs */
.lfm-controls-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 24px;
  flex-wrap: wrap;
}

.lfm-nav-tabs {
  display: flex;
  gap: 8px;
  background: rgba(0, 0, 0, 0.25);
  padding: 4px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.06);
}

.lfm-tab-btn {
  background: transparent;
  border: none;
  color: var(--lfm-text-secondary);
  font-family: var(--lfm-font-family) !important;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.01em !important;
  text-transform: none !important;
  padding: 8px 18px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 8px;
}

.lfm-tab-btn:hover {
  color: #ffffff;
  background: rgba(255, 255, 255, 0.06);
}

/* Left tab button active style matching right timeframe buttons */
.lfm-tab-btn.active {
  background: rgba(255, 255, 255, 0.12) !important;
  color: var(--lfm-accent-lavender) !important;
  font-weight: 600 !important;
  box-shadow: none !important;
}

.lfm-timeframe-selector {
  display: flex;
  gap: 6px;
  background: rgba(0, 0, 0, 0.25);
  padding: 4px;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.06);
}

.lfm-time-btn {
  background: transparent;
  border: none;
  color: var(--lfm-text-muted);
  font-family: var(--lfm-font-family) !important;
  font-size: 12px;
  font-weight: 500;
  text-transform: none !important;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.lfm-time-btn:hover {
  color: #ffffff;
}

.lfm-time-btn.active {
  background: rgba(255, 255, 255, 0.12) !important;
  color: var(--lfm-accent-lavender) !important;
  font-weight: 600 !important;
}

/* Actions */
.lfm-btn-action {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #ffffff;
  font-family: var(--lfm-font-family) !important;
  font-size: 13px;
  font-weight: 500;
  text-transform: none !important;
  letter-spacing: 0.02em !important;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: all 0.2s ease;
}

.lfm-btn-action:hover {
  background: rgba(255, 255, 255, 0.15);
  border-color: rgba(255, 255, 255, 0.2);
}

.lfm-btn-action.primary {
  background: var(--lfm-primary);
  border-color: var(--lfm-primary);
}

.lfm-btn-action.primary:hover {
  background: var(--lfm-primary-hover);
}

/* Grid Views (Top Artists & Top Albums) */
.lfm-card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 16px;
  margin-top: 16px;
  width: 100%;
  box-sizing: border-box;
}

.lfm-item-card {
  background: var(--lfm-bg-card);
  border: 1px solid var(--lfm-border-glass);
  border-radius: 12px;
  padding: 14px;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  position: relative;
  cursor: pointer;
  box-sizing: border-box;
  width: 100%;
}

.lfm-item-card:hover {
  background: var(--lfm-bg-card-hover);
  border-color: var(--lfm-border-glass-hover);
  transform: translateY(-4px);
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.4);
}

.lfm-item-rank {
  position: absolute;
  top: 18px;
  left: 18px;
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(4px);
  color: #ffffff;
  font-family: var(--lfm-font-family);
  font-size: 11px;
  font-weight: 600;
  padding: 3px 7px;
  border-radius: 6px;
  z-index: 2;
  border: 1px solid rgba(255, 255, 255, 0.15);
}

/* Artist Avatar */
.lfm-avatar-container {
  width: 100%;
  aspect-ratio: 1 / 1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
  border-radius: 50%;
  overflow: hidden;
  background: #181822;
  box-sizing: border-box;
}

.lfm-artist-avatar {
  width: 100% !important;
  height: 100% !important;
  aspect-ratio: 1 / 1 !important;
  border-radius: 50% !important;
  object-fit: cover !important;
  display: block !important;
}

/* Album Cover */
.lfm-album-cover-container {
  width: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 12px;
  background: #181822;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
}

.lfm-album-cover {
  width: 100% !important;
  height: 100% !important;
  aspect-ratio: 1 / 1 !important;
  border-radius: 8px !important;
  object-fit: cover !important;
  display: block !important;
}

.lfm-clickable-text {
  cursor: pointer;
  transition: color 0.15s ease;
}

.lfm-clickable-text:hover {
  color: var(--lfm-accent-lavender) !important;
  text-decoration: underline;
}

.lfm-clickable-image {
  cursor: pointer;
  transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1), filter 0.2s ease;
}

.lfm-clickable-image:hover {
  transform: scale(1.04);
  filter: brightness(1.15);
}

.lfm-item-name {
  font-family: var(--lfm-font-family) !important;
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.lfm-item-sub {
  font-family: var(--lfm-font-family) !important;
  font-size: 12px;
  font-weight: 400;
  color: var(--lfm-text-secondary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 8px;
}

.lfm-item-scrobbles {
  font-family: var(--lfm-font-family);
  font-size: 12px;
  font-weight: 500;
  color: var(--lfm-accent-lavender);
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: auto;
}

/* List View (Top Tracks & Recent Tracks) */
.lfm-track-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 16px;
  width: 100%;
}

.lfm-track-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 16px;
  background: var(--lfm-bg-card);
  border: 1px solid var(--lfm-border-glass);
  border-radius: 10px;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  gap: 16px;
  box-sizing: border-box;
}

.lfm-track-row:hover {
  background: var(--lfm-bg-card-hover);
  border-color: var(--lfm-border-glass-hover);
  transform: translateX(4px);
}

.lfm-track-left {
  display: flex;
  align-items: center;
  gap: 14px;
  min-width: 0;
  flex: 1;
}

.lfm-track-rank {
  font-family: var(--lfm-font-family);
  font-size: 14px;
  font-weight: 600;
  color: var(--lfm-text-muted);
  width: 28px;
  text-align: center;
  flex-shrink: 0;
}

.lfm-track-image {
  width: 44px !important;
  height: 44px !important;
  min-width: 44px !important;
  min-height: 44px !important;
  border-radius: 6px !important;
  object-fit: cover !important;
  background: #181822;
  flex-shrink: 0;
  display: block;
}

.lfm-track-info {
  display: flex;
  flex-direction: column;
  min-width: 0;
  flex: 1;
}

.lfm-track-title {
  font-family: var(--lfm-font-family) !important;
  font-size: 14px;
  font-weight: 500;
  color: #ffffff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.lfm-track-artist {
  font-family: var(--lfm-font-family) !important;
  font-size: 12px;
  font-weight: 400;
  color: var(--lfm-text-secondary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.lfm-track-right {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-shrink: 0;
}

.lfm-scrobble-bar-container {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
  width: 120px;
}

.lfm-scrobble-count {
  font-family: var(--lfm-font-family);
  font-size: 12px;
  font-weight: 500;
  color: var(--lfm-accent-lavender);
}

.lfm-track-time {
  font-family: var(--lfm-font-family);
  font-size: 12px;
  font-weight: 400;
  color: var(--lfm-text-muted);
}

.lfm-scrobble-bar {
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 2px;
  overflow: hidden;
}

/* Pinker Lavender Progress Bar Fill */
.lfm-scrobble-bar-fill {
  height: 100%;
  background: var(--lfm-accent-pink-bar) !important;
  border-radius: 2px;
}

.lfm-play-btn {
  background: rgba(255, 255, 255, 0.08);
  border: none;
  color: #ffffff;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  flex-shrink: 0;
}

/* Play button highlighted matches lavender text */
.lfm-track-row:hover .lfm-play-btn,
.lfm-play-btn:hover {
  background: var(--lfm-accent-lavender) !important;
  color: #000000 !important;
}

/* Dynamic Live Scrobbling Row & Indicator */
.lfm-now-playing-row {
  position: relative;
  overflow: hidden;
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1) !important;
}

.lfm-scrobbling-indicator {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: transparent !important;
  border: none !important;
  padding: 0 !important;
}

.lfm-spinning-circle {
  width: 14px;
  height: 14px;
  border: 2px solid rgba(255, 255, 255, 0.15);
  border-top-color: var(--lfm-accent-lavender);
  border-radius: 50%;
  animation: lfm-spin 0.9s linear infinite;
  flex-shrink: 0;
}

@keyframes lfm-spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Skeleton Loading State */
.lfm-skeleton {
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.04) 25%, rgba(255, 255, 255, 0.08) 50%, rgba(255, 255, 255, 0.04) 75%);
  background-size: 200% 100%;
  animation: lfm-shimmer 1.5s infinite;
  border-radius: 6px;
}

@keyframes lfm-shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

/* Empty & Error States */
.lfm-empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
  text-align: center;
}

.lfm-empty-title {
  font-family: var(--lfm-font-family) !important;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.01em !important;
  margin-bottom: 8px;
}

.lfm-empty-desc {
  font-family: var(--lfm-font-family);
  font-size: 14px;
  color: var(--lfm-text-secondary);
  max-width: 320px;
}
`;

// src/styles/sidebar.css
var sidebar_default = '/* ==========================================================================\n   TidaLuna Last.fm Stats - Sidebar Navigation Button Styles\n   Material UI Typography & Seamless Tidal Alignment\n   ========================================================================== */\n\n.lfm-sidebar-item {\n  display: flex !important;\n  align-items: center !important;\n  gap: 16px !important;\n  width: 100% !important;\n  height: 40px !important;\n  padding: 0 16px !important;\n  box-sizing: border-box !important;\n  background: transparent !important;\n  border: none !important;\n  border-radius: 8px !important;\n  color: rgba(255, 255, 255, 0.7) !important;\n  font-family: var(--lfm-font-family, "Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif) !important;\n  font-size: 14px !important;\n  font-weight: 500 !important;\n  cursor: pointer !important;\n  text-align: left !important;\n  text-decoration: none !important;\n  transition: background-color 0.15s ease, color 0.15s ease !important;\n  user-select: none !important;\n  margin: 2px 0 !important;\n}\n\n.lfm-sidebar-item:hover {\n  color: #ffffff !important;\n  background: rgba(255, 255, 255, 0.08) !important;\n}\n\n.lfm-sidebar-item.active,\n.lfm-sidebar-item[aria-current="page"] {\n  color: #ffffff !important;\n  background: rgba(255, 255, 255, 0.14) !important;\n  font-weight: 600 !important;\n}\n\n.lfm-sidebar-icon {\n  display: flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  width: 24px !important;\n  height: 24px !important;\n  flex-shrink: 0 !important;\n  color: inherit !important;\n}\n\n.lfm-sidebar-icon svg {\n  width: 20px !important;\n  height: 20px !important;\n  fill: currentColor !important;\n  stroke: none !important;\n  transition: transform 0.15s ease !important;\n}\n\n.lfm-sidebar-item:hover .lfm-sidebar-icon svg {\n  transform: scale(1.08) !important;\n}\n\n.lfm-sidebar-item.active .lfm-sidebar-icon svg {\n  fill: #ffffff !important;\n}\n\n.lfm-sidebar-label {\n  display: inline-block !important;\n  font-family: inherit !important;\n  font-size: 14px !important;\n  font-weight: inherit !important;\n  color: inherit !important;\n  white-space: nowrap !important;\n  overflow: hidden !important;\n  text-overflow: ellipsis !important;\n  line-height: 1 !important;\n}\n';

// src/index.tsx
var import_jsx_runtime11 = __toESM(require_jsx_runtime(), 1);
var { trace, errSignal } = (0, import_core4.Tracer)("[LastFMStats]");
var unloads = /* @__PURE__ */ new Set();
new import_lib4.StyleTag("luna-lastfm-stats-css", unloads, stats_default);
new import_lib4.StyleTag("luna-lastfm-sidebar-css", unloads, sidebar_default);
var statsPage = import_ui2.Page.register("LastfmStats", unloads, /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(LastfmStatsPage, {}));
statsPage.pageStyles.background = "#000000";
statsPage.pageStyles.minHeight = "100vh";
statsPage.pageStyles.padding = "0px";
statsPage.pageStyles.paddingTop = "0px";
statsPage.pageStyles.marginTop = "0px";
initSidebarButton(unloads, statsPage);
trace.log("LastFMStats plugin initialized successfully!");
export {
  Settings,
  errSignal,
  statsPage,
  trace,
  unloads
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiQGx1bmEvY29yZSIsICJAbHVuYS9saWIiLCAiQGx1bmEvdWkiLCAicmVhY3QiLCAicmVhY3QvanN4LXJ1bnRpbWUiLCAiLi4vc3JjL2luZGV4LnRzeCIsICIuLi9zcmMvY29tcG9uZW50cy9MYXN0Zm1TdGF0c1BhZ2UudHN4IiwgIi4uL3NyYy9hcGkvbGFzdGZtLnRzIiwgIi4uL3NyYy9jb21wb25lbnRzL1NldHRpbmdzLnRzeCIsICIuLi9zcmMvY29tcG9uZW50cy9SZWNlbnRUcmFja3NUYWIudHN4IiwgIi4uL3NyYy9hcGkvYXJ0d29yay50cyIsICIuLi9zcmMvbmF2aWdhdGlvbi90aWRhbE5hdmlnYXRlLnRzIiwgIi4uL3NyYy9hcGkvdHlwZXMudHMiLCAiLi4vc3JjL2NvbXBvbmVudHMvQXJ0d29ya0ltYWdlLnRzeCIsICIuLi9zcmMvY29tcG9uZW50cy9Ub3BBbGJ1bXNUYWIudHN4IiwgIi4uL3NyYy9jb21wb25lbnRzL1RvcEFydGlzdHNUYWIudHN4IiwgIi4uL3NyYy9jb21wb25lbnRzL1RvcFRyYWNrc1RhYi50c3giLCAiLi4vc3JjL2NvbXBvbmVudHMvT3ZlcnZpZXdUYWIudHN4IiwgIi4uL3NyYy9jb21wb25lbnRzL1Byb2ZpbGVIZWFkZXIudHN4IiwgIi4uL3NyYy9jb21wb25lbnRzL1RpbWVmcmFtZVRhYnMudHN4IiwgIi4uL3NyYy9uYXZpZ2F0aW9uL3NpZGViYXJCdXR0b24udHMiLCAiLi4vc3JjL3N0eWxlcy9zdGF0cy5jc3MiLCAiLi4vc3JjL3N0eWxlcy9zaWRlYmFyLmNzcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiXG4gICAgICAgICAgICB2YXIgbW9kID0gd2luZG93Lmx1bmE/LmNvcmU/Lm1vZHVsZXM/LltcIkBsdW5hL2NvcmVcIl07XG4gICAgICAgICAgICBpZiAobW9kID09PSB1bmRlZmluZWQgJiYgdHlwZW9mIHdpbmRvdy5yZXF1aXJlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgdHJ5IHsgbW9kID0gd2luZG93LnJlcXVpcmUoXCJAbHVuYS9jb3JlXCIpOyB9IGNhdGNoIChlKSB7fVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG1vZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSBAbHVuYS9jb3JlIGluIGx1bmEuY29yZS5tb2R1bGVzXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgd2luZG93Lmx1bmE/LmNvcmU/Lkx1bmFQbHVnaW4/LmdldEJ5TmFtZShcIkBsdW5hL2NvcmVcIik/LmFkZERlcGVuZGFudChcbiAgICAgICAgICAgICAgICB3aW5kb3cubHVuYT8uY29yZT8uTHVuYVBsdWdpbj8uZ2V0QnlOYW1lKFwiTGFzdEZNU3RhdHNcIilcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IG1vZDtcbiAgICAgICAgICAiLCAiXG4gICAgICAgICAgICB2YXIgbW9kID0gd2luZG93Lmx1bmE/LmNvcmU/Lm1vZHVsZXM/LltcIkBsdW5hL2xpYlwiXTtcbiAgICAgICAgICAgIGlmIChtb2QgPT09IHVuZGVmaW5lZCAmJiB0eXBlb2Ygd2luZG93LnJlcXVpcmUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICB0cnkgeyBtb2QgPSB3aW5kb3cucmVxdWlyZShcIkBsdW5hL2xpYlwiKTsgfSBjYXRjaCAoZSkge31cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChtb2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgQGx1bmEvbGliIGluIGx1bmEuY29yZS5tb2R1bGVzXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgd2luZG93Lmx1bmE/LmNvcmU/Lkx1bmFQbHVnaW4/LmdldEJ5TmFtZShcIkBsdW5hL2xpYlwiKT8uYWRkRGVwZW5kYW50KFxuICAgICAgICAgICAgICAgIHdpbmRvdy5sdW5hPy5jb3JlPy5MdW5hUGx1Z2luPy5nZXRCeU5hbWUoXCJMYXN0Rk1TdGF0c1wiKVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gbW9kO1xuICAgICAgICAgICIsICJcbiAgICAgICAgICAgIHZhciBtb2QgPSB3aW5kb3cubHVuYT8uY29yZT8ubW9kdWxlcz8uW1wiQGx1bmEvdWlcIl07XG4gICAgICAgICAgICBpZiAobW9kID09PSB1bmRlZmluZWQgJiYgdHlwZW9mIHdpbmRvdy5yZXF1aXJlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgdHJ5IHsgbW9kID0gd2luZG93LnJlcXVpcmUoXCJAbHVuYS91aVwiKTsgfSBjYXRjaCAoZSkge31cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChtb2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgQGx1bmEvdWkgaW4gbHVuYS5jb3JlLm1vZHVsZXNcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICB3aW5kb3cubHVuYT8uY29yZT8uTHVuYVBsdWdpbj8uZ2V0QnlOYW1lKFwiQGx1bmEvdWlcIik/LmFkZERlcGVuZGFudChcbiAgICAgICAgICAgICAgICB3aW5kb3cubHVuYT8uY29yZT8uTHVuYVBsdWdpbj8uZ2V0QnlOYW1lKFwiTGFzdEZNU3RhdHNcIilcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IG1vZDtcbiAgICAgICAgICAiLCAiXG4gICAgICAgICAgICB2YXIgbW9kID0gd2luZG93Lmx1bmE/LmNvcmU/Lm1vZHVsZXM/LltcInJlYWN0XCJdO1xuICAgICAgICAgICAgaWYgKG1vZCA9PT0gdW5kZWZpbmVkICYmIHR5cGVvZiB3aW5kb3cucmVxdWlyZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgIHRyeSB7IG1vZCA9IHdpbmRvdy5yZXF1aXJlKFwicmVhY3RcIik7IH0gY2F0Y2ggKGUpIHt9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobW9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlIHJlYWN0IGluIGx1bmEuY29yZS5tb2R1bGVzXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgd2luZG93Lmx1bmE/LmNvcmU/Lkx1bmFQbHVnaW4/LmdldEJ5TmFtZShcInJlYWN0XCIpPy5hZGREZXBlbmRhbnQoXG4gICAgICAgICAgICAgICAgd2luZG93Lmx1bmE/LmNvcmU/Lkx1bmFQbHVnaW4/LmdldEJ5TmFtZShcIkxhc3RGTVN0YXRzXCIpXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBtb2Q7XG4gICAgICAgICAgIiwgIlxuICAgICAgICAgICAgdmFyIG1vZCA9IHdpbmRvdy5sdW5hPy5jb3JlPy5tb2R1bGVzPy5bXCJyZWFjdC9qc3gtcnVudGltZVwiXTtcbiAgICAgICAgICAgIGlmIChtb2QgPT09IHVuZGVmaW5lZCAmJiB0eXBlb2Ygd2luZG93LnJlcXVpcmUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICB0cnkgeyBtb2QgPSB3aW5kb3cucmVxdWlyZShcInJlYWN0L2pzeC1ydW50aW1lXCIpOyB9IGNhdGNoIChlKSB7fVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG1vZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSByZWFjdC9qc3gtcnVudGltZSBpbiBsdW5hLmNvcmUubW9kdWxlc1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIHdpbmRvdy5sdW5hPy5jb3JlPy5MdW5hUGx1Z2luPy5nZXRCeU5hbWUoXCJyZWFjdC9qc3gtcnVudGltZVwiKT8uYWRkRGVwZW5kYW50KFxuICAgICAgICAgICAgICAgIHdpbmRvdy5sdW5hPy5jb3JlPy5MdW5hUGx1Z2luPy5nZXRCeU5hbWUoXCJMYXN0Rk1TdGF0c1wiKVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gbW9kO1xuICAgICAgICAgICIsICJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBUcmFjZXIsIHR5cGUgTHVuYVVubG9hZCB9IGZyb20gXCJAbHVuYS9jb3JlXCI7XG5pbXBvcnQgeyBTdHlsZVRhZyB9IGZyb20gXCJAbHVuYS9saWJcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwiQGx1bmEvdWlcIjtcblxuZXhwb3J0IGNvbnN0IHsgdHJhY2UsIGVyclNpZ25hbCB9ID0gVHJhY2VyKFwiW0xhc3RGTVN0YXRzXVwiKTtcbmV4cG9ydCBjb25zdCB1bmxvYWRzID0gbmV3IFNldDxMdW5hVW5sb2FkPigpO1xuXG5pbXBvcnQgeyBMYXN0Zm1TdGF0c1BhZ2UgfSBmcm9tIFwiLi9jb21wb25lbnRzL0xhc3RmbVN0YXRzUGFnZVwiO1xuaW1wb3J0IHsgaW5pdFNpZGViYXJCdXR0b24gfSBmcm9tIFwiLi9uYXZpZ2F0aW9uL3NpZGViYXJCdXR0b25cIjtcbmltcG9ydCBzdGF0c1N0eWxlcyBmcm9tIFwiLi9zdHlsZXMvc3RhdHMuY3NzXCI7XG5pbXBvcnQgc2lkZWJhclN0eWxlcyBmcm9tIFwiLi9zdHlsZXMvc2lkZWJhci5jc3NcIjtcblxuLy8gSW5qZWN0IENTUyBzdHlsZXMgd2l0aCBhdXRvbWF0aWMgY2xlYW51cCBvbiB1bmxvYWRcbm5ldyBTdHlsZVRhZyhcImx1bmEtbGFzdGZtLXN0YXRzLWNzc1wiLCB1bmxvYWRzLCBzdGF0c1N0eWxlcyk7XG5uZXcgU3R5bGVUYWcoXCJsdW5hLWxhc3RmbS1zaWRlYmFyLWNzc1wiLCB1bmxvYWRzLCBzaWRlYmFyU3R5bGVzKTtcblxuLy8gUmVnaXN0ZXIgdGhlIHN0YXRzIHBhZ2Ugd2l0aCBzb2xpZCBibGFjayBiYXNlIGJhY2tncm91bmQgYW5kIDAgdG9wIHBhZGRpbmcgdG8gZWxpbWluYXRlIGdhcHNcbmV4cG9ydCBjb25zdCBzdGF0c1BhZ2UgPSBQYWdlLnJlZ2lzdGVyKFwiTGFzdGZtU3RhdHNcIiwgdW5sb2FkcywgPExhc3RmbVN0YXRzUGFnZSAvPik7XG5zdGF0c1BhZ2UucGFnZVN0eWxlcy5iYWNrZ3JvdW5kID0gXCIjMDAwMDAwXCI7XG5zdGF0c1BhZ2UucGFnZVN0eWxlcy5taW5IZWlnaHQgPSBcIjEwMHZoXCI7XG5zdGF0c1BhZ2UucGFnZVN0eWxlcy5wYWRkaW5nID0gXCIwcHhcIjtcbnN0YXRzUGFnZS5wYWdlU3R5bGVzLnBhZGRpbmdUb3AgPSBcIjBweFwiO1xuc3RhdHNQYWdlLnBhZ2VTdHlsZXMubWFyZ2luVG9wID0gXCIwcHhcIjtcblxuLy8gSW5pdGlhbGl6ZSBzaWRlYmFyIGJ1dHRvbiBpbmplY3Rpb25cbmluaXRTaWRlYmFyQnV0dG9uKHVubG9hZHMsIHN0YXRzUGFnZSk7XG5cbi8vIEV4cG9ydCBzZXR0aW5ncyBjb21wb25lbnQgZm9yIEx1bmEgVUlcbmV4cG9ydCB7IFNldHRpbmdzIH0gZnJvbSBcIi4vY29tcG9uZW50cy9TZXR0aW5nc1wiO1xuXG50cmFjZS5sb2coXCJMYXN0Rk1TdGF0cyBwbHVnaW4gaW5pdGlhbGl6ZWQgc3VjY2Vzc2Z1bGx5IVwiKTtcbiIsICJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IExhc3RGbUFwaSB9IGZyb20gXCIuLi9hcGkvbGFzdGZtXCI7XG5pbXBvcnQge1xuICBMYXN0Rm1BbGJ1bSxcbiAgTGFzdEZtQXJ0aXN0LFxuICBMYXN0Rm1SZWNlbnRUcmFjayxcbiAgTGFzdEZtVGltZVBlcmlvZCxcbiAgTGFzdEZtVHJhY2ssXG4gIExhc3RGbVVzZXIsXG59IGZyb20gXCIuLi9hcGkvdHlwZXNcIjtcbmltcG9ydCB7IE92ZXJ2aWV3VGFiIH0gZnJvbSBcIi4vT3ZlcnZpZXdUYWJcIjtcbmltcG9ydCB7IFByb2ZpbGVIZWFkZXIgfSBmcm9tIFwiLi9Qcm9maWxlSGVhZGVyXCI7XG5pbXBvcnQgeyBSZWNlbnRUcmFja3NUYWIgfSBmcm9tIFwiLi9SZWNlbnRUcmFja3NUYWJcIjtcbmltcG9ydCB7IHN0YXRzU3RvcmFnZSB9IGZyb20gXCIuL1NldHRpbmdzXCI7XG5pbXBvcnQgeyBUaW1lZnJhbWVUYWJzIH0gZnJvbSBcIi4vVGltZWZyYW1lVGFic1wiO1xuaW1wb3J0IHsgVG9wQWxidW1zVGFiIH0gZnJvbSBcIi4vVG9wQWxidW1zVGFiXCI7XG5pbXBvcnQgeyBUb3BBcnRpc3RzVGFiIH0gZnJvbSBcIi4vVG9wQXJ0aXN0c1RhYlwiO1xuaW1wb3J0IHsgVG9wVHJhY2tzVGFiIH0gZnJvbSBcIi4vVG9wVHJhY2tzVGFiXCI7XG5cbnR5cGUgVGFiSWQgPSBcIm92ZXJ2aWV3XCIgfCBcInRyYWNrc1wiIHwgXCJhcnRpc3RzXCIgfCBcImFsYnVtc1wiIHwgXCJyZWNlbnRcIjtcblxuZXhwb3J0IGNvbnN0IExhc3RmbVN0YXRzUGFnZTogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGU8c3RyaW5nPihzdGF0c1N0b3JhZ2UudXNlcm5hbWUgfHwgXCJcIik7XG4gIGNvbnN0IFtwZXJpb2QsIHNldFBlcmlvZF0gPSB1c2VTdGF0ZTxMYXN0Rm1UaW1lUGVyaW9kPihzdGF0c1N0b3JhZ2UuZGVmYXVsdFBlcmlvZCB8fCBcIjdkYXlcIik7XG4gIGNvbnN0IFthY3RpdmVUYWIsIHNldEFjdGl2ZVRhYl0gPSB1c2VTdGF0ZTxUYWJJZD4oXCJvdmVydmlld1wiKTtcblxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZTxMYXN0Rm1Vc2VyIHwgdW5kZWZpbmVkPih1bmRlZmluZWQpO1xuICBjb25zdCBbdG9wVHJhY2tzLCBzZXRUb3BUcmFja3NdID0gdXNlU3RhdGU8TGFzdEZtVHJhY2tbXT4oW10pO1xuICBjb25zdCBbdG9wQXJ0aXN0cywgc2V0VG9wQXJ0aXN0c10gPSB1c2VTdGF0ZTxMYXN0Rm1BcnRpc3RbXT4oW10pO1xuICBjb25zdCBbdG9wQWxidW1zLCBzZXRUb3BBbGJ1bXNdID0gdXNlU3RhdGU8TGFzdEZtQWxidW1bXT4oW10pO1xuICBjb25zdCBbcmVjZW50VHJhY2tzLCBzZXRSZWNlbnRUcmFja3NdID0gdXNlU3RhdGU8TGFzdEZtUmVjZW50VHJhY2tbXT4oW10pO1xuXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZTxzdHJpbmcgfCB1bmRlZmluZWQ+KHVuZGVmaW5lZCk7XG4gIGNvbnN0IFtzaG93VXNlcklucHV0LCBzZXRTaG93VXNlcklucHV0XSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgY29uc3QgW2lucHV0VXNlcm5hbWUsIHNldElucHV0VXNlcm5hbWVdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcblxuICAvLyBJbml0aWFsaXplIHVzZXJuYW1lIG9uIG1vdW50IGlmIG5vdCBhbHJlYWR5IGluIHN0b3JhZ2VcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgaWYgKCF1c2VybmFtZSkge1xuICAgICAgICBjb25zdCBkZXRlY3RlZCA9IGF3YWl0IExhc3RGbUFwaS5nZXRBY3RpdmVVc2VybmFtZSgpO1xuICAgICAgICBpZiAoZGV0ZWN0ZWQpIHtcbiAgICAgICAgICBzZXRVc2VybmFtZSgoc3RhdHNTdG9yYWdlLnVzZXJuYW1lID0gZGV0ZWN0ZWQpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZXRTaG93VXNlcklucHV0KHRydWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSkoKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGlzRmV0Y2hpbmdSZWYgPSBSZWFjdC51c2VSZWYoZmFsc2UpO1xuXG4gIGNvbnN0IGZldGNoU3RhdHMgPSB1c2VDYWxsYmFjayhcbiAgICBhc3luYyAodGFyZ2V0VXNlcm5hbWU/OiBzdHJpbmcsIHRhcmdldFBlcmlvZD86IExhc3RGbVRpbWVQZXJpb2QsIGlzQmFja2dyb3VuZCA9IGZhbHNlKSA9PiB7XG4gICAgICBjb25zdCB1ID0gdGFyZ2V0VXNlcm5hbWUgfHwgdXNlcm5hbWU7XG4gICAgICBjb25zdCBwID0gdGFyZ2V0UGVyaW9kIHx8IHBlcmlvZDtcbiAgICAgIGlmICghdSkge1xuICAgICAgICBzZXRTaG93VXNlcklucHV0KHRydWUpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChpc0ZldGNoaW5nUmVmLmN1cnJlbnQpIHJldHVybjtcbiAgICAgIGlzRmV0Y2hpbmdSZWYuY3VycmVudCA9IHRydWU7XG5cbiAgICAgIGlmICghaXNCYWNrZ3JvdW5kKSB7XG4gICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgICAgIHNldEVycm9yKHVuZGVmaW5lZCk7XG4gICAgICB9XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGxpbWl0ID0gc3RhdHNTdG9yYWdlLml0ZW1zTGltaXQgfHwgMjA7XG5cbiAgICAgICAgY29uc3QgW3VzZXJJbmZvUmVzLCB0cmFja3NSZXMsIGFydGlzdHNSZXMsIGFsYnVtc1JlcywgcmVjZW50UmVzXSA9IGF3YWl0IFByb21pc2UuYWxsU2V0dGxlZChbXG4gICAgICAgICAgTGFzdEZtQXBpLmdldFVzZXJJbmZvKHUpLFxuICAgICAgICAgIExhc3RGbUFwaS5nZXRUb3BUcmFja3ModSwgcCwgbGltaXQpLFxuICAgICAgICAgIExhc3RGbUFwaS5nZXRUb3BBcnRpc3RzKHUsIHAsIGxpbWl0KSxcbiAgICAgICAgICBMYXN0Rm1BcGkuZ2V0VG9wQWxidW1zKHUsIHAsIGxpbWl0KSxcbiAgICAgICAgICBMYXN0Rm1BcGkuZ2V0UmVjZW50VHJhY2tzKHUsIGxpbWl0KSxcbiAgICAgICAgXSk7XG5cbiAgICAgICAgaWYgKHVzZXJJbmZvUmVzLnN0YXR1cyA9PT0gXCJmdWxmaWxsZWRcIikge1xuICAgICAgICAgIHNldFVzZXIodXNlckluZm9SZXMudmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0cmFja3NSZXMuc3RhdHVzID09PSBcImZ1bGZpbGxlZFwiKSB7XG4gICAgICAgICAgc2V0VG9wVHJhY2tzKHRyYWNrc1Jlcy52YWx1ZS50cmFja3MpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhcnRpc3RzUmVzLnN0YXR1cyA9PT0gXCJmdWxmaWxsZWRcIikge1xuICAgICAgICAgIHNldFRvcEFydGlzdHMoYXJ0aXN0c1Jlcy52YWx1ZS5hcnRpc3RzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYWxidW1zUmVzLnN0YXR1cyA9PT0gXCJmdWxmaWxsZWRcIikge1xuICAgICAgICAgIHNldFRvcEFsYnVtcyhhbGJ1bXNSZXMudmFsdWUuYWxidW1zKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVjZW50UmVzLnN0YXR1cyA9PT0gXCJmdWxmaWxsZWRcIikge1xuICAgICAgICAgIHNldFJlY2VudFRyYWNrcyhyZWNlbnRSZXMudmFsdWUudHJhY2tzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGVycm9ycyA9IFt1c2VySW5mb1JlcywgdHJhY2tzUmVzLCBhcnRpc3RzUmVzLCBhbGJ1bXNSZXMsIHJlY2VudFJlc11cbiAgICAgICAgICAuZmlsdGVyKChyKSA9PiByLnN0YXR1cyA9PT0gXCJyZWplY3RlZFwiKVxuICAgICAgICAgIC5tYXAoKHIpID0+IChyIGFzIFByb21pc2VSZWplY3RlZFJlc3VsdCkucmVhc29uPy5tZXNzYWdlKTtcblxuICAgICAgICBpZiAoZXJyb3JzLmxlbmd0aCA9PT0gNSAmJiAhaXNCYWNrZ3JvdW5kKSB7XG4gICAgICAgICAgc2V0RXJyb3IoZXJyb3JzWzBdIHx8IFwiRmFpbGVkIHRvIGZldGNoIExhc3QuZm0gc3RhdHMuIFBsZWFzZSBjaGVjayB5b3VyIHVzZXJuYW1lLlwiKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyOiBhbnkpIHtcbiAgICAgICAgaWYgKCFpc0JhY2tncm91bmQpIHtcbiAgICAgICAgICBzZXRFcnJvcihlcnI/Lm1lc3NhZ2UgfHwgXCJBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkIHdoaWxlIGZldGNoaW5nIHN0YXRzLlwiKTtcbiAgICAgICAgfVxuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKCFpc0JhY2tncm91bmQpIHtcbiAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICBpc0ZldGNoaW5nUmVmLmN1cnJlbnQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9LFxuICAgIFt1c2VybmFtZSwgcGVyaW9kXVxuICApO1xuXG4gIC8vIEluaXRpYWwgbG9hZCBhbmQgb24gcGFyYW1ldGVyIGNoYW5nZVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh1c2VybmFtZSkge1xuICAgICAgZmV0Y2hTdGF0cygpO1xuICAgIH1cbiAgfSwgW3VzZXJuYW1lLCBwZXJpb2QsIGZldGNoU3RhdHNdKTtcblxuICAvLyBTdWJ0bGUgMi1zZWNvbmQgYmFja2dyb3VuZCBhdXRvLXJlZnJlc2ggZm9yIGxpdmUgYWN0aXZpdHlcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIXVzZXJuYW1lKSByZXR1cm47XG4gICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBmZXRjaFN0YXRzKHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0cnVlKTtcbiAgICB9LCAyMDAwKTtcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gIH0sIFt1c2VybmFtZSwgZmV0Y2hTdGF0c10pO1xuXG4gIGNvbnN0IGhhbmRsZVBlcmlvZENoYW5nZSA9IChuZXdQZXJpb2Q6IExhc3RGbVRpbWVQZXJpb2QpID0+IHtcbiAgICBzZXRQZXJpb2QobmV3UGVyaW9kKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVTYXZlVXNlcm5hbWUgPSAoZTogUmVhY3QuRm9ybUV2ZW50KSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmIChpbnB1dFVzZXJuYW1lLnRyaW0oKSkge1xuICAgICAgY29uc3QgY2xlYW5Vc2VyID0gaW5wdXRVc2VybmFtZS50cmltKCk7XG4gICAgICBzZXRVc2VybmFtZShjbGVhblVzZXIpO1xuICAgICAgc3RhdHNTdG9yYWdlLnVzZXJuYW1lID0gY2xlYW5Vc2VyO1xuICAgICAgc2V0U2hvd1VzZXJJbnB1dChmYWxzZSk7XG4gICAgICBzZXRJbnB1dFVzZXJuYW1lKFwiXCIpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibGZtLXN0YXRzLWNvbnRhaW5lclwiPlxuICAgICAgey8qIFNldCBVc2VybmFtZSBNb2RhbCAqL31cbiAgICAgIHtzaG93VXNlcklucHV0ICYmIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBwb3NpdGlvbjogXCJmaXhlZFwiLFxuICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMCwgMCwgMCwgMC44NSlcIixcbiAgICAgICAgICAgIGJhY2tkcm9wRmlsdGVyOiBcImJsdXIoMTJweClcIixcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgICAgekluZGV4OiA5OTk5LFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxmbS1nbGFzcy1jYXJkXCIgc3R5bGU9e3sgd2lkdGg6IFwiNDIwcHhcIiwgbWF4V2lkdGg6IFwiOTAlXCIgfX0+XG4gICAgICAgICAgICA8aDIgc3R5bGU9e3sgbWFyZ2luVG9wOiAwLCBtYXJnaW5Cb3R0b206IFwiOHB4XCIsIGZvbnRTaXplOiBcIjIwcHhcIiB9fT5cbiAgICAgICAgICAgICAgQ29ubmVjdCBMYXN0LmZtIEFjY291bnRcbiAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICA8cCBzdHlsZT17eyBjb2xvcjogXCJ2YXIoLS1sZm0tdGV4dC1zZWNvbmRhcnkpXCIsIGZvbnRTaXplOiBcIjE0cHhcIiwgbWFyZ2luQm90dG9tOiBcIjIwcHhcIiB9fT5cbiAgICAgICAgICAgICAgRW50ZXIgeW91ciBMYXN0LmZtIHVzZXJuYW1lIHRvIHZpZXcgbGlzdGVuaW5nIHN0YXRpc3RpY3MgYW5kIHRvcCBjaGFydHMuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU2F2ZVVzZXJuYW1lfT5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtpbnB1dFVzZXJuYW1lfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0SW5wdXRVc2VybmFtZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJlLmcuIFJKIG9yIHlvdXIgTGFzdC5mbSB1c2VybmFtZVwiXG4gICAgICAgICAgICAgICAgYXV0b0ZvY3VzXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMTJweCAxNnB4XCIsXG4gICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiOHB4XCIsXG4gICAgICAgICAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkIHZhcigtLWxmbS1ib3JkZXItZ2xhc3MtaG92ZXIpXCIsXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgwLCAwLCAwLCAwLjQpXCIsXG4gICAgICAgICAgICAgICAgICBjb2xvcjogXCIjZmZmZmZmXCIsXG4gICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxNXB4XCIsXG4gICAgICAgICAgICAgICAgICBib3hTaXppbmc6IFwiYm9yZGVyLWJveFwiLFxuICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjIwcHhcIixcbiAgICAgICAgICAgICAgICAgIG91dGxpbmU6IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGdhcDogXCIxMHB4XCIsIGp1c3RpZnlDb250ZW50OiBcImZsZXgtZW5kXCIgfX0+XG4gICAgICAgICAgICAgICAge3VzZXJuYW1lICYmIChcbiAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxmbS1idG4tYWN0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd1VzZXJJbnB1dChmYWxzZSl9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIENhbmNlbFxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJsZm0tYnRuLWFjdGlvbiBwcmltYXJ5XCI+XG4gICAgICAgICAgICAgICAgICBTYXZlICYgVmlldyBTdGF0c1xuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuXG4gICAgICB7LyogUHJvZmlsZSBIZWFkZXIgKi99XG4gICAgICB7dXNlcm5hbWUgJiYgKFxuICAgICAgICA8UHJvZmlsZUhlYWRlciB1c2VyPXt1c2VyfSBsb2FkaW5nPXtsb2FkaW5nfSAvPlxuICAgICAgKX1cblxuICAgICAgey8qIEVycm9yIEFsZXJ0ICovfVxuICAgICAge2Vycm9yICYmIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cImxmbS1nbGFzcy1jYXJkXCJcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgYm9yZGVyQ29sb3I6IFwicmdiYSgyMjcsIDI3LCAzNSwgMC41KVwiLFxuICAgICAgICAgICAgYmFja2dyb3VuZDogXCJyZ2JhKDIyNywgMjcsIDM1LCAwLjEpXCIsXG4gICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiMjRweFwiLFxuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHN0cm9uZz5FcnJvciBsb2FkaW5nIHN0YXRzOiA8L3N0cm9uZz5cbiAgICAgICAgICAgIDxzcGFuPntlcnJvcn08L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJsZm0tYnRuLWFjdGlvbiBwcmltYXJ5XCIgb25DbGljaz17KCkgPT4gZmV0Y2hTdGF0cygpfT5cbiAgICAgICAgICAgIFJldHJ5XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cblxuICAgICAgey8qIENvbnRyb2xzICYgTmF2IEJhciAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGZtLWNvbnRyb2xzLWJhclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxmbS1uYXYtdGFic1wiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGxmbS10YWItYnRuICR7YWN0aXZlVGFiID09PSBcIm92ZXJ2aWV3XCIgPyBcImFjdGl2ZVwiIDogXCJcIn1gfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0QWN0aXZlVGFiKFwib3ZlcnZpZXdcIil9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgT3ZlcnZpZXdcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9e2BsZm0tdGFiLWJ0biAke2FjdGl2ZVRhYiA9PT0gXCJ0cmFja3NcIiA/IFwiYWN0aXZlXCIgOiBcIlwifWB9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVUYWIoXCJ0cmFja3NcIil9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgVG9wIFRyYWNrc1xuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGxmbS10YWItYnRuICR7YWN0aXZlVGFiID09PSBcImFydGlzdHNcIiA/IFwiYWN0aXZlXCIgOiBcIlwifWB9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVUYWIoXCJhcnRpc3RzXCIpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFRvcCBBcnRpc3RzXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgbGZtLXRhYi1idG4gJHthY3RpdmVUYWIgPT09IFwiYWxidW1zXCIgPyBcImFjdGl2ZVwiIDogXCJcIn1gfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0QWN0aXZlVGFiKFwiYWxidW1zXCIpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFRvcCBBbGJ1bXNcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9e2BsZm0tdGFiLWJ0biAke2FjdGl2ZVRhYiA9PT0gXCJyZWNlbnRcIiA/IFwiYWN0aXZlXCIgOiBcIlwifWB9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVUYWIoXCJyZWNlbnRcIil9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgTGl2ZSBTY3JvYmJsZXNcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAge2FjdGl2ZVRhYiAhPT0gXCJyZWNlbnRcIiAmJiAoXG4gICAgICAgICAgPFRpbWVmcmFtZVRhYnMgcGVyaW9kPXtwZXJpb2R9IG9uQ2hhbmdlPXtoYW5kbGVQZXJpb2RDaGFuZ2V9IGRpc2FibGVkPXtsb2FkaW5nfSAvPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiBBY3RpdmUgVGFiIFZpZXcgKi99XG4gICAgICB7YWN0aXZlVGFiID09PSBcIm92ZXJ2aWV3XCIgJiYgKFxuICAgICAgICA8T3ZlcnZpZXdUYWJcbiAgICAgICAgICB0cmFja3M9e3RvcFRyYWNrc31cbiAgICAgICAgICBhcnRpc3RzPXt0b3BBcnRpc3RzfVxuICAgICAgICAgIGFsYnVtcz17dG9wQWxidW1zfVxuICAgICAgICAgIHJlY2VudD17cmVjZW50VHJhY2tzfVxuICAgICAgICAgIGxvYWRpbmc9e2xvYWRpbmd9XG4gICAgICAgICAgb25TZWxlY3RUYWI9e3NldEFjdGl2ZVRhYn1cbiAgICAgICAgLz5cbiAgICAgICl9XG5cbiAgICAgIHthY3RpdmVUYWIgPT09IFwidHJhY2tzXCIgJiYgPFRvcFRyYWNrc1RhYiB0cmFja3M9e3RvcFRyYWNrc30gbG9hZGluZz17bG9hZGluZ30gLz59XG5cbiAgICAgIHthY3RpdmVUYWIgPT09IFwiYXJ0aXN0c1wiICYmIDxUb3BBcnRpc3RzVGFiIGFydGlzdHM9e3RvcEFydGlzdHN9IGxvYWRpbmc9e2xvYWRpbmd9IC8+fVxuXG4gICAgICB7YWN0aXZlVGFiID09PSBcImFsYnVtc1wiICYmIDxUb3BBbGJ1bXNUYWIgYWxidW1zPXt0b3BBbGJ1bXN9IGxvYWRpbmc9e2xvYWRpbmd9IC8+fVxuXG4gICAgICB7YWN0aXZlVGFiID09PSBcInJlY2VudFwiICYmIDxSZWNlbnRUcmFja3NUYWIgdHJhY2tzPXtyZWNlbnRUcmFja3N9IGxvYWRpbmc9e2xvYWRpbmd9IC8+fVxuICAgIDwvZGl2PlxuICApO1xufTtcbiIsICJpbXBvcnQgeyBmaW5kTW9kdWxlUHJvcGVydHksIGZ0Y2gsIFJlYWN0aXZlU3RvcmUgfSBmcm9tIFwiQGx1bmEvY29yZVwiO1xuaW1wb3J0IHsgc3RhdHNTdG9yYWdlIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvU2V0dGluZ3NcIjtcbmltcG9ydCB7XG4gIExhc3RGbUFsYnVtLFxuICBMYXN0Rm1BcnRpc3QsXG4gIExhc3RGbUxvdmVkVHJhY2ssXG4gIExhc3RGbVJlY2VudFRyYWNrLFxuICBMYXN0Rm1SZWNlbnRUcmFja3NSZXNwb25zZSxcbiAgTGFzdEZtVGltZVBlcmlvZCxcbiAgTGFzdEZtVG9wQWxidW1zUmVzcG9uc2UsXG4gIExhc3RGbVRvcEFydGlzdHNSZXNwb25zZSxcbiAgTGFzdEZtVG9wVHJhY2tzUmVzcG9uc2UsXG4gIExhc3RGbVRyYWNrLFxuICBMYXN0Rm1Vc2VySW5mb1Jlc3BvbnNlLFxuICBMYXN0Rm1Vc2VyLFxufSBmcm9tIFwiLi90eXBlc1wiO1xuXG5pbnRlcmZhY2UgTGFzdGZtU3RvcmFnZSB7XG4gIHVzZXJuYW1lPzogc3RyaW5nO1xuICBkZWZhdWx0UGVyaW9kPzogTGFzdEZtVGltZVBlcmlvZDtcbiAgaXRlbXNMaW1pdD86IG51bWJlcjtcbiAgY3VzdG9tQXBpS2V5Pzogc3RyaW5nO1xuICBjdXN0b21BcGlTZWNyZXQ/OiBzdHJpbmc7XG59XG5cbmNvbnN0IEZBTExCQUNLX0FQSV9LRVkgPSBcIjRhOWY1NTgxYTljZGYyMGE2OTlmNTQwYjUyYTUwOGIwXCI7XG5jb25zdCBBUElfUk9PVCA9IFwiaHR0cHM6Ly93cy5hdWRpb3Njcm9iYmxlci5jb20vMi4wL1wiO1xuXG5leHBvcnQgY2xhc3MgTGFzdEZtQXBpIHtcbiAgcHJpdmF0ZSBzdGF0aWMgcmVzb2x2ZWRBcGlLZXk/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlcyB0aGUgYWN0aXZlIExhc3QuZm0gdXNlcm5hbWUgZWl0aGVyIGZyb20gb3VyIHN0b3JhZ2Ugb3IgZnJvbVxuICAgKiBUaWRhTHVuYSdzIG9mZmljaWFsIExhc3RGTSBwbHVnaW4gc3RvcmFnZS5cbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgYXN5bmMgZ2V0QWN0aXZlVXNlcm5hbWUoKTogUHJvbWlzZTxzdHJpbmcgfCB1bmRlZmluZWQ+IHtcbiAgICBpZiAoc3RhdHNTdG9yYWdlPy51c2VybmFtZSAmJiBzdGF0c1N0b3JhZ2UudXNlcm5hbWUudHJpbSgpKSB7XG4gICAgICByZXR1cm4gc3RhdHNTdG9yYWdlLnVzZXJuYW1lLnRyaW0oKTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3Qgb3VyU3RvcmFnZSA9IGF3YWl0IFJlYWN0aXZlU3RvcmUuZ2V0UGx1Z2luU3RvcmFnZTxMYXN0Zm1TdG9yYWdlPihcIkxhc3RGTVN0YXRzXCIpO1xuICAgICAgaWYgKG91clN0b3JhZ2U/LnVzZXJuYW1lICYmIG91clN0b3JhZ2UudXNlcm5hbWUudHJpbSgpKSB7XG4gICAgICAgIHJldHVybiBvdXJTdG9yYWdlLnVzZXJuYW1lLnRyaW0oKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIHt9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3Qgb2ZmaWNpYWxQbHVnaW5TdG9yZSA9IGF3YWl0IFJlYWN0aXZlU3RvcmUuZ2V0UGx1Z2luU3RvcmFnZTx7IHNlc3Npb24/OiB7IG5hbWU/OiBzdHJpbmcgfSB9PihcIkxhc3RGTVwiKTtcbiAgICAgIGlmIChvZmZpY2lhbFBsdWdpblN0b3JlPy5zZXNzaW9uPy5uYW1lKSB7XG4gICAgICAgIHJldHVybiBvZmZpY2lhbFBsdWdpblN0b3JlLnNlc3Npb24ubmFtZTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIHt9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc29sdmVzIHRoZSBBUEkga2V5IChjdXN0b20gLT4gb2ZmaWNpYWwgcGx1Z2luIC0+IHRpZGFsIGV4cG9zZWQgLT4gZmFsbGJhY2spXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGFzeW5jIGdldEFwaUtleSgpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIGlmICh0aGlzLnJlc29sdmVkQXBpS2V5KSByZXR1cm4gdGhpcy5yZXNvbHZlZEFwaUtleTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBvdXJTdG9yYWdlID0gYXdhaXQgUmVhY3RpdmVTdG9yZS5nZXRQbHVnaW5TdG9yYWdlPExhc3RmbVN0b3JhZ2U+KFwiTGFzdEZNU3RhdHNcIik7XG4gICAgICBpZiAob3VyU3RvcmFnZT8uY3VzdG9tQXBpS2V5ICYmIG91clN0b3JhZ2UuY3VzdG9tQXBpS2V5LnRyaW0oKSkge1xuICAgICAgICByZXR1cm4gKHRoaXMucmVzb2x2ZWRBcGlLZXkgPSBvdXJTdG9yYWdlLmN1c3RvbUFwaUtleS50cmltKCkpO1xuICAgICAgfVxuICAgIH0gY2F0Y2gge31cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBhcGlLZXlQcm9wID0gZmluZE1vZHVsZVByb3BlcnR5PHN0cmluZz4oKGtleSwgdmFsdWUpID0+IGtleSA9PT0gXCJsYXN0Rm1BcGlLZXlcIiAmJiB0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIpO1xuICAgICAgaWYgKGFwaUtleVByb3A/LnZhbHVlKSB7XG4gICAgICAgIHJldHVybiAodGhpcy5yZXNvbHZlZEFwaUtleSA9IGFwaUtleVByb3AudmFsdWUpO1xuICAgICAgfVxuICAgIH0gY2F0Y2gge31cblxuICAgIHJldHVybiAodGhpcy5yZXNvbHZlZEFwaUtleSA9IEZBTExCQUNLX0FQSV9LRVkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEV4ZWN1dGVzIGEgR0VUIHJlcXVlc3QgdG8gTGFzdC5mbSBBUEkgMi4wXG4gICAqL1xuICBwcml2YXRlIHN0YXRpYyBhc3luYyByZXF1ZXN0PFQ+KG1ldGhvZDogc3RyaW5nLCBwYXJhbXM6IFJlY29yZDxzdHJpbmcsIGFueT4gPSB7fSk6IFByb21pc2U8VD4ge1xuICAgIGNvbnN0IGFwaUtleSA9IGF3YWl0IHRoaXMuZ2V0QXBpS2V5KCk7XG4gICAgY29uc3QgcXVlcnkgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHtcbiAgICAgIG1ldGhvZCxcbiAgICAgIGFwaV9rZXk6IGFwaUtleSxcbiAgICAgIGZvcm1hdDogXCJqc29uXCIsXG4gICAgICAuLi5wYXJhbXMsXG4gICAgfSk7XG5cbiAgICBjb25zdCB1cmwgPSBgJHtBUElfUk9PVH0/JHtxdWVyeS50b1N0cmluZygpfWA7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGZ0Y2guanNvbjxhbnk+KHVybCk7XG5cbiAgICBpZiAoZGF0YT8uZXJyb3IpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgTGFzdC5mbSBFcnJvciBbJHtkYXRhLmVycm9yfV06ICR7ZGF0YS5tZXNzYWdlIHx8IFwiVW5rbm93biBlcnJvclwifWApO1xuICAgIH1cblxuICAgIHJldHVybiBkYXRhIGFzIFQ7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGFzeW5jIGdldFVzZXJJbmZvKHVzZXJuYW1lOiBzdHJpbmcpOiBQcm9taXNlPExhc3RGbVVzZXI+IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCB0aGlzLnJlcXVlc3Q8TGFzdEZtVXNlckluZm9SZXNwb25zZT4oXCJ1c2VyLmdldEluZm9cIiwgeyB1c2VyOiB1c2VybmFtZSB9KTtcbiAgICBpZiAoIXJlcy51c2VyKSB0aHJvdyBuZXcgRXJyb3IoXCJObyB1c2VyIGZvdW5kIHdpdGggdXNlcm5hbWUgXCIgKyB1c2VybmFtZSk7XG4gICAgcmV0dXJuIHJlcy51c2VyO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBhc3luYyBnZXRUb3BUcmFja3MoXG4gICAgdXNlcm5hbWU6IHN0cmluZyxcbiAgICBwZXJpb2Q6IExhc3RGbVRpbWVQZXJpb2QgPSBcIjdkYXlcIixcbiAgICBsaW1pdDogbnVtYmVyID0gMjAsXG4gICAgcGFnZTogbnVtYmVyID0gMVxuICApOiBQcm9taXNlPHsgdHJhY2tzOiBMYXN0Rm1UcmFja1tdOyB0b3RhbDogbnVtYmVyIH0+IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCB0aGlzLnJlcXVlc3Q8TGFzdEZtVG9wVHJhY2tzUmVzcG9uc2U+KFwidXNlci5nZXRUb3BUcmFja3NcIiwge1xuICAgICAgdXNlcjogdXNlcm5hbWUsXG4gICAgICBwZXJpb2QsXG4gICAgICBsaW1pdCxcbiAgICAgIHBhZ2UsXG4gICAgfSk7XG4gICAgY29uc3QgdHJhY2tzID0gcmVzLnRvcHRyYWNrcz8udHJhY2sgPyAoQXJyYXkuaXNBcnJheShyZXMudG9wdHJhY2tzLnRyYWNrKSA/IHJlcy50b3B0cmFja3MudHJhY2sgOiBbcmVzLnRvcHRyYWNrcy50cmFja10pIDogW107XG4gICAgY29uc3QgdG90YWwgPSBwYXJzZUludChyZXMudG9wdHJhY2tzPy5bXCJAYXR0clwiXT8udG90YWwgfHwgYCR7dHJhY2tzLmxlbmd0aH1gLCAxMCk7XG4gICAgcmV0dXJuIHsgdHJhY2tzLCB0b3RhbCB9O1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBhc3luYyBnZXRUb3BBcnRpc3RzKFxuICAgIHVzZXJuYW1lOiBzdHJpbmcsXG4gICAgcGVyaW9kOiBMYXN0Rm1UaW1lUGVyaW9kID0gXCI3ZGF5XCIsXG4gICAgbGltaXQ6IG51bWJlciA9IDIwLFxuICAgIHBhZ2U6IG51bWJlciA9IDFcbiAgKTogUHJvbWlzZTx7IGFydGlzdHM6IExhc3RGbUFydGlzdFtdOyB0b3RhbDogbnVtYmVyIH0+IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCB0aGlzLnJlcXVlc3Q8TGFzdEZtVG9wQXJ0aXN0c1Jlc3BvbnNlPihcInVzZXIuZ2V0VG9wQXJ0aXN0c1wiLCB7XG4gICAgICB1c2VyOiB1c2VybmFtZSxcbiAgICAgIHBlcmlvZCxcbiAgICAgIGxpbWl0LFxuICAgICAgcGFnZSxcbiAgICB9KTtcbiAgICBjb25zdCBhcnRpc3RzID0gcmVzLnRvcGFydGlzdHM/LmFydGlzdCA/IChBcnJheS5pc0FycmF5KHJlcy50b3BhcnRpc3RzLmFydGlzdCkgPyByZXMudG9wYXJ0aXN0cy5hcnRpc3QgOiBbcmVzLnRvcGFydGlzdHMuYXJ0aXN0XSkgOiBbXTtcbiAgICBjb25zdCB0b3RhbCA9IHBhcnNlSW50KHJlcy50b3BhcnRpc3RzPy5bXCJAYXR0clwiXT8udG90YWwgfHwgYCR7YXJ0aXN0cy5sZW5ndGh9YCwgMTApO1xuICAgIHJldHVybiB7IGFydGlzdHMsIHRvdGFsIH07XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGFzeW5jIGdldFRvcEFsYnVtcyhcbiAgICB1c2VybmFtZTogc3RyaW5nLFxuICAgIHBlcmlvZDogTGFzdEZtVGltZVBlcmlvZCA9IFwiN2RheVwiLFxuICAgIGxpbWl0OiBudW1iZXIgPSAyMCxcbiAgICBwYWdlOiBudW1iZXIgPSAxXG4gICk6IFByb21pc2U8eyBhbGJ1bXM6IExhc3RGbUFsYnVtW107IHRvdGFsOiBudW1iZXIgfT4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IHRoaXMucmVxdWVzdDxMYXN0Rm1Ub3BBbGJ1bXNSZXNwb25zZT4oXCJ1c2VyLmdldFRvcEFsYnVtc1wiLCB7XG4gICAgICB1c2VyOiB1c2VybmFtZSxcbiAgICAgIHBlcmlvZCxcbiAgICAgIGxpbWl0LFxuICAgICAgcGFnZSxcbiAgICB9KTtcbiAgICBjb25zdCBhbGJ1bXMgPSByZXMudG9wYWxidW1zPy5hbGJ1bSA/IChBcnJheS5pc0FycmF5KHJlcy50b3BhbGJ1bXMuYWxidW0pID8gcmVzLnRvcGFsYnVtcy5hbGJ1bSA6IFtyZXMudG9wYWxidW1zLmFsYnVtXSkgOiBbXTtcbiAgICBjb25zdCB0b3RhbCA9IHBhcnNlSW50KHJlcy50b3BhbGJ1bXM/LltcIkBhdHRyXCJdPy50b3RhbCB8fCBgJHthbGJ1bXMubGVuZ3RofWAsIDEwKTtcbiAgICByZXR1cm4geyBhbGJ1bXMsIHRvdGFsIH07XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGFzeW5jIGdldFJlY2VudFRyYWNrcyhcbiAgICB1c2VybmFtZTogc3RyaW5nLFxuICAgIGxpbWl0OiBudW1iZXIgPSAyMCxcbiAgICBwYWdlOiBudW1iZXIgPSAxXG4gICk6IFByb21pc2U8eyB0cmFja3M6IExhc3RGbVJlY2VudFRyYWNrW107IHRvdGFsOiBudW1iZXIgfT4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IHRoaXMucmVxdWVzdDxMYXN0Rm1SZWNlbnRUcmFja3NSZXNwb25zZT4oXCJ1c2VyLmdldFJlY2VudFRyYWNrc1wiLCB7XG4gICAgICB1c2VyOiB1c2VybmFtZSxcbiAgICAgIGxpbWl0LFxuICAgICAgcGFnZSxcbiAgICAgIGV4dGVuZGVkOiAxLFxuICAgIH0pO1xuICAgIGNvbnN0IHRyYWNrcyA9IHJlcy5yZWNlbnR0cmFja3M/LnRyYWNrID8gKEFycmF5LmlzQXJyYXkocmVzLnJlY2VudHRyYWNrcy50cmFjaykgPyByZXMucmVjZW50dHJhY2tzLnRyYWNrIDogW3Jlcy5yZWNlbnR0cmFja3MudHJhY2tdKSA6IFtdO1xuICAgIGNvbnN0IHRvdGFsID0gcGFyc2VJbnQocmVzLnJlY2VudHRyYWNrcz8uW1wiQGF0dHJcIl0/LnRvdGFsIHx8IGAke3RyYWNrcy5sZW5ndGh9YCwgMTApO1xuICAgIHJldHVybiB7IHRyYWNrcywgdG90YWwgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgdGhlIHVzZXIncyBsb3ZlZCB0cmFja3MgZnJvbSBMYXN0LmZtXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGFzeW5jIGdldExvdmVkVHJhY2tzKFxuICAgIHVzZXJuYW1lOiBzdHJpbmcsXG4gICAgbGltaXQ6IG51bWJlciA9IDUwLFxuICAgIHBhZ2U6IG51bWJlciA9IDFcbiAgKTogUHJvbWlzZTx7IHRyYWNrczogTGFzdEZtTG92ZWRUcmFja1tdOyB0b3RhbDogbnVtYmVyIH0+IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCB0aGlzLnJlcXVlc3Q8eyBsb3ZlZHRyYWNrcz86IHsgdHJhY2s/OiBMYXN0Rm1Mb3ZlZFRyYWNrW107IFwiQGF0dHJcIj86IHsgdG90YWw/OiBzdHJpbmcgfSB9IH0+KFxuICAgICAgXCJ1c2VyLmdldExvdmVkVHJhY2tzXCIsXG4gICAgICB7XG4gICAgICAgIHVzZXI6IHVzZXJuYW1lLFxuICAgICAgICBsaW1pdCxcbiAgICAgICAgcGFnZSxcbiAgICAgIH1cbiAgICApO1xuICAgIGNvbnN0IHRyYWNrcyA9IHJlcy5sb3ZlZHRyYWNrcz8udHJhY2sgPyAoQXJyYXkuaXNBcnJheShyZXMubG92ZWR0cmFja3MudHJhY2spID8gcmVzLmxvdmVkdHJhY2tzLnRyYWNrIDogW3Jlcy5sb3ZlZHRyYWNrcy50cmFja10pIDogW107XG4gICAgY29uc3QgdG90YWwgPSBwYXJzZUludChyZXMubG92ZWR0cmFja3M/LltcIkBhdHRyXCJdPy50b3RhbCB8fCBgJHt0cmFja3MubGVuZ3RofWAsIDEwKTtcbiAgICByZXR1cm4geyB0cmFja3MsIHRvdGFsIH07XG4gIH1cblxuICAvKipcbiAgICogUmV0cmlldmVzIGFsbCBsb3ZlZCB0cmFja3MgYWNyb3NzIHBhZ2luYXRpb24gKHVwIHRvIG1heENvdW50KVxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBhc3luYyBnZXRBbGxMb3ZlZFRyYWNrcyh1c2VybmFtZTogc3RyaW5nLCBtYXhDb3VudCA9IDEwMDApOiBQcm9taXNlPExhc3RGbUxvdmVkVHJhY2tbXT4ge1xuICAgIGNvbnN0IGFsbFRyYWNrczogTGFzdEZtTG92ZWRUcmFja1tdID0gW107XG4gICAgbGV0IHBhZ2UgPSAxO1xuICAgIGNvbnN0IGxpbWl0ID0gNTA7XG5cbiAgICB3aGlsZSAoYWxsVHJhY2tzLmxlbmd0aCA8IG1heENvdW50KSB7XG4gICAgICBjb25zdCB7IHRyYWNrcywgdG90YWwgfSA9IGF3YWl0IHRoaXMuZ2V0TG92ZWRUcmFja3ModXNlcm5hbWUsIGxpbWl0LCBwYWdlKTtcbiAgICAgIGlmICghdHJhY2tzLmxlbmd0aCkgYnJlYWs7XG5cbiAgICAgIGFsbFRyYWNrcy5wdXNoKC4uLnRyYWNrcyk7XG4gICAgICBwYWdlKys7XG5cbiAgICAgIGlmIChhbGxUcmFja3MubGVuZ3RoID49IHRvdGFsKSBicmVhaztcbiAgICB9XG5cbiAgICByZXR1cm4gYWxsVHJhY2tzO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlcyB0aGUgdXNlcidzIHRvdGFsIHNjcm9iYmxlIGNvdW50IGZvciBhIHNwZWNpZmljIGFydGlzdFxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBhc3luYyBnZXRBcnRpc3RQbGF5Y291bnQoYXJ0aXN0OiBzdHJpbmcsIHVzZXJuYW1lPzogc3RyaW5nKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICBpZiAoIWFydGlzdCB8fCAhYXJ0aXN0LnRyaW0oKSkgcmV0dXJuIDA7XG4gICAgY29uc3QgdXNlciA9IHVzZXJuYW1lIHx8IChhd2FpdCB0aGlzLmdldEFjdGl2ZVVzZXJuYW1lKCkpO1xuICAgIGlmICghdXNlcikgcmV0dXJuIDA7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgdGhpcy5yZXF1ZXN0PHsgYXJ0aXN0PzogeyBzdGF0cz86IHsgdXNlcnBsYXljb3VudD86IHN0cmluZyB8IG51bWJlciB9IH0gfT4oXCJhcnRpc3QuZ2V0SW5mb1wiLCB7XG4gICAgICAgIGFydGlzdDogYXJ0aXN0LnRyaW0oKSxcbiAgICAgICAgdXNlcm5hbWU6IHVzZXIsXG4gICAgICAgIGF1dG9jb3JyZWN0OiAxLFxuICAgICAgfSk7XG4gICAgICBjb25zdCBjb3VudCA9IHJlcy5hcnRpc3Q/LnN0YXRzPy51c2VycGxheWNvdW50O1xuICAgICAgcmV0dXJuIHR5cGVvZiBjb3VudCA9PT0gXCJzdHJpbmdcIiA/IHBhcnNlSW50KGNvdW50LCAxMCkgfHwgMCA6IGNvdW50IHx8IDA7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLndhcm4oXCJbTGFzdEZNU3RhdHNdIEZhaWxlZCB0byBnZXQgYXJ0aXN0IHBsYXljb3VudDpcIiwgZXJyKTtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgdGhlIHVzZXIncyB0b3RhbCBzY3JvYmJsZSBjb3VudCBmb3IgYSBzcGVjaWZpYyBhbGJ1bVxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBhc3luYyBnZXRBbGJ1bVBsYXljb3VudChhcnRpc3Q6IHN0cmluZywgYWxidW06IHN0cmluZywgdXNlcm5hbWU/OiBzdHJpbmcpOiBQcm9taXNlPG51bWJlcj4ge1xuICAgIGlmICghYXJ0aXN0IHx8ICFhbGJ1bSkgcmV0dXJuIDA7XG4gICAgY29uc3QgdXNlciA9IHVzZXJuYW1lIHx8IChhd2FpdCB0aGlzLmdldEFjdGl2ZVVzZXJuYW1lKCkpO1xuICAgIGlmICghdXNlcikgcmV0dXJuIDA7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgdGhpcy5yZXF1ZXN0PHsgYWxidW0/OiB7IHVzZXJwbGF5Y291bnQ/OiBzdHJpbmcgfCBudW1iZXIgfSB9PihcImFsYnVtLmdldEluZm9cIiwge1xuICAgICAgICBhcnRpc3Q6IGFydGlzdC50cmltKCksXG4gICAgICAgIGFsYnVtOiBhbGJ1bS50cmltKCksXG4gICAgICAgIHVzZXJuYW1lOiB1c2VyLFxuICAgICAgICBhdXRvY29ycmVjdDogMSxcbiAgICAgIH0pO1xuICAgICAgY29uc3QgY291bnQgPSByZXMuYWxidW0/LnVzZXJwbGF5Y291bnQ7XG4gICAgICByZXR1cm4gdHlwZW9mIGNvdW50ID09PSBcInN0cmluZ1wiID8gcGFyc2VJbnQoY291bnQsIDEwKSB8fCAwIDogY291bnQgfHwgMDtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUud2FybihcIltMYXN0Rk1TdGF0c10gRmFpbGVkIHRvIGdldCBhbGJ1bSBwbGF5Y291bnQ6XCIsIGVycik7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSGVscGVyIHRvIHBpY2sgdGhlIGJlc3QgYXZhaWxhYmxlIGltYWdlIFVSTCBmcm9tIExhc3QuZm0gaW1hZ2UgYXJyYXlcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgZ2V0SW1hZ2VVcmwoaW1hZ2VzPzogeyBcIiN0ZXh0XCI6IHN0cmluZzsgc2l6ZTogc3RyaW5nIH1bXSk6IHN0cmluZyB7XG4gICAgaWYgKCFpbWFnZXMgfHwgaW1hZ2VzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIFwiXCI7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBbXCJtZWdhXCIsIFwiZXh0cmFsYXJnZVwiLCBcImxhcmdlXCIsIFwibWVkaXVtXCIsIFwic21hbGxcIl07XG4gICAgZm9yIChjb25zdCBzaXplIG9mIHByaW9yaXR5KSB7XG4gICAgICBjb25zdCBtYXRjaCA9IGltYWdlcy5maW5kKChpbWcpID0+IGltZy5zaXplID09PSBzaXplICYmIGltZ1tcIiN0ZXh0XCJdKTtcbiAgICAgIGlmIChtYXRjaCAmJiBtYXRjaFtcIiN0ZXh0XCJdLnRyaW0oKSkgcmV0dXJuIG1hdGNoW1wiI3RleHRcIl07XG4gICAgfVxuICAgIGNvbnN0IGFueUltZyA9IGltYWdlcy5maW5kKChpbWcpID0+IGltZ1tcIiN0ZXh0XCJdICYmIGltZ1tcIiN0ZXh0XCJdLnRyaW0oKSk7XG4gICAgcmV0dXJuIGFueUltZyA/IGFueUltZ1tcIiN0ZXh0XCJdIDogXCJcIjtcbiAgfVxufVxuIiwgImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFJlYWN0aXZlU3RvcmUgfSBmcm9tIFwiQGx1bmEvY29yZVwiO1xuaW1wb3J0IHtcbiAgTHVuYUJ1dHRvblNldHRpbmcsXG4gIEx1bmFTZWxlY3RJdGVtLFxuICBMdW5hU2VsZWN0U2V0dGluZyxcbiAgTHVuYVNldHRpbmdzLFxuICBMdW5hVGV4dFNldHRpbmcsXG59IGZyb20gXCJAbHVuYS91aVwiO1xuaW1wb3J0IHsgTGFzdEZtQXBpIH0gZnJvbSBcIi4uL2FwaS9sYXN0Zm1cIjtcbmltcG9ydCB7IExhc3RGbVRpbWVQZXJpb2QgfSBmcm9tIFwiLi4vYXBpL3R5cGVzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGFzdEZNU3RhdHNTZXR0aW5ncyB7XG4gIHVzZXJuYW1lOiBzdHJpbmc7XG4gIGRlZmF1bHRQZXJpb2Q6IExhc3RGbVRpbWVQZXJpb2Q7XG4gIGl0ZW1zTGltaXQ6IG51bWJlcjtcbiAgY3VzdG9tQXBpS2V5OiBzdHJpbmc7XG4gIGVuYWJsZVNpZGViYXJCdXR0b246IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBzdGF0c1N0b3JhZ2UgPSBhd2FpdCBSZWFjdGl2ZVN0b3JlLmdldFBsdWdpblN0b3JhZ2U8TGFzdEZNU3RhdHNTZXR0aW5ncz4oXG4gIFwiTGFzdEZNU3RhdHNcIixcbiAge1xuICAgIHVzZXJuYW1lOiBcIlwiLFxuICAgIGRlZmF1bHRQZXJpb2Q6IFwiN2RheVwiLFxuICAgIGl0ZW1zTGltaXQ6IDIwLFxuICAgIGN1c3RvbUFwaUtleTogXCJcIixcbiAgICBlbmFibGVTaWRlYmFyQnV0dG9uOiB0cnVlLFxuICB9XG4pO1xuXG5leHBvcnQgY29uc3QgU2V0dGluZ3M6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IFJlYWN0LnVzZVN0YXRlKHN0YXRzU3RvcmFnZS51c2VybmFtZSk7XG4gIGNvbnN0IFtkZWZhdWx0UGVyaW9kLCBzZXREZWZhdWx0UGVyaW9kXSA9IFJlYWN0LnVzZVN0YXRlPExhc3RGbVRpbWVQZXJpb2Q+KHN0YXRzU3RvcmFnZS5kZWZhdWx0UGVyaW9kKTtcbiAgY29uc3QgW2l0ZW1zTGltaXQsIHNldEl0ZW1zTGltaXRdID0gUmVhY3QudXNlU3RhdGUoc3RhdHNTdG9yYWdlLml0ZW1zTGltaXQpO1xuICBjb25zdCBbY3VzdG9tQXBpS2V5LCBzZXRDdXN0b21BcGlLZXldID0gUmVhY3QudXNlU3RhdGUoc3RhdHNTdG9yYWdlLmN1c3RvbUFwaUtleSk7XG5cbiAgY29uc3QgaGFuZGxlQXV0b0RldGVjdCA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBkZXRlY3RlZCA9IGF3YWl0IExhc3RGbUFwaS5nZXRBY3RpdmVVc2VybmFtZSgpO1xuICAgIGlmIChkZXRlY3RlZCkge1xuICAgICAgc2V0VXNlcm5hbWUoKHN0YXRzU3RvcmFnZS51c2VybmFtZSA9IGRldGVjdGVkKSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxMdW5hU2V0dGluZ3MgdGl0bGU9XCJMYXN0LmZtIFVzZXIgUHJvZmlsZVwiIGRlc2M9XCJDb25maWd1cmUgeW91ciBMYXN0LmZtIGFjY291bnQgZGV0YWlscyB0byBpbXBvcnQgc3RhdHNcIj5cbiAgICAgICAgPEx1bmFUZXh0U2V0dGluZ1xuICAgICAgICAgIHRpdGxlPVwiTGFzdC5mbSBVc2VybmFtZVwiXG4gICAgICAgICAgZGVzYz1cIllvdXIgcHVibGljIExhc3QuZm0gcHJvZmlsZSB1c2VybmFtZVwiXG4gICAgICAgICAgdmFsdWU9e3VzZXJuYW1lfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZS5nLiBSSiwgbXVzaWNmYW45OVwiXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICBzZXRVc2VybmFtZSgoc3RhdHNTdG9yYWdlLnVzZXJuYW1lID0gZS50YXJnZXQudmFsdWUudHJpbSgpKSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cblxuICAgICAgICA8THVuYUJ1dHRvblNldHRpbmdcbiAgICAgICAgICB0aXRsZT1cIkF1dG8tZGV0ZWN0IFVzZXJuYW1lXCJcbiAgICAgICAgICBkZXNjPVwiRGV0ZWN0IHVzZXJuYW1lIGF1dG9tYXRpY2FsbHkgZnJvbSBUaWRhTHVuYSBMYXN0Rk0gc2Vzc2lvblwiXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlQXV0b0RldGVjdH1cbiAgICAgICAgPlxuICAgICAgICAgIEF1dG8tZGV0ZWN0XG4gICAgICAgIDwvTHVuYUJ1dHRvblNldHRpbmc+XG4gICAgICA8L0x1bmFTZXR0aW5ncz5cblxuICAgICAgPGJyIC8+XG5cbiAgICAgIDxMdW5hU2V0dGluZ3MgdGl0bGU9XCJEaXNwbGF5ICYgU3RhdHMgT3B0aW9uc1wiIGRlc2M9XCJEZWZhdWx0IHRpbWUgcGVyaW9kcyBhbmQgdmlldyBwcmVmZXJlbmNlc1wiPlxuICAgICAgICA8THVuYVNlbGVjdFNldHRpbmc8TGFzdEZtVGltZVBlcmlvZD5cbiAgICAgICAgICB0aXRsZT1cIkRlZmF1bHQgVGltZWZyYW1lXCJcbiAgICAgICAgICBkZXNjPVwiVGhlIGRlZmF1bHQgdGltZSBwZXJpb2QgbG9hZGVkIHdoZW4gb3BlbmluZyB0aGUgU3RhdHMgcGFnZVwiXG4gICAgICAgICAgdmFsdWU9e2RlZmF1bHRQZXJpb2R9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2YWwgPSBlLnRhcmdldC52YWx1ZSBhcyBMYXN0Rm1UaW1lUGVyaW9kO1xuICAgICAgICAgICAgc2V0RGVmYXVsdFBlcmlvZCgoc3RhdHNTdG9yYWdlLmRlZmF1bHRQZXJpb2QgPSB2YWwpKTtcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPEx1bmFTZWxlY3RJdGVtIHZhbHVlPVwiN2RheVwiPkxhc3QgNyBEYXlzPC9MdW5hU2VsZWN0SXRlbT5cbiAgICAgICAgICA8THVuYVNlbGVjdEl0ZW0gdmFsdWU9XCIxbW9udGhcIj5MYXN0IDMwIERheXMgKDEgTW9udGgpPC9MdW5hU2VsZWN0SXRlbT5cbiAgICAgICAgICA8THVuYVNlbGVjdEl0ZW0gdmFsdWU9XCIzbW9udGhcIj5MYXN0IDkwIERheXMgKDMgTW9udGhzKTwvTHVuYVNlbGVjdEl0ZW0+XG4gICAgICAgICAgPEx1bmFTZWxlY3RJdGVtIHZhbHVlPVwiNm1vbnRoXCI+TGFzdCAxODAgRGF5cyAoNiBNb250aHMpPC9MdW5hU2VsZWN0SXRlbT5cbiAgICAgICAgICA8THVuYVNlbGVjdEl0ZW0gdmFsdWU9XCIxMm1vbnRoXCI+TGFzdCAzNjUgRGF5cyAoMSBZZWFyKTwvTHVuYVNlbGVjdEl0ZW0+XG4gICAgICAgICAgPEx1bmFTZWxlY3RJdGVtIHZhbHVlPVwib3ZlcmFsbFwiPkFsbCBUaW1lPC9MdW5hU2VsZWN0SXRlbT5cbiAgICAgICAgPC9MdW5hU2VsZWN0U2V0dGluZz5cblxuICAgICAgICA8THVuYVNlbGVjdFNldHRpbmc8bnVtYmVyPlxuICAgICAgICAgIHRpdGxlPVwiSXRlbXMgUGVyIFBhZ2VcIlxuICAgICAgICAgIGRlc2M9XCJOdW1iZXIgb2YgdHJhY2tzLCBhcnRpc3RzLCBhbmQgYWxidW1zIHRvIGRpc3BsYXkgcGVyIGNhdGVnb3J5XCJcbiAgICAgICAgICB2YWx1ZT17aXRlbXNMaW1pdH1cbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZhbCA9IE51bWJlcihlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICBzZXRJdGVtc0xpbWl0KChzdGF0c1N0b3JhZ2UuaXRlbXNMaW1pdCA9IHZhbCkpO1xuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8THVuYVNlbGVjdEl0ZW0gdmFsdWU9ezEwfT4xMCBpdGVtczwvTHVuYVNlbGVjdEl0ZW0+XG4gICAgICAgICAgPEx1bmFTZWxlY3RJdGVtIHZhbHVlPXsyMH0+MjAgaXRlbXM8L0x1bmFTZWxlY3RJdGVtPlxuICAgICAgICAgIDxMdW5hU2VsZWN0SXRlbSB2YWx1ZT17NTB9PjUwIGl0ZW1zPC9MdW5hU2VsZWN0SXRlbT5cbiAgICAgICAgICA8THVuYVNlbGVjdEl0ZW0gdmFsdWU9ezEwMH0+MTAwIGl0ZW1zPC9MdW5hU2VsZWN0SXRlbT5cbiAgICAgICAgPC9MdW5hU2VsZWN0U2V0dGluZz5cbiAgICAgIDwvTHVuYVNldHRpbmdzPlxuXG4gICAgICA8YnIgLz5cblxuICAgICAgPEx1bmFTZXR0aW5ncyB0aXRsZT1cIkFkdmFuY2VkIEFQSSBTZXR0aW5nc1wiIGRlc2M9XCJPcHRpb25hbCBjdXN0b20gTGFzdC5mbSBBUEkgS2V5XCI+XG4gICAgICAgIDxMdW5hVGV4dFNldHRpbmdcbiAgICAgICAgICB0aXRsZT1cIkN1c3RvbSBBUEkgS2V5XCJcbiAgICAgICAgICBkZXNjPVwiTGVhdmUgYmxhbmsgdG8gdXNlIFRpZGFsJ3MgYnVpbHQtaW4gTGFzdC5mbSBBUEkga2V5XCJcbiAgICAgICAgICB2YWx1ZT17Y3VzdG9tQXBpS2V5fVxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiT3B0aW9uYWwgMzItY2hhcmFjdGVyIEFQSSBrZXlcIlxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgc2V0Q3VzdG9tQXBpS2V5KChzdGF0c1N0b3JhZ2UuY3VzdG9tQXBpS2V5ID0gZS50YXJnZXQudmFsdWUudHJpbSgpKSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvTHVuYVNldHRpbmdzPlxuICAgIDwvPlxuICApO1xufTtcbiIsICJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZ2V0QXJ0d29ya0RvbWluYW50Q29sb3IsIGdldFRyYWNrQXJ0d29yayB9IGZyb20gXCIuLi9hcGkvYXJ0d29ya1wiO1xuaW1wb3J0IHsgTGFzdEZtQXBpIH0gZnJvbSBcIi4uL2FwaS9sYXN0Zm1cIjtcbmltcG9ydCB7IGdldEFsYnVtTmFtZSwgZ2V0QXJ0aXN0TmFtZSwgZ2V0VHJhY2tOYW1lLCBMYXN0Rm1SZWNlbnRUcmFjayB9IGZyb20gXCIuLi9hcGkvdHlwZXNcIjtcbmltcG9ydCB7IG5hdmlnYXRlVG9BbGJ1bSwgbmF2aWdhdGVUb0FydGlzdCwgbmF2aWdhdGVUb1RyYWNrIH0gZnJvbSBcIi4uL25hdmlnYXRpb24vdGlkYWxOYXZpZ2F0ZVwiO1xuaW1wb3J0IHsgQXJ0d29ya0ltYWdlIH0gZnJvbSBcIi4vQXJ0d29ya0ltYWdlXCI7XG5cbmludGVyZmFjZSBSZWNlbnRUcmFja3NUYWJQcm9wcyB7XG4gIHRyYWNrczogTGFzdEZtUmVjZW50VHJhY2tbXTtcbiAgbG9hZGluZzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IFJlY2VudFRyYWNrc1RhYjogUmVhY3QuRkM8UmVjZW50VHJhY2tzVGFiUHJvcHM+ID0gKHsgdHJhY2tzLCBsb2FkaW5nIH0pID0+IHtcbiAgY29uc3QgW2RvbWluYW50Q29sb3IsIHNldERvbWluYW50Q29sb3JdID0gdXNlU3RhdGU8c3RyaW5nPihcIjIwMCwgMTgyLCAyNTVcIik7XG5cbiAgY29uc3QgZm9ybWF0VGltZSA9ICh1dHM/OiBzdHJpbmcpID0+IHtcbiAgICBpZiAoIXV0cykgcmV0dXJuIFwiUmVjZW50bHlcIjtcbiAgICBjb25zdCB0aW1lc3RhbXAgPSBwYXJzZUludCh1dHMsIDEwKSAqIDEwMDA7XG4gICAgY29uc3QgZGlmZiA9IERhdGUubm93KCkgLSB0aW1lc3RhbXA7XG4gICAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3IoZGlmZiAvIDYwMDAwKTtcbiAgICBpZiAobWludXRlcyA8IDEpIHJldHVybiBcIkp1c3Qgbm93XCI7XG4gICAgaWYgKG1pbnV0ZXMgPCA2MCkgcmV0dXJuIGAke21pbnV0ZXN9bSBhZ29gO1xuICAgIGNvbnN0IGhvdXJzID0gTWF0aC5mbG9vcihtaW51dGVzIC8gNjApO1xuICAgIGlmIChob3VycyA8IDI0KSByZXR1cm4gYCR7aG91cnN9aCBhZ29gO1xuICAgIGNvbnN0IGRheXMgPSBNYXRoLmZsb29yKGhvdXJzIC8gMjQpO1xuICAgIGlmIChkYXlzIDwgNykgcmV0dXJuIGAke2RheXN9ZCBhZ29gO1xuICAgIHJldHVybiBuZXcgRGF0ZSh0aW1lc3RhbXApLnRvTG9jYWxlRGF0ZVN0cmluZyh1bmRlZmluZWQsIHtcbiAgICAgIG1vbnRoOiBcInNob3J0XCIsXG4gICAgICBkYXk6IFwibnVtZXJpY1wiLFxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IG5vd1BsYXlpbmdUcmFjayA9IHRyYWNrcy5maW5kKCh0KSA9PiB0W1wiQGF0dHJcIl0/Lm5vd3BsYXlpbmcgPT09IFwidHJ1ZVwiKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghbm93UGxheWluZ1RyYWNrKSByZXR1cm47XG4gICAgbGV0IGlzQ2FuY2VsbGVkID0gZmFsc2U7XG4gICAgY29uc3QgdGl0bGUgPSBnZXRUcmFja05hbWUobm93UGxheWluZ1RyYWNrKTtcbiAgICBjb25zdCBhcnRpc3QgPSBnZXRBcnRpc3ROYW1lKG5vd1BsYXlpbmdUcmFjay5hcnRpc3QpO1xuXG4gICAgKGFzeW5jICgpID0+IHtcbiAgICAgIGxldCBjb3ZlciA9IGF3YWl0IGdldFRyYWNrQXJ0d29yayh0aXRsZSwgYXJ0aXN0KTtcbiAgICAgIGlmICghY292ZXIpIHtcbiAgICAgICAgY292ZXIgPSBMYXN0Rm1BcGkuZ2V0SW1hZ2VVcmwobm93UGxheWluZ1RyYWNrLmltYWdlKTtcbiAgICAgIH1cbiAgICAgIGlmIChjb3ZlciAmJiAhaXNDYW5jZWxsZWQpIHtcbiAgICAgICAgY29uc3QgcmdiID0gYXdhaXQgZ2V0QXJ0d29ya0RvbWluYW50Q29sb3IoY292ZXIpO1xuICAgICAgICBpZiAoIWlzQ2FuY2VsbGVkICYmIHJnYikge1xuICAgICAgICAgIHNldERvbWluYW50Q29sb3IocmdiKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pKCk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgaXNDYW5jZWxsZWQgPSB0cnVlO1xuICAgIH07XG4gIH0sIFtub3dQbGF5aW5nVHJhY2s/Lm5hbWUsIG5vd1BsYXlpbmdUcmFjaz8uYXJ0aXN0XSk7XG5cbiAgaWYgKGxvYWRpbmcgJiYgIXRyYWNrcy5sZW5ndGgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZm0tdHJhY2stbGlzdFwiPlxuICAgICAgICB7QXJyYXkuZnJvbSh7IGxlbmd0aDogOCB9KS5tYXAoKF8sIGkpID0+IChcbiAgICAgICAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPVwibGZtLXRyYWNrLXJvdyBsZm0tc2tlbGV0b25cIiBzdHlsZT17eyBoZWlnaHQ6IFwiNjRweFwiIH19IC8+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIGlmICghdHJhY2tzLmxlbmd0aCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxmbS1nbGFzcy1jYXJkIGxmbS1lbXB0eS1zdGF0ZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxmbS1lbXB0eS10aXRsZVwiPk5vIFJlY2VudCBTY3JvYmJsZXM8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZm0tZW1wdHktZGVzY1wiPlN0YXJ0IHBsYXlpbmcgbXVzaWMgdG8gc2VlIHlvdXIgbGl2ZSBzY3JvYmJsZXMgaGVyZSE8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibGZtLXRyYWNrLWxpc3RcIj5cbiAgICAgIHt0cmFja3MubWFwKCh0cmFjaywgaWR4KSA9PiB7XG4gICAgICAgIGNvbnN0IGlzTm93UGxheWluZyA9IHRyYWNrW1wiQGF0dHJcIl0/Lm5vd3BsYXlpbmcgPT09IFwidHJ1ZVwiO1xuICAgICAgICBjb25zdCBpbWdVcmwgPSBMYXN0Rm1BcGkuZ2V0SW1hZ2VVcmwodHJhY2suaW1hZ2UpO1xuICAgICAgICBjb25zdCB0aW1lU3RyID0gaXNOb3dQbGF5aW5nID8gXCJTY3JvYmJsaW5nIG5vd1wiIDogZm9ybWF0VGltZSh0cmFjay5kYXRlPy51dHMpO1xuICAgICAgICBjb25zdCB0cmFja1RpdGxlID0gZ2V0VHJhY2tOYW1lKHRyYWNrKTtcbiAgICAgICAgY29uc3QgYXJ0aXN0TmFtZSA9IGdldEFydGlzdE5hbWUodHJhY2suYXJ0aXN0KTtcbiAgICAgICAgY29uc3QgYWxidW1OYW1lID0gZ2V0QWxidW1OYW1lKHRyYWNrLmFsYnVtKTtcblxuICAgICAgICBjb25zdCBjdXN0b21TdHlsZTogUmVhY3QuQ1NTUHJvcGVydGllcyB8IHVuZGVmaW5lZCA9XG4gICAgICAgICAgaXNOb3dQbGF5aW5nICYmIGRvbWluYW50Q29sb3JcbiAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKCR7ZG9taW5hbnRDb2xvcn0sIDAuMjIpIDAlLCByZ2JhKCR7ZG9taW5hbnRDb2xvcn0sIDAuMDgpIDEwMCUpYCxcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogYHJnYmEoJHtkb21pbmFudENvbG9yfSwgMC41KWAsXG4gICAgICAgICAgICAgICAgYm94U2hhZG93OiBgMCA4cHggMzJweCByZ2JhKCR7ZG9taW5hbnRDb2xvcn0sIDAuMjIpLCBpbnNldCAwIDFweCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KWAsXG4gICAgICAgICAgICAgICAgYmFja2Ryb3BGaWx0ZXI6IFwiYmx1cigyMHB4KVwiLFxuICAgICAgICAgICAgICAgIFdlYmtpdEJhY2tkcm9wRmlsdGVyOiBcImJsdXIoMjBweClcIixcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgOiB1bmRlZmluZWQ7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBrZXk9e2Ake3RyYWNrVGl0bGV9LSR7aWR4fWB9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2BsZm0tdHJhY2stcm93ICR7aXNOb3dQbGF5aW5nID8gXCJsZm0tbm93LXBsYXlpbmctcm93XCIgOiBcIlwifWB9XG4gICAgICAgICAgICBzdHlsZT17Y3VzdG9tU3R5bGV9XG4gICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gbmF2aWdhdGVUb1RyYWNrKHRyYWNrVGl0bGUsIGFydGlzdE5hbWUsIGUpfVxuICAgICAgICAgICAgdGl0bGU9e2BQbGF5IFwiJHt0cmFja1RpdGxlfVwiIG9uIFRJREFMYH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxmbS10cmFjay1sZWZ0XCI+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsZm0tY2xpY2thYmxlLWltYWdlXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gbmF2aWdhdGVUb1RyYWNrKHRyYWNrVGl0bGUsIGFydGlzdE5hbWUsIGUpfVxuICAgICAgICAgICAgICAgIHRpdGxlPXtgVmlldyBcIiR7dHJhY2tUaXRsZX1cIiBvbiBUSURBTGB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8QXJ0d29ya0ltYWdlXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidHJhY2tcIlxuICAgICAgICAgICAgICAgICAgbmFtZT17dHJhY2tUaXRsZX1cbiAgICAgICAgICAgICAgICAgIGFydGlzdE5hbWU9e2FydGlzdE5hbWV9XG4gICAgICAgICAgICAgICAgICBpbml0aWFsVXJsPXtpbWdVcmx9XG4gICAgICAgICAgICAgICAgICBhbHQ9e3RyYWNrVGl0bGV9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsZm0tdHJhY2staW1hZ2VcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGZtLXRyYWNrLWluZm9cIj5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsZm0tdHJhY2stdGl0bGUgbGZtLWNsaWNrYWJsZS10ZXh0XCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBuYXZpZ2F0ZVRvVHJhY2sodHJhY2tUaXRsZSwgYXJ0aXN0TmFtZSwgZSl9XG4gICAgICAgICAgICAgICAgICB0aXRsZT17YFZpZXcgXCIke3RyYWNrVGl0bGV9XCIgb24gVElEQUxgfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHt0cmFja1RpdGxlfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGZtLXRyYWNrLWFydGlzdFwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGZtLWNsaWNrYWJsZS10ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IG5hdmlnYXRlVG9BcnRpc3QoYXJ0aXN0TmFtZSwgZSl9XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXtgVmlldyBhcnRpc3QgXCIke2FydGlzdE5hbWV9XCIgb24gVElEQUxgfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7YXJ0aXN0TmFtZX1cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIHthbGJ1bU5hbWUgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IG1hcmdpbjogXCIwIDZweFwiLCBvcGFjaXR5OiAwLjUgfX0+LTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGZtLWNsaWNrYWJsZS10ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBuYXZpZ2F0ZVRvQWxidW0oYWxidW1OYW1lLCBhcnRpc3ROYW1lLCBlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtgVmlldyBhbGJ1bSBcIiR7YWxidW1OYW1lfVwiIG9uIFRJREFMYH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG9wYWNpdHk6IDAuOCB9fVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHthbGJ1bU5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGZtLXRyYWNrLXJpZ2h0XCI+XG4gICAgICAgICAgICAgIHtpc05vd1BsYXlpbmcgPyAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZm0tc2Nyb2JibGluZy1pbmRpY2F0b3JcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGZtLXNwaW5uaW5nLWNpcmNsZVwiXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyVG9wQ29sb3I6IGByZ2IoJHtkb21pbmFudENvbG9yfSlgLFxuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJpZ2h0Q29sb3I6IGByZ2JhKCR7ZG9taW5hbnRDb2xvcn0sIDAuMylgLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGByZ2IoJHtkb21pbmFudENvbG9yfSlgLFxuICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjEzcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA2MDAsXG4gICAgICAgICAgICAgICAgICAgICAgbGV0dGVyU3BhY2luZzogXCIwLjAyZW1cIixcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgU2Nyb2JibGluZ1xuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGZtLXRyYWNrLXRpbWVcIj57dGltZVN0cn08L2Rpdj5cbiAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGZtLXBsYXktYnRuXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gbmF2aWdhdGVUb1RyYWNrKHRyYWNrVGl0bGUsIGFydGlzdE5hbWUsIGUpfVxuICAgICAgICAgICAgICAgIHRpdGxlPXtgUGxheSBcIiR7dHJhY2tUaXRsZX1cIiBvbiBUSURBTGB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIiBmaWxsPVwiY3VycmVudENvbG9yXCI+XG4gICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTggNXYxNGwxMS03elwiIC8+XG4gICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9KX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iLCAiaW1wb3J0IHsgZnRjaCB9IGZyb20gXCJAbHVuYS9jb3JlXCI7XG5pbXBvcnQgeyBUaWRhbEFwaSB9IGZyb20gXCJAbHVuYS9saWJcIjtcbmltcG9ydCB7IHNldENhY2hlZEFsYnVtSWQsIHNldENhY2hlZEFydGlzdElkLCBzZXRDYWNoZWRUcmFja0lkIH0gZnJvbSBcIi4uL25hdmlnYXRpb24vdGlkYWxOYXZpZ2F0ZVwiO1xuXG4vLyBJbi1tZW1vcnkgY2FjaGUgZm9yIHJlc29sdmVkIGFydHdvcmsgVVJMcyBhbmQgZXh0cmFjdGVkIGNvbG9yc1xuY29uc3QgYXJ0d29ya0NhY2hlOiBSZWNvcmQ8c3RyaW5nLCBQcm9taXNlPHN0cmluZz4+ID0ge307XG5jb25zdCByZXNvbHZlZENhY2hlOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge307XG5jb25zdCBjb2xvckNhY2hlOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge307XG5cbi8vIEZpbHRlciBvdXQgTGFzdC5mbSdzIGRlZmF1bHQgcGxhY2Vob2xkZXIgaW1hZ2VzXG5jb25zdCBMQVNURk1fUExBQ0VIT0xERVJTID0gW1xuICBcIjJhOTZjYmQ4YjQ2ZTQ0MmZjNDFjMmI4NmI4MjE1NjJmXCIsXG4gIFwiYzY3ZDc3YjQ5NDYzYzBmNDIzNmM1Nzk2MzI4YTZiNzhcIixcbiAgXCI0MTI4YTZlYjI5Zjk0OTQzYzlkMjA2YzA4ZTYyNTkwNFwiLFxuXTtcblxuZXhwb3J0IGNvbnN0IGlzUGxhY2Vob2xkZXJVcmwgPSAodXJsPzogc3RyaW5nKTogYm9vbGVhbiA9PiB7XG4gIGlmICghdXJsIHx8ICF1cmwudHJpbSgpKSByZXR1cm4gdHJ1ZTtcbiAgcmV0dXJuIExBU1RGTV9QTEFDRUhPTERFUlMuc29tZSgocGgpID0+IHVybC5pbmNsdWRlcyhwaCkpO1xufTtcblxuLyoqXG4gKiBFeHRyYWN0cyB0aGUgbW9zdCB2aWJyYW50IFJHQiBjb2xvciBzdHJpbmcgKGUuZy4gXCIyMDAsIDE4MiwgMjU1XCIpIGZyb20gYW4gaW1hZ2UuXG4gKiBVc2VzIGZldGNoIC0+IGRhdGEgVVJMIGNvbnZlcnNpb24gdG8gYnlwYXNzIGNhbnZhcyBDT1JTIHRhaW50IHJlc3RyaWN0aW9ucy5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFydHdvcmtEb21pbmFudENvbG9yKHVybDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgaWYgKCF1cmwgfHwgIXVybC50cmltKCkgfHwgaXNQbGFjZWhvbGRlclVybCh1cmwpKSByZXR1cm4gXCIyMDAsIDE4MiwgMjU1XCI7XG4gIGlmIChjb2xvckNhY2hlW3VybF0pIHJldHVybiBjb2xvckNhY2hlW3VybF07XG5cbiAgdHJ5IHtcbiAgICAvLyAxLiBGZXRjaCBpbWFnZSBkaXJlY3RseSB2aWEgZmV0Y2ggdG8gY29udmVydCB0byBEYXRhIFVSTCBhbmQgcHJldmVudCBjYW52YXMgdGFpbnRcbiAgICBsZXQgZGF0YVVybCA9IHVybDtcbiAgICBpZiAoIXVybC5zdGFydHNXaXRoKFwiZGF0YTpcIikpIHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVybCk7XG4gICAgICBjb25zdCBibG9iID0gYXdhaXQgcmVzLmJsb2IoKTtcbiAgICAgIGRhdGFVcmwgPSBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4gcmVzb2x2ZShyZWFkZXIucmVzdWx0IGFzIHN0cmluZyk7XG4gICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGJsb2IpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gMi4gRHJhdyB0byBvZmZzY3JlZW4gY2FudmFzXG4gICAgY29uc3QgcmdiID0gYXdhaXQgbmV3IFByb21pc2U8c3RyaW5nPigocmVzb2x2ZSkgPT4ge1xuICAgICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICBpbWcub25sb2FkID0gKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgICAgICAgY29uc3Qgc2l6ZSA9IDMyO1xuICAgICAgICAgIGNhbnZhcy53aWR0aCA9IHNpemU7XG4gICAgICAgICAgY2FudmFzLmhlaWdodCA9IHNpemU7XG4gICAgICAgICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgICBpZiAoIWN0eCkgcmV0dXJuIHJlc29sdmUoXCIyMDAsIDE4MiwgMjU1XCIpO1xuXG4gICAgICAgICAgY3R4LmRyYXdJbWFnZShpbWcsIDAsIDAsIHNpemUsIHNpemUpO1xuICAgICAgICAgIGNvbnN0IGRhdGEgPSBjdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIHNpemUsIHNpemUpLmRhdGE7XG5cbiAgICAgICAgICBsZXQgYmVzdFIgPSAyMDAsIGJlc3RHID0gMTgyLCBiZXN0QiA9IDI1NTtcbiAgICAgICAgICBsZXQgbWF4U2NvcmUgPSAtMTtcblxuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkgKz0gNCkge1xuICAgICAgICAgICAgY29uc3QgciA9IGRhdGFbaV07XG4gICAgICAgICAgICBjb25zdCBnID0gZGF0YVtpICsgMV07XG4gICAgICAgICAgICBjb25zdCBiID0gZGF0YVtpICsgMl07XG4gICAgICAgICAgICBjb25zdCBhID0gZGF0YVtpICsgM107XG4gICAgICAgICAgICBpZiAoYSA8IDEyOCkgY29udGludWU7XG5cbiAgICAgICAgICAgIGNvbnN0IG1heCA9IE1hdGgubWF4KHIsIGcsIGIpO1xuICAgICAgICAgICAgY29uc3QgbWluID0gTWF0aC5taW4ociwgZywgYik7XG4gICAgICAgICAgICBjb25zdCBicmlnaHRuZXNzID0gKG1heCArIG1pbikgLyAyO1xuICAgICAgICAgICAgY29uc3QgZGVsdGEgPSBtYXggLSBtaW47XG5cbiAgICAgICAgICAgIC8vIFNraXAgdmVyeSBkYXJrIGJsYWNrICg8IDI1KSBvciB3YXNoZWQgb3V0IHdoaXRlICg+IDI0MClcbiAgICAgICAgICAgIGlmIChicmlnaHRuZXNzIDwgMjUgfHwgYnJpZ2h0bmVzcyA+IDI0MCkgY29udGludWU7XG5cbiAgICAgICAgICAgIGNvbnN0IHNhdHVyYXRpb24gPSBkZWx0YSA9PT0gMCA/IDAgOiBkZWx0YSAvIChicmlnaHRuZXNzIDw9IDEyOCA/IG1heCArIG1pbiA6IDUxMCAtIG1heCAtIG1pbik7XG4gICAgICAgICAgICBjb25zdCBzY29yZSA9IHNhdHVyYXRpb24gKiAzICsgKGJyaWdodG5lc3MgPiA2MCAmJiBicmlnaHRuZXNzIDwgMTkwID8gMSA6IDAuMyk7XG5cbiAgICAgICAgICAgIGlmIChzY29yZSA+IG1heFNjb3JlKSB7XG4gICAgICAgICAgICAgIG1heFNjb3JlID0gc2NvcmU7XG4gICAgICAgICAgICAgIGJlc3RSID0gcjtcbiAgICAgICAgICAgICAgYmVzdEcgPSBnO1xuICAgICAgICAgICAgICBiZXN0QiA9IGI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gSWYgaW1hZ2Ugd2FzIGxhcmdlbHkgbW9ub2Nocm9tZSBvciBsb3cgc2F0dXJhdGlvbiwgZ2l2ZSBhIGNsZWFuIGFtYmllbnQgdG9uZVxuICAgICAgICAgIGlmIChtYXhTY29yZSA8PSAwLjE1KSB7XG4gICAgICAgICAgICBiZXN0UiA9IDE3NTtcbiAgICAgICAgICAgIGJlc3RHID0gMTg1O1xuICAgICAgICAgICAgYmVzdEIgPSAyMTU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmVzb2x2ZShgJHtiZXN0Un0sICR7YmVzdEd9LCAke2Jlc3RCfWApO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFwiW0xhc3RGTVN0YXRzXSBDb2xvciBleHRyYWN0aW9uIGVycm9yOlwiLCBlKTtcbiAgICAgICAgICByZXNvbHZlKFwiMjAwLCAxODIsIDI1NVwiKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGltZy5vbmVycm9yID0gKCkgPT4gcmVzb2x2ZShcIjIwMCwgMTgyLCAyNTVcIik7XG4gICAgICBpbWcuc3JjID0gZGF0YVVybDtcbiAgICB9KTtcblxuICAgIGNvbG9yQ2FjaGVbdXJsXSA9IHJnYjtcbiAgICByZXR1cm4gcmdiO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLndhcm4oXCJbTGFzdEZNU3RhdHNdIEZldGNoIGZvciBjb2xvciBleHRyYWN0aW9uIGZhaWxlZDpcIiwgZXJyKTtcbiAgICByZXR1cm4gXCIyMDAsIDE4MiwgMjU1XCI7XG4gIH1cbn1cblxuLyoqXG4gKiBGb3JtYXRzIGEgVGlkYWwgaW1hZ2UgVVVJRCBpbnRvIGEgZnVsbC1yZXNvbHV0aW9uIDEyODB4MTI4MCBvciA3NTB4NzUwIENETiBpbWFnZSBVUkxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFRpZGFsQ292ZXJVcmwodXVpZD86IHN0cmluZywgcmVzID0gXCIxMjgwXCIpOiBzdHJpbmcge1xuICBpZiAoIXV1aWQgfHwgIXV1aWQudHJpbSgpKSByZXR1cm4gXCJcIjtcbiAgY29uc3QgcGFydHMgPSB1dWlkLnRyaW0oKS5zcGxpdChcIi1cIikuam9pbihcIi9cIik7XG4gIHJldHVybiBgaHR0cHM6Ly9yZXNvdXJjZXMudGlkYWwuY29tL2ltYWdlcy8ke3BhcnRzfS8ke3Jlc314JHtyZXN9LmpwZ2A7XG59XG5cbi8qKlxuICogUmVzb2x2ZXMgZnVsbC1yZXNvbHV0aW9uIGFydGlzdCBpbWFnZVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QXJ0aXN0SW1hZ2UoYXJ0aXN0TmFtZTogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgaWYgKCFhcnRpc3ROYW1lIHx8ICFhcnRpc3ROYW1lLnRyaW0oKSB8fCBhcnRpc3ROYW1lID09PSBcIlVua25vd24gQXJ0aXN0XCIpIHJldHVybiBcIlwiO1xuICBjb25zdCBjbGVhbk5hbWUgPSBhcnRpc3ROYW1lLnRyaW0oKTtcbiAgY29uc3Qga2V5ID0gYGFydGlzdDoke2NsZWFuTmFtZS50b0xvd2VyQ2FzZSgpfWA7XG4gIGlmIChyZXNvbHZlZENhY2hlW2tleV0pIHJldHVybiByZXNvbHZlZENhY2hlW2tleV07XG4gIGlmIChhcnR3b3JrQ2FjaGVba2V5XSkgcmV0dXJuIGFydHdvcmtDYWNoZVtrZXldO1xuXG4gIGFydHdvcmtDYWNoZVtrZXldID0gKGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3Qgc2VhcmNoVXJsID0gYGh0dHBzOi8vZGVza3RvcC50aWRhbC5jb20vdjEvc2VhcmNoP3F1ZXJ5PSR7ZW5jb2RlVVJJQ29tcG9uZW50KGNsZWFuTmFtZSl9JmxpbWl0PTUmdHlwZXM9QVJUSVNUUyYke1RpZGFsQXBpLnF1ZXJ5QXJncygpfWA7XG4gICAgICBjb25zdCB0aWRhbFJlcyA9IGF3YWl0IFRpZGFsQXBpLmZldGNoPHsgYXJ0aXN0cz86IHsgaXRlbXM/OiB7IG5hbWU6IHN0cmluZzsgcGljdHVyZT86IHN0cmluZzsgaWQ/OiBudW1iZXIgfVtdIH0gfT4oc2VhcmNoVXJsKTtcbiAgICAgIGlmICh0aWRhbFJlcz8uYXJ0aXN0cz8uaXRlbXM/Lmxlbmd0aCkge1xuICAgICAgICBjb25zdCBtYXRjaCA9XG4gICAgICAgICAgdGlkYWxSZXMuYXJ0aXN0cy5pdGVtcy5maW5kKChhKSA9PiBhLnBpY3R1cmUgJiYgYS5uYW1lLnRvTG93ZXJDYXNlKCkgPT09IGNsZWFuTmFtZS50b0xvd2VyQ2FzZSgpKSB8fFxuICAgICAgICAgIHRpZGFsUmVzLmFydGlzdHMuaXRlbXMuZmluZCgoYSkgPT4gYS5waWN0dXJlKSB8fFxuICAgICAgICAgIHRpZGFsUmVzLmFydGlzdHMuaXRlbXNbMF07XG5cbiAgICAgICAgaWYgKG1hdGNoPy5pZCkge1xuICAgICAgICAgIHNldENhY2hlZEFydGlzdElkKGNsZWFuTmFtZSwgbWF0Y2guaWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1hdGNoPy5waWN0dXJlKSB7XG4gICAgICAgICAgY29uc3QgdXJsID0gZm9ybWF0VGlkYWxDb3ZlclVybChtYXRjaC5waWN0dXJlLCBcIjc1MFwiKTtcbiAgICAgICAgICBpZiAodXJsKSByZXR1cm4gKHJlc29sdmVkQ2FjaGVba2V5XSA9IHVybCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLndhcm4oXCJbTGFzdEZNU3RhdHNdIEZhaWxlZCB0byBmZXRjaCBUaWRhbCBhcnRpc3QgcGljdHVyZTpcIiwgZSk7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGl0dW5lc1VybCA9IGBodHRwczovL2l0dW5lcy5hcHBsZS5jb20vc2VhcmNoP3Rlcm09JHtlbmNvZGVVUklDb21wb25lbnQoY2xlYW5OYW1lKX0mZW50aXR5PWFsYnVtJmxpbWl0PTFgO1xuICAgICAgY29uc3QgaXR1bmVzRGF0YSA9IGF3YWl0IGZ0Y2guanNvbjxhbnk+KGl0dW5lc1VybCkuY2F0Y2goKCkgPT4gbnVsbCk7XG4gICAgICBpZiAoaXR1bmVzRGF0YT8ucmVzdWx0cz8uWzBdPy5hcnR3b3JrVXJsMTAwKSB7XG4gICAgICAgIGNvbnN0IHVybCA9IGl0dW5lc0RhdGEucmVzdWx0c1swXS5hcnR3b3JrVXJsMTAwLnJlcGxhY2UoXCIxMDB4MTAwYmJcIiwgXCI2MDB4NjAwYmJcIik7XG4gICAgICAgIHJldHVybiAocmVzb2x2ZWRDYWNoZVtrZXldID0gdXJsKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIHt9XG5cbiAgICByZXR1cm4gKHJlc29sdmVkQ2FjaGVba2V5XSA9IFwiXCIpO1xuICB9KSgpO1xuXG4gIHJldHVybiBhcnR3b3JrQ2FjaGVba2V5XTtcbn1cblxuLyoqXG4gKiBSZXNvbHZlcyBmdWxsLXJlc29sdXRpb24gdHJhY2sgYXJ0d29ya1xuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VHJhY2tBcnR3b3JrKHRyYWNrTmFtZTogc3RyaW5nLCBhcnRpc3ROYW1lOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuICBpZiAoIXRyYWNrTmFtZSkgcmV0dXJuIFwiXCI7XG4gIGNvbnN0IGNsZWFuVHJhY2sgPSB0cmFja05hbWUudHJpbSgpO1xuICBjb25zdCBjbGVhbkFydGlzdCA9IChhcnRpc3ROYW1lIHx8IFwiXCIpLnRyaW0oKTtcbiAgY29uc3QgcXVlcnkgPSBgJHtjbGVhblRyYWNrfSAke2NsZWFuQXJ0aXN0fWAudHJpbSgpO1xuICBjb25zdCBrZXkgPSBgdHJhY2s6JHtjbGVhblRyYWNrLnRvTG93ZXJDYXNlKCl9OiR7Y2xlYW5BcnRpc3QudG9Mb3dlckNhc2UoKX1gO1xuXG4gIGlmIChyZXNvbHZlZENhY2hlW2tleV0pIHJldHVybiByZXNvbHZlZENhY2hlW2tleV07XG4gIGlmIChhcnR3b3JrQ2FjaGVba2V5XSkgcmV0dXJuIGFydHdvcmtDYWNoZVtrZXldO1xuXG4gIGFydHdvcmtDYWNoZVtrZXldID0gKGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3Qgc2VhcmNoVXJsID0gYGh0dHBzOi8vZGVza3RvcC50aWRhbC5jb20vdjEvc2VhcmNoP3F1ZXJ5PSR7ZW5jb2RlVVJJQ29tcG9uZW50KHF1ZXJ5KX0mbGltaXQ9NSZ0eXBlcz1UUkFDS1MmJHtUaWRhbEFwaS5xdWVyeUFyZ3MoKX1gO1xuICAgICAgY29uc3QgdGlkYWxSZXMgPSBhd2FpdCBUaWRhbEFwaS5mZXRjaDx7IHRyYWNrcz86IHsgaXRlbXM/OiB7IHRpdGxlOiBzdHJpbmc7IGlkPzogbnVtYmVyOyBhbGJ1bT86IHsgaWQ/OiBudW1iZXI7IGNvdmVyPzogc3RyaW5nOyB2aWRlb0NvdmVyPzogc3RyaW5nIH0gfVtdIH0gfT4oc2VhcmNoVXJsKTtcbiAgICAgIGlmICh0aWRhbFJlcz8udHJhY2tzPy5pdGVtcz8ubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IG1hdGNoID0gdGlkYWxSZXMudHJhY2tzLml0ZW1zLmZpbmQoKHQpID0+IHQuYWxidW0/LmNvdmVyKSB8fCB0aWRhbFJlcy50cmFja3MuaXRlbXNbMF07XG4gICAgICAgIGlmIChtYXRjaD8uaWQpIHtcbiAgICAgICAgICBzZXRDYWNoZWRUcmFja0lkKGNsZWFuVHJhY2ssIGNsZWFuQXJ0aXN0LCBtYXRjaC5pZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1hdGNoPy5hbGJ1bT8uaWQpIHtcbiAgICAgICAgICBzZXRDYWNoZWRBbGJ1bUlkKG1hdGNoLnRpdGxlIHx8IFwiXCIsIGNsZWFuQXJ0aXN0LCBtYXRjaC5hbGJ1bS5pZCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjb3ZlclV1aWQgPSBtYXRjaD8uYWxidW0/LmNvdmVyIHx8IG1hdGNoPy5hbGJ1bT8udmlkZW9Db3ZlcjtcbiAgICAgICAgaWYgKGNvdmVyVXVpZCkge1xuICAgICAgICAgIGNvbnN0IHVybCA9IGZvcm1hdFRpZGFsQ292ZXJVcmwoY292ZXJVdWlkLCBcIjEyODBcIik7XG4gICAgICAgICAgaWYgKHVybCkgcmV0dXJuIChyZXNvbHZlZENhY2hlW2tleV0gPSB1cmwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS53YXJuKFwiW0xhc3RGTVN0YXRzXSBGYWlsZWQgdG8gZmV0Y2ggVGlkYWwgdHJhY2sgY292ZXI6XCIsIGUpO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBpdHVuZXNVcmwgPSBgaHR0cHM6Ly9pdHVuZXMuYXBwbGUuY29tL3NlYXJjaD90ZXJtPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHF1ZXJ5KX0mZW50aXR5PXNvbmcmbGltaXQ9MWA7XG4gICAgICBjb25zdCBpdHVuZXNEYXRhID0gYXdhaXQgZnRjaC5qc29uPGFueT4oaXR1bmVzVXJsKS5jYXRjaCgoKSA9PiBudWxsKTtcbiAgICAgIGlmIChpdHVuZXNEYXRhPy5yZXN1bHRzPy5bMF0/LmFydHdvcmtVcmwxMDApIHtcbiAgICAgICAgY29uc3QgdXJsID0gaXR1bmVzRGF0YS5yZXN1bHRzWzBdLmFydHdvcmtVcmwxMDAucmVwbGFjZShcIjEwMHgxMDBiYlwiLCBcIjYwMHg2MDBiYlwiKTtcbiAgICAgICAgcmV0dXJuIChyZXNvbHZlZENhY2hlW2tleV0gPSB1cmwpO1xuICAgICAgfVxuICAgIH0gY2F0Y2gge31cblxuICAgIHJldHVybiAocmVzb2x2ZWRDYWNoZVtrZXldID0gXCJcIik7XG4gIH0pKCk7XG5cbiAgcmV0dXJuIGFydHdvcmtDYWNoZVtrZXldO1xufVxuXG4vKipcbiAqIFJlc29sdmVzIGZ1bGwtcmVzb2x1dGlvbiBhbGJ1bSBhcnR3b3JrXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGJ1bUFydHdvcmsoYWxidW1OYW1lOiBzdHJpbmcsIGFydGlzdE5hbWU6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gIGlmICghYWxidW1OYW1lKSByZXR1cm4gXCJcIjtcbiAgY29uc3QgY2xlYW5BbGJ1bSA9IGFsYnVtTmFtZS50cmltKCk7XG4gIGNvbnN0IGNsZWFuQXJ0aXN0ID0gKGFydGlzdE5hbWUgfHwgXCJcIikudHJpbSgpO1xuICBjb25zdCBxdWVyeSA9IGAke2NsZWFuQWxidW19ICR7Y2xlYW5BcnRpc3R9YC50cmltKCk7XG4gIGNvbnN0IGtleSA9IGBhbGJ1bToke2NsZWFuQWxidW0udG9Mb3dlckNhc2UoKX06JHtjbGVhbkFydGlzdC50b0xvd2VyQ2FzZSgpfWA7XG5cbiAgaWYgKHJlc29sdmVkQ2FjaGVba2V5XSkgcmV0dXJuIHJlc29sdmVkQ2FjaGVba2V5XTtcbiAgaWYgKGFydHdvcmtDYWNoZVtrZXldKSByZXR1cm4gYXJ0d29ya0NhY2hlW2tleV07XG5cbiAgYXJ0d29ya0NhY2hlW2tleV0gPSAoYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBzZWFyY2hVcmwgPSBgaHR0cHM6Ly9kZXNrdG9wLnRpZGFsLmNvbS92MS9zZWFyY2g/cXVlcnk9JHtlbmNvZGVVUklDb21wb25lbnQocXVlcnkpfSZsaW1pdD01JnR5cGVzPUFMQlVNUyYke1RpZGFsQXBpLnF1ZXJ5QXJncygpfWA7XG4gICAgICBjb25zdCB0aWRhbFJlcyA9IGF3YWl0IFRpZGFsQXBpLmZldGNoPHsgYWxidW1zPzogeyBpdGVtcz86IHsgdGl0bGU6IHN0cmluZzsgaWQ/OiBudW1iZXI7IGNvdmVyPzogc3RyaW5nOyB2aWRlb0NvdmVyPzogc3RyaW5nIH0gfVtdIH0+KHNlYXJjaFVybCk7XG4gICAgICBpZiAodGlkYWxSZXM/LmFsYnVtcz8uaXRlbXM/Lmxlbmd0aCkge1xuICAgICAgICBjb25zdCBtYXRjaCA9IHRpZGFsUmVzLmFsYnVtcy5pdGVtcy5maW5kKChhKSA9PiBhLmNvdmVyKSB8fCB0aWRhbFJlcy5hbGJ1bXMuaXRlbXNbMF07XG4gICAgICAgIGlmIChtYXRjaD8uaWQpIHtcbiAgICAgICAgICBzZXRDYWNoZWRBbGJ1bUlkKGNsZWFuQWxidW0sIGNsZWFuQXJ0aXN0LCBtYXRjaC5pZCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjb3ZlclV1aWQgPSBtYXRjaD8uY292ZXIgfHwgbWF0Y2g/LnZpZGVvQ292ZXI7XG4gICAgICAgIGlmIChjb3ZlclV1aWQpIHtcbiAgICAgICAgICBjb25zdCB1cmwgPSBmb3JtYXRUaWRhbENvdmVyVXJsKGNvdmVyVXVpZCwgXCIxMjgwXCIpO1xuICAgICAgICAgIGlmICh1cmwpIHJldHVybiAocmVzb2x2ZWRDYWNoZVtrZXldID0gdXJsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUud2FybihcIltMYXN0Rk1TdGF0c10gRmFpbGVkIHRvIGZldGNoIFRpZGFsIGFsYnVtIGNvdmVyOlwiLCBlKTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgaXR1bmVzVXJsID0gYGh0dHBzOi8vaXR1bmVzLmFwcGxlLmNvbS9zZWFyY2g/dGVybT0ke2VuY29kZVVSSUNvbXBvbmVudChxdWVyeSl9JmVudGl0eT1hbGJ1bSZsaW1pdD0xYDtcbiAgICAgIGNvbnN0IGl0dW5lc0RhdGEgPSBhd2FpdCBmdGNoLmpzb248YW55PihpdHVuZXNVcmwpLmNhdGNoKCgpID0+IG51bGwpO1xuICAgICAgaWYgKGl0dW5lc0RhdGE/LnJlc3VsdHM/LlswXT8uYXJ0d29ya1VybDEwMCkge1xuICAgICAgICBjb25zdCB1cmwgPSBpdHVuZXNEYXRhLnJlc3VsdHNbMF0uYXJ0d29ya1VybDEwMC5yZXBsYWNlKFwiMTAweDEwMGJiXCIsIFwiNjAweDYwMGJiXCIpO1xuICAgICAgICByZXR1cm4gKHJlc29sdmVkQ2FjaGVba2V5XSA9IHVybCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCB7fVxuXG4gICAgcmV0dXJuIChyZXNvbHZlZENhY2hlW2tleV0gPSBcIlwiKTtcbiAgfSkoKTtcblxuICByZXR1cm4gYXJ0d29ya0NhY2hlW2tleV07XG59XG4iLCAiaW1wb3J0IHsgcmVkdXgsIFRpZGFsQXBpIH0gZnJvbSBcIkBsdW5hL2xpYlwiO1xuXG4vLyBDYWNoZSBmb3IgVGlkYWwgZW50aXR5IElEc1xuY29uc3QgYXJ0aXN0SWRDYWNoZTogUmVjb3JkPHN0cmluZywgbnVtYmVyIHwgc3RyaW5nPiA9IHt9O1xuY29uc3QgYWxidW1JZENhY2hlOiBSZWNvcmQ8c3RyaW5nLCBudW1iZXIgfCBzdHJpbmc+ID0ge307XG5jb25zdCB0cmFja0lkQ2FjaGU6IFJlY29yZDxzdHJpbmcsIG51bWJlciB8IHN0cmluZz4gPSB7fTtcblxuZXhwb3J0IGZ1bmN0aW9uIHNldENhY2hlZEFydGlzdElkKG5hbWU6IHN0cmluZywgaWQ6IG51bWJlciB8IHN0cmluZykge1xuICBpZiAobmFtZSAmJiBpZCkgYXJ0aXN0SWRDYWNoZVtuYW1lLnRyaW0oKS50b0xvd2VyQ2FzZSgpXSA9IGlkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0Q2FjaGVkQWxidW1JZChuYW1lOiBzdHJpbmcsIGFydGlzdE5hbWU6IHN0cmluZywgaWQ6IG51bWJlciB8IHN0cmluZykge1xuICBpZiAobmFtZSAmJiBpZCkgYWxidW1JZENhY2hlW2Ake25hbWUudHJpbSgpLnRvTG93ZXJDYXNlKCl9OiR7KGFydGlzdE5hbWUgfHwgXCJcIikudHJpbSgpLnRvTG93ZXJDYXNlKCl9YF0gPSBpZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldENhY2hlZFRyYWNrSWQobmFtZTogc3RyaW5nLCBhcnRpc3ROYW1lOiBzdHJpbmcsIGlkOiBudW1iZXIgfCBzdHJpbmcpIHtcbiAgaWYgKG5hbWUgJiYgaWQpIHRyYWNrSWRDYWNoZVtgJHtuYW1lLnRyaW0oKS50b0xvd2VyQ2FzZSgpfTokeyhhcnRpc3ROYW1lIHx8IFwiXCIpLnRyaW0oKS50b0xvd2VyQ2FzZSgpfWBdID0gaWQ7XG59XG5cbi8qKlxuICogTmF2aWdhdGUgdG8gVGlkYWwncyBBcnRpc3QgcGFnZSAoL2FydGlzdC86aWQgb3IgL3NlYXJjaC86bmFtZSlcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG5hdmlnYXRlVG9BcnRpc3QoYXJ0aXN0TmFtZTogc3RyaW5nLCBlPzogUmVhY3QuTW91c2VFdmVudCkge1xuICBpZiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG4gIGlmICghYXJ0aXN0TmFtZSB8fCAhYXJ0aXN0TmFtZS50cmltKCkgfHwgYXJ0aXN0TmFtZSA9PT0gXCJVbmtub3duIEFydGlzdFwiKSByZXR1cm47XG4gIGNvbnN0IGNsZWFuTmFtZSA9IGFydGlzdE5hbWUudHJpbSgpO1xuICBjb25zdCBjYWNoZWRJZCA9IGFydGlzdElkQ2FjaGVbY2xlYW5OYW1lLnRvTG93ZXJDYXNlKCldO1xuXG4gIGlmIChjYWNoZWRJZCkge1xuICAgIHRyeSB7XG4gICAgICByZWR1eC5hY3Rpb25zW1wicm91dGVyL1BVU0hcIl0oeyBwYXRobmFtZTogYC9hcnRpc3QvJHtjYWNoZWRJZH1gIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH0gY2F0Y2gge31cbiAgfVxuXG4gIC8vIFNlYXJjaCBUaWRhbCB0byBmaW5kIGV4YWN0IGFydGlzdCBJRFxuICB0cnkge1xuICAgIGNvbnN0IHNlYXJjaFVybCA9IGBodHRwczovL2Rlc2t0b3AudGlkYWwuY29tL3YxL3NlYXJjaD9xdWVyeT0ke2VuY29kZVVSSUNvbXBvbmVudChjbGVhbk5hbWUpfSZsaW1pdD0zJnR5cGVzPUFSVElTVFMmJHtUaWRhbEFwaS5xdWVyeUFyZ3MoKX1gO1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IFRpZGFsQXBpLmZldGNoPHsgYXJ0aXN0cz86IHsgaXRlbXM/OiB7IG5hbWU6IHN0cmluZzsgaWQ6IG51bWJlciB9W10gfSB9PihzZWFyY2hVcmwpO1xuICAgIGlmIChyZXM/LmFydGlzdHM/Lml0ZW1zPy5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IG1hdGNoID1cbiAgICAgICAgcmVzLmFydGlzdHMuaXRlbXMuZmluZCgoYSkgPT4gYS5uYW1lLnRvTG93ZXJDYXNlKCkgPT09IGNsZWFuTmFtZS50b0xvd2VyQ2FzZSgpKSB8fFxuICAgICAgICByZXMuYXJ0aXN0cy5pdGVtc1swXTtcbiAgICAgIGlmIChtYXRjaD8uaWQpIHtcbiAgICAgICAgYXJ0aXN0SWRDYWNoZVtjbGVhbk5hbWUudG9Mb3dlckNhc2UoKV0gPSBtYXRjaC5pZDtcbiAgICAgICAgcmVkdXguYWN0aW9uc1tcInJvdXRlci9QVVNIXCJdKHsgcGF0aG5hbWU6IGAvYXJ0aXN0LyR7bWF0Y2guaWR9YCB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgfSBjYXRjaCB7fVxuXG4gIC8vIEZhbGxiYWNrIHRvIFRpZGFsIHNlYXJjaCBwYWdlXG4gIHRyeSB7XG4gICAgcmVkdXguYWN0aW9uc1tcInJvdXRlci9QVVNIXCJdKHsgcGF0aG5hbWU6IGAvc2VhcmNoLyR7ZW5jb2RlVVJJQ29tcG9uZW50KGNsZWFuTmFtZSl9YCB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS53YXJuKFwiW0xhc3RGTVN0YXRzXSBGYWlsZWQgdG8gbmF2aWdhdGUgdG8gYXJ0aXN0OlwiLCBlcnIpO1xuICB9XG59XG5cbi8qKlxuICogTmF2aWdhdGUgdG8gVGlkYWwncyBBbGJ1bSBwYWdlICgvYWxidW0vOmlkIG9yIC9zZWFyY2gvOm5hbWUpXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBuYXZpZ2F0ZVRvQWxidW0oYWxidW1OYW1lOiBzdHJpbmcsIGFydGlzdE5hbWU6IHN0cmluZyA9IFwiXCIsIGU/OiBSZWFjdC5Nb3VzZUV2ZW50KSB7XG4gIGlmIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cbiAgaWYgKCFhbGJ1bU5hbWUgfHwgIWFsYnVtTmFtZS50cmltKCkpIHJldHVybjtcbiAgY29uc3QgY2xlYW5BbGJ1bSA9IGFsYnVtTmFtZS50cmltKCk7XG4gIGNvbnN0IGNsZWFuQXJ0aXN0ID0gKGFydGlzdE5hbWUgfHwgXCJcIikudHJpbSgpO1xuICBjb25zdCBrZXkgPSBgJHtjbGVhbkFsYnVtLnRvTG93ZXJDYXNlKCl9OiR7Y2xlYW5BcnRpc3QudG9Mb3dlckNhc2UoKX1gO1xuICBjb25zdCBjYWNoZWRJZCA9IGFsYnVtSWRDYWNoZVtrZXldO1xuXG4gIGlmIChjYWNoZWRJZCkge1xuICAgIHRyeSB7XG4gICAgICByZWR1eC5hY3Rpb25zW1wicm91dGVyL1BVU0hcIl0oeyBwYXRobmFtZTogYC9hbGJ1bS8ke2NhY2hlZElkfWAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfSBjYXRjaCB7fVxuICB9XG5cbiAgY29uc3QgcXVlcnkgPSBgJHtjbGVhbkFsYnVtfSAke2NsZWFuQXJ0aXN0fWAudHJpbSgpO1xuXG4gIC8vIFNlYXJjaCBUaWRhbCB0byBmaW5kIGV4YWN0IGFsYnVtIElEXG4gIHRyeSB7XG4gICAgY29uc3Qgc2VhcmNoVXJsID0gYGh0dHBzOi8vZGVza3RvcC50aWRhbC5jb20vdjEvc2VhcmNoP3F1ZXJ5PSR7ZW5jb2RlVVJJQ29tcG9uZW50KHF1ZXJ5KX0mbGltaXQ9MyZ0eXBlcz1BTEJVTVMmJHtUaWRhbEFwaS5xdWVyeUFyZ3MoKX1gO1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IFRpZGFsQXBpLmZldGNoPHsgYWxidW1zPzogeyBpdGVtcz86IHsgdGl0bGU6IHN0cmluZzsgaWQ6IG51bWJlciB9W10gfSB9PihzZWFyY2hVcmwpO1xuICAgIGlmIChyZXM/LmFsYnVtcz8uaXRlbXM/Lmxlbmd0aCkge1xuICAgICAgY29uc3QgbWF0Y2ggPSByZXMuYWxidW1zLml0ZW1zWzBdO1xuICAgICAgaWYgKG1hdGNoPy5pZCkge1xuICAgICAgICBhbGJ1bUlkQ2FjaGVba2V5XSA9IG1hdGNoLmlkO1xuICAgICAgICByZWR1eC5hY3Rpb25zW1wicm91dGVyL1BVU0hcIl0oeyBwYXRobmFtZTogYC9hbGJ1bS8ke21hdGNoLmlkfWAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gIH0gY2F0Y2gge31cblxuICAvLyBGYWxsYmFjayB0byBUaWRhbCBzZWFyY2ggcGFnZVxuICB0cnkge1xuICAgIHJlZHV4LmFjdGlvbnNbXCJyb3V0ZXIvUFVTSFwiXSh7IHBhdGhuYW1lOiBgL3NlYXJjaC8ke2VuY29kZVVSSUNvbXBvbmVudChxdWVyeSl9YCB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS53YXJuKFwiW0xhc3RGTVN0YXRzXSBGYWlsZWQgdG8gbmF2aWdhdGUgdG8gYWxidW06XCIsIGVycik7XG4gIH1cbn1cblxuLyoqXG4gKiBOYXZpZ2F0ZSB0byBUaWRhbCdzIFRyYWNrL1NlYXJjaCBwYWdlXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBuYXZpZ2F0ZVRvVHJhY2sodHJhY2tOYW1lOiBzdHJpbmcsIGFydGlzdE5hbWU6IHN0cmluZyA9IFwiXCIsIGU/OiBSZWFjdC5Nb3VzZUV2ZW50KSB7XG4gIGlmIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cbiAgaWYgKCF0cmFja05hbWUgfHwgIXRyYWNrTmFtZS50cmltKCkpIHJldHVybjtcbiAgY29uc3QgY2xlYW5UcmFjayA9IHRyYWNrTmFtZS50cmltKCk7XG4gIGNvbnN0IGNsZWFuQXJ0aXN0ID0gKGFydGlzdE5hbWUgfHwgXCJcIikudHJpbSgpO1xuICBjb25zdCBrZXkgPSBgJHtjbGVhblRyYWNrLnRvTG93ZXJDYXNlKCl9OiR7Y2xlYW5BcnRpc3QudG9Mb3dlckNhc2UoKX1gO1xuICBjb25zdCBjYWNoZWRJZCA9IHRyYWNrSWRDYWNoZVtrZXldO1xuXG4gIGlmIChjYWNoZWRJZCkge1xuICAgIHRyeSB7XG4gICAgICByZWR1eC5hY3Rpb25zW1wicm91dGVyL1BVU0hcIl0oeyBwYXRobmFtZTogYC90cmFjay8ke2NhY2hlZElkfWAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfSBjYXRjaCB7fVxuICB9XG5cbiAgY29uc3QgcXVlcnkgPSBgJHtjbGVhblRyYWNrfSAke2NsZWFuQXJ0aXN0fWAudHJpbSgpO1xuXG4gIC8vIFNlYXJjaCBUaWRhbCB0byBmaW5kIGV4YWN0IHRyYWNrIElEXG4gIHRyeSB7XG4gICAgY29uc3Qgc2VhcmNoVXJsID0gYGh0dHBzOi8vZGVza3RvcC50aWRhbC5jb20vdjEvc2VhcmNoP3F1ZXJ5PSR7ZW5jb2RlVVJJQ29tcG9uZW50KHF1ZXJ5KX0mbGltaXQ9MyZ0eXBlcz1UUkFDS1MmJHtUaWRhbEFwaS5xdWVyeUFyZ3MoKX1gO1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IFRpZGFsQXBpLmZldGNoPHsgdHJhY2tzPzogeyBpdGVtcz86IHsgdGl0bGU6IHN0cmluZzsgaWQ6IG51bWJlcjsgYWxidW0/OiB7IGlkOiBudW1iZXIgfSB9IH1bXSB9PihzZWFyY2hVcmwpO1xuICAgIGlmIChyZXM/LnRyYWNrcz8uaXRlbXM/Lmxlbmd0aCkge1xuICAgICAgY29uc3QgbWF0Y2ggPSByZXMudHJhY2tzLml0ZW1zWzBdO1xuICAgICAgaWYgKG1hdGNoPy5pZCkge1xuICAgICAgICB0cmFja0lkQ2FjaGVba2V5XSA9IG1hdGNoLmlkO1xuICAgICAgICByZWR1eC5hY3Rpb25zW1wicm91dGVyL1BVU0hcIl0oeyBwYXRobmFtZTogYC90cmFjay8ke21hdGNoLmlkfWAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gIH0gY2F0Y2gge31cblxuICAvLyBGYWxsYmFjayB0byBUaWRhbCBzZWFyY2ggcGFnZVxuICB0cnkge1xuICAgIHJlZHV4LmFjdGlvbnNbXCJyb3V0ZXIvUFVTSFwiXSh7IHBhdGhuYW1lOiBgL3NlYXJjaC8ke2VuY29kZVVSSUNvbXBvbmVudChxdWVyeSl9YCB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS53YXJuKFwiW0xhc3RGTVN0YXRzXSBGYWlsZWQgdG8gbmF2aWdhdGUgdG8gdHJhY2s6XCIsIGVycik7XG4gIH1cbn1cbiIsICJleHBvcnQgdHlwZSBMYXN0Rm1UaW1lUGVyaW9kID1cbiAgfCBcIjdkYXlcIlxuICB8IFwiMW1vbnRoXCJcbiAgfCBcIjNtb250aFwiXG4gIHwgXCI2bW9udGhcIlxuICB8IFwiMTJtb250aFwiXG4gIHwgXCJvdmVyYWxsXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGFzdEZtSW1hZ2Uge1xuICBcIiN0ZXh0XCI6IHN0cmluZztcbiAgc2l6ZTogXCJzbWFsbFwiIHwgXCJtZWRpdW1cIiB8IFwibGFyZ2VcIiB8IFwiZXh0cmFsYXJnZVwiIHwgXCJtZWdhXCIgfCBcIlwiO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExhc3RGbVVzZXIge1xuICBuYW1lOiBzdHJpbmc7XG4gIHJlYWxuYW1lPzogc3RyaW5nO1xuICB1cmw6IHN0cmluZztcbiAgaW1hZ2U/OiBMYXN0Rm1JbWFnZVtdO1xuICBjb3VudHJ5Pzogc3RyaW5nO1xuICBhZ2U/OiBzdHJpbmc7XG4gIGdlbmRlcj86IHN0cmluZztcbiAgcGxheWNvdW50OiBzdHJpbmc7XG4gIGFydGlzdF9jb3VudD86IHN0cmluZztcbiAgYWxidW1fY291bnQ/OiBzdHJpbmc7XG4gIHRyYWNrX2NvdW50Pzogc3RyaW5nO1xuICByZWdpc3RlcmVkOiB7XG4gICAgdW5peHRpbWU6IHN0cmluZztcbiAgICBcIiN0ZXh0XCI6IHN0cmluZztcbiAgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMYXN0Rm1BcnRpc3Qge1xuICBuYW1lOiBzdHJpbmc7XG4gIHBsYXljb3VudDogc3RyaW5nO1xuICBtYmlkPzogc3RyaW5nO1xuICB1cmw6IHN0cmluZztcbiAgaW1hZ2U/OiBMYXN0Rm1JbWFnZVtdO1xuICBzdHJlYW1hYmxlPzogc3RyaW5nO1xuICBcIkBhdHRyXCI/OiB7XG4gICAgcmFuazogc3RyaW5nO1xuICB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExhc3RGbVRyYWNrQXJ0aXN0IHtcbiAgbmFtZT86IHN0cmluZztcbiAgbWJpZD86IHN0cmluZztcbiAgdXJsPzogc3RyaW5nO1xuICBcIiN0ZXh0XCI/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGFzdEZtVHJhY2sge1xuICBuYW1lOiBzdHJpbmc7XG4gIHBsYXljb3VudDogc3RyaW5nO1xuICBtYmlkPzogc3RyaW5nO1xuICB1cmw6IHN0cmluZztcbiAgZHVyYXRpb24/OiBzdHJpbmc7XG4gIHN0cmVhbWFibGU/OiB7XG4gICAgZnVsbHRyYWNrOiBzdHJpbmc7XG4gICAgXCIjdGV4dFwiOiBzdHJpbmc7XG4gIH07XG4gIGFydGlzdDogTGFzdEZtVHJhY2tBcnRpc3QgfCBzdHJpbmc7XG4gIGltYWdlPzogTGFzdEZtSW1hZ2VbXTtcbiAgXCJAYXR0clwiPzoge1xuICAgIHJhbms6IHN0cmluZztcbiAgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMYXN0Rm1BbGJ1bSB7XG4gIG5hbWU6IHN0cmluZztcbiAgcGxheWNvdW50OiBzdHJpbmc7XG4gIG1iaWQ/OiBzdHJpbmc7XG4gIHVybDogc3RyaW5nO1xuICBhcnRpc3Q6IHtcbiAgICBuYW1lPzogc3RyaW5nO1xuICAgIG1iaWQ/OiBzdHJpbmc7XG4gICAgdXJsPzogc3RyaW5nO1xuICAgIFwiI3RleHRcIj86IHN0cmluZztcbiAgfSB8IHN0cmluZztcbiAgaW1hZ2U/OiBMYXN0Rm1JbWFnZVtdO1xuICBcIkBhdHRyXCI/OiB7XG4gICAgcmFuazogc3RyaW5nO1xuICB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExhc3RGbVJlY2VudFRyYWNrIHtcbiAgbmFtZTogc3RyaW5nO1xuICBhcnRpc3Q6IHtcbiAgICBuYW1lPzogc3RyaW5nO1xuICAgIG1iaWQ/OiBzdHJpbmc7XG4gICAgdXJsPzogc3RyaW5nO1xuICAgIFwiI3RleHRcIj86IHN0cmluZztcbiAgfSB8IHN0cmluZztcbiAgYWxidW06IHtcbiAgICBuYW1lPzogc3RyaW5nO1xuICAgIG1iaWQ/OiBzdHJpbmc7XG4gICAgXCIjdGV4dFwiPzogc3RyaW5nO1xuICB9IHwgc3RyaW5nO1xuICBpbWFnZT86IExhc3RGbUltYWdlW107XG4gIHVybDogc3RyaW5nO1xuICBtYmlkPzogc3RyaW5nO1xuICBkYXRlPzoge1xuICAgIHV0czogc3RyaW5nO1xuICAgIFwiI3RleHRcIjogc3RyaW5nO1xuICB9O1xuICBcIkBhdHRyXCI/OiB7XG4gICAgbm93cGxheWluZzogXCJ0cnVlXCIgfCBcImZhbHNlXCI7XG4gIH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGFzdEZtTG92ZWRUcmFjayB7XG4gIG5hbWU6IHN0cmluZztcbiAgbWJpZD86IHN0cmluZztcbiAgdXJsOiBzdHJpbmc7XG4gIGRhdGU6IHtcbiAgICB1dHM6IHN0cmluZztcbiAgICBcIiN0ZXh0XCI6IHN0cmluZztcbiAgfTtcbiAgYXJ0aXN0OiB7XG4gICAgbmFtZT86IHN0cmluZztcbiAgICBtYmlkPzogc3RyaW5nO1xuICAgIHVybD86IHN0cmluZztcbiAgICBcIiN0ZXh0XCI/OiBzdHJpbmc7XG4gIH0gfCBzdHJpbmc7XG4gIGltYWdlPzogTGFzdEZtSW1hZ2VbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMYXN0Rm1Ub3BBcnRpc3RzUmVzcG9uc2Uge1xuICB0b3BhcnRpc3RzOiB7XG4gICAgYXJ0aXN0OiBMYXN0Rm1BcnRpc3RbXTtcbiAgICBcIkBhdHRyXCI6IHtcbiAgICAgIHVzZXI6IHN0cmluZztcbiAgICAgIHBhZ2U6IHN0cmluZztcbiAgICAgIHBlclBhZ2U6IHN0cmluZztcbiAgICAgIHRvdGFsUGFnZXM6IHN0cmluZztcbiAgICAgIHRvdGFsOiBzdHJpbmc7XG4gICAgfTtcbiAgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMYXN0Rm1Ub3BUcmFja3NSZXNwb25zZSB7XG4gIHRvcHRyYWNrczoge1xuICAgIHRyYWNrOiBMYXN0Rm1UcmFja1tdO1xuICAgIFwiQGF0dHJcIjoge1xuICAgICAgdXNlcjogc3RyaW5nO1xuICAgICAgcGFnZTogc3RyaW5nO1xuICAgICAgcGVyUGFnZTogc3RyaW5nO1xuICAgICAgdG90YWxQYWdlczogc3RyaW5nO1xuICAgICAgdG90YWw6IHN0cmluZztcbiAgICB9O1xuICB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExhc3RGbVRvcEFsYnVtc1Jlc3BvbnNlIHtcbiAgdG9wYWxidW1zOiB7XG4gICAgYWxidW06IExhc3RGbUFsYnVtW107XG4gICAgXCJAYXR0clwiOiB7XG4gICAgICB1c2VyOiBzdHJpbmc7XG4gICAgICBwYWdlOiBzdHJpbmc7XG4gICAgICBwZXJQYWdlOiBzdHJpbmc7XG4gICAgICB0b3RhbFBhZ2VzOiBzdHJpbmc7XG4gICAgICB0b3RhbDogc3RyaW5nO1xuICAgIH07XG4gIH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGFzdEZtUmVjZW50VHJhY2tzUmVzcG9uc2Uge1xuICByZWNlbnR0cmFja3M6IHtcbiAgICB0cmFjazogTGFzdEZtUmVjZW50VHJhY2tbXTtcbiAgICBcIkBhdHRyXCI6IHtcbiAgICAgIHVzZXI6IHN0cmluZztcbiAgICAgIHBhZ2U6IHN0cmluZztcbiAgICAgIHBlclBhZ2U6IHN0cmluZztcbiAgICAgIHRvdGFsUGFnZXM6IHN0cmluZztcbiAgICAgIHRvdGFsOiBzdHJpbmc7XG4gICAgfTtcbiAgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMYXN0Rm1Vc2VySW5mb1Jlc3BvbnNlIHtcbiAgdXNlcjogTGFzdEZtVXNlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFydGlzdE5hbWUoYXJ0aXN0OiBhbnkpOiBzdHJpbmcge1xuICBpZiAoIWFydGlzdCkgcmV0dXJuIFwiVW5rbm93biBBcnRpc3RcIjtcbiAgaWYgKHR5cGVvZiBhcnRpc3QgPT09IFwic3RyaW5nXCIpIHJldHVybiBhcnRpc3QudHJpbSgpIHx8IFwiVW5rbm93biBBcnRpc3RcIjtcbiAgcmV0dXJuIChhcnRpc3QubmFtZSB8fCBhcnRpc3RbXCIjdGV4dFwiXSB8fCBcIlwiKS50cmltKCkgfHwgXCJVbmtub3duIEFydGlzdFwiO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxidW1OYW1lKGFsYnVtOiBhbnkpOiBzdHJpbmcge1xuICBpZiAoIWFsYnVtKSByZXR1cm4gXCJcIjtcbiAgaWYgKHR5cGVvZiBhbGJ1bSA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGFsYnVtLnRyaW0oKTtcbiAgcmV0dXJuIChhbGJ1bS5uYW1lIHx8IGFsYnVtW1wiI3RleHRcIl0gfHwgXCJcIikudHJpbSgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VHJhY2tOYW1lKHRyYWNrOiBhbnkpOiBzdHJpbmcge1xuICBpZiAoIXRyYWNrKSByZXR1cm4gXCJVbmtub3duIFRyYWNrXCI7XG4gIGlmICh0eXBlb2YgdHJhY2sgPT09IFwic3RyaW5nXCIpIHJldHVybiB0cmFjay50cmltKCkgfHwgXCJVbmtub3duIFRyYWNrXCI7XG4gIHJldHVybiAodHJhY2submFtZSB8fCB0cmFjay50aXRsZSB8fCBcIlwiKS50cmltKCkgfHwgXCJVbmtub3duIFRyYWNrXCI7XG59XG4iLCAiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGdldEFsYnVtQXJ0d29yaywgZ2V0QXJ0aXN0SW1hZ2UsIGdldFRyYWNrQXJ0d29yaywgaXNQbGFjZWhvbGRlclVybCB9IGZyb20gXCIuLi9hcGkvYXJ0d29ya1wiO1xuXG5pbnRlcmZhY2UgQXJ0d29ya0ltYWdlUHJvcHMge1xuICB0eXBlOiBcImFydGlzdFwiIHwgXCJ0cmFja1wiIHwgXCJhbGJ1bVwiIHwgXCJ1c2VyXCI7XG4gIG5hbWU6IHN0cmluZztcbiAgYXJ0aXN0TmFtZT86IHN0cmluZztcbiAgaW5pdGlhbFVybD86IHN0cmluZztcbiAgYWx0Pzogc3RyaW5nO1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG4gIHN0eWxlPzogUmVhY3QuQ1NTUHJvcGVydGllcztcbiAgZmFsbGJhY2tJY29uPzogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgQXJ0d29ya0ltYWdlOiBSZWFjdC5GQzxBcnR3b3JrSW1hZ2VQcm9wcz4gPSAoe1xuICB0eXBlLFxuICBuYW1lLFxuICBhcnRpc3ROYW1lID0gXCJcIixcbiAgaW5pdGlhbFVybCxcbiAgYWx0ID0gXCJcIixcbiAgY2xhc3NOYW1lID0gXCJcIixcbiAgc3R5bGUgPSB7fSxcbiAgZmFsbGJhY2tJY29uID0gXCJcIixcbn0pID0+IHtcbiAgY29uc3QgW2ltYWdlVXJsLCBzZXRJbWFnZVVybF0gPSB1c2VTdGF0ZTxzdHJpbmc+KCgpID0+IHtcbiAgICBpZiAodHlwZSA9PT0gXCJhcnRpc3RcIikgcmV0dXJuIFwiXCI7IC8vIEFsd2F5cyByZXNvbHZlIGhpZ2gtcmVzIFRpZGFsIGFydGlzdCBwaWN0dXJlXG4gICAgcmV0dXJuIGlzUGxhY2Vob2xkZXJVcmwoaW5pdGlhbFVybCkgPyBcIlwiIDogaW5pdGlhbFVybCB8fCBcIlwiO1xuICB9KTtcbiAgY29uc3QgW2xvYWRlZCwgc2V0TG9hZGVkXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgY29uc3QgW2hhc0Vycm9yLCBzZXRIYXNFcnJvcl0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgaXNDYW5jZWxsZWQgPSBmYWxzZTtcblxuICAgIC8vIFJlc2V0IGVycm9yIHdoZW4gbmFtZSBvciBpbml0aWFsVXJsIGNoYW5nZXNcbiAgICBzZXRIYXNFcnJvcihmYWxzZSk7XG5cbiAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgbGV0IHJlc29sdmVkID0gXCJcIjtcbiAgICAgIGlmICh0eXBlID09PSBcImFydGlzdFwiKSB7XG4gICAgICAgIHJlc29sdmVkID0gYXdhaXQgZ2V0QXJ0aXN0SW1hZ2UobmFtZSk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwidHJhY2tcIikge1xuICAgICAgICByZXNvbHZlZCA9IGF3YWl0IGdldFRyYWNrQXJ0d29yayhuYW1lLCBhcnRpc3ROYW1lKTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJhbGJ1bVwiKSB7XG4gICAgICAgIHJlc29sdmVkID0gYXdhaXQgZ2V0QWxidW1BcnR3b3JrKG5hbWUsIGFydGlzdE5hbWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzQ2FuY2VsbGVkKSB7XG4gICAgICAgIGlmIChyZXNvbHZlZCkge1xuICAgICAgICAgIHNldEltYWdlVXJsKHJlc29sdmVkKTtcbiAgICAgICAgfSBlbHNlIGlmICghaXNQbGFjZWhvbGRlclVybChpbml0aWFsVXJsKSkge1xuICAgICAgICAgIHNldEltYWdlVXJsKGluaXRpYWxVcmwgfHwgXCJcIik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KSgpO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGlzQ2FuY2VsbGVkID0gdHJ1ZTtcbiAgICB9O1xuICB9LCBbdHlwZSwgbmFtZSwgYXJ0aXN0TmFtZSwgaW5pdGlhbFVybF0pO1xuXG4gIGlmIChpbWFnZVVybCAmJiAhaGFzRXJyb3IpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGltZ1xuICAgICAgICBzcmM9e2ltYWdlVXJsfVxuICAgICAgICBhbHQ9e2FsdCB8fCBuYW1lfVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBvcGFjaXR5OiBsb2FkZWQgPyAxIDogMC40LFxuICAgICAgICAgIHRyYW5zaXRpb246IFwib3BhY2l0eSAwLjI1cyBlYXNlLWluLW91dCwgdHJhbnNmb3JtIDAuM3MgZWFzZVwiLFxuICAgICAgICAgIG9iamVjdEZpdDogXCJjb3ZlclwiLFxuICAgICAgICAgIC4uLnN0eWxlLFxuICAgICAgICB9fVxuICAgICAgICBvbkxvYWQ9eygpID0+IHNldExvYWRlZCh0cnVlKX1cbiAgICAgICAgb25FcnJvcj17KCkgPT4ge1xuICAgICAgICAgIC8vIElmIDEyODAgZmFpbGVkLCB0cnkgNzUwIG9yIGZhbGxiYWNrXG4gICAgICAgICAgaWYgKGltYWdlVXJsLmluY2x1ZGVzKFwiLzEyODB4MTI4MC5qcGdcIikpIHtcbiAgICAgICAgICAgIHNldEltYWdlVXJsKGltYWdlVXJsLnJlcGxhY2UoXCIvMTI4MHgxMjgwLmpwZ1wiLCBcIi83NTB4NzUwLmpwZ1wiKSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChpbWFnZVVybC5pbmNsdWRlcyhcIi83NTB4NzUwLmpwZ1wiKSkge1xuICAgICAgICAgICAgc2V0SW1hZ2VVcmwoaW1hZ2VVcmwucmVwbGFjZShcIi83NTB4NzUwLmpwZ1wiLCBcIi82NDB4NjQwLmpwZ1wiKSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldEhhc0Vycm9yKHRydWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxuXG4gIC8vIEZhbGxiYWNrIHBsYWNlaG9sZGVyIHdpdGggY2xlYW4gbGV0dGVyIGluaXRpYWwgb3IgbWluaW1hbCBub3RlIFNWR1xuICBjb25zdCBpbml0aWFsID0gbmFtZSA/IG5hbWVbMF0udG9VcHBlckNhc2UoKSA6IGZhbGxiYWNrSWNvbjtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgICAgICBiYWNrZ3JvdW5kOlxuICAgICAgICAgIHR5cGUgPT09IFwiYXJ0aXN0XCJcbiAgICAgICAgICAgID8gXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDIyNywgMjcsIDM1LCAwLjI1KSwgcmdiYSgyMDAsIDE4MiwgMjU1LCAwLjE1KSlcIlxuICAgICAgICAgICAgOiBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSlcIixcbiAgICAgICAgY29sb3I6IHR5cGUgPT09IFwiYXJ0aXN0XCIgPyBcInZhcigtLWxmbS1hY2NlbnQtbGF2ZW5kZXIpXCIgOiBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KVwiLFxuICAgICAgICBmb250V2VpZ2h0OiA3MDAsXG4gICAgICAgIGZvbnRTaXplOiB0eXBlID09PSBcImFydGlzdFwiID8gXCIyNHB4XCIgOiBcIjE0cHhcIixcbiAgICAgICAgdXNlclNlbGVjdDogXCJub25lXCIsXG4gICAgICAgIC4uLnN0eWxlLFxuICAgICAgfX1cbiAgICA+XG4gICAgICB7aW5pdGlhbCB8fCAoXG4gICAgICAgIDxzdmcgdmlld0JveD1cIjAgMCAyNCAyNFwiIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBzdHlsZT17eyBvcGFjaXR5OiAwLjQgfX0+XG4gICAgICAgICAgPHBhdGggZD1cIk0xMiAzdjEwLjU1Yy0uNTktLjM0LTEuMjctLjU1LTItLjU1LTIuMjEgMC00IDEuNzktNCA0czEuNzkgNCA0IDQgNC0xLjc5IDQtNFY3aDRWM2gtNnpcIiAvPlxuICAgICAgICA8L3N2Zz5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIiwgImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IExhc3RGbUFwaSB9IGZyb20gXCIuLi9hcGkvbGFzdGZtXCI7XG5pbXBvcnQgeyBnZXRBbGJ1bU5hbWUsIGdldEFydGlzdE5hbWUsIExhc3RGbUFsYnVtIH0gZnJvbSBcIi4uL2FwaS90eXBlc1wiO1xuaW1wb3J0IHsgbmF2aWdhdGVUb0FsYnVtLCBuYXZpZ2F0ZVRvQXJ0aXN0IH0gZnJvbSBcIi4uL25hdmlnYXRpb24vdGlkYWxOYXZpZ2F0ZVwiO1xuaW1wb3J0IHsgQXJ0d29ya0ltYWdlIH0gZnJvbSBcIi4vQXJ0d29ya0ltYWdlXCI7XG5cbmludGVyZmFjZSBUb3BBbGJ1bXNUYWJQcm9wcyB7XG4gIGFsYnVtczogTGFzdEZtQWxidW1bXTtcbiAgbG9hZGluZzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IFRvcEFsYnVtc1RhYjogUmVhY3QuRkM8VG9wQWxidW1zVGFiUHJvcHM+ID0gKHsgYWxidW1zLCBsb2FkaW5nIH0pID0+IHtcbiAgaWYgKGxvYWRpbmcgJiYgIWFsYnVtcy5sZW5ndGgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZm0tY2FyZC1ncmlkXCI+XG4gICAgICAgIHtBcnJheS5mcm9tKHsgbGVuZ3RoOiAxMiB9KS5tYXAoKF8sIGkpID0+IChcbiAgICAgICAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPVwibGZtLWl0ZW0tY2FyZCBsZm0tc2tlbGV0b25cIiBzdHlsZT17eyBoZWlnaHQ6IFwiMjQwcHhcIiB9fSAvPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICBpZiAoIWFsYnVtcy5sZW5ndGgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZm0tZ2xhc3MtY2FyZCBsZm0tZW1wdHktc3RhdGVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZm0tZW1wdHktdGl0bGVcIj5ObyBBbGJ1bXMgRm91bmQ8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZm0tZW1wdHktZGVzY1wiPk5vIHNjcm9iYmxlZCBhbGJ1bXMgZm91bmQgZm9yIHRoZSBzZWxlY3RlZCB0aW1lZnJhbWUuPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImxmbS1jYXJkLWdyaWRcIj5cbiAgICAgIHthbGJ1bXMubWFwKChhbGJ1bSwgaWR4KSA9PiB7XG4gICAgICAgIGNvbnN0IHJhbmsgPSBhbGJ1bVtcIkBhdHRyXCJdPy5yYW5rID8gcGFyc2VJbnQoYWxidW1bXCJAYXR0clwiXS5yYW5rLCAxMCkgOiBpZHggKyAxO1xuICAgICAgICBjb25zdCBwbGF5Y291bnQgPSBwYXJzZUludChhbGJ1bS5wbGF5Y291bnQgfHwgXCIwXCIsIDEwKTtcbiAgICAgICAgY29uc3QgaW1nVXJsID0gTGFzdEZtQXBpLmdldEltYWdlVXJsKGFsYnVtLmltYWdlKTtcbiAgICAgICAgY29uc3QgYWxidW1UaXRsZSA9IGdldEFsYnVtTmFtZShhbGJ1bSk7XG4gICAgICAgIGNvbnN0IGFydGlzdE5hbWUgPSBnZXRBcnRpc3ROYW1lKGFsYnVtLmFydGlzdCk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBrZXk9e2Ake2FsYnVtVGl0bGV9LSR7aWR4fWB9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJsZm0taXRlbS1jYXJkXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBuYXZpZ2F0ZVRvQWxidW0oYWxidW1UaXRsZSwgYXJ0aXN0TmFtZSwgZSl9XG4gICAgICAgICAgICB0aXRsZT17YFZpZXcgYWxidW0gXCIke2FsYnVtVGl0bGV9XCIgb24gVElEQUxgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGZtLWl0ZW0tcmFua1wiPiN7cmFua308L2Rpdj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGZtLWFsYnVtLWNvdmVyLWNvbnRhaW5lciBsZm0tY2xpY2thYmxlLWltYWdlXCJcbiAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IG5hdmlnYXRlVG9BbGJ1bShhbGJ1bVRpdGxlLCBhcnRpc3ROYW1lLCBlKX1cbiAgICAgICAgICAgICAgdGl0bGU9e2BWaWV3IGFsYnVtIFwiJHthbGJ1bVRpdGxlfVwiIG9uIFRJREFMYH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEFydHdvcmtJbWFnZVxuICAgICAgICAgICAgICAgIHR5cGU9XCJhbGJ1bVwiXG4gICAgICAgICAgICAgICAgbmFtZT17YWxidW1UaXRsZX1cbiAgICAgICAgICAgICAgICBhcnRpc3ROYW1lPXthcnRpc3ROYW1lfVxuICAgICAgICAgICAgICAgIGluaXRpYWxVcmw9e2ltZ1VybH1cbiAgICAgICAgICAgICAgICBhbHQ9e2FsYnVtVGl0bGV9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGZtLWFsYnVtLWNvdmVyXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsZm0taXRlbS1uYW1lIGxmbS1jbGlja2FibGUtdGV4dFwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBuYXZpZ2F0ZVRvQWxidW0oYWxidW1UaXRsZSwgYXJ0aXN0TmFtZSwgZSl9XG4gICAgICAgICAgICAgIHRpdGxlPXtgVmlldyBhbGJ1bSBcIiR7YWxidW1UaXRsZX1cIiBvbiBUSURBTGB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHthbGJ1bVRpdGxlfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxmbS1pdGVtLXN1YiBsZm0tY2xpY2thYmxlLXRleHRcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gbmF2aWdhdGVUb0FydGlzdChhcnRpc3ROYW1lLCBlKX1cbiAgICAgICAgICAgICAgdGl0bGU9e2BWaWV3IGFydGlzdCBcIiR7YXJ0aXN0TmFtZX1cIiBvbiBUSURBTGB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHthcnRpc3ROYW1lfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxmbS1pdGVtLXNjcm9iYmxlc1wiPntwbGF5Y291bnQudG9Mb2NhbGVTdHJpbmcoKX0gcGxheXM8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH0pfVxuICAgIDwvZGl2PlxuICApO1xufTtcbiIsICJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBMYXN0Rm1BcGkgfSBmcm9tIFwiLi4vYXBpL2xhc3RmbVwiO1xuaW1wb3J0IHsgTGFzdEZtQXJ0aXN0IH0gZnJvbSBcIi4uL2FwaS90eXBlc1wiO1xuaW1wb3J0IHsgbmF2aWdhdGVUb0FydGlzdCB9IGZyb20gXCIuLi9uYXZpZ2F0aW9uL3RpZGFsTmF2aWdhdGVcIjtcbmltcG9ydCB7IEFydHdvcmtJbWFnZSB9IGZyb20gXCIuL0FydHdvcmtJbWFnZVwiO1xuXG5pbnRlcmZhY2UgVG9wQXJ0aXN0c1RhYlByb3BzIHtcbiAgYXJ0aXN0czogTGFzdEZtQXJ0aXN0W107XG4gIGxvYWRpbmc6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBUb3BBcnRpc3RzVGFiOiBSZWFjdC5GQzxUb3BBcnRpc3RzVGFiUHJvcHM+ID0gKHsgYXJ0aXN0cywgbG9hZGluZyB9KSA9PiB7XG4gIGlmIChsb2FkaW5nICYmICFhcnRpc3RzLmxlbmd0aCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxmbS1jYXJkLWdyaWRcIj5cbiAgICAgICAge0FycmF5LmZyb20oeyBsZW5ndGg6IDEyIH0pLm1hcCgoXywgaSkgPT4gKFxuICAgICAgICAgIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9XCJsZm0taXRlbS1jYXJkIGxmbS1za2VsZXRvblwiIHN0eWxlPXt7IGhlaWdodDogXCIyNDBweFwiIH19IC8+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIGlmICghYXJ0aXN0cy5sZW5ndGgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZm0tZ2xhc3MtY2FyZCBsZm0tZW1wdHktc3RhdGVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZm0tZW1wdHktdGl0bGVcIj5ObyBBcnRpc3RzIEZvdW5kPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGZtLWVtcHR5LWRlc2NcIj5ObyBzY3JvYmJsZWQgYXJ0aXN0cyBmb3VuZCBmb3IgdGhlIHNlbGVjdGVkIHRpbWVmcmFtZS48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibGZtLWNhcmQtZ3JpZFwiPlxuICAgICAge2FydGlzdHMubWFwKChhcnRpc3QsIGlkeCkgPT4ge1xuICAgICAgICBjb25zdCByYW5rID0gYXJ0aXN0W1wiQGF0dHJcIl0/LnJhbmsgPyBwYXJzZUludChhcnRpc3RbXCJAYXR0clwiXS5yYW5rLCAxMCkgOiBpZHggKyAxO1xuICAgICAgICBjb25zdCBwbGF5Y291bnQgPSBwYXJzZUludChhcnRpc3QucGxheWNvdW50IHx8IFwiMFwiLCAxMCk7XG4gICAgICAgIGNvbnN0IGltZ1VybCA9IExhc3RGbUFwaS5nZXRJbWFnZVVybChhcnRpc3QuaW1hZ2UpO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAga2V5PXtgJHthcnRpc3QubmFtZX0tJHtpZHh9YH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImxmbS1pdGVtLWNhcmRcIlxuICAgICAgICAgICAgb25DbGljaz17KGUpID0+IG5hdmlnYXRlVG9BcnRpc3QoYXJ0aXN0Lm5hbWUsIGUpfVxuICAgICAgICAgICAgdGl0bGU9e2BWaWV3IGFydGlzdCBcIiR7YXJ0aXN0Lm5hbWV9XCIgb24gVElEQUxgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGZtLWl0ZW0tcmFua1wiPiN7cmFua308L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGZtLWF2YXRhci1jb250YWluZXIgbGZtLWNsaWNrYWJsZS1pbWFnZVwiPlxuICAgICAgICAgICAgICA8QXJ0d29ya0ltYWdlXG4gICAgICAgICAgICAgICAgdHlwZT1cImFydGlzdFwiXG4gICAgICAgICAgICAgICAgbmFtZT17YXJ0aXN0Lm5hbWV9XG4gICAgICAgICAgICAgICAgaW5pdGlhbFVybD17aW1nVXJsfVxuICAgICAgICAgICAgICAgIGFsdD17YXJ0aXN0Lm5hbWV9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGZtLWFydGlzdC1hdmF0YXJcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxmbS1pdGVtLW5hbWUgbGZtLWNsaWNrYWJsZS10ZXh0XCJcbiAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IG5hdmlnYXRlVG9BcnRpc3QoYXJ0aXN0Lm5hbWUsIGUpfVxuICAgICAgICAgICAgICB0aXRsZT17YFZpZXcgYXJ0aXN0IFwiJHthcnRpc3QubmFtZX1cIiBvbiBUSURBTGB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHthcnRpc3QubmFtZX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZm0taXRlbS1zY3JvYmJsZXNcIj57cGxheWNvdW50LnRvTG9jYWxlU3RyaW5nKCl9IHBsYXlzPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9KX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTGFzdEZtQXBpIH0gZnJvbSBcIi4uL2FwaS9sYXN0Zm1cIjtcbmltcG9ydCB7IGdldEFydGlzdE5hbWUsIGdldFRyYWNrTmFtZSwgTGFzdEZtVHJhY2sgfSBmcm9tIFwiLi4vYXBpL3R5cGVzXCI7XG5pbXBvcnQgeyBuYXZpZ2F0ZVRvQXJ0aXN0LCBuYXZpZ2F0ZVRvVHJhY2sgfSBmcm9tIFwiLi4vbmF2aWdhdGlvbi90aWRhbE5hdmlnYXRlXCI7XG5pbXBvcnQgeyBBcnR3b3JrSW1hZ2UgfSBmcm9tIFwiLi9BcnR3b3JrSW1hZ2VcIjtcblxuaW50ZXJmYWNlIFRvcFRyYWNrc1RhYlByb3BzIHtcbiAgdHJhY2tzOiBMYXN0Rm1UcmFja1tdO1xuICBsb2FkaW5nOiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgVG9wVHJhY2tzVGFiOiBSZWFjdC5GQzxUb3BUcmFja3NUYWJQcm9wcz4gPSAoeyB0cmFja3MsIGxvYWRpbmcgfSkgPT4ge1xuICBjb25zdCBtYXhQbGF5Y291bnQgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBpZiAoIXRyYWNrcy5sZW5ndGgpIHJldHVybiAxO1xuICAgIHJldHVybiBNYXRoLm1heCguLi50cmFja3MubWFwKCh0KSA9PiBwYXJzZUludCh0LnBsYXljb3VudCB8fCBcIjFcIiwgMTApKSk7XG4gIH0sIFt0cmFja3NdKTtcblxuICBpZiAobG9hZGluZyAmJiAhdHJhY2tzLmxlbmd0aCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxmbS10cmFjay1saXN0XCI+XG4gICAgICAgIHtBcnJheS5mcm9tKHsgbGVuZ3RoOiA4IH0pLm1hcCgoXywgaSkgPT4gKFxuICAgICAgICAgIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9XCJsZm0tdHJhY2stcm93IGxmbS1za2VsZXRvblwiIHN0eWxlPXt7IGhlaWdodDogXCI2NHB4XCIgfX0gLz5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgaWYgKCF0cmFja3MubGVuZ3RoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGZtLWdsYXNzLWNhcmQgbGZtLWVtcHR5LXN0YXRlXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGZtLWVtcHR5LXRpdGxlXCI+Tm8gVHJhY2tzIEZvdW5kPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGZtLWVtcHR5LWRlc2NcIj5ObyBzY3JvYmJsZWQgdHJhY2tzIGZvdW5kIGZvciB0aGUgc2VsZWN0ZWQgdGltZWZyYW1lLjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJsZm0tdHJhY2stbGlzdFwiPlxuICAgICAge3RyYWNrcy5tYXAoKHRyYWNrLCBpZHgpID0+IHtcbiAgICAgICAgY29uc3QgcmFuayA9IHRyYWNrW1wiQGF0dHJcIl0/LnJhbmsgPyBwYXJzZUludCh0cmFja1tcIkBhdHRyXCJdLnJhbmssIDEwKSA6IGlkeCArIDE7XG4gICAgICAgIGNvbnN0IHBsYXljb3VudCA9IHBhcnNlSW50KHRyYWNrLnBsYXljb3VudCB8fCBcIjBcIiwgMTApO1xuICAgICAgICBjb25zdCBiYXJXaWR0aCA9IE1hdGgubWF4KDgsIE1hdGgucm91bmQoKHBsYXljb3VudCAvIG1heFBsYXljb3VudCkgKiAxMDApKTtcbiAgICAgICAgY29uc3QgaW1nVXJsID0gTGFzdEZtQXBpLmdldEltYWdlVXJsKHRyYWNrLmltYWdlKTtcbiAgICAgICAgY29uc3QgdHJhY2tUaXRsZSA9IGdldFRyYWNrTmFtZSh0cmFjayk7XG4gICAgICAgIGNvbnN0IGFydGlzdE5hbWUgPSBnZXRBcnRpc3ROYW1lKHRyYWNrLmFydGlzdCk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBrZXk9e2Ake3RyYWNrVGl0bGV9LSR7aWR4fWB9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJsZm0tdHJhY2stcm93XCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBuYXZpZ2F0ZVRvVHJhY2sodHJhY2tUaXRsZSwgYXJ0aXN0TmFtZSwgZSl9XG4gICAgICAgICAgICB0aXRsZT17YFBsYXkgXCIke3RyYWNrVGl0bGV9XCIgb24gVElEQUxgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGZtLXRyYWNrLWxlZnRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZm0tdHJhY2stcmFua1wiPiN7cmFua308L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxmbS1jbGlja2FibGUtaW1hZ2VcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBuYXZpZ2F0ZVRvVHJhY2sodHJhY2tUaXRsZSwgYXJ0aXN0TmFtZSwgZSl9XG4gICAgICAgICAgICAgICAgdGl0bGU9e2BWaWV3IFwiJHt0cmFja1RpdGxlfVwiIG9uIFRJREFMYH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxBcnR3b3JrSW1hZ2VcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0cmFja1wiXG4gICAgICAgICAgICAgICAgICBuYW1lPXt0cmFja1RpdGxlfVxuICAgICAgICAgICAgICAgICAgYXJ0aXN0TmFtZT17YXJ0aXN0TmFtZX1cbiAgICAgICAgICAgICAgICAgIGluaXRpYWxVcmw9e2ltZ1VybH1cbiAgICAgICAgICAgICAgICAgIGFsdD17dHJhY2tUaXRsZX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxmbS10cmFjay1pbWFnZVwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGZtLXRyYWNrLWluZm9cIj5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsZm0tdHJhY2stdGl0bGUgbGZtLWNsaWNrYWJsZS10ZXh0XCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBuYXZpZ2F0ZVRvVHJhY2sodHJhY2tUaXRsZSwgYXJ0aXN0TmFtZSwgZSl9XG4gICAgICAgICAgICAgICAgICB0aXRsZT17YFZpZXcgXCIke3RyYWNrVGl0bGV9XCIgb24gVElEQUxgfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHt0cmFja1RpdGxlfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxmbS10cmFjay1hcnRpc3QgbGZtLWNsaWNrYWJsZS10ZXh0XCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBuYXZpZ2F0ZVRvQXJ0aXN0KGFydGlzdE5hbWUsIGUpfVxuICAgICAgICAgICAgICAgICAgdGl0bGU9e2BWaWV3IGFydGlzdCBcIiR7YXJ0aXN0TmFtZX1cIiBvbiBUSURBTGB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge2FydGlzdE5hbWV9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGZtLXRyYWNrLXJpZ2h0XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGZtLXNjcm9iYmxlLWJhci1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxmbS1zY3JvYmJsZS1jb3VudFwiPntwbGF5Y291bnQudG9Mb2NhbGVTdHJpbmcoKX0gcGxheXM8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxmbS1zY3JvYmJsZS1iYXJcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGZtLXNjcm9iYmxlLWJhci1maWxsXCIgc3R5bGU9e3sgd2lkdGg6IGAke2JhcldpZHRofSVgIH19IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGZtLXBsYXktYnRuXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gbmF2aWdhdGVUb1RyYWNrKHRyYWNrVGl0bGUsIGFydGlzdE5hbWUsIGUpfVxuICAgICAgICAgICAgICAgIHRpdGxlPXtgUGxheSBcIiR7dHJhY2tUaXRsZX1cIiBvbiBUSURBTGB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIiBmaWxsPVwiY3VycmVudENvbG9yXCI+XG4gICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTggNXYxNGwxMS03elwiIC8+XG4gICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9KX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTGFzdEZtQWxidW0sIExhc3RGbUFydGlzdCwgTGFzdEZtUmVjZW50VHJhY2ssIExhc3RGbVRyYWNrIH0gZnJvbSBcIi4uL2FwaS90eXBlc1wiO1xuaW1wb3J0IHsgUmVjZW50VHJhY2tzVGFiIH0gZnJvbSBcIi4vUmVjZW50VHJhY2tzVGFiXCI7XG5pbXBvcnQgeyBUb3BBbGJ1bXNUYWIgfSBmcm9tIFwiLi9Ub3BBbGJ1bXNUYWJcIjtcbmltcG9ydCB7IFRvcEFydGlzdHNUYWIgfSBmcm9tIFwiLi9Ub3BBcnRpc3RzVGFiXCI7XG5pbXBvcnQgeyBUb3BUcmFja3NUYWIgfSBmcm9tIFwiLi9Ub3BUcmFja3NUYWJcIjtcblxuaW50ZXJmYWNlIE92ZXJ2aWV3VGFiUHJvcHMge1xuICB0cmFja3M6IExhc3RGbVRyYWNrW107XG4gIGFydGlzdHM6IExhc3RGbUFydGlzdFtdO1xuICBhbGJ1bXM6IExhc3RGbUFsYnVtW107XG4gIHJlY2VudDogTGFzdEZtUmVjZW50VHJhY2tbXTtcbiAgbG9hZGluZzogYm9vbGVhbjtcbiAgb25TZWxlY3RUYWI6ICh0YWI6IFwib3ZlcnZpZXdcIiB8IFwidHJhY2tzXCIgfCBcImFydGlzdHNcIiB8IFwiYWxidW1zXCIgfCBcInJlY2VudFwiKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3QgT3ZlcnZpZXdUYWI6IFJlYWN0LkZDPE92ZXJ2aWV3VGFiUHJvcHM+ID0gKHtcbiAgdHJhY2tzLFxuICBhcnRpc3RzLFxuICBhbGJ1bXMsXG4gIHJlY2VudCxcbiAgbG9hZGluZyxcbiAgb25TZWxlY3RUYWIsXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiwgZ2FwOiBcIjMycHhcIiwgbWFyZ2luVG9wOiBcIjE2cHhcIiB9fT5cbiAgICAgIHsvKiBUb3AgU2VjdGlvbjogVG9wIFRyYWNrcyAmIFJlY2VudCBTY3JvYmJsZXMgc2lkZS1ieS1zaWRlIG9uIGRlc2t0b3AgKi99XG4gICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZ3JpZFwiLCBncmlkVGVtcGxhdGVDb2x1bW5zOiBcInJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDQyMHB4LCAxZnIpKVwiLCBnYXA6IFwiMjRweFwiIH19PlxuICAgICAgICB7LyogVG9wIFRyYWNrcyBDYXJkICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxmbS1nbGFzcy1jYXJkXCI+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLCBtYXJnaW5Cb3R0b206IFwiMTZweFwiIH19PlxuICAgICAgICAgICAgPGgyIHN0eWxlPXt7IG1hcmdpbjogMCwgZm9udFNpemU6IFwiMThweFwiLCBmb250V2VpZ2h0OiA3MDAgfX0+VG9wIFRyYWNrczwvaDI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImxmbS1idG4tYWN0aW9uXCIgb25DbGljaz17KCkgPT4gb25TZWxlY3RUYWIoXCJ0cmFja3NcIil9IHN0eWxlPXt7IHBhZGRpbmc6IFwiNHB4IDEwcHhcIiwgZm9udFNpemU6IFwiMTJweFwiIH19PlxuICAgICAgICAgICAgICBWaWV3IEFsbFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPFRvcFRyYWNrc1RhYiB0cmFja3M9e3RyYWNrcy5zbGljZSgwLCA1KX0gbG9hZGluZz17bG9hZGluZ30gLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIExpdmUgUmVjZW50IFNjcm9iYmxlcyBDYXJkICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxmbS1nbGFzcy1jYXJkXCI+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLCBtYXJnaW5Cb3R0b206IFwiMTZweFwiIH19PlxuICAgICAgICAgICAgPGgyIHN0eWxlPXt7IG1hcmdpbjogMCwgZm9udFNpemU6IFwiMThweFwiLCBmb250V2VpZ2h0OiA3MDAgfX0+TGl2ZSBBY3Rpdml0eTwvaDI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImxmbS1idG4tYWN0aW9uXCIgb25DbGljaz17KCkgPT4gb25TZWxlY3RUYWIoXCJyZWNlbnRcIil9IHN0eWxlPXt7IHBhZGRpbmc6IFwiNHB4IDEwcHhcIiwgZm9udFNpemU6IFwiMTJweFwiIH19PlxuICAgICAgICAgICAgICBWaWV3IEFsbFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPFJlY2VudFRyYWNrc1RhYiB0cmFja3M9e3JlY2VudC5zbGljZSgwLCA1KX0gbG9hZGluZz17bG9hZGluZ30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIFRvcCBBcnRpc3RzIENhcmQgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxmbS1nbGFzcy1jYXJkXCI+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiwgbWFyZ2luQm90dG9tOiBcIjE2cHhcIiB9fT5cbiAgICAgICAgICA8aDIgc3R5bGU9e3sgbWFyZ2luOiAwLCBmb250U2l6ZTogXCIxOHB4XCIsIGZvbnRXZWlnaHQ6IDcwMCB9fT5Ub3AgQXJ0aXN0czwvaDI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJsZm0tYnRuLWFjdGlvblwiIG9uQ2xpY2s9eygpID0+IG9uU2VsZWN0VGFiKFwiYXJ0aXN0c1wiKX0gc3R5bGU9e3sgcGFkZGluZzogXCI0cHggMTBweFwiLCBmb250U2l6ZTogXCIxMnB4XCIgfX0+XG4gICAgICAgICAgICBWaWV3IEFsbFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPFRvcEFydGlzdHNUYWIgYXJ0aXN0cz17YXJ0aXN0cy5zbGljZSgwLCA2KX0gbG9hZGluZz17bG9hZGluZ30gLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogVG9wIEFsYnVtcyBDYXJkICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZm0tZ2xhc3MtY2FyZFwiPlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIG1hcmdpbkJvdHRvbTogXCIxNnB4XCIgfX0+XG4gICAgICAgICAgPGgyIHN0eWxlPXt7IG1hcmdpbjogMCwgZm9udFNpemU6IFwiMThweFwiLCBmb250V2VpZ2h0OiA3MDAgfX0+VG9wIEFsYnVtczwvaDI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJsZm0tYnRuLWFjdGlvblwiIG9uQ2xpY2s9eygpID0+IG9uU2VsZWN0VGFiKFwiYWxidW1zXCIpfSBzdHlsZT17eyBwYWRkaW5nOiBcIjRweCAxMHB4XCIsIGZvbnRTaXplOiBcIjEycHhcIiB9fT5cbiAgICAgICAgICAgIFZpZXcgQWxsXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8VG9wQWxidW1zVGFiIGFsYnVtcz17YWxidW1zLnNsaWNlKDAsIDYpfSBsb2FkaW5nPXtsb2FkaW5nfSAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIiwgImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IExhc3RGbUFwaSB9IGZyb20gXCIuLi9hcGkvbGFzdGZtXCI7XG5pbXBvcnQgeyBMYXN0Rm1Vc2VyIH0gZnJvbSBcIi4uL2FwaS90eXBlc1wiO1xuXG5pbnRlcmZhY2UgUHJvZmlsZUhlYWRlclByb3BzIHtcbiAgdXNlcj86IExhc3RGbVVzZXI7XG4gIGxvYWRpbmc/OiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgUHJvZmlsZUhlYWRlcjogUmVhY3QuRkM8UHJvZmlsZUhlYWRlclByb3BzPiA9ICh7IHVzZXIgfSkgPT4ge1xuICBjb25zdCBhdmF0YXJVcmwgPSB1c2VyPy5pbWFnZSA/IExhc3RGbUFwaS5nZXRJbWFnZVVybCh1c2VyLmltYWdlKSA6IFwiXCI7XG5cbiAgY29uc3QgZm9ybWF0TnVtYmVyID0gKHZhbD86IHN0cmluZyB8IG51bWJlcikgPT4ge1xuICAgIGlmICghdmFsKSByZXR1cm4gXCIwXCI7XG4gICAgY29uc3QgbnVtID0gdHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIiA/IHBhcnNlSW50KHZhbCwgMTApIDogdmFsO1xuICAgIHJldHVybiBpc05hTihudW0pID8gXCIwXCIgOiBudW0udG9Mb2NhbGVTdHJpbmcoKTtcbiAgfTtcblxuICBjb25zdCBtZW1iZXJTaW5jZSA9IHVzZXI/LnJlZ2lzdGVyZWQ/LnVuaXh0aW1lXG4gICAgPyBuZXcgRGF0ZShwYXJzZUludCh1c2VyLnJlZ2lzdGVyZWQudW5peHRpbWUsIDEwKSAqIDEwMDApLnRvTG9jYWxlRGF0ZVN0cmluZyh1bmRlZmluZWQsIHtcbiAgICAgICAgeWVhcjogXCJudW1lcmljXCIsXG4gICAgICAgIG1vbnRoOiBcInNob3J0XCIsXG4gICAgICB9KVxuICAgIDogXCJcIjtcblxuICBjb25zdCB1c2VyVXJsID0gdXNlcj8udXJsIHx8ICh1c2VyPy5uYW1lID8gYGh0dHBzOi8vd3d3Lmxhc3QuZm0vdXNlci8ke3VzZXIubmFtZX1gIDogXCJcIik7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImxmbS1nbGFzcy1jYXJkIGxmbS1wcm9maWxlLWhlYWRlclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZm0tcHJvZmlsZS1sZWZ0XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGZtLWF2YXRhci13cmFwcGVyXCI+XG4gICAgICAgICAge2F2YXRhclVybCA/IChcbiAgICAgICAgICAgIDxpbWcgc3JjPXthdmF0YXJVcmx9IGFsdD17dXNlcj8ubmFtZSB8fCBcIlVzZXIgQXZhdGFyXCJ9IGNsYXNzTmFtZT1cImxmbS1hdmF0YXJcIiAvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxmbS1hdmF0YXJcIlxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMjRweFwiLFxuICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDcwMCxcbiAgICAgICAgICAgICAgICBjb2xvcjogXCJ2YXIoLS1sZm0tYWNjZW50LWxhdmVuZGVyKVwiLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7dXNlcj8ubmFtZSA/IHVzZXIubmFtZVswXS50b1VwcGVyQ2FzZSgpIDogXCJcIn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGZtLXByb2ZpbGUtaW5mb1wiPlxuICAgICAgICAgIDxoMT5cbiAgICAgICAgICAgIHt1c2VyVXJsID8gKFxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGhyZWY9e3VzZXJVcmx9XG4gICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsZm0tdXNlcm5hbWUtbGlua1wiXG4gICAgICAgICAgICAgICAgdGl0bGU9XCJWaWV3IExhc3QuZm0gcHJvZmlsZSBpbiBicm93c2VyXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxzcGFuPnt1c2VyPy5uYW1lIHx8IFwiTGFzdC5mbSBVc2VyXCJ9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxNFwiXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxNFwiXG4gICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIyXCJcbiAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsIHZlcnRpY2FsQWxpZ246IFwibWlkZGxlXCIsIG9wYWNpdHk6IDAuNyB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTggMTN2NmEyIDIgMCAwIDEtMiAySDVhMiAyIDAgMCAxLTItMlY4YTIgMiAwIDAgMSAyLTJoNlwiIC8+XG4gICAgICAgICAgICAgICAgICA8cG9seWxpbmUgcG9pbnRzPVwiMTUgMyAyMSAzIDIxIDlcIiAvPlxuICAgICAgICAgICAgICAgICAgPGxpbmUgeDE9XCIxMFwiIHkxPVwiMTRcIiB4Mj1cIjIxXCIgeTI9XCIzXCIgLz5cbiAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPHNwYW4+e3VzZXI/Lm5hbWUgfHwgXCJMYXN0LmZtIFVzZXJcIn08L3NwYW4+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvaDE+XG4gICAgICAgICAge21lbWJlclNpbmNlICYmIDxkaXYgY2xhc3NOYW1lPVwibGZtLXByb2ZpbGUtc3VidGl0bGVcIj5NZW1iZXIgc2luY2Uge21lbWJlclNpbmNlfTwvZGl2Pn1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZm0taGVhZGVyLXN0YXRzXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGZtLXN0YXQtYm94XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZm0tc3RhdC1udW1cIj57Zm9ybWF0TnVtYmVyKHVzZXI/LnBsYXljb3VudCl9PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZm0tc3RhdC1sYWJlbFwiPlNjcm9iYmxlczwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7dXNlcj8uYXJ0aXN0X2NvdW50ICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxmbS1zdGF0LWJveFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZm0tc3RhdC1udW1cIj57Zm9ybWF0TnVtYmVyKHVzZXIuYXJ0aXN0X2NvdW50KX08L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGZtLXN0YXQtbGFiZWxcIj5BcnRpc3RzPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG5cbiAgICAgICAge3VzZXI/LmFsYnVtX2NvdW50ICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxmbS1zdGF0LWJveFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZm0tc3RhdC1udW1cIj57Zm9ybWF0TnVtYmVyKHVzZXIuYWxidW1fY291bnQpfTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZm0tc3RhdC1sYWJlbFwiPkFsYnVtczwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuXG4gICAgICAgIHt1c2VyPy50cmFja19jb3VudCAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZm0tc3RhdC1ib3hcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGZtLXN0YXQtbnVtXCI+e2Zvcm1hdE51bWJlcih1c2VyLnRyYWNrX2NvdW50KX08L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGZtLXN0YXQtbGFiZWxcIj5UcmFja3M8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbiIsICJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBMYXN0Rm1UaW1lUGVyaW9kIH0gZnJvbSBcIi4uL2FwaS90eXBlc1wiO1xuXG5pbnRlcmZhY2UgVGltZWZyYW1lVGFic1Byb3BzIHtcbiAgcGVyaW9kOiBMYXN0Rm1UaW1lUGVyaW9kO1xuICBvbkNoYW5nZTogKHBlcmlvZDogTGFzdEZtVGltZVBlcmlvZCkgPT4gdm9pZDtcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xufVxuXG5jb25zdCBQRVJJT0RTOiB7IGlkOiBMYXN0Rm1UaW1lUGVyaW9kOyBsYWJlbDogc3RyaW5nIH1bXSA9IFtcbiAgeyBpZDogXCI3ZGF5XCIsIGxhYmVsOiBcIjcgRGF5c1wiIH0sXG4gIHsgaWQ6IFwiMW1vbnRoXCIsIGxhYmVsOiBcIjMwIERheXNcIiB9LFxuICB7IGlkOiBcIjNtb250aFwiLCBsYWJlbDogXCIzIE1vbnRoc1wiIH0sXG4gIHsgaWQ6IFwiNm1vbnRoXCIsIGxhYmVsOiBcIjYgTW9udGhzXCIgfSxcbiAgeyBpZDogXCIxMm1vbnRoXCIsIGxhYmVsOiBcIjEgWWVhclwiIH0sXG4gIHsgaWQ6IFwib3ZlcmFsbFwiLCBsYWJlbDogXCJBbGwgVGltZVwiIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgVGltZWZyYW1lVGFiczogUmVhY3QuRkM8VGltZWZyYW1lVGFic1Byb3BzPiA9ICh7IHBlcmlvZCwgb25DaGFuZ2UsIGRpc2FibGVkIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImxmbS10aW1lZnJhbWUtc2VsZWN0b3JcIj5cbiAgICAgIHtQRVJJT0RTLm1hcCgocCkgPT4gKFxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAga2V5PXtwLmlkfVxuICAgICAgICAgIGNsYXNzTmFtZT17YGxmbS10aW1lLWJ0biAke3BlcmlvZCA9PT0gcC5pZCA/IFwiYWN0aXZlXCIgOiBcIlwifWB9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4gb25DaGFuZ2UocC5pZCl9XG4gICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICA+XG4gICAgICAgICAge3AubGFiZWx9XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIiwgImltcG9ydCB7IEx1bmFVbmxvYWRzIH0gZnJvbSBcIkBsdW5hL2NvcmVcIjtcbmltcG9ydCB7IG9ic2VydmUsIHJlZHV4IH0gZnJvbSBcIkBsdW5hL2xpYlwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJAbHVuYS91aVwiO1xuXG5jb25zdCBUSURBTF9MT0dPX1NWRyA9IGBcbjxzdmcgdmlld0JveD1cIjAgMCAyNCAyNFwiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBjbGFzcz1cImxmbS10aWRhbC1sb2dvLWZpeGVkXCI+XG4gIDxwYXRoIGQ9XCJNMTIuMDEyIDMuOTkyTDguMDA4IDcuOTk2IDQuMDA0IDMuOTkyIDAgNy45OTYgNC4wMDQgMTJsNC4wMDQtNC4wMDRMMTIuMDEyIDEybC00LjAwNCA0LjAwNCA0LjAwNCA0LjAwNCA0LjAwNC00LjAwNEwxMi4wMTIgMTJsNC4wMDQtNC4wMDQtNC4wMDQtNC4wMDR6TTE2LjA0MiA3Ljk5NmwzLjk3OS0zLjk3OUwyNCA3Ljk5NmwtMy45NzkgMy45Nzl6XCIvPlxuPC9zdmc+XG5gO1xuXG5jb25zdCBNVVNJQ19JQ09OX1NWRyA9IGBcbjxzdmcgdmlld0JveD1cIjAgMCAyNCAyNFwiIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBjbGFzcz1cImxmbS1tdXNpYy1pY29uLWZpeGVkXCI+XG4gIDxwYXRoIGQ9XCJNMTIgM3YxMC41NWMtLjU5LS4zNC0xLjI3LS41NS0yLS41NS0yLjIxIDAtNCAxLjc5LTQgNHMxLjc5IDQgNCA0IDQtMS43OSA0LTRWN2g0VjNoLTZ6XCIvPlxuPC9zdmc+XG5gO1xuXG5jb25zdCBMQVNURk1fTE9HT19TVkcgPSBgXG48c3ZnIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIiBmaWxsPVwiY3VycmVudENvbG9yXCI+XG4gIDxwYXRoIGQ9XCJNMTAuNTg0IDE3LjIxbC0uODgtMi4zOTJzLTEuNDMgMS41OTQtMy41NzMgMS41OTRjLTEuODk3IDAtMy4yNDQtMS42NDktMy4yNDQtNC4yODggMC0zLjM4MiAxLjcwNC00LjU5MSAzLjM4MS00LjU5MSAyLjQyIDAgMy4xODkgMS41NjcgMy44NDkgMy41NzRsLjg4IDIuNzQ5Yy44OCAyLjY2NiAyLjUyOSA0LjgxIDcuMjg1IDQuODEgMy40MDkgMCA1LjcxOC0xLjA0NCA1LjcxOC0zLjc5MyAwLTIuMjI3LTEuMjY1LTMuMzgxLTMuNjMtMy45MzFsLTEuNzU4LS4zODVjLTEuMjEtLjI3NS0xLjU2Ny0uNzctMS41NjctMS41OTUgMC0uOTM0Ljc0Mi0xLjQ4NCAxLjk1Mi0xLjQ4NCAxLjMyIDAgMi4wMzQuNDk1IDIuMTQ0IDEuNjc3bDIuNzQ5LS4zM2MtLjIyLTIuNDc0LTEuOTI0LTMuNDkyLTQuNzI5LTMuNDkyLTIuNDc0IDAtNC44OTMuOTM1LTQuODkzIDMuOTMyIDAgMS44Ny45MDcgMy4wNTEgMy4xODkgMy42MDFsMS44Ny40NGMxLjQwMi4zMyAxLjg2OS45MDcgMS44NjkgMS43MDQgMCAxLjAxNy0uOTkgMS40My0yLjg2IDEuNDMtMi43NzYgMC0zLjkzLTEuNDU3LTQuNTktMy40NjRsLS45MDctMi43NWMtMS4xNTUtMy41NzMtMi45OTctNC44OTMtNi42NTMtNC44OTNDMi4xNDQgNS4zMzMgMCA3Ljg5IDAgMTIuMjMzYzAgNC4xOCAyLjE0NCA2LjQzNCA1Ljk5MyA2LjQzNCAzLjEwNiAwIDQuNTkxLTEuNDU3IDQuNTkxLTEuNDU3elwiLz5cbjwvc3ZnPlxuYDtcblxuZXhwb3J0IGNvbnN0IGluaXRTaWRlYmFyQnV0dG9uID0gKHVubG9hZHM6IEx1bmFVbmxvYWRzLCBzdGF0c1BhZ2U6IFBhZ2UpID0+IHtcbiAgY29uc3QgYnV0dG9uSWQgPSBcImx1bmEtc2lkZWJhci1sYXN0Zm1cIjtcblxuICBjb25zdCBpc0N1cnJlbnRTdGF0c1BhZ2UgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2ggPT09IFwiP0xhc3RmbVN0YXRzXCI7XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlQWN0aXZlU3RhdGUgPSAoaXNTdGF0c1BhZ2U6IGJvb2xlYW4pID0+IHtcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChidXR0b25JZCk7XG4gICAgaWYgKCFidG4pIHJldHVybjtcbiAgICBpZiAoaXNTdGF0c1BhZ2UpIHtcbiAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgYnRuLnNldEF0dHJpYnV0ZShcImFyaWEtY3VycmVudFwiLCBcInBhZ2VcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgYnRuLnJlbW92ZUF0dHJpYnV0ZShcImFyaWEtY3VycmVudFwiKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZml4U2lkZWJhckljb25zID0gKCkgPT4ge1xuICAgIC8vIDEuIEVuc3VyZSB0b3AgbG9nbyBpcyBUaWRhbCBsb2dvIChyaWdodC1zaWRlIHVwKVxuICAgIGNvbnN0IHRpZGFsTG9nb0VsZW0gPVxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oJ1thcmlhLWxhYmVsPVwiVElEQUxcIl0nKSB8fFxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oJ1tkYXRhLXRlc3Q9XCJzaWRlYmFyLWxvZ29cIl0nKTtcblxuICAgIGlmICh0aWRhbExvZ29FbGVtKSB7XG4gICAgICBjb25zdCBzdmcgPSB0aWRhbExvZ29FbGVtLnF1ZXJ5U2VsZWN0b3IoXCJzdmdcIik7XG4gICAgICBpZiAoc3ZnKSB7XG4gICAgICAgIHN2Zy5vdXRlckhUTUwgPSBUSURBTF9MT0dPX1NWRztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyAyLiBFbnN1cmUgTXVzaWMgbmF2aWdhdGlvbiBpdGVtIHVzZXMgYSBtdXNpYyBpY29uXG4gICAgY29uc3QgbXVzaWNJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oJ1tkYXRhLXRlc3Q9XCJzaWRlYmFyLW11c2ljXCJdJyk7XG4gICAgaWYgKG11c2ljSXRlbSkge1xuICAgICAgY29uc3Qgc3ZnID0gbXVzaWNJdGVtLnF1ZXJ5U2VsZWN0b3IoXCJzdmdcIik7XG4gICAgICBpZiAoc3ZnICYmICFzdmcuY2xhc3NMaXN0LmNvbnRhaW5zKFwibGZtLW11c2ljLWljb24tZml4ZWRcIikpIHtcbiAgICAgICAgc3ZnLm91dGVySFRNTCA9IE1VU0lDX0lDT05fU1ZHO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBpbnNlcnRCdXR0b24gPSAoKSA9PiB7XG4gICAgZml4U2lkZWJhckljb25zKCk7XG5cbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYnV0dG9uSWQpKSByZXR1cm47XG5cbiAgICAvLyBGaW5kIHRoZSBGZWVkIG9yIEV4cGxvcmUgc2lkZWJhciBpdGVtIHRvIGFuY2hvciBhZnRlclxuICAgIGNvbnN0IGFuY2hvckVsZW0gPVxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oJ1tkYXRhLXRlc3Q9XCJzaWRlYmFyLWZlZWRcIl0nKSB8fFxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oJ1tkYXRhLXRlc3Q9XCJzaWRlYmFyLWV4cGxvcmVcIl0nKSB8fFxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oJ1tkYXRhLXRlc3Q9XCJzaWRlYmFyLW11c2ljXCJdJyk7XG5cbiAgICBpZiAoIWFuY2hvckVsZW0pIHJldHVybjtcblxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBhcmUgTk9UIHRvdWNoaW5nIHRoZSB0b3AgbG9nb1xuICAgIGlmIChhbmNob3JFbGVtLmNsb3Nlc3QoXCJoZWFkZXJcIikgfHwgYW5jaG9yRWxlbS5nZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIpID09PSBcIlRJREFMXCIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBDcmVhdGUgY3VzdG9tIHNpZGViYXIgYnV0dG9uIG1hdGNoaW5nIFRpZGFsJ3MgbmF0aXZlIG5hdmlnYXRpb24gaXRlbXNcbiAgICBjb25zdCBidXR0b25FbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgYnV0dG9uRWxlbS5pZCA9IGJ1dHRvbklkO1xuICAgIGJ1dHRvbkVsZW0uY2xhc3NOYW1lID0gYCR7YW5jaG9yRWxlbS5jbGFzc05hbWV9IGxmbS1zaWRlYmFyLWl0ZW1gO1xuICAgIGJ1dHRvbkVsZW0uc2V0QXR0cmlidXRlKFwiZGF0YS10ZXN0XCIsIFwic2lkZWJhci1sYXN0Zm0tc3RhdHNcIik7XG4gICAgYnV0dG9uRWxlbS5ocmVmID0gXCIjXCI7XG4gICAgYnV0dG9uRWxlbS50aXRsZSA9IFwiTGFzdC5mbSBTdGF0c1wiO1xuICAgIGJ1dHRvbkVsZW0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICBidXR0b25FbGVtLnJlbW92ZUF0dHJpYnV0ZShcImFyaWEtY3VycmVudFwiKTtcblxuICAgIGJ1dHRvbkVsZW0uaW5uZXJIVE1MID0gYFxuICAgICAgPHNwYW4gY2xhc3M9XCJsZm0tc2lkZWJhci1pY29uXCI+JHtMQVNURk1fTE9HT19TVkd9PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJsZm0tc2lkZWJhci1sYWJlbFwiPkxhc3QuZm0gU3RhdHM8L3NwYW4+XG4gICAgYDtcblxuICAgIGJ1dHRvbkVsZW0ub25jbGljayA9IChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgc3RhdHNQYWdlLm9wZW4oKTtcbiAgICB9O1xuXG4gICAgLy8gSWYgYW5jaG9yRWxlbSBpcyBpbnNpZGUgYW4gbGksIHdyYXAgYnV0dG9uIGluIGxpIGFuZCBpbnNlcnQgYWZ0ZXIgYW5jaG9yJ3MgbGlcbiAgICBjb25zdCBhbmNob3JMaSA9IGFuY2hvckVsZW0uY2xvc2VzdChcImxpXCIpO1xuICAgIGlmIChhbmNob3JMaSAmJiBhbmNob3JMaS5wYXJlbnRFbGVtZW50KSB7XG4gICAgICBjb25zdCBsaVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICBsaVdyYXBwZXIuYXBwZW5kQ2hpbGQoYnV0dG9uRWxlbSk7XG4gICAgICBhbmNob3JMaS5wYXJlbnRFbGVtZW50Lmluc2VydEJlZm9yZShsaVdyYXBwZXIsIGFuY2hvckxpLm5leHRTaWJsaW5nKTtcbiAgICB9IGVsc2UgaWYgKGFuY2hvckVsZW0ucGFyZW50RWxlbWVudCkge1xuICAgICAgYW5jaG9yRWxlbS5wYXJlbnRFbGVtZW50Lmluc2VydEJlZm9yZShidXR0b25FbGVtLCBhbmNob3JFbGVtLm5leHRTaWJsaW5nKTtcbiAgICB9XG5cbiAgICAvLyBTZXQgaW5pdGlhbCBhY3RpdmUgc3RhdGUgYWNjdXJhdGVseVxuICAgIHVwZGF0ZUFjdGl2ZVN0YXRlKGlzQ3VycmVudFN0YXRzUGFnZSgpKTtcblxuICAgIHVubG9hZHMuYWRkKCgpID0+IHtcbiAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYnV0dG9uSWQpO1xuICAgICAgaWYgKGVsPy5wYXJlbnRFbGVtZW50Py50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09IFwibGlcIikge1xuICAgICAgICBlbC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWw/LnJlbW92ZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIC8vIE9ic2VydmUgZm9yIFRpZGFsIHNpZGViYXIgaXRlbXMgYW5kIGxvZ29zXG4gIG9ic2VydmU8SFRNTEVsZW1lbnQ+KFxuICAgIHVubG9hZHMsXG4gICAgJ1tkYXRhLXRlc3Q9XCJzaWRlYmFyLWZlZWRcIl0sIFtkYXRhLXRlc3Q9XCJzaWRlYmFyLWV4cGxvcmVcIl0sIFtkYXRhLXRlc3Q9XCJzaWRlYmFyLW11c2ljXCJdLCBbYXJpYS1sYWJlbD1cIlRJREFMXCJdJyxcbiAgICAoKSA9PiB7XG4gICAgICBpbnNlcnRCdXR0b24oKTtcbiAgICAgIGZpeFNpZGViYXJJY29ucygpO1xuICAgIH1cbiAgKTtcblxuICAvLyBJbnRlcmNlcHQgbmF2aWdhdGlvbiBldmVudHMgdG8gdXBkYXRlIHNpZGViYXIgYnV0dG9uIGFjdGl2ZSBzdGF0ZSAmIGZpeCBpY29uc1xuICByZWR1eC5pbnRlcmNlcHQoXCJyb3V0ZXIvTkFWSUdBVEVEXCIsIHVubG9hZHMsIChwYXlsb2FkOiB7IHNlYXJjaD86IHN0cmluZyB9KSA9PiB7XG4gICAgY29uc3QgaXNTdGF0c1BhZ2UgPSBwYXlsb2FkPy5zZWFyY2ggPT09IFwiP0xhc3RmbVN0YXRzXCI7XG4gICAgdXBkYXRlQWN0aXZlU3RhdGUoaXNTdGF0c1BhZ2UpO1xuICAgIGZpeFNpZGViYXJJY29ucygpO1xuICB9KTtcbn07XG4iLCAiLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgIFRpZGFMdW5hIExhc3QuZm0gU3RhdHMgUGx1Z2luIC0gU3R5bGVzaGVldFxuICAgTWF0ZXJpYWwgVUkgKE1VSSkgRGVzaWduIExhbmd1YWdlICYgTGF2ZW5kZXIgVGhlbWVcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzppdGFsLHdnaHRAMCwzMDA7MCw0MDA7MCw1MDA7MCw3MDA7MSw0MDAmZmFtaWx5PVJvYm90bytNb25vOndnaHRANDAwOzUwMDs3MDAmZGlzcGxheT1zd2FwJyk7XG5cbjpyb290IHtcbiAgLS1sZm0tcHJpbWFyeTogI2UzMWIyMztcbiAgLS1sZm0tcHJpbWFyeS1ob3ZlcjogI2ZmMzM0YjtcbiAgLS1sZm0tYWNjZW50LWxhdmVuZGVyOiAjYzhiNmZmO1xuICAtLWxmbS1hY2NlbnQtbGF2ZW5kZXItcGluazogI2UwYWFmZjtcbiAgLS1sZm0tYWNjZW50LXBpbmstYmFyOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNkOGE0ZjAsICNmOGE1YzIpO1xuICAtLWxmbS1iZy1nbGFzczogcmdiYSgxOCwgMTgsIDI2LCAwLjU1KTtcbiAgLS1sZm0tYmctY2FyZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA0KTtcbiAgLS1sZm0tYmctY2FyZC1ob3ZlcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA4KTtcbiAgLS1sZm0tYm9yZGVyLWdsYXNzOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDgpO1xuICAtLWxmbS1ib3JkZXItZ2xhc3MtaG92ZXI6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNik7XG4gIC0tbGZtLXRleHQtcHJpbWFyeTogI2ZmZmZmZjtcbiAgLS1sZm0tdGV4dC1zZWNvbmRhcnk6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcbiAgLS1sZm0tdGV4dC1tdXRlZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ1KTtcblxuICAvKiBNYXRlcmlhbCBVSSBUeXBvZ3JhcGh5IFN5c3RlbSAqL1xuICAtLWxmbS1mb250LWZhbWlseTogXCJSb2JvdG9cIiwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIC0tbGZtLWZvbnQtbW9ubzogXCJSb2JvdG8gTW9ub1wiLCBcIlNGTW9uby1SZWd1bGFyXCIsIENvbnNvbGFzLCBcIkxpYmVyYXRpb24gTW9ub1wiLCBNZW5sbywgQ291cmllciwgbW9ub3NwYWNlO1xufVxuXG4vKiBCYXNlIEhlYWRpbmdzICovXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWxmbS1mb250LWZhbWlseSkgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMDFlbSAhaW1wb3J0YW50O1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4vKiBDb250YWluZXIgJiBQYWdlIExheW91dCAqL1xuLmxmbS1zdGF0cy1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMzgwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiA4cHggMzJweCA4MHB4IDMycHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGNvbG9yOiB2YXIoLS1sZm0tdGV4dC1wcmltYXJ5KTtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWxmbS1mb250LWZhbWlseSk7XG4gIGFuaW1hdGlvbjogbGZtLWZhZGUtaW4gMC4zcyBlYXNlLW91dDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuQGtleWZyYW1lcyBsZm0tZmFkZS1pbiB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDhweCk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG59XG5cbi8qIEdsYXNzIENhcmQgKi9cbi5sZm0tZ2xhc3MtY2FyZCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWxmbS1iZy1nbGFzcyk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigyMHB4KTtcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMjBweCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWxmbS1ib3JkZXItZ2xhc3MpO1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBwYWRkaW5nOiAyNHB4O1xuICBib3gtc2hhZG93OiAwIDhweCAzMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjM3KTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5sZm0tZ2xhc3MtY2FyZDo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCB0cmFuc3BhcmVudCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KSwgdHJhbnNwYXJlbnQpO1xufVxuXG4ubGZtLWdsYXNzLWNhcmQ6aG92ZXIge1xuICBib3JkZXItY29sb3I6IHZhcigtLWxmbS1ib3JkZXItZ2xhc3MtaG92ZXIpO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDU1KTtcbn1cblxuLyogSGVhZGVyICYgUHJvZmlsZSBTZWN0aW9uICovXG4ubGZtLXByb2ZpbGUtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDI0cHg7XG4gIG1hcmdpbi1ib3R0b206IDI4cHg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLmxmbS1wcm9maWxlLWxlZnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDIwcHg7XG59XG5cbi5sZm0tYXZhdGFyLXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcGFkZGluZzogMDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZmxleC1zaHJpbms6IDA7XG59XG5cbi5sZm0tYXZhdGFyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KTtcbn1cblxuLmxmbS1wcm9maWxlLWluZm8gaDEge1xuICBtYXJnaW46IDAgMCA0cHggMDtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWxmbS1mb250LWZhbWlseSkgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMDJlbSAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogMS4yO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4ubGZtLXVzZXJuYW1lLWxpbmsge1xuICBjb2xvcjogdmFyKC0tbGZtLXRleHQtcHJpbWFyeSk7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzIGVhc2U7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1sZm0tZm9udC1mYW1pbHkpICFpbXBvcnRhbnQ7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5sZm0tdXNlcm5hbWUtbGluazpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS1sZm0tYWNjZW50LWxhdmVuZGVyKTtcbn1cblxuLmxmbS1wcm9maWxlLXN1YnRpdGxlIHtcbiAgY29sb3I6IHZhcigtLWxmbS10ZXh0LW11dGVkKTtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWxmbS1mb250LWZhbWlseSk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luLXRvcDogMnB4O1xufVxuXG4vKiBQcm9maWxlIFN0YXQgUGlsbHMgKi9cbi5sZm0taGVhZGVyLXN0YXRzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxNnB4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5sZm0tc3RhdC1ib3gge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wOCk7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIHBhZGRpbmc6IDEycHggMjBweDtcbiAgbWluLXdpZHRoOiAxMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubGZtLXN0YXQtYm94IC5sZm0tc3RhdC1udW0ge1xuICBmb250LWZhbWlseTogdmFyKC0tbGZtLWZvbnQtZmFtaWx5KTtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbn1cblxuLmxmbS1zdGF0LWJveCAubGZtLXN0YXQtbGFiZWwge1xuICBmb250LWZhbWlseTogdmFyKC0tbGZtLWZvbnQtZmFtaWx5KSAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDExcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiB2YXIoLS1sZm0tdGV4dC1tdXRlZCk7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2UgIWltcG9ydGFudDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDhlbSAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiA0cHg7XG59XG5cbi8qIFRpbWVmcmFtZSBCYXIgJiBOYXZpZ2F0aW9uIFRhYnMgKi9cbi5sZm0tY29udHJvbHMtYmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDE2cHg7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLmxmbS1uYXYtdGFicyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogOHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBwYWRkaW5nOiA0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNik7XG59XG5cbi5sZm0tdGFiLWJ0biB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiB2YXIoLS1sZm0tdGV4dC1zZWNvbmRhcnkpO1xuICBmb250LWZhbWlseTogdmFyKC0tbGZtLWZvbnQtZmFtaWx5KSAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAxZW0gIWltcG9ydGFudDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcbiAgcGFkZGluZzogOHB4IDE4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbn1cblxuLmxmbS10YWItYnRuOmhvdmVyIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNik7XG59XG5cbi8qIExlZnQgdGFiIGJ1dHRvbiBhY3RpdmUgc3R5bGUgbWF0Y2hpbmcgcmlnaHQgdGltZWZyYW1lIGJ1dHRvbnMgKi9cbi5sZm0tdGFiLWJ0bi5hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTIpICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB2YXIoLS1sZm0tYWNjZW50LWxhdmVuZGVyKSAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmxmbS10aW1lZnJhbWUtc2VsZWN0b3Ige1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDZweDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgcGFkZGluZzogNHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDYpO1xufVxuXG4ubGZtLXRpbWUtYnRuIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IHZhcigtLWxmbS10ZXh0LW11dGVkKTtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWxmbS1mb250LWZhbWlseSkgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiA2cHggMTJweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG59XG5cbi5sZm0tdGltZS1idG46aG92ZXIge1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLmxmbS10aW1lLWJ0bi5hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTIpICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB2YXIoLS1sZm0tYWNjZW50LWxhdmVuZGVyKSAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG59XG5cbi8qIEFjdGlvbnMgKi9cbi5sZm0tYnRuLWFjdGlvbiB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wOCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1sZm0tZm9udC1mYW1pbHkpICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiA4cHggMTZweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNnB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xufVxuXG4ubGZtLWJ0bi1hY3Rpb246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xuICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbn1cblxuLmxmbS1idG4tYWN0aW9uLnByaW1hcnkge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1sZm0tcHJpbWFyeSk7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tbGZtLXByaW1hcnkpO1xufVxuXG4ubGZtLWJ0bi1hY3Rpb24ucHJpbWFyeTpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWxmbS1wcmltYXJ5LWhvdmVyKTtcbn1cblxuLyogR3JpZCBWaWV3cyAoVG9wIEFydGlzdHMgJiBUb3AgQWxidW1zKSAqL1xuLmxmbS1jYXJkLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDE0MHB4LCAxZnIpKTtcbiAgZ2FwOiAxNnB4O1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmxmbS1pdGVtLWNhcmQge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1sZm0tYmctY2FyZCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWxmbS1ib3JkZXItZ2xhc3MpO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBwYWRkaW5nOiAxNHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubGZtLWl0ZW0tY2FyZDpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWxmbS1iZy1jYXJkLWhvdmVyKTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1sZm0tYm9yZGVyLWdsYXNzLWhvdmVyKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00cHgpO1xuICBib3gtc2hhZG93OiAwIDEwcHggMjRweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG59XG5cbi5sZm0taXRlbS1yYW5rIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE4cHg7XG4gIGxlZnQ6IDE4cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWxmbS1mb250LWZhbWlseSk7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcGFkZGluZzogM3B4IDdweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICB6LWluZGV4OiAyO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xufVxuXG4vKiBBcnRpc3QgQXZhdGFyICovXG4ubGZtLWF2YXRhci1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZDogIzE4MTgyMjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmxmbS1hcnRpc3QtYXZhdGFyIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG4gIGFzcGVjdC1yYXRpbzogMSAvIDEgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNTAlICFpbXBvcnRhbnQ7XG4gIG9iamVjdC1maXQ6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG59XG5cbi8qIEFsYnVtIENvdmVyICovXG4ubGZtLWFsYnVtLWNvdmVyLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBhc3BlY3QtcmF0aW86IDEgLyAxO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG4gIGJhY2tncm91bmQ6ICMxODE4MjI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4ubGZtLWFsYnVtLWNvdmVyIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG4gIGFzcGVjdC1yYXRpbzogMSAvIDEgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogOHB4ICFpbXBvcnRhbnQ7XG4gIG9iamVjdC1maXQ6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG59XG5cbi5sZm0tY2xpY2thYmxlLXRleHQge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGVhc2U7XG59XG5cbi5sZm0tY2xpY2thYmxlLXRleHQ6aG92ZXIge1xuICBjb2xvcjogdmFyKC0tbGZtLWFjY2VudC1sYXZlbmRlcikgIWltcG9ydGFudDtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5sZm0tY2xpY2thYmxlLWltYWdlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpLCBmaWx0ZXIgMC4ycyBlYXNlO1xufVxuXG4ubGZtLWNsaWNrYWJsZS1pbWFnZTpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNCk7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygxLjE1KTtcbn1cblxuLmxmbS1pdGVtLW5hbWUge1xuICBmb250LWZhbWlseTogdmFyKC0tbGZtLWZvbnQtZmFtaWx5KSAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4ubGZtLWl0ZW0tc3ViIHtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWxmbS1mb250LWZhbWlseSkgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogdmFyKC0tbGZtLXRleHQtc2Vjb25kYXJ5KTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuLmxmbS1pdGVtLXNjcm9iYmxlcyB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1sZm0tZm9udC1mYW1pbHkpO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiB2YXIoLS1sZm0tYWNjZW50LWxhdmVuZGVyKTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA0cHg7XG4gIG1hcmdpbi10b3A6IGF1dG87XG59XG5cbi8qIExpc3QgVmlldyAoVG9wIFRyYWNrcyAmIFJlY2VudCBUcmFja3MpICovXG4ubGZtLXRyYWNrLWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDhweDtcbiAgbWFyZ2luLXRvcDogMTZweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5sZm0tdHJhY2stcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAxMHB4IDE2cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWxmbS1iZy1jYXJkKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbGZtLWJvcmRlci1nbGFzcyk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGdhcDogMTZweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmxmbS10cmFjay1yb3c6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1sZm0tYmctY2FyZC1ob3Zlcik7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tbGZtLWJvcmRlci1nbGFzcy1ob3Zlcik7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg0cHgpO1xufVxuXG4ubGZtLXRyYWNrLWxlZnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDE0cHg7XG4gIG1pbi13aWR0aDogMDtcbiAgZmxleDogMTtcbn1cblxuLmxmbS10cmFjay1yYW5rIHtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWxmbS1mb250LWZhbWlseSk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHZhcigtLWxmbS10ZXh0LW11dGVkKTtcbiAgd2lkdGg6IDI4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZmxleC1zaHJpbms6IDA7XG59XG5cbi5sZm0tdHJhY2staW1hZ2Uge1xuICB3aWR0aDogNDRweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDQ0cHggIWltcG9ydGFudDtcbiAgbWluLXdpZHRoOiA0NHB4ICFpbXBvcnRhbnQ7XG4gIG1pbi1oZWlnaHQ6IDQ0cHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNnB4ICFpbXBvcnRhbnQ7XG4gIG9iamVjdC1maXQ6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6ICMxODE4MjI7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmxmbS10cmFjay1pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWluLXdpZHRoOiAwO1xuICBmbGV4OiAxO1xufVxuXG4ubGZtLXRyYWNrLXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWxmbS1mb250LWZhbWlseSkgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5sZm0tdHJhY2stYXJ0aXN0IHtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWxmbS1mb250LWZhbWlseSkgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogdmFyKC0tbGZtLXRleHQtc2Vjb25kYXJ5KTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5sZm0tdHJhY2stcmlnaHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDE2cHg7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuXG4ubGZtLXNjcm9iYmxlLWJhci1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIGdhcDogNHB4O1xuICB3aWR0aDogMTIwcHg7XG59XG5cbi5sZm0tc2Nyb2JibGUtY291bnQge1xuICBmb250LWZhbWlseTogdmFyKC0tbGZtLWZvbnQtZmFtaWx5KTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogdmFyKC0tbGZtLWFjY2VudC1sYXZlbmRlcik7XG59XG5cbi5sZm0tdHJhY2stdGltZSB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1sZm0tZm9udC1mYW1pbHkpO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiB2YXIoLS1sZm0tdGV4dC1tdXRlZCk7XG59XG5cbi5sZm0tc2Nyb2JibGUtYmFyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDgpO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi8qIFBpbmtlciBMYXZlbmRlciBQcm9ncmVzcyBCYXIgRmlsbCAqL1xuLmxmbS1zY3JvYmJsZS1iYXItZmlsbCB7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogdmFyKC0tbGZtLWFjY2VudC1waW5rLWJhcikgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuXG4ubGZtLXBsYXktYnRuIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA4KTtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgd2lkdGg6IDM0cHg7XG4gIGhlaWdodDogMzRweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICBmbGV4LXNocmluazogMDtcbn1cblxuLyogUGxheSBidXR0b24gaGlnaGxpZ2h0ZWQgbWF0Y2hlcyBsYXZlbmRlciB0ZXh0ICovXG4ubGZtLXRyYWNrLXJvdzpob3ZlciAubGZtLXBsYXktYnRuLFxuLmxmbS1wbGF5LWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWxmbS1hY2NlbnQtbGF2ZW5kZXIpICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMDAwMDAwICFpbXBvcnRhbnQ7XG59XG5cbi8qIER5bmFtaWMgTGl2ZSBTY3JvYmJsaW5nIFJvdyAmIEluZGljYXRvciAqL1xuLmxmbS1ub3ctcGxheWluZy1yb3cge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IGFsbCAwLjM1cyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpICFpbXBvcnRhbnQ7XG59XG5cbi5sZm0tc2Nyb2JibGluZy1pbmRpY2F0b3Ige1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5sZm0tc3Bpbm5pbmctY2lyY2xlIHtcbiAgd2lkdGg6IDE0cHg7XG4gIGhlaWdodDogMTRweDtcbiAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KTtcbiAgYm9yZGVyLXRvcC1jb2xvcjogdmFyKC0tbGZtLWFjY2VudC1sYXZlbmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYW5pbWF0aW9uOiBsZm0tc3BpbiAwLjlzIGxpbmVhciBpbmZpbml0ZTtcbiAgZmxleC1zaHJpbms6IDA7XG59XG5cbkBrZXlmcmFtZXMgbGZtLXNwaW4ge1xuICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XG4gIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XG59XG5cbi8qIFNrZWxldG9uIExvYWRpbmcgU3RhdGUgKi9cbi5sZm0tc2tlbGV0b24ge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNCkgMjUlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDgpIDUwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA0KSA3NSUpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDIwMCUgMTAwJTtcbiAgYW5pbWF0aW9uOiBsZm0tc2hpbW1lciAxLjVzIGluZmluaXRlO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG5cbkBrZXlmcmFtZXMgbGZtLXNoaW1tZXIge1xuICAwJSB7IGJhY2tncm91bmQtcG9zaXRpb246IDIwMCUgMDsgfVxuICAxMDAlIHsgYmFja2dyb3VuZC1wb3NpdGlvbjogLTIwMCUgMDsgfVxufVxuXG4vKiBFbXB0eSAmIEVycm9yIFN0YXRlcyAqL1xuLmxmbS1lbXB0eS1zdGF0ZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiA2MHB4IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmxmbS1lbXB0eS10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1sZm0tZm9udC1mYW1pbHkpICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAxZW0gIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG4ubGZtLWVtcHR5LWRlc2Mge1xuICBmb250LWZhbWlseTogdmFyKC0tbGZtLWZvbnQtZmFtaWx5KTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogdmFyKC0tbGZtLXRleHQtc2Vjb25kYXJ5KTtcbiAgbWF4LXdpZHRoOiAzMjBweDtcbn1cbiIsICIvKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgVGlkYUx1bmEgTGFzdC5mbSBTdGF0cyAtIFNpZGViYXIgTmF2aWdhdGlvbiBCdXR0b24gU3R5bGVzXG4gICBNYXRlcmlhbCBVSSBUeXBvZ3JhcGh5ICYgU2VhbWxlc3MgVGlkYWwgQWxpZ25tZW50XG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4ubGZtLXNpZGViYXItaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuICBnYXA6IDE2cHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDAgMTZweCAhaW1wb3J0YW50O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA4cHggIWltcG9ydGFudDtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogdmFyKC0tbGZtLWZvbnQtZmFtaWx5LCBcIlJvYm90b1wiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgc2Fucy1zZXJpZikgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcbiAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4xNXMgZWFzZSwgY29sb3IgMC4xNXMgZWFzZSAhaW1wb3J0YW50O1xuICB1c2VyLXNlbGVjdDogbm9uZSAhaW1wb3J0YW50O1xuICBtYXJnaW46IDJweCAwICFpbXBvcnRhbnQ7XG59XG5cbi5sZm0tc2lkZWJhci1pdGVtOmhvdmVyIHtcbiAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA4KSAhaW1wb3J0YW50O1xufVxuXG4ubGZtLXNpZGViYXItaXRlbS5hY3RpdmUsXG4ubGZtLXNpZGViYXItaXRlbVthcmlhLWN1cnJlbnQ9XCJwYWdlXCJdIHtcbiAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE0KSAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG59XG5cbi5sZm0tc2lkZWJhci1pY29uIHtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAyNHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMjRweCAhaW1wb3J0YW50O1xuICBmbGV4LXNocmluazogMCAhaW1wb3J0YW50O1xuICBjb2xvcjogaW5oZXJpdCAhaW1wb3J0YW50O1xufVxuXG4ubGZtLXNpZGViYXItaWNvbiBzdmcge1xuICB3aWR0aDogMjBweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDIwcHggIWltcG9ydGFudDtcbiAgZmlsbDogY3VycmVudENvbG9yICFpbXBvcnRhbnQ7XG4gIHN0cm9rZTogbm9uZSAhaW1wb3J0YW50O1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xNXMgZWFzZSAhaW1wb3J0YW50O1xufVxuXG4ubGZtLXNpZGViYXItaXRlbTpob3ZlciAubGZtLXNpZGViYXItaWNvbiBzdmcge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDgpICFpbXBvcnRhbnQ7XG59XG5cbi5sZm0tc2lkZWJhci1pdGVtLmFjdGl2ZSAubGZtLXNpZGViYXItaWNvbiBzdmcge1xuICBmaWxsOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG59XG5cbi5sZm0tc2lkZWJhci1sYWJlbCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogaW5oZXJpdCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQgIWltcG9ydGFudDtcbiAgY29sb3I6IGluaGVyaXQgIWltcG9ydGFudDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcCAhaW1wb3J0YW50O1xuICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAxICFpbXBvcnRhbnQ7XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQ1ksUUFBSSxNQUFNLE9BQU8sTUFBTSxNQUFNLFVBQVUsWUFBWTtBQUNuRCxRQUFJLFFBQVEsVUFBYSxPQUFPLE9BQU8sWUFBWSxZQUFZO0FBQzdELFVBQUk7QUFBRSxjQUFNLE9BQU8sUUFBUSxZQUFZO0FBQUEsTUFBRyxTQUFTLEdBQUc7QUFBQSxNQUFDO0FBQUEsSUFDekQ7QUFDQSxRQUFJLFFBQVEsUUFBVztBQUNyQixZQUFNLElBQUksTUFBTSxvREFBb0Q7QUFBQSxJQUN0RTtBQUNBLFFBQUk7QUFDRixhQUFPLE1BQU0sTUFBTSxZQUFZLFVBQVUsWUFBWSxHQUFHO0FBQUEsUUFDdEQsT0FBTyxNQUFNLE1BQU0sWUFBWSxVQUFVLGFBQWE7QUFBQSxNQUN4RDtBQUFBLElBQ0YsU0FBUyxHQUFHO0FBQUEsSUFBQztBQUNiLFdBQU8sVUFBVTtBQUFBO0FBQUE7OztBQ2I3QjtBQUFBO0FBQ1ksUUFBSSxNQUFNLE9BQU8sTUFBTSxNQUFNLFVBQVUsV0FBVztBQUNsRCxRQUFJLFFBQVEsVUFBYSxPQUFPLE9BQU8sWUFBWSxZQUFZO0FBQzdELFVBQUk7QUFBRSxjQUFN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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FDQUE7OztBakJrQitELElBQUFFLHVCQUFBO0FBYnhELElBQU0sRUFBRSxPQUFPLFVBQVUsUUFBSSxxQkFBTyxlQUFlO0FBQ25ELElBQU0sVUFBVSxvQkFBSSxJQUFnQjtBQVEzQyxJQUFJLHFCQUFTLHlCQUF5QixTQUFTLGFBQVc7QUFDMUQsSUFBSSxxQkFBUywyQkFBMkIsU0FBUyxlQUFhO0FBR3ZELElBQU0sWUFBWSxnQkFBSyxTQUFTLGVBQWUsU0FBUyw4Q0FBQyxtQkFBZ0IsQ0FBRTtBQUNsRixVQUFVLFdBQVcsYUFBYTtBQUNsQyxVQUFVLFdBQVcsWUFBWTtBQUNqQyxVQUFVLFdBQVcsVUFBVTtBQUMvQixVQUFVLFdBQVcsYUFBYTtBQUNsQyxVQUFVLFdBQVcsWUFBWTtBQUdqQyxrQkFBa0IsU0FBUyxTQUFTO0FBS3BDLE1BQU0sSUFBSSw4Q0FBOEM7IiwKICAibmFtZXMiOiBbImltcG9ydF9jb3JlIiwgImltcG9ydF9saWIiLCAiaW1wb3J0X3VpIiwgImltcG9ydF9yZWFjdCIsICJpbXBvcnRfY29yZSIsICJSZWFjdCIsICJpbXBvcnRfcmVhY3QiLCAiaW1wb3J0X2NvcmUiLCAiaW1wb3J0X2xpYiIsICJpbXBvcnRfcmVhY3QiLCAiaW1wb3J0X2pzeF9ydW50aW1lIiwgImltcG9ydF9qc3hfcnVudGltZSIsICJpbXBvcnRfanN4X3J1bnRpbWUiLCAiaW1wb3J0X2pzeF9ydW50aW1lIiwgImltcG9ydF9yZWFjdCIsICJpbXBvcnRfanN4X3J1bnRpbWUiLCAiUmVhY3QiLCAiaW1wb3J0X2pzeF9ydW50aW1lIiwgImltcG9ydF9qc3hfcnVudGltZSIsICJpbXBvcnRfanN4X3J1bnRpbWUiLCAiaW1wb3J0X2pzeF9ydW50aW1lIiwgIlJlYWN0IiwgImltcG9ydF9saWIiLCAidW5sb2FkcyIsICJzdGF0c1BhZ2UiLCAiaW1wb3J0X2pzeF9ydW50aW1lIl0KfQo=
