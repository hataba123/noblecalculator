export type NetToGrossInput = {
  netAmount: number;
  taxRate: number;
};

export type NetToGrossResult = {
  netAmount: number;
  taxAmount: number;
  grossAmount: number;
  grossUpFactor: number;
};
