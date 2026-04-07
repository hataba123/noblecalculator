"use client";

import { createMobileCalculatorScreen } from "../shared/create-calculator-screen";
import { calculateMonthlyIncomeTarget, monthlyIncomeTargetConfig, monthlyIncomeTargetSeoContent } from "@noblecalculator/calculators-core/monthly-income-target";

export const MonthlyIncomeTargetCalculator = createMobileCalculatorScreen({
  title: monthlyIncomeTargetConfig.title,
  intro: monthlyIncomeTargetSeoContent.intro,
  notes: [
    `${monthlyIncomeTargetSeoContent.formulaTitle}: ${monthlyIncomeTargetSeoContent.formula}`,
    monthlyIncomeTargetSeoContent.formulaNote,
    monthlyIncomeTargetSeoContent.whenToUse,
    monthlyIncomeTargetSeoContent.ctaText,
  ],
  defaultValue: monthlyIncomeTargetConfig.defaultValue,
  calculate: calculateMonthlyIncomeTarget,
});
