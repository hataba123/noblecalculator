"use client";

import { useState } from "react";

import { SupportToolShell } from "../support-tools/shared";
import { calculateRoi } from "./formula";
import { roiConfig } from "./config";
import { RoiForm } from "./form";
import { RoiResult } from "./result";
import type { RoiInput } from "./schema";

export function RoiCalculator() {
  const [value, setValue] = useState<RoiInput>(() => ({ ...roiConfig.defaultValue }));
  const result = calculateRoi(value);

  return (
    <SupportToolShell
      title={roiConfig.title}
      description="Measure the return generated from an investment."
      resultTitle="Return on investment"
      resultDescription="Check gain, ROI, and the return multiple side by side."
      inputs={<RoiForm value={value} onChange={setValue} />}
      results={<RoiResult result={result} />}
    />
  );
}