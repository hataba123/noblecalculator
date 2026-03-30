"use client";

import { useState } from "react";

import { SupportToolShell } from "../support-tools/shared";
import { calculateDayRateToHourlyRate } from "./formula";
import { dayRateToHourlyRateConfig } from "./config";
import { DayRateToHourlyRateForm } from "./form";
import { DayRateToHourlyRateResult } from "./result";
import type { DayRateToHourlyRateInput } from "./schema";

export function DayRateToHourlyRateCalculator() {
  const [value, setValue] = useState<DayRateToHourlyRateInput>(() => ({ ...dayRateToHourlyRateConfig.defaultValue }));
  const result = calculateDayRateToHourlyRate(value);

  return (
    <SupportToolShell
      title={dayRateToHourlyRateConfig.title}
      description="Convert a day rate into an hourly rate and weekly equivalent."
      resultTitle="Rate conversion"
      resultDescription="See the hourly equivalent for a single day rate." 
      inputs={<DayRateToHourlyRateForm value={value} onChange={setValue} />}
      results={<DayRateToHourlyRateResult result={result} />}
    />
  );
}