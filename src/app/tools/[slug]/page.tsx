import Link from "next/link";
import { notFound } from "next/navigation";

import { CalculatorShell } from "@/src/components/shared/calculator-shell";
import { tools, getCalculatorDefinition } from "@/src/config/tools";
import { createPageMetadata } from "@/src/lib/metadata";
import {
  FreelanceHourlyRateCalculator,
} from "@/src/features/calculators/freelance-hourly-rate";
import { InternationalTransferFeeCalculator } from "@/src/features/calculators/international-transfer-fee";
import { InvoiceCalculatorCalculator } from "@/src/features/calculators/invoice-calculator";
import { MarkupCalculator } from "@/src/features/calculators/markup";
import { ProfitMarginCalculator } from "@/src/features/calculators/profit-margin";
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
      "Browse financial calculators in NobleCalculator.",
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
    <main className="min-h-screen px-4 py-6 text-[#1b1a17] sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
        <CalculatorShell title={tool.title} description={tool.description}>
          <div className="mb-6 flex flex-wrap gap-3">
            <Link
              href="/tools"
              className="inline-flex rounded-full border border-black/10 bg-[#201c17] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-black"
            >
              Back to tools
            </Link>
            <div className="rounded-full border border-black/10 bg-[#f7f1e8] px-5 py-3 text-sm font-semibold text-[#1b1a17]">
              /tools/{tool.slug}
            </div>
          </div>

          <Calculator />
        </CalculatorShell>
      </div>
    </main>
  );
}
