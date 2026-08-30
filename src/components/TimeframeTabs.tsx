import React from "react";
import { LastFmTimePeriod } from "../api/types";

interface TimeframeTabsProps {
  period: LastFmTimePeriod;
  onChange: (period: LastFmTimePeriod) => void;
  disabled?: boolean;
}

const PERIODS: { id: LastFmTimePeriod; label: string }[] = [
  { id: "7day", label: "7 Days" },
  { id: "1month", label: "30 Days" },
  { id: "3month", label: "3 Months" },
  { id: "6month", label: "6 Months" },
  { id: "12month", label: "1 Year" },
  { id: "overall", label: "All Time" },
];

export const TimeframeTabs: React.FC<TimeframeTabsProps> = ({ period, onChange, disabled }) => {
  return (
    <div className="lfm-timeframe-selector">
      {PERIODS.map((p) => (
        <button
          key={p.id}
          className={`lfm-time-btn ${period === p.id ? "active" : ""}`}
          onClick={() => onChange(p.id)}
          disabled={disabled}
        >
          {p.label}
        </button>
      ))}
    </div>
  );
};
