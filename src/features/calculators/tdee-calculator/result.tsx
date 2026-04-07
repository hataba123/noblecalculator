import { useLanguage } from "@/src/components/shared/language-provider";
import { ResultCard } from "@/src/components/shared/result-card";
import { translateText } from "@/src/i18n";

import type { TdeeResult as TdeeResultValue } from "./core";

type TdeeResultProps = {
  result: TdeeResultValue;
};

function formatCalories(value: number) {
  return `${new Intl.NumberFormat("en-US").format(Math.round(value))} kcal/day`;
}

export function TdeeResult({ result }: TdeeResultProps) {
  const { locale } = useLanguage();

  return (
    <div className="grid gap-4">
      <div className="rounded-[1rem] border border-[color:var(--border)] bg-[color:var(--surface-soft)] p-4 shadow-[0_10px_24px_rgba(34,24,12,0.06)]">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="min-w-0">
            <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--accent)] sm:text-sm">{translateText(locale, "Equation used")}</p>
            <h3 className="mt-2 text-lg font-semibold text-[color:var(--foreground)] sm:text-xl">{result.equationUsed}</h3>
          </div>
          <div className="rounded-[0.9rem] border border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-3 shadow-[0_8px_18px_rgba(34,24,12,0.08)]">
            <div className="text-xs uppercase tracking-[0.22em] text-[color:var(--accent)]">{translateText(locale, "Selected target")}</div>
            <div className="mt-1 text-base font-semibold text-[color:var(--foreground)]">{translateText(locale, result.selectedGoalLabel)}</div>
            <div className="mt-1 text-sm text-[color:var(--muted-strong)]">{formatCalories(result.targetKcal)}</div>
          </div>
        </div>
        <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">
          {translateText(
            locale,
            "This calculator is an estimate for adults. It may not be appropriate for pregnancy, breastfeeding, competitive athletes, or people with metabolic conditions."
          )}
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        <ResultCard label={translateText(locale, "Resting calories")} value={formatCalories(result.bmrOrReeKcal)} hint={translateText(locale, "BMR / REE estimate before activity.")} />
        <ResultCard label={translateText(locale, "Maintenance calories")} value={formatCalories(result.maintenanceKcal)} hint={translateText(locale, "TDEE after applying activity level.")} />
        <ResultCard label={translateText(locale, "Mild fat loss target")} value={formatCalories(result.mildCutKcal)} hint={translateText(locale, "TDEE minus 300 kcal/day.")} />
        <ResultCard label={translateText(locale, "Standard fat loss target")} value={formatCalories(result.standardCutKcal)} hint={translateText(locale, "TDEE minus 500 kcal/day.")} />
        <ResultCard label={translateText(locale, "Weight gain target")} value={formatCalories(result.gainKcal)} hint={translateText(locale, "TDEE plus 250 kcal/day.")} />
      </div>
    </div>
  );
}
