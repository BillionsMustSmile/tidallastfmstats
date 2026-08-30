import { LunaUnloads } from "@luna/core";
import { observe, redux } from "@luna/lib";
import { Page } from "@luna/ui";

const TIDAL_LOGO_SVG = `
<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" class="lfm-tidal-logo-fixed">
  <path d="M12.012 3.992L8.008 7.996 4.004 3.992 0 7.996 4.004 12l4.004-4.004L12.012 12l-4.004 4.004 4.004 4.004 4.004-4.004L12.012 12l4.004-4.004-4.004-4.004zM16.042 7.996l3.979-3.979L24 7.996l-3.979 3.979z"/>
</svg>
`;

const MUSIC_ICON_SVG = `
<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" class="lfm-music-icon-fixed">
  <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
</svg>
`;

const LASTFM_LOGO_SVG = `
<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
  <path d="M10.584 17.21l-.88-2.392s-1.43 1.594-3.573 1.594c-1.897 0-3.244-1.649-3.244-4.288 0-3.382 1.704-4.591 3.381-4.591 2.42 0 3.189 1.567 3.849 3.574l.88 2.749c.88 2.666 2.529 4.81 7.285 4.81 3.409 0 5.718-1.044 5.718-3.793 0-2.227-1.265-3.381-3.63-3.931l-1.758-.385c-1.21-.275-1.567-.77-1.567-1.595 0-.934.742-1.484 1.952-1.484 1.32 0 2.034.495 2.144 1.677l2.749-.33c-.22-2.474-1.924-3.492-4.729-3.492-2.474 0-4.893.935-4.893 3.932 0 1.87.907 3.051 3.189 3.601l1.87.44c1.402.33 1.869.907 1.869 1.704 0 1.017-.99 1.43-2.86 1.43-2.776 0-3.93-1.457-4.59-3.464l-.907-2.75c-1.155-3.573-2.997-4.893-6.653-4.893C2.144 5.333 0 7.89 0 12.233c0 4.18 2.144 6.434 5.993 6.434 3.106 0 4.591-1.457 4.591-1.457z"/>
</svg>
`;

export const initSidebarButton = (unloads: LunaUnloads, statsPage: Page) => {
  const buttonId = "luna-sidebar-lastfm";

  const isCurrentStatsPage = () => {
    return window.location.search === "?LastfmStats";
  };

  const updateActiveState = (isStatsPage: boolean) => {
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
    // 1. Ensure top logo is Tidal logo (right-side up)
    const tidalLogoElem =
      document.querySelector<HTMLElement>('[aria-label="TIDAL"]') ||
      document.querySelector<HTMLElement>('[data-test="sidebar-logo"]');

    if (tidalLogoElem) {
      const svg = tidalLogoElem.querySelector("svg");
      if (svg) {
        svg.outerHTML = TIDAL_LOGO_SVG;
      }
    }

    // 2. Ensure Music navigation item uses a music icon
    const musicItem = document.querySelector<HTMLElement>('[data-test="sidebar-music"]');
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

    // Find the Feed or Explore sidebar item to anchor after
    const anchorElem =
      document.querySelector<HTMLElement>('[data-test="sidebar-feed"]') ||
      document.querySelector<HTMLElement>('[data-test="sidebar-explore"]') ||
      document.querySelector<HTMLElement>('[data-test="sidebar-music"]');

    if (!anchorElem) return;

    // Make sure we are NOT touching the top logo
    if (anchorElem.closest("header") || anchorElem.getAttribute("aria-label") === "TIDAL") {
      return;
    }

    // Create custom sidebar button matching Tidal's native navigation items
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
      statsPage.open();
    };

    // If anchorElem is inside an li, wrap button in li and insert after anchor's li
    const anchorLi = anchorElem.closest("li");
    if (anchorLi && anchorLi.parentElement) {
      const liWrapper = document.createElement("li");
      liWrapper.appendChild(buttonElem);
      anchorLi.parentElement.insertBefore(liWrapper, anchorLi.nextSibling);
    } else if (anchorElem.parentElement) {
      anchorElem.parentElement.insertBefore(buttonElem, anchorElem.nextSibling);
    }

    // Set initial active state accurately
    updateActiveState(isCurrentStatsPage());

    unloads.add(() => {
      const el = document.getElementById(buttonId);
      if (el?.parentElement?.tagName.toLowerCase() === "li") {
        el.parentElement.remove();
      } else {
        el?.remove();
      }
    });
  };

  // Observe for Tidal sidebar items and logos
  observe<HTMLElement>(
    unloads,
    '[data-test="sidebar-feed"], [data-test="sidebar-explore"], [data-test="sidebar-music"], [aria-label="TIDAL"]',
    () => {
      insertButton();
      fixSidebarIcons();
    }
  );

  // Intercept navigation events to update sidebar button active state & fix icons
  redux.intercept("router/NAVIGATED", unloads, (payload: { search?: string }) => {
    const isStatsPage = payload?.search === "?LastfmStats";
    updateActiveState(isStatsPage);
    fixSidebarIcons();
  });
};
