import Link from "next/link";

import { tools } from "@/src/config/tools";
import { ToolCard } from "@/src/components/shared/tool-card";
import { PageStructuredData } from "@/src/components/shared/page-structured-data";
import { createPageMetadata } from "@/src/lib/metadata";
import { createTranslator, getLocalizedPathname, translateText } from "@/src/i18n";
import { getRequestLocale } from "@/src/i18n/server";

const toolGroupDefinitions = [
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

  return createPageMetadata(
    locale,
    t("tools.badge"),
    t("tools.description"),
    "/tools",
    locale === "es"
      ? ["herramientas financieras", "directorio de calculadoras", "registro de calculadoras", "centro de calculadoras de negocios", "calculadoras en línea"]
      : ["financial tools", "calculator directory", "calculator registry", "business calculator hub", "online calculators"]
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
      .filter((tool): tool is (typeof tools)[number] => Boolean(tool)),
  }));

  return (
    <main className="min-h-screen px-3 py-4 text-[color:var(--foreground)] sm:px-6 sm:py-6 lg:px-8 xl:px-10">
      <PageStructuredData
        kind="hub"
        title={t("tools.badge")}
        description={t("tools.description")}
        pathname={hubPath}
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
              <h1 className="text-balance text-[2.15rem] font-semibold tracking-tight sm:text-5xl xl:text-6xl">
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

        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {groupedTools.map((group) => (
            <Link
              key={group.id}
              href={`#${group.id}`}
              className="group rounded-[0.9rem] border border-[color:var(--border)] bg-[color:var(--surface)] p-4 text-left shadow-[0_14px_32px_rgba(34,24,12,0.06)] backdrop-blur transition-all duration-150 ease-out hover:-translate-y-0.5 hover:bg-[color:var(--surface-soft)] active:translate-y-[1px] active:scale-[0.99]"
            >
              <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--accent)] sm:text-sm">{group.title}</p>
              <p className="mt-2 text-sm leading-6 text-[color:var(--muted)]">{group.description}</p>
              <div className="mt-4 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--muted-strong)]">
                <span>
                  {group.items.length} {t("tools.groupCount")}
                </span>
                <span aria-hidden="true" className="transition-transform duration-150 ease-out group-hover:translate-x-0.5">
                  →
                </span>
              </div>
            </Link>
          ))}
        </section>

        <div className="grid gap-5">
          {groupedTools.map((group) => (
            <section
              key={group.id}
              id={group.id}
              className="scroll-mt-24 rounded-[1.1rem] border border-[color:var(--border)] bg-[color:var(--surface)] p-5 shadow-[0_18px_48px_rgba(34,24,12,0.08)] backdrop-blur sm:p-6 lg:rounded-[1.25rem] lg:p-8"
            >
              <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
                <div className="w-full min-w-0 lg:flex-1">
                  <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--accent)] sm:text-sm">{group.title}</p>
                  <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">{group.description}</h2>
                </div>
                <div className="inline-flex w-fit rounded-full border border-[color:var(--border)] bg-[color:var(--surface-soft)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--muted-strong)] sm:text-sm">
                  {group.items.length} {t("tools.groupCount")}
                </div>
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {group.items.map((tool) => (
                  <ToolCard
                    key={tool.slug}
                    title={translateText(locale, tool.title)}
                    description={translateText(locale, tool.description)}
                    href={getLocalizedPathname(`/tools/${tool.slug}`, locale)}
                    slug={tool.slug}
                    variant="light"
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
