import type { LatePaymentFeeInput } from "./schema";

export const latePaymentFeeConfig = {
  title: "Late Payment Fee Calculator",
  defaultValue: {
    invoiceAmount: 8500,
    monthlyFeeRate: 1.5,
    daysLate: 18,
  } satisfies LatePaymentFeeInput,
};
