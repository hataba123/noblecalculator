import type { CacInput, CacResult } from "./schema";

export function calculateCac({ marketingSpend, newCustomers }: CacInput): CacResult {
  const cac = newCustomers > 0 ? marketingSpend / newCustomers : 0;

  return { marketingSpend, newCustomers, cac };
}