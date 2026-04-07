"use client";

import { createMobileCalculatorScreen } from "../shared/create-calculator-screen";
import { calculateDayRateToHourlyRate, dayRateToHourlyRateConfig, dayRateToHourlyRateSeoContent } from "@noblecalculator/calculators-core/day-rate-to-hourly-rate";

export const DayRateToHourlyRateCalculator = createMobileCalculatorScreen({
  title: dayRateToHourlyRateConfig.title,
  intro: dayRateToHourlyRateSeoContent.intro,
  notes: [
    `${dayRateToHourlyRateSeoContent.formulaTitle}: ${dayRateToHourlyRateSeoContent.formula}`,
    dayRateToHourlyRateSeoContent.formulaNote,
    dayRateToHourlyRateSeoContent.whenToUse,
    dayRateToHourlyRateSeoContent.ctaText,
  ],
  defaultValue: dayRateToHourlyRateConfig.defaultValue,
  calculate: calculateDayRateToHourlyRate,
});
