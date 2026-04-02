import { useLanguage } from "@/src/components/shared/language-provider";
import { ResultCard } from "@/src/components/shared/result-card";
import { translateText } from "@/src/i18n";
import { formatCurrency, formatPercent } from "@/src/lib/format";

import type { ProfitMarginResult as ProfitMarginResultValue } from "./schema";

type ProfitMarginResultProps = {
  result: ProfitMarginResultValue;
};

export function ProfitMarginResult({ result }: ProfitMarginResultProps) {
  const { locale } = useLanguage();

  return (
    <div className="grid gap-4 sm:grid-cols-3">
      <ResultCard label={translateText(locale, "Profit")} value={formatCurrency(result.profit)} hint={translateText(locale, "What you keep after costs.")} />
      <ResultCard label={translateText(locale, "Margin")} value={formatPercent(result.margin)} hint={translateText(locale, "Profit as a share of revenue.")} />
      <ResultCard label={translateText(locale, "Markup")} value={formatPercent(result.markup)} hint={translateText(locale, "How much you add on top of cost.")} />
    </div>
  );
}
