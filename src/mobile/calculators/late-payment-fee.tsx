"use client";

import { createMobileCalculatorScreen } from "../shared/create-calculator-screen";
import { calculateLatePaymentFee, latePaymentFeeConfig, latePaymentFeeSeoContent } from "@noblecalculator/calculators-core/late-payment-fee";

export const LatePaymentFeeCalculator = createMobileCalculatorScreen({
  title: latePaymentFeeConfig.title,
  intro: latePaymentFeeSeoContent.intro,
  notes: [
    `${latePaymentFeeSeoContent.formulaTitle}: ${latePaymentFeeSeoContent.formula}`,
    latePaymentFeeSeoContent.formulaNote,
    latePaymentFeeSeoContent.whenToUse,
    latePaymentFeeSeoContent.ctaText,
  ],
  defaultValue: latePaymentFeeConfig.defaultValue,
  calculate: calculateLatePaymentFee,
});
