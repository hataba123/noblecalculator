"use client";

import { useTheme } from "./theme-provider";
import { useLanguage } from "./language-provider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={theme === "light" ? t("theme.switchToDark") : t("theme.switchToLight")}
      className="inline-flex items-center gap-2 rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] px-3 py-2 text-sm font-semibold text-[color:var(--foreground)] shadow-[0_8px_18px_rgba(34,24,12,0.08)] transition-all duration-150 ease-out hover:-translate-y-0.5 hover:bg-[color:var(--surface-soft)] active:translate-y-[2px] active:scale-[0.99] sm:px-4"
    >
      <span className="text-base" aria-hidden="true">
        {theme === "light" ? "🌙" : "☀"}
      </span>
      <span className="hidden sm:inline">{theme === "light" ? t("theme.dark") : t("theme.light")}</span>
    </button>
  );
}