export type InternationalTransferFeeInput = {
  amount: number;
  feeRate: number;
};

export type InternationalTransferFeeResult = {
  amount: number;
  feeAmount: number;
  totalDebit: number;
};
