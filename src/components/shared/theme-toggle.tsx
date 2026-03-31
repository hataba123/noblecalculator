"use client";

import { useTheme } from "./theme-provider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-3 py-2 text-sm font-semibold text-[color:var(--foreground)] shadow-[0_8px_18px_rgba(34,24,12,0.08)] transition-all duration-150 ease-out hover:-translate-y-0.5 hover:bg-[color:var(--surface-soft)] active:translate-y-[2px] active:scale-[0.99] sm:px-4"
    >
      <span className="text-base" aria-hidden="true">
        {theme === "light" ? "🌙" : "☀"}
      </span>
      <span className="hidden sm:inline">{theme === "light" ? "Dark mode" : "Light mode"}</span>
    </button>
  );
}