import type { WebsiteCostInput, WebsiteCostResult } from "./schema";

export function calculateWebsiteCost({ designHours, developmentHours, contentHours, hourlyRate, fixedExpenses }: WebsiteCostInput): WebsiteCostResult {
  const totalHours = designHours + developmentHours + contentHours;
  const laborCost = totalHours * hourlyRate;
  const totalCost = laborCost + fixedExpenses;

  return { totalHours, laborCost, fixedExpenses, totalCost };
}
