"use client";

import { createMobileCalculatorScreen } from "../shared/create-calculator-screen";
import { calculateTdee, tdeeConfig, tdeeSeoContent } from "@noblecalculator/calculators-core/tdee-calculator";

export const TdeeCalculator = createMobileCalculatorScreen({
  title: tdeeConfig.title,
  intro: tdeeSeoContent.intro,
  notes: [
    `${tdeeSeoContent.formulaTitle}: ${tdeeSeoContent.formula}`,
    tdeeSeoContent.formulaNote,
    tdeeSeoContent.whenToUse,
    tdeeSeoContent.ctaText,
  ],
  defaultValue: tdeeConfig.defaultValue,
  calculate: calculateTdee,
});
