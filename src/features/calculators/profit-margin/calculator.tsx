"use client";

import { useState } from "react";

import { formatCurrency } from "@/src/lib/format";

import { calculateProfitMargin } from "./formula";
import { profitMarginConfig } from "./config";
import { ProfitMarginForm } from "./form";
import { ProfitMarginResult } from "./result";
import type { ProfitMarginInput } from "./schema";

export function ProfitMarginCalculator() {
  const [value, setValue] = useState<ProfitMarginInput>(() => ({ ...profitMarginConfig.defaultValue }));
  const result = calculateProfitMargin(value);

  return (
    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <section className="rounded-[2rem] border border-black/10 bg-white/80 p-6 shadow-[0_20px_60px_rgba(34,24,12,0.08)] backdrop-blur sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-[#8a6b45]">Inputs</p>
            <h2 className="mt-2 text-2xl font-semibold text-[#1b1a17]">Profit Margin Calculator</h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-[#5c554b]">
              See how much profit you keep after costs.
            </p>
          </div>
          <div className="rounded-2xl border border-black/10 bg-[#f7f1e8] px-4 py-3 text-right">
            <div className="text-xs uppercase tracking-[0.22em] text-[#8a6b45]">Live result</div>
            <div className="mt-1 text-sm font-semibold text-[#1b1a17]">{formatCurrency(result.profit)}</div>
          </div>
        </div>

        <div className="mt-6">
          <ProfitMarginForm value={value} onChange={setValue} />
        </div>
      </section>

      <section className="space-y-6">
        <p className="text-sm uppercase tracking-[0.24em] text-[#8a6b45]">Results</p>
        <ProfitMarginResult result={result} />
      </section>
    </div>
  );
}