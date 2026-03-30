import { siteConfig } from "@/src/config/site";

export function AppFooter() {
  return (
    <footer className="border-t border-[color:var(--border)] bg-[color:var(--background)]">
      <div className="mx-auto flex w-full max-w-[90rem] flex-col gap-2 px-4 py-6 text-center text-sm text-[color:var(--muted-strong)] sm:px-6 sm:text-left lg:px-8 xl:px-10 md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
        <p>This website is built for fast, everyday calculations.</p>
      </div>
    </footer>
  );
}
