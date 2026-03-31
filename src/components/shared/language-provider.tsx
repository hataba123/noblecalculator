"use client";

import { createContext, useContext, useEffect, useMemo, type ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";

import { createTranslator, getLocaleFromPathname, getLocalizedPathname, type Locale } from "@/src/i18n";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
  localizePathname: (pathname: string, locale: Locale) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children, initialLocale }: { children: ReactNode; initialLocale: Locale }) {
  const pathname = usePathname();
  const router = useRouter();
  const locale = getLocaleFromPathname(pathname ?? `/${initialLocale}`);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      locale,
      setLocale: (nextLocale) => {
        router.push(getLocalizedPathname(pathname ?? `/${locale}`, nextLocale));
      },
      t: createTranslator(locale),
      localizePathname: getLocalizedPathname,
    }),
    [locale, pathname, router],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }

  return context;
}