"use client";

import { createMobileCalculatorScreen } from "../shared/create-calculator-screen";
import { calculateBreakEven, breakEvenConfig, breakEvenSeoContent } from "@noblecalculator/calculators-core/break-even";

export const BreakEvenCalculator = createMobileCalculatorScreen({
  title: breakEvenConfig.title,
  intro: breakEvenSeoContent.intro,
  notes: [
    `${breakEvenSeoContent.formulaTitle}: ${breakEvenSeoContent.formula}`,
    breakEvenSeoContent.formulaNote,
    breakEvenSeoContent.whenToUse,
    breakEvenSeoContent.ctaText,
  ],
  defaultValue: breakEvenConfig.defaultValue,
  calculate: calculateBreakEven,
});
