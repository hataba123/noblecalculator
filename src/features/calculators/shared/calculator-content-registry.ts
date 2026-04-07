import type { CalculatorSeoContent } from "./types";
import { type Locale, translateValue } from "@/src/i18n";
import { breakEvenSeoContent } from "../break-even/core";
import { bmiSeoContent } from "../bmi/core";
import { cacSeoContent } from "../cac/core";
import { cpmCpcSeoContent } from "../cpm-cpc/core";
import { dayRateToHourlyRateSeoContent } from "../day-rate-to-hourly-rate/core";
import { freelanceHourlyRateSeoContent } from "../freelance-hourly-rate/core";
import { grossToNetSeoContent } from "../gross-to-net/core";
import { internationalTransferFeeSeoContent } from "../international-transfer-fee/core";
import { invoiceCalculatorSeoContent } from "../invoice-calculator/core";
import { latePaymentFeeSeoContent } from "../late-payment-fee/core";
import { markupSeoContent } from "../markup/core";
import { monthlyIncomeTargetSeoContent } from "../monthly-income-target/core";
import { netToGrossSeoContent } from "../net-to-gross/core";
import { paymentProcessingFeeSeoContent } from "../payment-processing-fee/core";
import { profitMarginSeoContent } from "../profit-margin/core";
import { tdeeSeoContent } from "../tdee-calculator/core";
import { roasSeoContent } from "../roas/core";
import { roiSeoContent } from "../roi/core";
import { selfEmployedTaxEstimatorSeoContent } from "../self-employed-tax-estimator/core";
import { utilizationRateSeoContent } from "../utilization-rate/core";
import { vatCalculatorSeoContent } from "../vat-calculator/core";
import { websiteCostSeoContent } from "../website-cost/core";

const calculatorSeoContentRegistry: Record<string, CalculatorSeoContent> = {
	bmi: bmiSeoContent,
	"tdee-calculator": tdeeSeoContent,
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

export function getCalculatorSeoContent(slug: string, locale: Locale = "en") {
	const content = calculatorSeoContentRegistry[slug];

	if (!content) {
		return undefined;
	}

	return translateValue(locale, content);
}
