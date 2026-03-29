import Link from "next/link";
import { notFound } from "next/navigation";

import { tools, getCalculatorDefinition } from "@/src/config/tools";
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
        <section className="rounded-[2rem] border border-black/10 bg-white/80 p-6 shadow-[0_20px_60px_rgba(34,24,12,0.08)] backdrop-blur sm:p-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl space-y-3">
              <p className="text-sm uppercase tracking-[0.24em] text-[#8a6b45]">Dedicated route</p>
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">{tool.title}</h1>
              <p className="max-w-2xl text-base leading-7 text-[#5c554b] sm:text-lg">{tool.description}</p>
            </div>

            <div className="grid gap-3 text-sm text-[#5c554b] sm:grid-cols-3 lg:w-[30rem]">
              {[
                { label: "Slug", value: tool.slug },
                { label: "Source", value: "Shared registry" },
                { label: "State", value: "Real form + result" },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl border border-black/10 bg-[#fbf8f3] p-4">
                  <div className="text-xs uppercase tracking-[0.24em] text-[#8a6b45]">{item.label}</div>
                  <div className="mt-1 font-semibold text-[#1b1a17]">{item.value}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
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
        </section>

        <section>
          <Calculator />
        </section>
      </div>
    </main>
  );
}
