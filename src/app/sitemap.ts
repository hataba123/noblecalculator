import type { MetadataRoute } from "next";

import { siteConfig } from "@/src/config/site";
import { tools } from "@/src/config/tools";
import { getLocalizedPathname, supportedLocales } from "@/src/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url.replace(/\/$/, "");

  const toAbsoluteUrl = (pathname: string) => `${baseUrl}${pathname}`;

  return supportedLocales.flatMap((locale) => [
    {
      url: toAbsoluteUrl(getLocalizedPathname("/", locale)),
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: toAbsoluteUrl(getLocalizedPathname("/tools", locale)),
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    ...tools.map((tool) => ({
      url: toAbsoluteUrl(getLocalizedPathname(`/tools/${tool.slug}`, locale)),
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ]);
}