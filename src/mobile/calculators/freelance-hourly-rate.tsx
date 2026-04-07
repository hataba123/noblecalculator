"use client";

import { createMobileCalculatorScreen } from "../shared/create-calculator-screen";
import { calculateFreelanceHourlyRate, freelanceHourlyRateConfig, freelanceHourlyRateSeoContent } from "@noblecalculator/calculators-core/freelance-hourly-rate";

export const FreelanceHourlyRateCalculator = createMobileCalculatorScreen({
  title: freelanceHourlyRateConfig.title,
  intro: freelanceHourlyRateSeoContent.intro,
  notes: [
    `${freelanceHourlyRateSeoContent.formulaTitle}: ${freelanceHourlyRateSeoContent.formula}`,
    freelanceHourlyRateSeoContent.formulaNote,
    freelanceHourlyRateSeoContent.whenToUse,
    freelanceHourlyRateSeoContent.ctaText,
  ],
  defaultValue: freelanceHourlyRateConfig.defaultValue,
  calculate: calculateFreelanceHourlyRate,
});
