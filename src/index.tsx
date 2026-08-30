import React from "react";
import { Tracer, type LunaUnload } from "@luna/core";
import { StyleTag } from "@luna/lib";
import { Page } from "@luna/ui";

export const { trace, errSignal } = Tracer("[LastFMStats]");
export const unloads = new Set<LunaUnload>();

import { LastfmStatsPage } from "./components/LastfmStatsPage";
import { initSidebarButton } from "./navigation/sidebarButton";
import statsStyles from "./styles/stats.css";
import sidebarStyles from "./styles/sidebar.css";

// Inject CSS styles with automatic cleanup on unload
new StyleTag("luna-lastfm-stats-css", unloads, statsStyles);
new StyleTag("luna-lastfm-sidebar-css", unloads, sidebarStyles);

// Register the stats page with solid black base background and 0 top padding to eliminate gaps
export const statsPage = Page.register("LastfmStats", unloads, <LastfmStatsPage />);
statsPage.pageStyles.background = "#000000";
statsPage.pageStyles.minHeight = "100vh";
statsPage.pageStyles.padding = "0px";
statsPage.pageStyles.paddingTop = "0px";
statsPage.pageStyles.marginTop = "0px";

// Initialize sidebar button injection
initSidebarButton(unloads, statsPage);

// Export settings component for Luna UI
export { Settings } from "./components/Settings";

trace.log("LastFMStats plugin initialized successfully!");
