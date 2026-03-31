"use client";

import Link from "next/link";

import { siteConfig } from "@/src/config/site";
import { getLocalizedPathname } from "@/src/i18n";
import { useLanguage } from "./language-provider";
import { ThemeToggle } from "./theme-toggle";

export function AppHeader() {
  const { locale, setLocale, t } = useLanguage();
  const homeHref = getLocalizedPathname("/", locale);
  const toolsHref = getLocalizedPathname("/tools", locale);

  return (
    <header className="sticky top-0 z-20 border-b border-[color:var(--border)] bg-[color:var(--background)]/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-[90rem] flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-10">
        <Link href={homeHref} className="flex items-center gap-3 self-start">
          <span className="app-logo-badge flex h-9 w-9 items-center justify-center rounded-2xl bg-[color:var(--accent-strong)] text-sm font-semibold text-white shadow-[0_10px_24px_rgba(34,24,12,0.2)] sm:h-10 sm:w-10">
            NC
          </span>
          <div className="min-w-0 leading-tight">
            <div className="break-words text-base font-semibold tracking-[0.16em] uppercase text-[color:var(--foreground)] sm:text-lg lg:text-xl">
              {siteConfig.name}
            </div>
          </div>
        </Link>

        <nav className="flex flex-wrap items-center gap-2 text-sm font-medium text-[color:var(--foreground)] sm:text-base lg:text-lg">
          <Link href={homeHref} className="rounded-full px-3 py-2 transition-colors hover:bg-[color:var(--surface-soft)] sm:px-4">
            {t("navigation.home")}
          </Link>
          <Link href={toolsHref} className="rounded-full px-3 py-2 transition-colors hover:bg-[color:var(--surface-soft)] sm:px-4">
            {t("navigation.calculators")}
          </Link>
          <label className="sr-only" htmlFor="language-picker">
            {t("navigation.language")}
          </label>
          <select
            id="language-picker"
            value={locale}
            onChange={(event) => setLocale(event.target.value === "es" ? "es" : "en")}
            className="rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-3 py-2 text-sm font-semibold text-[color:var(--foreground)] shadow-[0_8px_18px_rgba(34,24,12,0.08)] outline-none transition hover:bg-[color:var(--surface-soft)] sm:px-4"
            aria-label={t("navigation.language")}
          >
            <option value="en">{t("navigation.english")}</option>
            <option value="es">{t("navigation.spanish")}</option>
          </select>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
