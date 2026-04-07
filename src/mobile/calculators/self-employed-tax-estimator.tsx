"use client";

import { createMobileCalculatorScreen } from "../shared/create-calculator-screen";
import { calculateSelfEmployedTaxEstimator, selfEmployedTaxEstimatorConfig, selfEmployedTaxEstimatorSeoContent } from "@noblecalculator/calculators-core/self-employed-tax-estimator";

export const SelfEmployedTaxEstimatorCalculator = createMobileCalculatorScreen({
  title: selfEmployedTaxEstimatorConfig.title,
  intro: selfEmployedTaxEstimatorSeoContent.intro,
  notes: [
    `${selfEmployedTaxEstimatorSeoContent.formulaTitle}: ${selfEmployedTaxEstimatorSeoContent.formula}`,
    selfEmployedTaxEstimatorSeoContent.formulaNote,
    selfEmployedTaxEstimatorSeoContent.whenToUse,
    selfEmployedTaxEstimatorSeoContent.ctaText,
  ],
  defaultValue: selfEmployedTaxEstimatorConfig.defaultValue,
  calculate: calculateSelfEmployedTaxEstimator,
});
