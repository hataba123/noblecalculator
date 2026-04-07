import { ResultCard } from "@/src/components/shared/result-card";
import { formatCurrency } from "@/src/lib/format";

import type { CacResult as CacResultValue } from "./core";

type CacResultProps = {
  result: CacResultValue;
};

export function CacResult({ result }: CacResultProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      <ResultCard label="CAC" value={formatCurrency(result.cac)} hint="Cost to acquire one customer." />
      <ResultCard label="Marketing spend" value={formatCurrency(result.marketingSpend)} hint="Total acquisition spend." />
      <ResultCard label="New customers" value={result.newCustomers.toFixed(0)} hint="Customers acquired in the period." />
    </div>
  );
}
