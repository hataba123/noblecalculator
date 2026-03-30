import type { Metadata } from "next";

import { siteConfig } from "@/src/config/site";

export const siteMetadata = {
  title: "NobleCalculator",
  description: "Financial calculators for freelancers, agencies, and small businesses.",
};

const ogImagePath = "/og-image.svg";

// Shared helper so every route gets the same SEO and social preview shape.
export function createPageMetadata(
  title: string,
  description: string,
  pathname = "/",
  keywords: string[] = []
): Metadata {
  const url = new URL(siteConfig.url);
  const canonicalPath = pathname.startsWith("/") ? pathname : `/${pathname}`;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title,
      description,
      url: canonicalPath,
      siteName: siteMetadata.title,
      images: [
        {
          url: ogImagePath,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_US",
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
