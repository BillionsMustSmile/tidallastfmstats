import React from "react";
import { ReactiveStore } from "@luna/core";
import {
  LunaButtonSetting,
  LunaSelectItem,
  LunaSelectSetting,
  LunaSettings,
  LunaTextSetting,
} from "@luna/ui";
import { LastFmApi } from "../api/lastfm";
import { LastFmTimePeriod } from "../api/types";

export interface LastFMStatsSettings {
  username: string;
  defaultPeriod: LastFmTimePeriod;
  itemsLimit: number;
  customApiKey: string;
  enableSidebarButton: boolean;
}

export const statsStorage = await ReactiveStore.getPluginStorage<LastFMStatsSettings>(
  "LastFMStats",
  {
    username: "",
    defaultPeriod: "7day",
    itemsLimit: 20,
    customApiKey: "",
    enableSidebarButton: true,
  }
);

export const Settings: React.FC = () => {
  const [username, setUsername] = React.useState(statsStorage.username);
  const [defaultPeriod, setDefaultPeriod] = React.useState<LastFmTimePeriod>(statsStorage.defaultPeriod);
  const [itemsLimit, setItemsLimit] = React.useState(statsStorage.itemsLimit);
  const [customApiKey, setCustomApiKey] = React.useState(statsStorage.customApiKey);

  const handleAutoDetect = async () => {
    const detected = await LastFmApi.getActiveUsername();
    if (detected) {
      setUsername((statsStorage.username = detected));
    }
  };

  return (
    <>
      <LunaSettings title="Last.fm User Profile" desc="Configure your Last.fm account details to import stats">
        <LunaTextSetting
          title="Last.fm Username"
          desc="Your public Last.fm profile username"
          value={username}
          placeholder="e.g. RJ, musicfan99"
          onChange={(e) => {
            setUsername((statsStorage.username = e.target.value.trim()));
          }}
        />

        <LunaButtonSetting
          title="Auto-detect Username"
          desc="Detect username automatically from TidaLuna LastFM session"
          onClick={handleAutoDetect}
        >
          Auto-detect
        </LunaButtonSetting>
      </LunaSettings>

      <br />

      <LunaSettings title="Display & Stats Options" desc="Default time periods and view preferences">
        <LunaSelectSetting<LastFmTimePeriod>
          title="Default Timeframe"
          desc="The default time period loaded when opening the Stats page"
          value={defaultPeriod}
          onChange={(e) => {
            const val = e.target.value as LastFmTimePeriod;
            setDefaultPeriod((statsStorage.defaultPeriod = val));
          }}
        >
          <LunaSelectItem value="7day">Last 7 Days</LunaSelectItem>
          <LunaSelectItem value="1month">Last 30 Days (1 Month)</LunaSelectItem>
          <LunaSelectItem value="3month">Last 90 Days (3 Months)</LunaSelectItem>
          <LunaSelectItem value="6month">Last 180 Days (6 Months)</LunaSelectItem>
          <LunaSelectItem value="12month">Last 365 Days (1 Year)</LunaSelectItem>
          <LunaSelectItem value="overall">All Time</LunaSelectItem>
        </LunaSelectSetting>

        <LunaSelectSetting<number>
          title="Items Per Page"
          desc="Number of tracks, artists, and albums to display per category"
          value={itemsLimit}
          onChange={(e) => {
            const val = Number(e.target.value);
            setItemsLimit((statsStorage.itemsLimit = val));
          }}
        >
          <LunaSelectItem value={10}>10 items</LunaSelectItem>
          <LunaSelectItem value={20}>20 items</LunaSelectItem>
          <LunaSelectItem value={50}>50 items</LunaSelectItem>
          <LunaSelectItem value={100}>100 items</LunaSelectItem>
        </LunaSelectSetting>
      </LunaSettings>

      <br />

      <LunaSettings title="Advanced API Settings" desc="Optional custom Last.fm API Key">
        <LunaTextSetting
          title="Custom API Key"
          desc="Leave blank to use Tidal's built-in Last.fm API key"
          value={customApiKey}
          placeholder="Optional 32-character API key"
          onChange={(e) => {
            setCustomApiKey((statsStorage.customApiKey = e.target.value.trim()));
          }}
        />
      </LunaSettings>
    </>
  );
};
