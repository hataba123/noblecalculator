import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";
import { Manrope, Space_Grotesk } from "next/font/google";

import AppFooter from "@/src/components/shared/app-footer";
import { AppHeader } from "@/src/components/shared/app-header";
import { LanguageProvider } from "@/src/components/shared/language-provider";
import { ThemeProvider } from "@/src/components/shared/theme-provider";
import { createRootMetadata } from "@/src/lib/metadata";
import { getRequestLocale } from "@/src/i18n/server";
import "./globals.css";

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const headingFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  return createRootMetadata(locale);
}

export default async function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  const locale = await getRequestLocale();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${bodyFont.variable} ${headingFont.variable} flex min-h-screen flex-col overflow-x-hidden bg-[color:var(--background)] text-[color:var(--foreground)]`}>
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(() => {
  const storageKey = "noblecalculator-theme";
  const storedTheme = window.localStorage.getItem(storageKey);
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  const theme = storedTheme === "dark" || storedTheme === "light" ? storedTheme : systemTheme;
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
})();`,
          }}
        />
        <ThemeProvider>
          <LanguageProvider initialLocale={locale}>
            <AppHeader />
            <div className="flex-1">{children}</div>
            <AppFooter />
          </LanguageProvider>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
