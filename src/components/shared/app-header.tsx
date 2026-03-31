import Link from "next/link";
import { useState } from "react";

import { siteConfig } from "@/src/config/site";
import { ThemeToggle } from "./theme-toggle";

export function AppHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-20 border-b border-[color:var(--border)] bg-[color:var(--background)]/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-[90rem] flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-10">
        <Link href="/" className="flex items-center gap-3 self-start">
          <span className="app-logo-badge flex h-9 w-9 items-center justify-center rounded-2xl bg-[color:var(--accent-strong)] text-sm font-semibold text-white shadow-[0_10px_24px_rgba(34,24,12,0.2)] sm:h-10 sm:w-10">
            NC
          </span>
          <div className="min-w-0 leading-tight">
            <div className="break-words text-base font-semibold tracking-[0.16em] uppercase text-[color:var(--foreground)] sm:text-lg lg:text-xl">
              {siteConfig.name}
            </div>
          </div>
        </Link>

        <div className="relative">
          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-3 py-2 text-sm font-semibold text-[color:var(--foreground)] shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[color:var(--surface-soft)] focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)] sm:px-4"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
          >
            Menu
            <span className="ml-2 text-xs">▾</span>
          </button>

          <div
            className={`absolute right-0 mt-2 w-44 overflow-hidden rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] shadow-lg ring-1 ring-black ring-opacity-5 transition-all duration-200 ${isMenuOpen ? "opacity-100 scale-100" : "pointer-events-none opacity-0 scale-95"}`}
            style={{ transformOrigin: 'top right' }}
          >
            <Link
              href="/"
              className="block px-4 py-2 text-sm text-[color:var(--foreground)] transition-colors hover:bg-[color:var(--surface-soft)]"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/tools"
              className="block px-4 py-2 text-sm text-[color:var(--foreground)] transition-colors hover:bg-[color:var(--surface-soft)]"
              onClick={() => setIsMenuOpen(false)}
            >
              Calculators
            </Link>
          </div>
        </div>

        <ThemeToggle />
      </div>
    </header>
  );
}
