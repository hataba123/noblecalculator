"use client";

import { createMobileCalculatorScreen } from "../shared/create-calculator-screen";
import { calculateCpmCpc, cpmCpcConfig, cpmCpcSeoContent } from "@noblecalculator/calculators-core/cpm-cpc";

export const CpmCpcCalculator = createMobileCalculatorScreen({
  title: cpmCpcConfig.title,
  intro: cpmCpcSeoContent.intro,
  notes: [
    `${cpmCpcSeoContent.formulaTitle}: ${cpmCpcSeoContent.formula}`,
    cpmCpcSeoContent.formulaNote,
    cpmCpcSeoContent.whenToUse,
    cpmCpcSeoContent.ctaText,
  ],
  defaultValue: cpmCpcConfig.defaultValue,
  calculate: calculateCpmCpc,
});
