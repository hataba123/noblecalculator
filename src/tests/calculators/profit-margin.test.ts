import { describe, expect, it } from "vitest";

import { calculateFreelanceHourlyRate } from "../../../packages/calculators-core/src/freelance-hourly-rate";
import { calculateInternationalTransferFee } from "../../../packages/calculators-core/src/international-transfer-fee";
import { calculateInvoice } from "../../../packages/calculators-core/src/invoice-calculator";
import { calculateMarkup } from "../../../packages/calculators-core/src/markup";
import { calculateProfitMargin } from "../../../packages/calculators-core/src/profit-margin";
import { calculateVat } from "../../../packages/calculators-core/src/vat-calculator";

describe("calculator formulas", () => {
  it("calculates profit margin outputs", () => {
    expect(calculateProfitMargin({ revenue: 12000, cost: 7500 })).toEqual({
      profit: 4500,
      margin: 37.5,
      markup: 60,
    });
  });

  it("calculates markup outputs", () => {
    const result = calculateMarkup({ cost: 100, markupRate: 30 });

    expect(result.markupAmount).toBe(30);
    expect(result.sellingPrice).toBe(130);
    expect(result.margin).toBeCloseTo(23.076923, 6);
  });

  it("calculates freelance hourly rate", () => {
    expect(calculateFreelanceHourlyRate({ targetIncome: 60000, billableHours: 120 })).toEqual({
      hourlyRate: 500,
    });
  });

  it("calculates vat outputs", () => {
    expect(calculateVat({ amount: 1000, vatRate: 20 })).toEqual({
      amount: 1000,
      vatAmount: 200,
      grossAmount: 1200,
    });
  });

  it("calculates invoice totals", () => {
    expect(calculateInvoice({ amount: 2500, taxRate: 10 })).toEqual({
      amount: 2500,
      taxAmount: 250,
      total: 2750,
    });
  });

  it("calculates international transfer fees", () => {
    expect(calculateInternationalTransferFee({ amount: 1000, feeRate: 2.5 })).toEqual({
      amount: 1000,
      feeAmount: 25,
      totalDebit: 1025,
    });
  });
});
