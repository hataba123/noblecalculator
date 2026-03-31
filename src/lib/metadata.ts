import type { Metadata } from "next";

import { siteConfig } from "@/src/config/site";
import { createTranslator, getLanguageAlternates, getOpenGraphLocale, type Locale } from "@/src/i18n";

export const siteMetadata = {
  title: siteConfig.name,
  description: "Explore simple, easy-to-use calculators for finance, fitness, math, and everyday needs.",
};

const ogImagePath = "/og-image.svg";

export function createRootMetadata(locale: Locale): Metadata {
  const t = createTranslator(locale);
  const description = t("site.description");

  return {
    metadataBase: new URL(siteConfig.url),
    icons: {
      icon: "/icon.svg",
      shortcut: "/icon.svg",
    },
    title: {
      default: siteConfig.name,
      template: `%s | ${siteConfig.name}`,
    },
    description,
    openGraph: {
      title: siteConfig.name,
      description,
      siteName: siteConfig.name,
      url: "/",
      images: [
        {
          url: "/og-image.svg",
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
      locale: getOpenGraphLocale(locale),
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: siteConfig.name,
      description,
      images: ["/og-image.svg"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

// Shared helper so every route gets the same SEO and social preview shape.
export function createPageMetadata(
  locale: Locale,
  title: string,
  description: string,
  pathname = "/",
  keywords: string[] = []
): Metadata {
  const url = new URL(siteConfig.url);
  const canonicalPath = pathname.startsWith("/") ? pathname : `/${pathname}`;
  const alternates = getLanguageAlternates(canonicalPath);

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: alternates[locale],
      languages: alternates,
    },
    openGraph: {
      title,
      description,
      url: alternates[locale],
      siteName: siteMetadata.title,
      images: [
        {
          url: ogImagePath,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: getOpenGraphLocale(locale),
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImagePath],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    metadataBase: url,
  };
}
