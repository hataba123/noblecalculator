"use client";

import { useState } from "react";

import { SupportToolShell } from "../support-tools/shared";
import { calculateCac } from "./core";
import { cacConfig } from "./core";
import { CacForm } from "./form";
import { CacResult } from "./result";
import type { CacInput } from "./core";

export function CacCalculator() {
  const [value, setValue] = useState<CacInput>(() => ({ ...cacConfig.defaultValue }));
  const result = calculateCac(value);

  return (
    <SupportToolShell
      title={cacConfig.title}
      description="See how much it costs to acquire one customer."
      resultTitle="Customer acquisition cost"
      resultDescription="Use CAC to judge whether your marketing spend is efficient."
      inputs={<CacForm value={value} onChange={setValue} />}
      results={<CacResult result={result} />}
    />
  );
}
