"use client";

import { useState } from "react";

import { SupportToolShell } from "../support-tools/shared";
import { calculateWebsiteCost } from "./formula";
import { websiteCostConfig } from "./config";
import { WebsiteCostForm } from "./form";
import { WebsiteCostResult } from "./result";
import type { WebsiteCostInput } from "./schema";

export function WebsiteCostCalculator() {
  const [value, setValue] = useState<WebsiteCostInput>(() => ({ ...websiteCostConfig.defaultValue }));
  const result = calculateWebsiteCost(value);

  return (
    <SupportToolShell
      title={websiteCostConfig.title}
      description="Estimate the cost of designing, building, and launching a website."
      resultTitle="Project cost estimate"
      resultDescription="Combine hours, hourly rate, and fixed expenses to get the final build cost."
      inputs={<WebsiteCostForm value={value} onChange={setValue} />}
      results={<WebsiteCostResult result={result} />}
    />
  );
}