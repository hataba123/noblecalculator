"use client";

import { createMobileCalculatorScreen } from "../shared/create-calculator-screen";
import { calculateWebsiteCost, websiteCostConfig, websiteCostSeoContent } from "@noblecalculator/calculators-core/website-cost";

export const WebsiteCostCalculator = createMobileCalculatorScreen({
  title: websiteCostConfig.title,
  intro: websiteCostSeoContent.intro,
  notes: [
    `${websiteCostSeoContent.formulaTitle}: ${websiteCostSeoContent.formula}`,
    websiteCostSeoContent.formulaNote,
    websiteCostSeoContent.whenToUse,
    websiteCostSeoContent.ctaText,
  ],
  defaultValue: websiteCostConfig.defaultValue,
  calculate: calculateWebsiteCost,
});
