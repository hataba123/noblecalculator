"use client";

import { useState } from "react";

import { useLanguage } from "@/src/components/shared/language-provider";
import { translateText } from "@/src/i18n";

import { SupportToolShell } from "../support-tools/shared";
import { bmiConfig } from "./config";
import { calculateBmi } from "./formula";
import { BmiForm } from "./form";
import { BmiResult } from "./result";
import type { BmiInput } from "./schema";

export function BmiCalculator() {
  const { locale } = useLanguage();
  const [value, setValue] = useState<BmiInput>(() => ({ ...bmiConfig.defaultValue }));
  const result = calculateBmi(value);

  return (
    <SupportToolShell
      title={bmiConfig.title}
      description={translateText(locale, "Check your body mass index and healthy weight range.")}
      resultTitle={translateText(locale, "Body mass index")}
      resultDescription={translateText(locale, "See your BMI score, weight category, and healthy range side by side.")}
      inputs={<BmiForm value={value} onChange={setValue} />}
      results={<BmiResult result={result} />}
    />
  );
}