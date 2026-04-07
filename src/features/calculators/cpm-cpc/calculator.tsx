"use client";

import { useState } from "react";

import { SupportToolShell } from "../support-tools/shared";
import { calculateCpmCpc } from "./core";
import { cpmCpcConfig } from "./core";
import { CpmCpcForm } from "./form";
import { CpmCpcResult } from "./result";
import type { CpmCpcInput } from "./core";

export function CpmCpcCalculator() {
  const [value, setValue] = useState<CpmCpcInput>(() => ({ ...cpmCpcConfig.defaultValue }));
  const result = calculateCpmCpc(value);

  return (
    <SupportToolShell
      title={cpmCpcConfig.title}
      description="Compare cost per thousand impressions and cost per click."
      resultTitle="Campaign efficiency"
      resultDescription="Use CPM and CPC together to judge ad performance." 
      inputs={<CpmCpcForm value={value} onChange={setValue} />}
      results={<CpmCpcResult result={result} />}
    />
  );
}
