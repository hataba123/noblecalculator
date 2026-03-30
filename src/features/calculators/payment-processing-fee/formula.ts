import type { PaymentProcessingFeeInput, PaymentProcessingFeeResult } from "./schema";

export function calculatePaymentProcessingFee({ amount, percentageFeeRate, fixedFee }: PaymentProcessingFeeInput): PaymentProcessingFeeResult {
  const feeAmount = amount * (percentageFeeRate / 100) + fixedFee;
  const netPayout = Math.max(amount - feeAmount, 0);
  const effectiveFeeRate = amount > 0 ? (feeAmount / amount) * 100 : 0;

  return { amount, feeAmount, netPayout, effectiveFeeRate };
}