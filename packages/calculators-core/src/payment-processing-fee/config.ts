import type { PaymentProcessingFeeInput } from "./schema";

export const paymentProcessingFeeConfig = {
  title: "Payment Processing Fee Calculator",
  defaultValue: {
    amount: 2500,
    percentageFeeRate: 2.9,
    fixedFee: 0.3,
  } satisfies PaymentProcessingFeeInput,
};
