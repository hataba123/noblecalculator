import { siteConfig } from "@/src/config/site";

export default async function AppFooter() {
  return (
    <footer className="border-t border-[color:var(--border)] bg-[color:var(--background)]">
      <div className="mx-auto flex w-full max-w-[90rem] flex-col gap-1.5 px-4 py-5 text-center text-sm text-[color:var(--muted-strong)] sm:px-6 sm:text-left sm:text-base lg:px-8 xl:px-10 md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}. Todos los derechos reservados.
        </p>
        <p>Este sitio está pensado para cálculos rápidos del día a día.</p>
      </div>
    </footer>
  );
}
