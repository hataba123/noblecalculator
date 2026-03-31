import { headers } from "next/headers";

import { localeRequestHeader, normalizeLocale, type Locale } from "./index";

export async function getRequestLocale(): Promise<Locale> {
  const requestHeaders = await headers();
  return normalizeLocale(requestHeaders.get(localeRequestHeader));
}