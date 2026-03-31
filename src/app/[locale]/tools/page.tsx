export { generateMetadata, default } from "../../tools/page";

import { supportedLocales } from "@/src/i18n";

export function generateStaticParams() {
  return supportedLocales.map((locale) => ({ locale }));
}