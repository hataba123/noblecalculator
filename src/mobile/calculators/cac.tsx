"use client";

import { createMobileCalculatorScreen } from "../shared/create-calculator-screen";
import { calculateCac, cacConfig, cacSeoContent } from "@noblecalculator/calculators-core/cac";

export const CacCalculator = createMobileCalculatorScreen({
  title: cacConfig.title,
  intro: cacSeoContent.intro,
  notes: [
    `${cacSeoContent.formulaTitle}: ${cacSeoContent.formula}`,
    cacSeoContent.formulaNote,
    cacSeoContent.whenToUse,
    cacSeoContent.ctaText,
  ],
  defaultValue: cacConfig.defaultValue,
  calculate: calculateCac,
});
