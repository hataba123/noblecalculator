import Link from "next/link";
import { notFound } from "next/navigation";

import { CalculatorShell } from "@/src/components/shared/calculator-shell";
import { CalculatorSeoSections } from "@/src/components/shared/calculator-seo-sections";
import { PageStructuredData } from "@/src/components/shared/page-structured-data";
import { tools, getCalculatorDefinition } from "@/src/config/tools";
import { createPageMetadata } from "@/src/lib/metadata";
import { BreakEvenCalculator } from "@/src/features/calculators/break-even";
import { CacCalculator } from "@/src/features/calculators/cac";
import { CpmCpcCalculator } from "@/src/features/calculators/cpm-cpc";
import { DayRateToHourlyRateCalculator } from "@/src/features/calculators/day-rate-to-hourly-rate";
import { FreelanceHourlyRateCalculator } from "@/src/features/calculators/freelance-hourly-rate";
import { GrossToNetCalculator } from "@/src/features/calculators/gross-to-net";
import { InternationalTransferFeeCalculator } from "@/src/features/calculators/international-transfer-fee";
import { InvoiceCalculatorCalculator } from "@/src/features/calculators/invoice-calculator";
import { LatePaymentFeeCalculator } from "@/src/features/calculators/late-payment-fee";
import { MonthlyIncomeTargetCalculator } from "@/src/features/calculators/monthly-income-target";
import { MarkupCalculator } from "@/src/features/calculators/markup";
import { NetToGrossCalculator } from "@/src/features/calculators/net-to-gross";
import { PaymentProcessingFeeCalculator } from "@/src/features/calculators/payment-processing-fee";
import { SelfEmployedTaxEstimatorCalculator } from "@/src/features/calculators/self-employed-tax-estimator";
import { ProfitMarginCalculator } from "@/src/features/calculators/profit-margin";
import { RoiCalculator } from "@/src/features/calculators/roi";
import { RoasCalculator } from "@/src/features/calculators/roas";
import { WebsiteCostCalculator } from "@/src/features/calculators/website-cost";
import { UtilizationRateCalculator } from "@/src/features/calculators/utilization-rate";
import { VatCalculatorCalculator } from "@/src/features/calculators/vat-calculator";
import { getCalculatorSeoContent } from "@/src/features/calculators/shared/calculator-content-registry";

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
  "self-employed-tax-estimator": SelfEmployedTaxEstimatorCalculator,
  "utilization-rate": UtilizationRateCalculator,
  "monthly-income-target": MonthlyIncomeTargetCalculator,
  cac: CacCalculator,
  "cpm-cpc": CpmCpcCalculator,
  "day-rate-to-hourly-rate": DayRateToHourlyRateCalculator,
} as const;

export function generateStaticParams() {
  return tools.map((tool) => ({ slug: tool.slug }));
}

export async function generateMetadata({ params }: ToolPageProps) {
  const { slug } = await params;
  const tool = getCalculatorDefinition(slug);
  const seoContent = getCalculatorSeoContent(slug);
  const description = seoContent?.metaDescription ?? tool?.description ?? "Choose a calculator and get a quick result in seconds.";

  if (!tool) {
    return createPageMetadata(
      "Calculator",
      description,
      "/tools",
      seoContent?.keywords ?? ["financial calculator", "calculator tool"]
    );
  }

  return createPageMetadata(
    tool.title,
    description,
    `/tools/${tool.slug}`,
    seoContent ? [tool.slug, tool.title, ...seoContent.keywords, "financial calculator", "business calculator"] : [tool.slug, tool.title, "financial calculator", "business calculator"]
  );
}

export default async function ToolPage({ params }: ToolPageProps) {
  const { slug } = await params;
  const tool = getCalculatorDefinition(slug);
  const Calculator = calculatorMap[slug as keyof typeof calculatorMap];
  const seoContent = getCalculatorSeoContent(slug);
  const pageDescription = seoContent?.intro ?? tool?.description;

  if (!tool || !Calculator) {
    notFound();
  }

  return (
    <main className="min-h-screen px-3 py-4 text-[color:var(--foreground)] sm:px-6 sm:py-6 lg:px-8 xl:px-10">
      <PageStructuredData
        kind="calculator"
        title={tool.title}
        description={pageDescription ?? tool.description}
        pathname={`/tools/${tool.slug}`}
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Tools", href: "/tools" },
          { name: tool.title, href: `/tools/${tool.slug}` },
        ]}
        faq={seoContent?.faq}
      />
      <div className="mx-auto flex w-full max-w-[90rem] flex-col gap-6 sm:gap-8">
        <CalculatorShell title={tool.title} description={pageDescription}>
          <div className="mb-5 flex flex-wrap gap-3 sm:mb-6">
            <Link
              href="/tools"
              className="inline-flex rounded-full border border-[color:var(--border)] bg-[color:var(--accent-strong)] px-4 py-2.5 text-sm font-semibold !text-[color:var(--background)] transition-colors hover:bg-[color:var(--foreground)] hover:!text-[color:var(--background)] sm:px-5 sm:py-3"
            >
              Back to tools
            </Link>
          </div>

          <Calculator />
        </CalculatorShell>

        <CalculatorSeoSections content={seoContent} />
      </div>
    </main>
  );
}
