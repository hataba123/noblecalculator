"use client";

import { useState } from "react";

import { useLanguage } from "@/src/components/shared/language-provider";
import { translateText } from "@/src/i18n";

import { SupportToolShell } from "../support-tools/shared";
import { calculateTdee } from "./formula";
import { tdeeConfig } from "./config";
import { TdeeForm } from "./form";
import { TdeeResult } from "./result";
import type { TdeeInput } from "./schema";

export function TdeeCalculator() {
  const { locale } = useLanguage();
  const [value, setValue] = useState<TdeeInput>(() => ({ ...tdeeConfig.defaultValue }));
  const result = calculateTdee(value);

  return (
    <SupportToolShell
      title={tdeeConfig.title}
      description={translateText(locale, "Estimate adult calorie needs with a simple TDEE calculator based on Mifflin–St. Jeor and activity multipliers.")}
      resultTitle={translateText(locale, "Daily calorie targets")}
      resultDescription={translateText(locale, "See your resting calories, TDEE, and calorie targets side by side.")}
      inputs={<TdeeForm value={value} onChange={setValue} />}
      results={<TdeeResult result={result} />}
    />
  );
}