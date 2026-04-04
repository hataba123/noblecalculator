"use client";

import { useState } from "react";

import { useLanguage } from "@/src/components/shared/language-provider";
import { translateText } from "@/src/i18n";

import { calculateInternationalTransferFee } from "./formula";
import { internationalTransferFeeConfig } from "./config";
import { InternationalTransferFeeForm } from "./form";
import { InternationalTransferFeeResult } from "./result";
import type { InternationalTransferFeeInput } from "./schema";

export function InternationalTransferFeeCalculator() {
  const [value, setValue] = useState<InternationalTransferFeeInput>(() => ({ ...internationalTransferFeeConfig.defaultValue }));
  const result = calculateInternationalTransferFee(value);
  const { locale } = useLanguage();

  return (
    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <section className="rounded-[2rem] border border-black/10 bg-white/80 p-6 shadow-[0_20px_60px_rgba(34,24,12,0.08)] backdrop-blur sm:p-8">
        <p className="text-sm uppercase tracking-[0.24em] text-[#8a6b45]">{translateText(locale, "Inputs")}</p>
        <h2 className="mt-2 text-2xl font-semibold text-[#1b1a17]">{translateText(locale, internationalTransferFeeConfig.title)}</h2>
        <p className="mt-3 max-w-xl text-sm leading-6 text-[#5c554b]">
          {translateText(locale, "Estimate international transfer fees and the total amount to fund.")}
        </p>

        <div className="mt-6">
          <InternationalTransferFeeForm value={value} onChange={setValue} />
        </div>
      </section>

      <section className="space-y-6">
        <div className="rounded-[2rem] border border-black/10 bg-[#201c17] p-6 text-white shadow-[0_20px_60px_rgba(34,24,12,0.12)] sm:p-8">
          <p className="text-sm uppercase tracking-[0.24em] text-[#c9b79d]">{translateText(locale, "Results")}</p>
          <h3 className="mt-2 text-2xl font-semibold">{translateText(locale, "Transfer cost snapshot")}</h3>
          <p className="mt-3 text-sm leading-6 text-white/72">
            {translateText(locale, "The result shows the fee and total debit in one step.")}
          </p>
        </div>

        <InternationalTransferFeeResult result={result} />
      </section>
    </div>
  );
}