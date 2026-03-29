export type VatCalculatorInput = {
  amount: number;
  vatRate: number;
};

export type VatCalculatorResult = {
  amount: number;
  vatAmount: number;
  grossAmount: number;
};
