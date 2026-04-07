"use client";

import { createMobileCalculatorScreen } from "../shared/create-calculator-screen";
import { calculateRoi, roiConfig, roiSeoContent } from "@noblecalculator/calculators-core/roi";

export const RoiCalculator = createMobileCalculatorScreen({
  title: roiConfig.title,
  intro: roiSeoContent.intro,
  notes: [
    `${roiSeoContent.formulaTitle}: ${roiSeoContent.formula}`,
    roiSeoContent.formulaNote,
    roiSeoContent.whenToUse,
    roiSeoContent.ctaText,
  ],
  defaultValue: roiConfig.defaultValue,
  calculate: calculateRoi,
});
