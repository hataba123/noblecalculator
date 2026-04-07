"use client";

import { useState } from "react";

import { calculateFreelanceHourlyRate } from "./core";
import { freelanceHourlyRateConfig } from "./core";
import { FreelanceHourlyRateForm } from "./form";
import { FreelanceHourlyRateResult } from "./result";
import type { FreelanceHourlyRateInput } from "./core";

export function FreelanceHourlyRateCalculator() {
  const [value, setValue] = useState<FreelanceHourlyRateInput>(() => ({ ...freelanceHourlyRateConfig.defaultValue }));
  const result = calculateFreelanceHourlyRate(value);

  return (
    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <section className="rounded-[2rem] border border-black/10 bg-white/80 p-6 shadow-[0_20px_60px_rgba(34,24,12,0.08)] backdrop-blur sm:p-8">
        <p className="text-sm uppercase tracking-[0.24em] text-[#8a6b45]">Inputs</p>
        <h2 className="mt-2 text-2xl font-semibold text-[#1b1a17]">Freelance Hourly Rate Calculator</h2>
        <p className="mt-3 max-w-xl text-sm leading-6 text-[#5c554b]">
          Set an hourly rate that matches your income goal.
        </p>

        <div className="mt-6">
          <FreelanceHourlyRateForm value={value} onChange={setValue} />
        </div>
      </section>

      <section className="space-y-6">
        <div className="rounded-[2rem] border border-black/10 bg-[#201c17] p-6 text-white shadow-[0_20px_60px_rgba(34,24,12,0.12)] sm:p-8">
          <p className="text-sm uppercase tracking-[0.24em] text-[#c9b79d]">Result</p>
          <h3 className="mt-2 text-2xl font-semibold">Suggested hourly rate</h3>
          <p className="mt-3 text-sm leading-6 text-white/72">
            If billable hours is 0, we return 0.
          </p>
        </div>

        <FreelanceHourlyRateResult result={result} />
      </section>
    </div>
  );
}
