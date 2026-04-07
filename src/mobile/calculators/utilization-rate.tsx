"use client";

import { createMobileCalculatorScreen } from "../shared/create-calculator-screen";
import { calculateUtilizationRate, utilizationRateConfig, utilizationRateSeoContent } from "@noblecalculator/calculators-core/utilization-rate";

export const UtilizationRateCalculator = createMobileCalculatorScreen({
  title: utilizationRateConfig.title,
  intro: utilizationRateSeoContent.intro,
  notes: [
    `${utilizationRateSeoContent.formulaTitle}: ${utilizationRateSeoContent.formula}`,
    utilizationRateSeoContent.formulaNote,
    utilizationRateSeoContent.whenToUse,
    utilizationRateSeoContent.ctaText,
  ],
  defaultValue: utilizationRateConfig.defaultValue,
  calculate: calculateUtilizationRate,
});
