"use client";

import { useState } from "react";

import { formatCurrency } from "@/src/lib/format";
import { translateText } from "@/src/i18n";
import { useLanguage } from "@/src/components/shared/language-provider";

import { calculateProfitMargin, profitMarginConfig } from "./core";
import { ProfitMarginForm } from "./form";
import { ProfitMarginResult } from "./result";
import type { ProfitMarginInput } from "./core";

export function ProfitMarginCalculator() {
  const { locale, t } = useLanguage();
  const [value, setValue] = useState<ProfitMarginInput>(() => ({ ...profitMarginConfig.defaultValue }));
  const result = calculateProfitMargin(value);
  const title = translateText(locale, profitMarginConfig.title);

  return (
    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <section className="rounded-[2rem] border border-black/10 bg-white/80 p-6 shadow-[0_20px_60px_rgba(34,24,12,0.08)] backdrop-blur sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-[#8a6b45]">{t("supportTools.inputs")}</p>
            <h2 className="mt-2 text-2xl font-semibold text-[#1b1a17]">{title}</h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-[#5c554b]">
              {translateText(locale, "See how much profit you keep after costs.")}
            </p>
          </div>
          <div className="rounded-2xl border border-black/10 bg-[#f7f1e8] px-4 py-3 text-right">
            <div className="text-xs uppercase tracking-[0.22em] text-[#8a6b45]">{translateText(locale, "Live result")}</div>
            <div className="mt-1 text-sm font-semibold text-[#1b1a17]">{formatCurrency(result.profit)}</div>
          </div>
        </div>

        <div className="mt-6">
          <ProfitMarginForm value={value} onChange={setValue} />
        </div>
      </section>

      <section className="space-y-6">
        <p className="text-sm uppercase tracking-[0.24em] text-[#8a6b45]">{t("supportTools.results")}</p>
        <ProfitMarginResult result={result} />
      </section>
    </div>
  );
}