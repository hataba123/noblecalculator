"use client";

import { createMobileCalculatorScreen } from "../shared/create-calculator-screen";
import { calculateInternationalTransferFee, internationalTransferFeeConfig, internationalTransferFeeSeoContent } from "@noblecalculator/calculators-core/international-transfer-fee";

export const InternationalTransferFeeCalculator = createMobileCalculatorScreen({
  title: internationalTransferFeeConfig.title,
  intro: internationalTransferFeeSeoContent.intro,
  notes: [
    `${internationalTransferFeeSeoContent.formulaTitle}: ${internationalTransferFeeSeoContent.formula}`,
    internationalTransferFeeSeoContent.formulaNote,
    internationalTransferFeeSeoContent.whenToUse,
    internationalTransferFeeSeoContent.ctaText,
  ],
  defaultValue: internationalTransferFeeConfig.defaultValue,
  calculate: calculateInternationalTransferFee,
});
