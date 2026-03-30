export type GrossToNetInput = {
  grossAmount: number;
  taxRate: number;
};

export type GrossToNetResult = {
  grossAmount: number;
  taxAmount: number;
  netAmount: number;
  retentionRate: number;
};