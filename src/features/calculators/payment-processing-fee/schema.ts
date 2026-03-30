export type PaymentProcessingFeeInput = {
  amount: number;
  percentageFeeRate: number;
  fixedFee: number;
};

export type PaymentProcessingFeeResult = {
  amount: number;
  feeAmount: number;
  netPayout: number;
  effectiveFeeRate: number;
};