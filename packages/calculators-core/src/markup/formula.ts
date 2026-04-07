import type { MarkupInput, MarkupResult } from "./schema";

export function calculateMarkup({ cost, markupRate }: MarkupInput): MarkupResult {
  const markupAmount = cost * (markupRate / 100);
  const sellingPrice = cost + markupAmount;
  const margin = sellingPrice > 0 ? (markupAmount / sellingPrice) * 100 : 0;

  return { markupAmount, sellingPrice, margin };
}
