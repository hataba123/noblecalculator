import type { InternationalTransferFeeInput } from "./schema";

export const internationalTransferFeeConfig = {
  title: "International Transfer Fee Calculator",
  defaultValue: {
    amount: 1000,
    feeRate: 2.5,
  } satisfies InternationalTransferFeeInput,
};
