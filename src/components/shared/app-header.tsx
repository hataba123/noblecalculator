"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

import { siteConfig } from "@/src/config/site";
import { getLocalizedPathname } from "@/src/i18n";
import { useLanguage } from "./language-provider";
import { ThemeToggle } from "./theme-toggle";

export function AppHeader() {
  const { locale, setLocale, t } = useLanguage();
  const homeHref = getLocalizedPathname("/", locale);
  const toolsHref = getLocalizedPathname("/tools", locale);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const languageMenuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      if (!languageMenuRef.current?.contains(event.target as Node)) {
        setIsLanguageMenuOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsLanguageMenuOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const selectLocale = (nextLocale: "en" | "es") => {
    setIsLanguageMenuOpen(false);
    setLocale(nextLocale);
  };

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
          <Link href={homeHref} className="rounded-xl px-3 py-2 transition-colors hover:bg-[color:var(--surface-soft)] sm:px-4">
            {t("navigation.home")}
          </Link>
          <Link href={toolsHref} className="rounded-xl px-3 py-2 transition-colors hover:bg-[color:var(--surface-soft)] sm:px-4">
            {t("navigation.calculators")}
          </Link>
          <div ref={languageMenuRef} className="relative">
            <button
              type="button"
              aria-haspopup="menu"
              aria-expanded={isLanguageMenuOpen}
              aria-label={t("navigation.language")}
              onClick={() => setIsLanguageMenuOpen((current) => !current)}
              className="inline-flex items-center gap-2 rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] px-3 py-2 text-sm font-semibold text-[color:var(--foreground)] shadow-[0_8px_18px_rgba(34,24,12,0.08)] transition-all duration-150 ease-out hover:-translate-y-0.5 hover:bg-[color:var(--surface-soft)] active:translate-y-[1px] sm:px-4"
            >
              <span>{locale === "es" ? t("navigation.spanish") : t("navigation.english")}</span>
              <span
                aria-hidden="true"
                className={`text-[0.65rem] leading-none text-[color:var(--muted-strong)] transition-transform duration-150 ease-out ${
                  isLanguageMenuOpen ? "rotate-180" : "rotate-0"
                }`}
              >
                ▾
              </span>
            </button>

            <div
              role="menu"
              aria-label={t("navigation.language")}
              aria-hidden={!isLanguageMenuOpen}
              className={`absolute right-0 top-[calc(100%+0.5rem)] z-30 min-w-40 overflow-hidden rounded-[0.95rem] border border-[color:var(--border)] bg-[color:var(--surface)] p-1 shadow-[0_20px_48px_rgba(34,24,12,0.16)] transition-all duration-150 ease-out ${
                isLanguageMenuOpen
                  ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
                  : "pointer-events-none -translate-y-1 scale-95 opacity-0"
              }`}
            >
              <button
                type="button"
                role="menuitemradio"
                aria-checked={locale === "en"}
                onClick={() => selectLocale("en")}
                disabled={!isLanguageMenuOpen}
                className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm font-semibold transition-colors disabled:cursor-default ${
                  locale === "en"
                    ? "bg-[color:var(--accent)] text-[color:var(--surface-strong)]"
                    : "text-[color:var(--foreground)] hover:bg-[color:var(--surface-soft)]"
                }`}
              >
                <span>{t("navigation.english")}</span>
                {locale === "en" ? <span aria-hidden="true">✓</span> : null}
              </button>
              <button
                type="button"
                role="menuitemradio"
                aria-checked={locale === "es"}
                onClick={() => selectLocale("es")}
                disabled={!isLanguageMenuOpen}
                className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm font-semibold transition-colors disabled:cursor-default ${
                  locale === "es"
                    ? "bg-[color:var(--accent)] text-[color:var(--surface-strong)]"
                    : "text-[color:var(--foreground)] hover:bg-[color:var(--surface-soft)]"
                }`}
              >
                <span>{t("navigation.spanish")}</span>
                {locale === "es" ? <span aria-hidden="true">✓</span> : null}
              </button>
            </div>
          </div>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
