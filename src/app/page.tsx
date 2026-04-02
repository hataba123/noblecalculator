import Link from "next/link";

import { siteConfig } from "@/src/config/site";
import { HomeCalculator } from "@/src/components/shared/home-calculator";
import { PageStructuredData } from "@/src/components/shared/page-structured-data";
import { ToolCard } from "@/src/components/shared/tool-card";
import { createPageMetadata } from "@/src/lib/metadata";
import { createTranslator, getLocalizedPathname, translateText } from "@/src/i18n";
import { getRequestLocale } from "@/src/i18n/server";

export async function generateMetadata() {
  const locale = await getRequestLocale();
  const t = createTranslator(locale);
  const keywords =
    locale === "es"
      ? ["calculadora financiera", "calculadora de margen de beneficio", "calculadora de markup", "calculadora freelance", "calculadora de impuestos", "calculadora de negocios"]
      : locale === "de"
        ? ["Finanzrechner", "Gewinnmargen-Rechner", "Aufschlagsrechner", "Freelance-Rechner", "Steuerrechner", "Geschäftsrechner"]
        : ["financial calculator", "profit margin calculator", "markup calculator", "freelance calculator", "tax calculator", "business calculator"];

  return createPageMetadata(
    locale,
    siteConfig.name,
    t("site.description"),
    "/",
    keywords
  );
}

