"use client";

import { createMobileCalculatorScreen } from "../shared/create-calculator-screen";
import { calculateVat, vatCalculatorConfig, vatCalculatorSeoContent } from "@noblecalculator/calculators-core/vat-calculator";

export const VatCalculator = createMobileCalculatorScreen({
  title: vatCalculatorConfig.title,
  intro: vatCalculatorSeoContent.intro,
  notes: [
    `${vatCalculatorSeoContent.formulaTitle}: ${vatCalculatorSeoContent.formula}`,
    vatCalculatorSeoContent.formulaNote,
    vatCalculatorSeoContent.whenToUse,
    vatCalculatorSeoContent.ctaText,
  ],
  defaultValue: vatCalculatorConfig.defaultValue,
  calculate: calculateVat,
});
