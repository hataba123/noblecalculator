"use client";

import { createMobileCalculatorScreen } from "../shared/create-calculator-screen";
import { calculateMarkup, markupConfig, markupSeoContent } from "@noblecalculator/calculators-core/markup";

export const MarkupCalculator = createMobileCalculatorScreen({
  title: markupConfig.title,
  intro: markupSeoContent.intro,
  notes: [
    `${markupSeoContent.formulaTitle}: ${markupSeoContent.formula}`,
    markupSeoContent.formulaNote,
    markupSeoContent.whenToUse,
    markupSeoContent.ctaText,
  ],
  defaultValue: markupConfig.defaultValue,
  calculate: calculateMarkup,
});
