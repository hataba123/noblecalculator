import Link from "next/link";
import { notFound } from "next/navigation";

import { CalculatorShell } from "@/src/components/shared/calculator-shell";
import { tools, getCalculatorDefinition } from "@/src/config/tools";
import { createPageMetadata } from "@/src/lib/metadata";
import { BreakEvenCalculator } from "@/src/features/calculators/break-even";
import { FreelanceHourlyRateCalculator } from "@/src/features/calculators/freelance-hourly-rate";
import { GrossToNetCalculator } from "@/src/features/calculators/gross-to-net";
import { InternationalTransferFeeCalculator } from "@/src/features/calculators/international-transfer-fee";
import { InvoiceCalculatorCalculator } from "@/src/features/calculators/invoice-calculator";
import { LatePaymentFeeCalculator } from "@/src/features/calculators/late-payment-fee";
import { MarkupCalculator } from "@/src/features/calculators/markup";
import { NetToGrossCalculator } from "@/src/features/calculators/net-to-gross";
import { PaymentProcessingFeeCalculator } from "@/src/features/calculators/payment-processing-fee";
import { ProfitMarginCalculator } from "@/src/features/calculators/profit-margin";
import { RoiCalculator } from "@/src/features/calculators/roi";
import { RoasCalculator } from "@/src/features/calculators/roas";
import { WebsiteCostCalculator } from "@/src/features/calculators/website-cost";
import { VatCalculatorCalculator } from "@/src/features/calculators/vat-calculator";

type ToolPageProps = {
  params: Promise<{ slug: string }>;
};

const calculatorMap = {
  "profit-margin": ProfitMarginCalculator,
  markup: MarkupCalculator,
  "freelance-hourly-rate": FreelanceHourlyRateCalculator,
  "vat-calculator": VatCalculatorCalculator,
  "invoice-calculator": InvoiceCalculatorCalculator,
  "international-transfer-fee": InternationalTransferFeeCalculator,
  "break-even": BreakEvenCalculator,
  "gross-to-net": GrossToNetCalculator,
  "net-to-gross": NetToGrossCalculator,
  "late-payment-fee": LatePaymentFeeCalculator,
  "payment-processing-fee": PaymentProcessingFeeCalculator,
  roi: RoiCalculator,
  roas: RoasCalculator,
  "website-cost": WebsiteCostCalculator,
} as const;

export function generateStaticParams() {
  return tools.map((tool) => ({ slug: tool.slug }));
}

export async function generateMetadata({ params }: ToolPageProps) {
  const { slug } = await params;
  const tool = getCalculatorDefinition(slug);

  if (!tool) {
    return createPageMetadata(
      "Calculator",
      "Choose a calculator and get a quick result in seconds.",
      "/tools",
      ["financial calculator", "calculator tool"]
    );
  }

  return createPageMetadata(
    tool.title,
    tool.description,
    `/tools/${tool.slug}`,
    [tool.slug, tool.title, "financial calculator", "business calculator"]
  );
}

export default async function ToolPage({ params }: ToolPageProps) {
  const { slug } = await params;
  const tool = getCalculatorDefinition(slug);
  const Calculator = calculatorMap[slug as keyof typeof calculatorMap];

  if (!tool || !Calculator) {
    notFound();
  }

  return (
    <main className="min-h-screen px-3 py-4 text-[#1b1a17] sm:px-6 sm:py-6 lg:px-8 xl:px-10">
      <div className="mx-auto flex w-full max-w-[90rem] flex-col gap-6 sm:gap-8">
        <CalculatorShell title={tool.title} description={tool.description}>
          <div className="mb-5 flex flex-wrap gap-3 sm:mb-6">
            <Link
              href="/tools"
              className="inline-flex rounded-full border border-black/10 bg-[#201c17] px-4 py-2.5 text-sm font-semibold !text-white transition-colors hover:bg-black hover:!text-white sm:px-5 sm:py-3"
            >
              Back to tools
            </Link>
          </div>

          <Calculator />
        </CalculatorShell>
      </div>
    </main>
  );
}
