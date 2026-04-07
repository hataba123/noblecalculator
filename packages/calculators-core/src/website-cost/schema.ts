export type WebsiteCostInput = {
  designHours: number;
  developmentHours: number;
  contentHours: number;
  hourlyRate: number;
  fixedExpenses: number;
};

export type WebsiteCostResult = {
  totalHours: number;
  laborCost: number;
  fixedExpenses: number;
  totalCost: number;
};
