import { describe, expect, it } from "vitest";

import { calculateBreakEven } from "../../packages/calculators-core/src/break-even";
import { calculateGrossToNet } from "../../packages/calculators-core/src/gross-to-net";
import { calculateLatePaymentFee } from "../../packages/calculators-core/src/late-payment-fee";
import { calculateNetToGross } from "../../packages/calculators-core/src/net-to-gross";
import { calculatePaymentProcessingFee } from "../../packages/calculators-core/src/payment-processing-fee";
import { calculateRoi } from "../../packages/calculators-core/src/roi";
import { calculateRoas } from "../../packages/calculators-core/src/roas";
import { calculateWebsiteCost } from "../../packages/calculators-core/src/website-cost";

describe("support tool calculators", () => {
	it("calculates break-even metrics", () => {
		const result = calculateBreakEven({ fixedCosts: 15000, variableCostPerUnit: 28, sellingPrice: 65 });
		expect(result.contributionMargin).toBe(37);
		expect(result.breakEvenUnits).toBeCloseTo(405.4054, 4);
		expect(result.breakEvenRevenue).toBeCloseTo(26351.351351351354, 6);
	});

	it("calculates gross to net", () => {
		const result = calculateGrossToNet({ grossAmount: 5000, taxRate: 25 });
		expect(result.taxAmount).toBe(1250);
		expect(result.netAmount).toBe(3750);
		expect(result.retentionRate).toBe(75);
	});

	it("calculates net to gross", () => {
		const result = calculateNetToGross({ netAmount: 4000, taxRate: 25 });
		expect(result.grossAmount).toBe(5333.333333333333);
		expect(result.taxAmount).toBeCloseTo(1333.3333, 4);
		expect(result.grossUpFactor).toBeCloseTo(1.3333, 4);
	});

	it("calculates late payment fee", () => {
		const result = calculateLatePaymentFee({ invoiceAmount: 8500, monthlyFeeRate: 1.5, daysLate: 18 });
		expect(result.feeAmount).toBe(76.5);
		expect(result.totalDue).toBe(8576.5);
		expect(result.effectiveFeeRate).toBeCloseTo(0.9, 4);
	});

	it("calculates payment processing fee", () => {
		const result = calculatePaymentProcessingFee({ amount: 2500, percentageFeeRate: 2.9, fixedFee: 0.3 });
		expect(result.feeAmount).toBe(72.8);
		expect(result.netPayout).toBe(2427.2);
		expect(result.effectiveFeeRate).toBeCloseTo(2.912, 3);
	});

	it("calculates roi", () => {
		const result = calculateRoi({ investment: 12000, returnAmount: 16200 });
		expect(result.gain).toBe(4200);
		expect(result.roi).toBe(35);
		expect(result.returnMultiple).toBe(1.35);
	});

	it("calculates roas", () => {
		const result = calculateRoas({ adSpend: 1200, revenue: 5400 });
		expect(result.profit).toBe(4200);
		expect(result.roas).toBe(4.5);
	});

	it("calculates website cost", () => {
		const result = calculateWebsiteCost({ designHours: 18, developmentHours: 42, contentHours: 12, hourlyRate: 95, fixedExpenses: 800 });
		expect(result.totalHours).toBe(72);
		expect(result.laborCost).toBe(6840);
		expect(result.totalCost).toBe(7640);
	});
});