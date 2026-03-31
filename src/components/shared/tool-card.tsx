"use client";

import Link from "next/link";
import type { ReactNode } from "react";

import { useLanguage } from "./language-provider";

type ToolCardProps = {
  title: ReactNode;
  description?: ReactNode;
  href: string;
  slug: string;
  variant?: "light" | "dark";
  ariaLabelTitle?: string;
};

export function ToolCard({ title, description, href, slug, variant = "light", ariaLabelTitle }: ToolCardProps) {
  const isDark = variant === "dark";
  const { t } = useLanguage();
  const accessibleTitle = ariaLabelTitle ?? (typeof title === "string" ? title : "");

  return (
    <article
      data-slug={slug}
      className={[
        "group flex h-full min-w-0 flex-col rounded-[0.9rem] border p-3 shadow-[0_10px_20px_rgba(34,24,12,0.08)] transition-transform duration-200 hover:-translate-y-1 sm:p-4",
        isDark
          ? "border-[color:var(--border)] bg-[color:var(--surface-strong)] text-white shadow-[0_18px_48px_rgba(34,24,12,0.12)]"
          : "border-[color:var(--border)] bg-[color:var(--surface)] text-[color:var(--foreground)] backdrop-blur",
      ].join(" ")}
    >
      <div className="flex min-w-0 items-start justify-between gap-3">
        <div className="min-w-0">
          <h2 className="mt-1 break-words text-base font-semibold sm:text-lg">{title}</h2>
        </div>
        <span
          className={
            isDark
              ? "shrink-0 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.22em] text-white/55"
              : "shrink-0 rounded-full border border-[color:var(--border)] bg-[color:var(--surface-soft)] px-3 py-1 text-xs uppercase tracking-[0.22em] text-[color:var(--muted-strong)]"
          }
        >
          {t("calculator.badge")}
        </span>
      </div>

      {description ? (
        <p className={isDark ? "mt-3 break-words text-sm leading-6 text-white/72 sm:mt-4" : "mt-3 break-words text-sm leading-6 text-[color:var(--muted)] sm:mt-4"}>
          {description}
        </p>
      ) : null}

      <div className="mt-5 flex flex-1 items-end justify-end gap-3 sm:mt-6">
        <Link
          href={href}
          aria-label={`${t("tools.open") ?? "Open"} ${accessibleTitle}`}
          className={
            isDark
              ? "tool-card-open-btn rounded-full border border-[color:var(--accent)] bg-[color:var(--accent-strong)] px-4 py-2 text-sm font-semibold text-[color:var(--background)]"
              : "tool-card-open-btn rounded-full border border-[color:var(--accent-strong)] bg-[color:var(--accent-strong)] px-4 py-2 text-sm font-semibold text-[color:var(--background)]"
          }
        >
          {t("tools.open")}
        </Link>
      </div>
    </article>
  );
}
