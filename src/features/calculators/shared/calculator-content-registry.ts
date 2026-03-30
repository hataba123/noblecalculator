import type { CalculatorSeoContent } from "./types";
import { breakEvenSeoContent } from "../break-even/content";
import { cacSeoContent } from "../cac/content";
import { cpmCpcSeoContent } from "../cpm-cpc/content";
import { dayRateToHourlyRateSeoContent } from "../day-rate-to-hourly-rate/content";
import { freelanceHourlyRateSeoContent } from "../freelance-hourly-rate/content";
import { grossToNetSeoContent } from "../gross-to-net/content";
import { internationalTransferFeeSeoContent } from "../international-transfer-fee/content";
import { invoiceCalculatorSeoContent } from "../invoice-calculator/content";
import { latePaymentFeeSeoContent } from "../late-payment-fee/content";
import { markupSeoContent } from "../markup/content";
import { monthlyIncomeTargetSeoContent } from "../monthly-income-target/content";
import { netToGrossSeoContent } from "../net-to-gross/content";
import { paymentProcessingFeeSeoContent } from "../payment-processing-fee/content";
import { profitMarginSeoContent } from "../profit-margin/content";
import { roasSeoContent } from "../roas/content";
import { roiSeoContent } from "../roi/content";
import { selfEmployedTaxEstimatorSeoContent } from "../self-employed-tax-estimator/content";
import { utilizationRateSeoContent } from "../utilization-rate/content";
import { vatCalculatorSeoContent } from "../vat-calculator/content";
import { websiteCostSeoContent } from "../website-cost/content";

const calculatorSeoContentRegistry: Record<string, CalculatorSeoContent> = {
	"profit-margin": profitMarginSeoContent,
	markup: markupSeoContent,
	"freelance-hourly-rate": freelanceHourlyRateSeoContent,
	"vat-calculator": vatCalculatorSeoContent,
	"invoice-calculator": invoiceCalculatorSeoContent,
	"international-transfer-fee": internationalTransferFeeSeoContent,
	"break-even": breakEvenSeoContent,
	"gross-to-net": grossToNetSeoContent,
	"net-to-gross": netToGrossSeoContent,
	"late-payment-fee": latePaymentFeeSeoContent,
	"payment-processing-fee": paymentProcessingFeeSeoContent,
	roi: roiSeoContent,
	roas: roasSeoContent,
	"website-cost": websiteCostSeoContent,
	"self-employed-tax-estimator": selfEmployedTaxEstimatorSeoContent,
	"utilization-rate": utilizationRateSeoContent,
	"monthly-income-target": monthlyIncomeTargetSeoContent,
	cac: cacSeoContent,
	"cpm-cpc": cpmCpcSeoContent,
	"day-rate-to-hourly-rate": dayRateToHourlyRateSeoContent,
};

export function getCalculatorSeoContent(slug: string) {
	return calculatorSeoContentRegistry[slug];
}