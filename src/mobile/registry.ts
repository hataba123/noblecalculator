"use client";

import type { ComponentType } from "react";

import { calculatorRegistry } from "@/src/features/calculators/shared/calculator-registry";

import * as calculators from "./calculators";

export type MobileCalculatorScreen = ComponentType<any>;

export type MobileCalculatorEntry = (typeof calculatorRegistry)[number] & {
    Screen: MobileCalculatorScreen;
};

const mobileCalculatorScreens: Record<string, MobileCalculatorScreen> = {
    bmi: calculators.BmiCalculator,
    "break-even": calculators.BreakEvenCalculator,
    cac: calculators.CacCalculator,
    "cpm-cpc": calculators.CpmCpcCalculator,
    "day-rate-to-hourly-rate": calculators.DayRateToHourlyRateCalculator,
    "freelance-hourly-rate": calculators.FreelanceHourlyRateCalculator,
    "gross-to-net": calculators.GrossToNetCalculator,
    "international-transfer-fee": calculators.InternationalTransferFeeCalculator,
    "invoice-calculator": calculators.InvoiceCalculator,
    "late-payment-fee": calculators.LatePaymentFeeCalculator,
    markup: calculators.MarkupCalculator,
    "monthly-income-target": calculators.MonthlyIncomeTargetCalculator,
    "net-to-gross": calculators.NetToGrossCalculator,
    "payment-processing-fee": calculators.PaymentProcessingFeeCalculator,
    "profit-margin": calculators.ProfitMarginCalculator,
    roas: calculators.RoasCalculator,
    roi: calculators.RoiCalculator,
    "self-employed-tax-estimator": calculators.SelfEmployedTaxEstimatorCalculator,
    "tdee-calculator": calculators.TdeeCalculator,
    "utilization-rate": calculators.UtilizationRateCalculator,
    "vat-calculator": calculators.VatCalculator,
    "website-cost": calculators.WebsiteCostCalculator,
};

export const mobileCalculatorRegistry: MobileCalculatorEntry[] = calculatorRegistry.flatMap((calculator) => {
    const Screen = mobileCalculatorScreens[calculator.slug];

    if (!Screen) {
        return [];
    }

    return [
        {
            ...calculator,
            Screen,
        },
    ];
});

export function getMobileCalculatorEntry(slug: string) {
    return mobileCalculatorRegistry.find((calculator) => calculator.slug === slug);
}