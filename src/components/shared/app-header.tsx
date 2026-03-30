import Link from "next/link";

import { siteConfig } from "@/src/config/site";

export function AppHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-black/10 bg-[#f8f3ec]/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#201c17] text-sm font-semibold text-white shadow-[0_10px_24px_rgba(34,24,12,0.2)]">
            NC
          </span>
          <div>
            <div className="text-sm font-semibold tracking-[0.16em] uppercase text-[#1b1a17]">
              {siteConfig.name}
            </div>
            <div className="text-xs text-[#6b5a43]">Financial calculators</div>
          </div>
        </Link>

        <nav className="flex items-center gap-2 text-sm font-medium text-[#1b1a17]">
          <Link href="/" className="rounded-full px-4 py-2 transition-colors hover:bg-black/5">
            Home
          </Link>
          <Link href="/tools" className="rounded-full px-4 py-2 transition-colors hover:bg-black/5">
            Tools
          </Link>
        </nav>
      </div>
    </header>
  );
}
