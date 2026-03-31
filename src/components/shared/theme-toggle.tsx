"use client";

import type { ButtonHTMLAttributes } from "react";

import { useTheme } from "./theme-provider";
import { useLanguage } from "./language-provider";

type ThemeToggleProps = {
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function ThemeToggle({ className = "", ...props }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={theme === "light" ? t("theme.switchToDark") : t("theme.switchToLight")}
      className={`inline-flex min-h-10 items-center justify-center gap-2 rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] px-3 py-2 text-sm font-semibold leading-normal text-[color:var(--foreground)] shadow-[0_8px_18px_rgba(34,24,12,0.08)] transition-all duration-150 ease-out hover:-translate-y-0.5 hover:bg-[color:var(--surface-soft)] active:translate-y-[2px] active:scale-[0.99] sm:min-h-11 sm:px-4 ${className}`.trim()}
      {...props}
    >
      <span className="flex h-5 w-5 items-center justify-center leading-none" aria-hidden="true">
        {theme === "light" ? (
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12.8A8.5 8.5 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="4.5" />
            <path d="M12 2v2.5M12 19.5V22M4.8 4.8l1.8 1.8M17.4 17.4l1.8 1.8M2 12h2.5M19.5 12H22M4.8 19.2l1.8-1.8M17.4 6.6l1.8-1.8" />
          </svg>
        )}
      </span>
      <span className="hidden sm:inline">{theme === "light" ? t("theme.dark") : t("theme.light")}</span>
    </button>
  );
}