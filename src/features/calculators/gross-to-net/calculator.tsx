"use client";

import { useState } from "react";

import { SupportToolShell } from "../support-tools/shared";
import { calculateGrossToNet } from "./core";
import { grossToNetConfig } from "./core";
import { GrossToNetForm } from "./form";
import { GrossToNetResult } from "./result";
import type { GrossToNetInput } from "./core";

export function GrossToNetCalculator() {
  const [value, setValue] = useState<GrossToNetInput>(() => ({ ...grossToNetConfig.defaultValue }));
  const result = calculateGrossToNet(value);

  return (
    <SupportToolShell
      title={grossToNetConfig.title}
      description="See how much of a gross amount remains after tax is withheld."
      resultTitle="Net pay breakdown"
      resultDescription="Compare the gross amount, withheld tax, and the amount that remains."
      inputs={<GrossToNetForm value={value} onChange={setValue} />}
      results={<GrossToNetResult result={result} />}
    />
  );
}
