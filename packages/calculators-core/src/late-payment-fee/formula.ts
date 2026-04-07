import type { LatePaymentFeeInput, LatePaymentFeeResult } from "./schema";

export function calculateLatePaymentFee({ invoiceAmount, monthlyFeeRate, daysLate }: LatePaymentFeeInput): LatePaymentFeeResult {
  const feeAmount = invoiceAmount * (monthlyFeeRate / 100) * (daysLate / 30);
  const totalDue = invoiceAmount + feeAmount;
  const effectiveFeeRate = invoiceAmount > 0 ? (feeAmount / invoiceAmount) * 100 : 0;

  return { invoiceAmount, feeAmount, totalDue, effectiveFeeRate };
}
