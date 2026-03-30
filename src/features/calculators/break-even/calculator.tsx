"use client";

import { useState } from "react";

import { SupportToolShell } from "../support-tools/shared";
import { calculateBreakEven } from "./formula";
import { breakEvenConfig } from "./config";
import { BreakEvenForm } from "./form";
import { BreakEvenResult } from "./result";
import type { BreakEvenInput } from "./schema";

export function BreakEvenCalculator() {
  const [value, setValue] = useState<BreakEvenInput>(() => ({ ...breakEvenConfig.defaultValue }));
  const result = calculateBreakEven(value);

  return (
    <SupportToolShell
      title={breakEvenConfig.title}
      description="See how many units you need to sell before your fixed costs are covered."
      resultTitle="Break-even snapshot"
      resultDescription="Use the contribution margin to see how many sales you need to hit break-even."
      inputs={<BreakEvenForm value={value} onChange={setValue} />}
      results={<BreakEvenResult result={result} />}
    />
  );
}