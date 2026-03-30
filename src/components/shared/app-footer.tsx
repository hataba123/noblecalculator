import { siteConfig } from "@/src/config/site";

export function AppFooter() {
  return (
    <footer className="border-t border-black/10 bg-[#f4efe8]">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-6 text-sm text-[#6b5a43] sm:px-6 lg:px-8 md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}. Quick answers for everyday business decisions.
        </p>
        <p>Clear calculators for pricing, tax, and transfer costs.</p>
      </div>
    </footer>
  );
}
