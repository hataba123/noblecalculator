"use client";

import { useState } from "react";

import { SupportToolShell } from "../support-tools/shared";
import { calculateUtilizationRate } from "./formula";
import { utilizationRateConfig } from "./config";
import { UtilizationRateForm } from "./form";
import { UtilizationRateResult } from "./result";
import type { UtilizationRateInput } from "./schema";

export function UtilizationRateCalculator() {
  const [value, setValue] = useState<UtilizationRateInput>(() => ({ ...utilizationRateConfig.defaultValue }));
  const result = calculateUtilizationRate(value);

  return (
    <SupportToolShell
      title={utilizationRateConfig.title}
      description="Measure how much of your available time is billable."
      resultTitle="Utilization snapshot"
      resultDescription="Track billable time against your full working capacity."
      inputs={<UtilizationRateForm value={value} onChange={setValue} />}
      results={<UtilizationRateResult result={result} />}
    />
  );
}