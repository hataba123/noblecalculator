import type { InternationalTransferFeeInput, InternationalTransferFeeResult } from "./schema";

export function calculateInternationalTransferFee({ amount, feeRate }: InternationalTransferFeeInput): InternationalTransferFeeResult {
  const feeAmount = amount * (feeRate / 100);
  const totalDebit = amount + feeAmount;

  return { amount, feeAmount, totalDebit };
}
