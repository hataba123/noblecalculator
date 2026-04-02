import Link from "next/link";
import { notFound } from "next/navigation";

import { CalculatorShell } from "@/src/components/shared/calculator-shell";
import { CalculatorSeoSections } from "../../../components/shared/calculator-seo-sections";
import { PageStructuredData } from "@/src/components/shared/page-structured-data";
import { tools, getCalculatorDefinition } from "@/src/config/tools";
import { createPageMetadata } from "@/src/lib/metadata";
import { createTranslator, getLocalizedPathname, translateText } from "@/src/i18n";
import { getRequestLocale } from "@/src/i18n/server";
import { BreakEvenCalculator } from "@/src/features/calculators/break-even";
import { BmiCalculator } from "@/src/features/calculators/bmi";
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
import { TdeeCalculator } from "@/src/features/calculators/tdee-calculator";
import { WebsiteCostCalculator } from "@/src/features/calculators/website-cost";
import { UtilizationRateCalculator } from "@/src/features/calculators/utilization-rate";
import { VatCalculatorCalculator } from "@/src/features/calculators/vat-calculator";
import { getCalculatorSeoContent } from "@/src/features/calculators/shared/calculator-content-registry";

type ToolPageProps = {
  params: Promise<{ slug: string }>;
};

const calculatorMap = {
  bmi: BmiCalculator,
  "tdee-calculator": TdeeCalculator,
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

const germanDescriptionOverrides: Record<string, string> = {
  "profit-margin": "Nutze das, wenn du sehen willst, wie viel von deinem Umsatz nach den bezahlten Kosten noch übrig bleibt.",
  "tdee-calculator": "Nutze das, wenn du eine praktische Schätzung für Ruhekalorien, Erhaltungskalorien und einen Startpunkt für Abnehmen oder Zunehmen willst.",
};

const germanMetaDescriptionOverrides: Record<string, string> = {
  "profit-margin": "Sieh mit einem einfachen Gewinnmargen-Rechner, wie viel Gewinn du nach den Kosten behältst.",
  "tdee-calculator": "Schätze den Kalorienbedarf von Erwachsenen mit einem einfachen TDEE-Rechner und vergleiche mehrere gängige Gleichungen.",
};

export function generateStaticParams() {
  return tools.map((tool) => ({ slug: tool.slug }));
}

export async function generateMetadata({ params }: ToolPageProps) {
  const locale = await getRequestLocale();
  const t = createTranslator(locale);
  const { slug } = await params;
  const tool = getCalculatorDefinition(slug);
  const seoContent = getCalculatorSeoContent(slug, locale);
  const description =
    (locale === "de" ? germanMetaDescriptionOverrides[slug] : undefined) ??
    seoContent?.metaDescription ??
    (tool ? translateText(locale, tool.description) : t("calculatorShell.quickCalculatorDescription"));
  const title = tool ? translateText(locale, tool.title) : t("calculator.badge");
  const translatedKeywords = (seoContent?.keywords ?? []).map((keyword) => translateText(locale, keyword));
  const fallbackKeywords =
    locale === "es"
      ? ["calculadora financiera", "calculadora de negocios"]
      : locale === "de"
        ? ["Finanzrechner", "Geschäftsrechner"]
        : ["financial calculator", "business calculator"];

  if (!tool) {
    return createPageMetadata(
      locale,
      title,
      description,
      "/tools",
      translatedKeywords.length > 0 ? translatedKeywords : fallbackKeywords
    );
  }

  return createPageMetadata(
    locale,
    title,
    description,
    `/tools/${tool.slug}`,
    seoContent
      ? [tool.slug, title, ...translatedKeywords, ...fallbackKeywords]
      : [tool.slug, title, ...fallbackKeywords]
  );
}

export default async function ToolPage({ params }: ToolPageProps) {
  const locale = await getRequestLocale();
  const t = createTranslator(locale);
  const { slug } = await params;
  const tool = getCalculatorDefinition(slug);
  const Calculator = calculatorMap[slug as keyof typeof calculatorMap];
  const seoContent = getCalculatorSeoContent(slug, locale);
  const pageDescription =
    (locale === "de" ? germanDescriptionOverrides[slug] : undefined) ??
    seoContent?.intro ??
    (tool ? translateText(locale, tool.description) : undefined);
  const translatedFaq = seoContent?.faq?.map((item) => ({
    question: translateText(locale, item.question),
    answer: translateText(locale, item.answer),
  }));
  const translatedTitle = tool ? translateText(locale, tool.title) : t("calculator.badge");
  const toolsPath = getLocalizedPathname("/tools", locale);
  const homePath = getLocalizedPathname("/", locale);
  const calculatorPath = getLocalizedPathname(`/tools/${slug}`, locale);

  if (!tool || !Calculator) {
    notFound();
  }

  return (
    <main className="min-h-screen px-3 py-4 text-[color:var(--foreground)] sm:px-6 sm:py-6 lg:px-8 xl:px-10">
      <PageStructuredData
        kind="calculator"
        title={translatedTitle}
        description={pageDescription ?? translateText(locale, tool.description)}
        pathname={calculatorPath}
        locale={locale}
        breadcrumbs={[
          { name: t("navigation.home"), href: homePath },
          { name: t("navigation.calculators"), href: toolsPath },
          { name: translatedTitle, href: calculatorPath },
        ]}
        faq={translatedFaq}
      />
      <div className="mx-auto flex w-full max-w-[90rem] flex-col gap-6 sm:gap-8">
        <CalculatorShell title={translatedTitle} description={pageDescription}>
          <div className="mb-5 flex flex-wrap gap-3 sm:mb-6">
            <Link
              href={toolsPath}
              className="inline-flex rounded-full border border-[color:var(--border)] bg-[color:var(--accent-strong)] px-4 py-2.5 text-sm font-semibold !text-[color:var(--background)] transition-colors hover:bg-[color:var(--foreground)] hover:!text-[color:var(--background)] sm:px-5 sm:py-3"
            >
              {translateText(locale, "Back to tools")}
            </Link>
          </div>

          <Calculator />
        </CalculatorShell>

        <CalculatorSeoSections content={seoContent} />
      </div>
    </main>
  );
}
