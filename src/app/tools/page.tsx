import { tools } from "@/src/config/tools";
import { PageStructuredData } from "@/src/components/shared/page-structured-data";
import { createPageMetadata } from "@/src/lib/metadata";
import { createTranslator, getLocalizedPathname, translateText } from "@/src/i18n";
import { getRequestLocale } from "@/src/i18n/server";
import { ToolsBrowser } from "./tools-browser";

const toolGroupDefinitions = [
  {
    key: "health",
    id: "health-wellness",
    slugs: ["bmi", "tdee-calculator"],
  },
  {
    key: "pricing",
    id: "pricing-planning",
    slugs: [
      "profit-margin",
      "markup",
      "break-even",
      "freelance-hourly-rate",
      "day-rate-to-hourly-rate",
      "utilization-rate",
      "monthly-income-target",
      "website-cost",
    ],
  },
  {
    key: "billing",
    id: "billing-tax-fees",
    slugs: ["vat-calculator", "gross-to-net", "net-to-gross", "invoice-calculator", "late-payment-fee", "self-employed-tax-estimator", "payment-processing-fee"],
  },
  {
    key: "marketing",
    id: "marketing-growth",
    slugs: ["cac", "cpm-cpc", "roas", "roi"],
  },
  {
    key: "payments",
    id: "payments-transfers",
    slugs: ["international-transfer-fee"],
  },
] as const;

export async function generateMetadata() {
  const locale = await getRequestLocale();
  const t = createTranslator(locale);
  const keywords =
    locale === "es"
      ? ["herramientas financieras", "directorio de calculadoras", "registro de calculadoras", "centro de calculadoras de negocios", "calculadoras en línea"]
      : locale === "de"
        ? ["Finanztools", "Rechner-Verzeichnis", "Rechner-Hub", "Geschäftsrechner", "Online-Rechner"]
        : locale === "fr"
          ? ["outils financiers", "annuaire de calculateurs", "catalogue de calculateurs", "hub de calculateurs d'entreprise", "calculateurs en ligne"]
          : locale === "ja"
            ? ["財務ツール", "計算機ディレクトリ", "計算機一覧", "ビジネス計算機ハブ", "オンライン計算機"]
            : locale === "pt"
              ? ["ferramentas financeiras", "diretório de calculadoras", "catálogo de calculadoras", "centro de calculadoras de negócios", "calculadoras online"]
              : ["financial tools", "calculator directory", "calculator registry", "business calculator hub", "online calculators"];

  return createPageMetadata(
    locale,
    t("tools.badge"),
    t("tools.description"),
    "/tools",
    keywords
  );
}

export default async function ToolsPage() {
  const locale = await getRequestLocale();
  const t = createTranslator(locale);
  const hubPath = getLocalizedPathname("/tools", locale);
  const toolBySlug = new Map(tools.map((tool) => [tool.slug, tool]));

  const groupedTools = toolGroupDefinitions.map((group) => ({
    ...group,
    title: t(`tools.groups.${group.key}.title`),
    description: t(`tools.groups.${group.key}.description`),
    items: group.slugs
      .map((slug) => toolBySlug.get(slug))
      .filter((tool): tool is (typeof tools)[number] => Boolean(tool))
      .map((tool) => ({
        slug: tool.slug,
        title: translateText(locale, tool.title),
        description: translateText(locale, tool.description),
        href: getLocalizedPathname(`/tools/${tool.slug}`, locale),
      })),
  }));

  return (
    <main className="min-h-screen px-3 py-4 text-[color:var(--foreground)] sm:px-6 sm:py-6 lg:px-8 xl:px-10">
      <PageStructuredData
        kind="hub"
        title={t("tools.badge")}
        description={t("tools.description")}
        pathname={hubPath}
        locale={locale}
        items={tools.map((tool) => ({
          name: translateText(locale, tool.title),
          href: getLocalizedPathname(`/tools/${tool.slug}`, locale),
          description: translateText(locale, tool.description),
        }))}
      />
      <div className="mx-auto flex w-full max-w-[90rem] flex-col gap-6 sm:gap-8">
        <section className="rounded-[1.1rem] border border-[color:var(--border)] bg-[color:var(--surface)] p-5 shadow-[0_18px_48px_rgba(34,24,12,0.08)] backdrop-blur sm:p-6 lg:rounded-[1.25rem] lg:p-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="w-full min-w-0 space-y-3 lg:flex-1">
              <span className="inline-flex w-fit rounded-full border border-[color:var(--border)] bg-[color:var(--surface-soft)] px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-[color:var(--muted-strong)] sm:text-xs">
                {t("tools.badge")}
              </span>
              <h1 className="text-balance text-[2rem] font-semibold tracking-tight sm:text-4xl lg:text-5xl xl:text-6xl">
                {t("tools.title")}
              </h1>
              <p className="break-words text-sm leading-7 text-[color:var(--muted)] sm:text-base lg:text-lg">
                {t("tools.description")}
              </p>
              <p className="break-words text-sm leading-7 text-[color:var(--muted)] sm:text-base">
                {t("tools.supportingDescription")}
              </p>
            </div>
          </div>
        </section>
        <ToolsBrowser
          groups={groupedTools}
          searchLabel={t("tools.searchLabel")}
          searchPlaceholder={t("tools.searchPlaceholder")}
          searchResultsLabel={t("tools.searchResults")}
          noResultsTitle={t("tools.noResultsTitle")}
          noResultsDescription={t("tools.noResultsDescription")}
          clearSearchLabel={t("tools.clearSearch")}
          groupCountLabel={t("tools.groupCount")}
        />
      </div>
    </main>
  );
}
