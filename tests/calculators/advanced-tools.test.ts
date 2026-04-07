import { describe, expect, it } from "vitest";

import { calculateCac } from "../../packages/calculators-core/src/cac";
import { calculateCpmCpc } from "../../packages/calculators-core/src/cpm-cpc";
import { calculateDayRateToHourlyRate } from "../../packages/calculators-core/src/day-rate-to-hourly-rate";
import { calculateMonthlyIncomeTarget } from "../../packages/calculators-core/src/monthly-income-target";
import { calculateSelfEmployedTaxEstimator } from "../../packages/calculators-core/src/self-employed-tax-estimator";
import { calculateUtilizationRate } from "../../packages/calculators-core/src/utilization-rate";

describe("advanced calculators", () => {
  it("calculates self employed tax", () => {
    const result = calculateSelfEmployedTaxEstimator({ annualRevenue: 120000, businessExpenses: 32000, incomeTaxRate: 22, selfEmploymentTaxRate: 15.3 });
    expect(result.taxableProfit).toBe(88000);
    expect(result.incomeTax).toBe(19360);
    expect(result.selfEmploymentTax).toBe(13464);
    expect(result.totalTax).toBe(32824);
    expect(result.afterTaxIncome).toBe(55176);
    expect(result.effectiveTaxRate).toBeCloseTo(27.3533, 4);
    expect(result.quarterlyTaxEstimate).toBe(8206);
  });

  it("calculates utilization rate", () => {
    const result = calculateUtilizationRate({ billableHours: 120, totalAvailableHours: 160 });
    expect(result.utilizationRate).toBe(75);
    expect(result.nonBillableHours).toBe(40);
  });

  it("calculates monthly income target", () => {
    const result = calculateMonthlyIncomeTarget({ desiredTakeHomeMonthly: 6000, monthlyBusinessExpenses: 1500, taxRate: 25 });
    expect(result.preTaxMonthlyNeed).toBe(7500);
    expect(result.grossMonthlyTarget).toBe(10000);
    expect(result.grossAnnualTarget).toBe(120000);
    expect(result.monthlyTaxReserve).toBe(2500);
  });

  it("calculates cac", () => {
    const result = calculateCac({ marketingSpend: 12000, newCustomers: 150 });
    expect(result.cac).toBe(80);
  });

  it("calculates cpm and cpc", () => {
    const result = calculateCpmCpc({ adSpend: 2500, impressions: 120000, clicks: 1600 });
    expect(result.cpm).toBeCloseTo(20.8333, 4);
    expect(result.cpc).toBe(1.5625);
    expect(result.ctr).toBeCloseTo(1.3333, 4);
  });

  it("calculates day rate to hourly rate", () => {
    const result = calculateDayRateToHourlyRate({ dayRate: 640, billableHoursPerDay: 8 });
    expect(result.hourlyRate).toBe(80);
    expect(result.weeklyEquivalent).toBe(3200);
    expect(result.monthlyEquivalent).toBe(12800);
  });
});