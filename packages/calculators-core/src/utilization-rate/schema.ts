export type UtilizationRateInput = {
  billableHours: number;
  totalAvailableHours: number;
};

export type UtilizationRateResult = {
  billableHours: number;
  totalAvailableHours: number;
  utilizationRate: number;
  nonBillableHours: number;
};
