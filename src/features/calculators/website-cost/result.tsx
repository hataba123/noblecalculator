import { ResultCard } from "@/src/components/shared/result-card";
import { formatCurrency } from "@/src/lib/format";

import { formatDecimal } from "../support-tools/shared";
import type { WebsiteCostResult as WebsiteCostResultValue } from "./schema";

type WebsiteCostResultProps = {
  result: WebsiteCostResultValue;
};

export function WebsiteCostResult({ result }: WebsiteCostResultProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      <ResultCard label="Total hours" value={formatDecimal(result.totalHours)} hint="Design, development, and content combined." />
      <ResultCard label="Labor cost" value={formatCurrency(result.laborCost)} hint="Hours multiplied by the hourly rate." />
      <ResultCard label="Fixed expenses" value={formatCurrency(result.fixedExpenses)} hint="Recurring and one-time project costs." />
      <ResultCard label="Estimated total" value={formatCurrency(result.totalCost)} hint="What the website is likely to cost overall." />
    </div>
  );
}