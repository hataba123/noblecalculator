"use client";

import { useState } from "react";

import { SupportToolShell } from "../support-tools/shared";
import { calculateNetToGross } from "./formula";
import { netToGrossConfig } from "./config";
import { NetToGrossForm } from "./form";
import { NetToGrossResult } from "./result";
import type { NetToGrossInput } from "./schema";

export function NetToGrossCalculator() {
  const [value, setValue] = useState<NetToGrossInput>(() => ({ ...netToGrossConfig.defaultValue }));
  const result = calculateNetToGross(value);

  return (
    <SupportToolShell
      title={netToGrossConfig.title}
      description="Work backward from take-home pay to the gross amount before tax."
      resultTitle="Gross-up breakdown"
      resultDescription="Use this when you know the net amount and need the pre-tax figure."
      inputs={<NetToGrossForm value={value} onChange={setValue} />}
      results={<NetToGrossResult result={result} />}
    />
  );
}