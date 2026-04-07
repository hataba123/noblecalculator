"use client";

import { createMobileCalculatorScreen } from "../shared/create-calculator-screen";
import { calculateProfitMargin, profitMarginConfig, profitMarginSeoContent } from "@noblecalculator/calculators-core/profit-margin";

export const ProfitMarginCalculator = createMobileCalculatorScreen({
  title: profitMarginConfig.title,
  intro: profitMarginSeoContent.intro,
  notes: [
    `${profitMarginSeoContent.formulaTitle}: ${profitMarginSeoContent.formula}`,
    profitMarginSeoContent.formulaNote,
    profitMarginSeoContent.whenToUse,
    profitMarginSeoContent.ctaText,
  ],
  defaultValue: profitMarginConfig.defaultValue,
  calculate: calculateProfitMargin,
});
