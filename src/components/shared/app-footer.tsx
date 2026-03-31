import { siteConfig } from "@/src/config/site";
import { createTranslator } from "@/src/i18n";
import { getRequestLocale } from "@/src/i18n/server";

export default async function AppFooter() {
  const locale = await getRequestLocale();
  const t = createTranslator(locale);

  return (
    <footer className="border-t border-[color:var(--border)] bg-[color:var(--background)]">
      <div className="mx-auto flex w-full max-w-[90rem] flex-col gap-2 px-4 py-6 text-center text-base text-[color:var(--muted-strong)] sm:px-6 sm:text-left lg:px-8 xl:px-10 md:flex-row md:items-center md:justify-between lg:text-lg">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}. {t("footer.copyright")}
        </p>
        <p>{t("footer.tagline")}</p>
      </div>
    </footer>
  );
}
