"use client";

import { createMobileCalculatorScreen } from "../shared/create-calculator-screen";
import { calculateNetToGross, netToGrossConfig, netToGrossSeoContent } from "@noblecalculator/calculators-core/net-to-gross";

export const NetToGrossCalculator = createMobileCalculatorScreen({
  title: netToGrossConfig.title,
  intro: netToGrossSeoContent.intro,
  notes: [
    `${netToGrossSeoContent.formulaTitle}: ${netToGrossSeoContent.formula}`,
    netToGrossSeoContent.formulaNote,
    netToGrossSeoContent.whenToUse,
    netToGrossSeoContent.ctaText,
  ],
  defaultValue: netToGrossConfig.defaultValue,
  calculate: calculateNetToGross,
});
