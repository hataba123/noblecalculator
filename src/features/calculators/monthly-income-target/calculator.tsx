"use client";

import { useState } from "react";

import { SupportToolShell } from "../support-tools/shared";
import { calculateMonthlyIncomeTarget } from "./core";
import { monthlyIncomeTargetConfig } from "./core";
import { MonthlyIncomeTargetForm } from "./form";
import { MonthlyIncomeTargetResult } from "./result";
import type { MonthlyIncomeTargetInput } from "./core";

export function MonthlyIncomeTargetCalculator() {
  const [value, setValue] = useState<MonthlyIncomeTargetInput>(() => ({ ...monthlyIncomeTargetConfig.defaultValue }));
  const result = calculateMonthlyIncomeTarget(value);

  return (
    <SupportToolShell
      title={monthlyIncomeTargetConfig.title}
      description="Find the monthly revenue you need to cover income, taxes, and expenses."
      resultTitle="Income target"
      resultDescription="Work backward from your take-home goal to the monthly revenue target."
      inputs={<MonthlyIncomeTargetForm value={value} onChange={setValue} />}
      results={<MonthlyIncomeTargetResult result={result} />}
    />
  );
}
