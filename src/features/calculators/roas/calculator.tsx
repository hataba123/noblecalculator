"use client";

import { useState } from "react";

import { SupportToolShell } from "../support-tools/shared";
import { calculateRoas } from "./core";
import { roasConfig } from "./core";
import { RoasForm } from "./form";
import { RoasResult } from "./result";
import type { RoasInput } from "./core";

export function RoasCalculator() {
  const [value, setValue] = useState<RoasInput>(() => ({ ...roasConfig.defaultValue }));
  const result = calculateRoas(value);

  return (
    <SupportToolShell
      title={roasConfig.title}
      description="Check how much revenue your ad spend brings back."
      resultTitle="Advertising return"
      resultDescription="Use ROAS to judge whether your ads are returning enough revenue."
      inputs={<RoasForm value={value} onChange={setValue} />}
      results={<RoasResult result={result} />}
    />
  );
}
