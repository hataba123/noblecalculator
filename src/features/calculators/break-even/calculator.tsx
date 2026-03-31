"use client";

import { useState } from "react";

import { SupportToolShell } from "../support-tools/shared";
import { useLanguage } from "@/src/components/shared/language-provider";
import { translateText } from "@/src/i18n";
import { calculateBreakEven } from "./formula";
import { breakEvenConfig } from "./config";
import { BreakEvenForm } from "./form";
import { BreakEvenResult } from "./result";
import type { BreakEvenInput } from "./schema";

export function BreakEvenCalculator() {
  const { locale } = useLanguage();
  const [value, setValue] = useState<BreakEvenInput>(() => ({ ...breakEvenConfig.defaultValue }));
  const result = calculateBreakEven(value);

  return (
    <SupportToolShell
      title={translateText(locale, breakEvenConfig.title)}
      description={translateText(locale, "See how many units you need to sell before your fixed costs are covered.")}
      resultTitle={translateText(locale, "Break-even snapshot")}
      resultDescription={translateText(locale, "Use the contribution margin to see how many sales you need to hit break-even.")}
      inputs={<BreakEvenForm value={value} onChange={setValue} />}
      results={<BreakEvenResult result={result} />}
    />
  );
}