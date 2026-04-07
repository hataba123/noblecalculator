export type LatePaymentFeeInput = {
  invoiceAmount: number;
  monthlyFeeRate: number;
  daysLate: number;
};

export type LatePaymentFeeResult = {
  invoiceAmount: number;
  feeAmount: number;
  totalDue: number;
  effectiveFeeRate: number;
};
