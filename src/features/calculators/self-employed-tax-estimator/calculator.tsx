"use client";

import { useState } from "react";

import { SupportToolShell } from "../support-tools/shared";
import { calculateSelfEmployedTaxEstimator } from "./formula";
import { selfEmployedTaxEstimatorConfig } from "./config";
import { SelfEmployedTaxEstimatorForm } from "./form";
import { SelfEmployedTaxEstimatorResult } from "./result";
import type { SelfEmployedTaxEstimatorInput } from "./schema";

export function SelfEmployedTaxEstimatorCalculator() {
  const [value, setValue] = useState<SelfEmployedTaxEstimatorInput>(() => ({ ...selfEmployedTaxEstimatorConfig.defaultValue }));
  const result = calculateSelfEmployedTaxEstimator(value);

  return (
    <SupportToolShell
      title={selfEmployedTaxEstimatorConfig.title}
      description="Estimate how much tax to set aside from self-employed income."
      resultTitle="Tax estimate"
      resultDescription="Use this to plan for income tax and self-employment tax throughout the year."
      inputs={<SelfEmployedTaxEstimatorForm value={value} onChange={setValue} />}
      results={<SelfEmployedTaxEstimatorResult result={result} />}
    />
  );
}