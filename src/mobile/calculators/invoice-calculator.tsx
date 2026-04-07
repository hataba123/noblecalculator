"use client";

import { createMobileCalculatorScreen } from "../shared/create-calculator-screen";
import { calculateInvoice, invoiceCalculatorConfig, invoiceCalculatorSeoContent } from "@noblecalculator/calculators-core/invoice-calculator";

export const InvoiceCalculator = createMobileCalculatorScreen({
  title: invoiceCalculatorConfig.title,
  intro: invoiceCalculatorSeoContent.intro,
  notes: [
    `${invoiceCalculatorSeoContent.formulaTitle}: ${invoiceCalculatorSeoContent.formula}`,
    invoiceCalculatorSeoContent.formulaNote,
    invoiceCalculatorSeoContent.whenToUse,
    invoiceCalculatorSeoContent.ctaText,
  ],
  defaultValue: invoiceCalculatorConfig.defaultValue,
  calculate: calculateInvoice,
});
