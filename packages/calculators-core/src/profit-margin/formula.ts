import type { ProfitMarginInput, ProfitMarginResult } from "./schema";

export function calculateProfitMargin({ revenue, cost }: ProfitMarginInput): ProfitMarginResult {
    const profit = revenue - cost;
    const margin = revenue > 0 ? (profit / revenue) * 100 : 0;
    const markup = cost > 0 ? (profit / cost) * 100 : 0;

    return { profit, margin, markup };
}
