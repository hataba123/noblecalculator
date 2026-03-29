export type InvoiceCalculatorInput = {
  amount: number;
  taxRate: number;
};

export type InvoiceCalculatorResult = {
  amount: number;
  taxAmount: number;
  total: number;
};
