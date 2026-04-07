import type { RoiInput, RoiResult } from "./schema";

export function calculateRoi({ investment, returnAmount }: RoiInput): RoiResult {
  const gain = returnAmount - investment;
  const roi = investment > 0 ? (gain / investment) * 100 : 0;
  const returnMultiple = investment > 0 ? returnAmount / investment : 0;

  return { investment, returnAmount, gain, roi, returnMultiple };
}