export default async function HomePage() {
  const locale = await getRequestLocale();
  const t = createTranslator(locale);
  const browseCalculatorsHref = getLocalizedPathname("/tools", locale);
  const tdeeHref = getLocalizedPathname("/tools/tdee-calculator", locale);

  const featuredTools = [
    { title: "Profit Margin", href: "/tools/profit-margin", description: "See how much profit you keep after costs.", slug: "profit-margin" },
    { title: "Markup", href: "/tools/markup", description: "Find the right selling price from your cost and target markup.", slug: "markup" },
    { title: "Freelance Hourly Rate", href: "/tools/freelance-hourly-rate", description: "Set an hourly rate that fits your income goal.", slug: "freelance-hourly-rate" },
    { title: "VAT Calculator", href: "/tools/vat-calculator", description: "Add VAT to a price or split it back out.", slug: "vat-calculator" },
  ].map((tool) => ({
    ...tool,
    title: translateText(locale, tool.title),
    description: translateText(locale, tool.description),
    href: getLocalizedPathname(tool.href, locale),
  }));

  const goodForItems = [
    "Freelance pricing",
    "Invoice and tax planning",
    "Ad spend and ROI checks",
    "Website budget estimates",
  ].map((item) => translateText(locale, item));

  const whatToExpectCards = [
    "See answers update instantly while you type",
    "Easy words for everyone, not only number people",
    "Looks great on phones, tablets, and desktop screens",
    "Same clean style across every calculator page",
  ].map((item) => translateText(locale, item));

  return (
    <main className="min-h-screen px-3 py-4 text-[color:var(--foreground)] sm:px-6 sm:py-6 lg:px-8 xl:px-10">
      <PageStructuredData kind="home" title={siteConfig.name} description={t("site.description")} pathname={getLocalizedPathname("/", locale)} locale={locale} />
      <div className="mx-auto flex w-full max-w-[90rem] flex-col gap-6 sm:gap-8">
        <header className="rounded-[1.1rem] border border-[color:var(--border)] bg-[color:var(--surface)] p-5 shadow-[0_18px_48px_rgba(34,24,12,0.08)] backdrop-blur sm:p-6 lg:rounded-[1.25rem] lg:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="w-full min-w-0 space-y-4 lg:flex-1">
              <div className="space-y-3">
                <h1 className="w-full max-w-none break-words text-balance text-[2rem] font-semibold tracking-tight sm:text-4xl lg:text-5xl xl:text-6xl">
                  {t("home.heroKicker")}
                </h1>
                <p className="w-full max-w-none break-words text-sm leading-7 text-[color:var(--muted)] sm:text-base lg:text-lg">
                  {t("home.heroDescription")}
                </p>
              </div>

              <div className="flex flex-wrap gap-3 pt-1">
                <Link
                  href={browseCalculatorsHref}
                  className="inline-flex rounded-full border border-[color:var(--border)] bg-[color:var(--accent-strong)] px-4 py-2.5 text-sm font-semibold !text-[color:var(--background)] transition-colors hover:bg-[color:var(--foreground)] hover:!text-[color:var(--background)] sm:px-5 sm:py-3"
                >
                  {t("home.browseCalculators")}
                </Link>
                <Link
                  href={tdeeHref}
                  className="inline-flex rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-2.5 text-sm font-semibold text-[color:var(--foreground)] transition-colors hover:bg-[color:var(--surface-soft)] sm:px-5 sm:py-3"
                >
                  {t("home.openTdee")}
                </Link>
              </div>
            </div>
          </div>
        </header>

        <HomeCalculator />

        <section className="grid items-stretch gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] xl:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)]">
          <div className="h-full rounded-[1.15rem] border border-[color:var(--border)] bg-[color:var(--surface)] p-6 shadow-[0_20px_54px_rgba(34,24,12,0.10)] backdrop-blur sm:p-7 lg:rounded-[1.25rem] lg:p-8 xl:p-9">
            <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--accent)] sm:text-sm">
              {t("home.whyPeopleUseThis")}
            </p>

            <h2 className="mt-2 max-w-[18ch] text-xl font-semibold tracking-tight text-[color:var(--foreground)] sm:text-2xl lg:text-[2rem]">
              {t("home.whyTitle")}
            </h2>

            <p className="mt-3 max-w-[62ch] text-sm leading-7 text-[color:var(--muted)] sm:text-base">
              {t("home.whyDescription")}
            </p>

            <div className="mt-5 grid gap-3 text-sm text-[color:var(--muted)] sm:grid-cols-2">
              <div className="rounded-xl border border-[color:var(--border)] bg-[color:var(--surface-soft)] p-4">
                {t("home.whyCardOne")}
              </div>
              <div className="rounded-xl border border-[color:var(--border)] bg-[color:var(--surface-soft)] p-4">
                {t("home.whyCardTwo")}
              </div>
            </div>
          </div>

          <div className="h-full rounded-[1.15rem] border border-[color:var(--border)] bg-[color:var(--accent-soft)] p-6 text-[color:var(--foreground)] shadow-[0_20px_54px_rgba(34,24,12,0.13)] sm:p-7 lg:rounded-[1.25rem] lg:p-8 xl:p-9">
            <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--accent)] sm:text-sm">
              {t("home.goodFor")}
            </p>

            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {goodForItems.map((item) => (
                <li
                  key={item}
                  className="rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-3 text-sm text-[color:var(--foreground)]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4 lg:col-span-2">
            {featuredTools.map((tool) => (
              <ToolCard key={tool.href} title={tool.title} href={tool.href} slug={tool.slug} description={tool.description} variant="light" />
            ))}
          </div>
        </section>

        <section className="rounded-[1.1rem] border border-[color:var(--border)] bg-[color:var(--surface)] p-5 shadow-[0_18px_48px_rgba(34,24,12,0.08)] backdrop-blur sm:p-6 lg:rounded-[1.25rem] lg:p-8">
          <div className="grid gap-5 lg:grid-cols-[1fr_1fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--accent)] sm:text-sm">{t("home.whatToExpect")}</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">{t("home.whatToExpectTitle")}</h2>
              <p className="mt-3 break-words text-sm leading-7 text-[color:var(--muted)] sm:text-base">
                {t("home.whatToExpectDescription")}
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {whatToExpectCards.map((item) => (
                <div key={item} className="rounded-xl border border-[color:var(--border)] bg-[color:var(--surface-soft)] p-4 text-sm text-[color:var(--muted)]">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
