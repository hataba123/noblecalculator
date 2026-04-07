"use client";

import { useState } from "react";

import { SupportToolShell } from "../support-tools/shared";
import { calculateLatePaymentFee } from "./core";
import { latePaymentFeeConfig } from "./core";
import { LatePaymentFeeForm } from "./form";
import { LatePaymentFeeResult } from "./result";
import type { LatePaymentFeeInput } from "./core";

export function LatePaymentFeeCalculator() {
  const [value, setValue] = useState<LatePaymentFeeInput>(() => ({ ...latePaymentFeeConfig.defaultValue }));
  const result = calculateLatePaymentFee(value);

  return (
    <SupportToolShell
      title={latePaymentFeeConfig.title}
      description="Estimate the fee added when an invoice is paid after the due date."
      resultTitle="Late fee snapshot"
      resultDescription="The fee is prorated by the number of days the payment is late."
      inputs={<LatePaymentFeeForm value={value} onChange={setValue} />}
      results={<LatePaymentFeeResult result={result} />}
    />
  );
}
