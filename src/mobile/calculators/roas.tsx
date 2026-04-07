"use client";

import { createMobileCalculatorScreen } from "../shared/create-calculator-screen";
import { calculateRoas, roasConfig, roasSeoContent } from "@noblecalculator/calculators-core/roas";

export const RoasCalculator = createMobileCalculatorScreen({
  title: roasConfig.title,
  intro: roasSeoContent.intro,
  notes: [
    `${roasSeoContent.formulaTitle}: ${roasSeoContent.formula}`,
    roasSeoContent.formulaNote,
    roasSeoContent.whenToUse,
    roasSeoContent.ctaText,
  ],
  defaultValue: roasConfig.defaultValue,
  calculate: calculateRoas,
});
