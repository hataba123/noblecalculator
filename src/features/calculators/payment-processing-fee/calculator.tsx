"use client";

import { useState } from "react";

import { SupportToolShell } from "../support-tools/shared";
import { calculatePaymentProcessingFee } from "./formula";
import { paymentProcessingFeeConfig } from "./config";
import { PaymentProcessingFeeForm } from "./form";
import { PaymentProcessingFeeResult } from "./result";
import type { PaymentProcessingFeeInput } from "./schema";

export function PaymentProcessingFeeCalculator() {
  const [value, setValue] = useState<PaymentProcessingFeeInput>(() => ({ ...paymentProcessingFeeConfig.defaultValue }));
  const result = calculatePaymentProcessingFee(value);

  return (
    <SupportToolShell
      title={paymentProcessingFeeConfig.title}
      description="See what card processors or payment platforms keep from each payment."
      resultTitle="Processor fee snapshot"
      resultDescription="Estimate the fee amount and how much you actually keep after charges."
      inputs={<PaymentProcessingFeeForm value={value} onChange={setValue} />}
      results={<PaymentProcessingFeeResult result={result} />}
    />
  );
}