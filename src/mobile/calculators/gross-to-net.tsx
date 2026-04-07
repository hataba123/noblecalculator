"use client";

import { createMobileCalculatorScreen } from "../shared/create-calculator-screen";
import { calculateGrossToNet, grossToNetConfig, grossToNetSeoContent } from "@noblecalculator/calculators-core/gross-to-net";

export const GrossToNetCalculator = createMobileCalculatorScreen({
  title: grossToNetConfig.title,
  intro: grossToNetSeoContent.intro,
  notes: [
    `${grossToNetSeoContent.formulaTitle}: ${grossToNetSeoContent.formula}`,
    grossToNetSeoContent.formulaNote,
    grossToNetSeoContent.whenToUse,
    grossToNetSeoContent.ctaText,
  ],
  defaultValue: grossToNetConfig.defaultValue,
  calculate: calculateGrossToNet,
});
