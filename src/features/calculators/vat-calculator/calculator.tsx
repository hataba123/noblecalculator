"use client";

import { useState } from "react";

import { useLanguage } from "@/src/components/shared/language-provider";
import { translateText } from "@/src/i18n";

import { calculateVat } from "./formula";
import { vatCalculatorConfig } from "./config";
import { VatCalculatorForm } from "./form";
import { VatCalculatorResult } from "./result";
import type { VatCalculatorInput } from "./schema";

export function VatCalculatorCalculator() {
  const { locale, t } = useLanguage();
  const [value, setValue] = useState<VatCalculatorInput>(() => ({ ...vatCalculatorConfig.defaultValue }));
  const result = calculateVat(value);

  return (
    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <section className="rounded-[2rem] border border-black/10 bg-white/80 p-6 shadow-[0_20px_60px_rgba(34,24,12,0.08)] backdrop-blur sm:p-8">
        <p className="text-sm uppercase tracking-[0.24em] text-[#8a6b45]">{t("supportTools.inputs")}</p>
        <h2 className="mt-2 text-2xl font-semibold text-[#1b1a17]">{translateText(locale, vatCalculatorConfig.title)}</h2>
        <p className="mt-3 max-w-xl text-sm leading-6 text-[#5c554b]">
          {translateText(locale, "Calculate VAT and gross amount from the pre-tax value.")}
        </p>

        <div className="mt-6">
          <VatCalculatorForm value={value} onChange={setValue} />
        </div>
      </section>

      <section className="space-y-6">
        <div className="rounded-[2rem] border border-black/10 bg-[#201c17] p-6 text-white shadow-[0_20px_60px_rgba(34,24,12,0.12)] sm:p-8">
          <p className="text-sm uppercase tracking-[0.24em] text-[#c9b79d]">{t("supportTools.results")}</p>
          <h3 className="mt-2 text-2xl font-semibold">{translateText(locale, "VAT breakdown")}</h3>
          <p className="mt-3 text-sm leading-6 text-white/72">
            {translateText(locale, "See the tax amount and the final price side by side.")}
          </p>
        </div>

        <VatCalculatorResult result={result} />
      </section>
    </div>
  );
}