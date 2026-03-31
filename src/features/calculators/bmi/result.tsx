import { ResultCard } from "@/src/components/shared/result-card";
import { useLanguage } from "@/src/components/shared/language-provider";
import { translateText } from "@/src/i18n";

import { formatDecimal } from "../support-tools/shared";
import type { BmiResult as BmiResultValue } from "./schema";

type BmiResultProps = {
  result: BmiResultValue;
};

function formatRange(minimum: number, maximum: number, unit: string) {
  return `${formatDecimal(minimum)}-${formatDecimal(maximum)} ${unit}`;
}

export function BmiResult({ result }: BmiResultProps) {
  const { locale } = useLanguage();

  return (
    <div className="grid gap-4 sm:grid-cols-3">
      <ResultCard label={translateText(locale, "BMI")} value={formatDecimal(result.bmi)} hint={translateText(locale, "Body mass index score.")} />
      <ResultCard label={translateText(locale, "Category")} value={translateText(locale, result.category)} hint={translateText(locale, "Standard BMI weight class.")} />
      <ResultCard
        label={translateText(locale, "Healthy weight range")}
        value={formatRange(result.healthyWeightMin, result.healthyWeightMax, result.weightUnit)}
        hint={translateText(locale, "Based on a BMI between 18.5 and 24.9.")}
      />
    </div>
  );
}