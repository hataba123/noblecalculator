import { describe, expect, it } from "vitest";

import { calculateFreelanceHourlyRate } from "../../features/calculators/freelance-hourly-rate/formula";
import { calculateInternationalTransferFee } from "../../features/calculators/international-transfer-fee/formula";
import { calculateInvoice } from "../../features/calculators/invoice-calculator/formula";
import { calculateMarkup } from "../../features/calculators/markup/formula";
import { calculateProfitMargin } from "../../features/calculators/profit-margin/formula";
import { calculateVat } from "../../features/calculators/vat-calculator/formula";

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
