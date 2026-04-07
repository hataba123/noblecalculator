"use client";

import { createMobileCalculatorScreen } from "../shared/create-calculator-screen";
import { calculatePaymentProcessingFee, paymentProcessingFeeConfig, paymentProcessingFeeSeoContent } from "@noblecalculator/calculators-core/payment-processing-fee";

export const PaymentProcessingFeeCalculator = createMobileCalculatorScreen({
  title: paymentProcessingFeeConfig.title,
  intro: paymentProcessingFeeSeoContent.intro,
  notes: [
    `${paymentProcessingFeeSeoContent.formulaTitle}: ${paymentProcessingFeeSeoContent.formula}`,
    paymentProcessingFeeSeoContent.formulaNote,
    paymentProcessingFeeSeoContent.whenToUse,
    paymentProcessingFeeSeoContent.ctaText,
  ],
  defaultValue: paymentProcessingFeeConfig.defaultValue,
  calculate: calculatePaymentProcessingFee,
});
