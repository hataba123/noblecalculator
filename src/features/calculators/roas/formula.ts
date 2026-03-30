import type { RoasInput, RoasResult } from "./schema";

export function calculateRoas({ adSpend, revenue }: RoasInput): RoasResult {
  const profit = revenue - adSpend;
  const roas = adSpend > 0 ? revenue / adSpend : 0;

  return { adSpend, revenue, profit, roas };
}