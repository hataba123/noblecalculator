export { generateMetadata, default } from "../../../tools/[slug]/page";

import { supportedLocales } from "@/src/i18n";
import { tools } from "@/src/config/tools";

export function generateStaticParams() {
  return supportedLocales.flatMap((locale) => tools.map((tool) => ({ locale, slug: tool.slug })));
}