"use client";

import { useState } from "react";

import { formatCurrency } from "@/src/lib/format";

import { calculateProfitMargin } from "./formula";
import { ProfitMarginForm } from "./form";
import { ProfitMarginResult } from "./result";
import type { ProfitMarginInput } from "./schema";

export function ProfitMarginCalculator() {
  const [value, setValue] = useState<ProfitMarginInput>({ revenue: 12000, cost: 7500 });
  const result = calculateProfitMargin(value);

  return (
    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <section className="rounded-[2rem] border border-black/10 bg-white/80 p-6 shadow-[0_20px_60px_rgba(34,24,12,0.08)] backdrop-blur sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-[#8a6b45]">Inputs</p>
            <h2 className="mt-2 text-2xl font-semibold text-[#1b1a17]">Profit Margin Calculator</h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-[#5c554b]">
              Nhập doanh thu và chi phí để kiểm tra profit, margin, và markup ngay lập tức.
            </p>
          </div>
          <div className="rounded-2xl border border-black/10 bg-[#f7f1e8] px-4 py-3 text-right">
            <div className="text-xs uppercase tracking-[0.22em] text-[#8a6b45]">Live</div>
            <div className="mt-1 text-sm font-semibold text-[#1b1a17]">{formatCurrency(result.profit)}</div>
          </div>
        </div>

        <div className="mt-6">
          <ProfitMarginForm value={value} onChange={setValue} />
        </div>
      </section>

      <section className="space-y-6">
        <div className="rounded-[2rem] border border-black/10 bg-[#201c17] p-6 text-white shadow-[0_20px_60px_rgba(34,24,12,0.12)] sm:p-8">
          <p className="text-sm uppercase tracking-[0.24em] text-[#c9b79d]">Results</p>
          <h3 className="mt-2 text-2xl font-semibold">What you keep and what you earn</h3>
          <p className="mt-3 text-sm leading-6 text-white/72">
            Các chỉ số được tính từ cùng công thức gốc để page và API sau này có thể dùng lại.
          </p>
        </div>

        <ProfitMarginResult result={result} />

        <div className="rounded-[2rem] border border-black/10 bg-white/80 p-6 shadow-[0_20px_60px_rgba(34,24,12,0.08)] backdrop-blur sm:p-8">
          <p className="text-sm uppercase tracking-[0.24em] text-[#8a6b45]">Formula check</p>
          <ul className="mt-4 space-y-2 text-sm leading-6 text-[#5c554b]">
            <li>• Profit = Revenue - Cost</li>
            <li>• Margin = Profit / Revenue</li>
            <li>• Markup = Profit / Cost</li>
          </ul>
        </div>
      </section>
    </div>
  );
}