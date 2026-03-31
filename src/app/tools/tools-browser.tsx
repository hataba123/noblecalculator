"use client";

import { useDeferredValue, useMemo, useState } from "react";

import { ToolCard } from "@/src/components/shared/tool-card";

type ToolItem = {
  slug: string;
  title: string;
  description: string;
  href: string;
};

type ToolGroup = {
  id: string;
  title: string;
  description: string;
  items: ToolItem[];
};

type ToolsBrowserProps = {
  groups: ToolGroup[];
  searchLabel: string;
  searchPlaceholder: string;
  searchResultsLabel: string;
  noResultsTitle: string;
  noResultsDescription: string;
  clearSearchLabel: string;
  groupCountLabel: string;
};

function normalizeSearchValue(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

export function ToolsBrowser({
  groups,
  searchLabel,
  searchPlaceholder,
  searchResultsLabel,
  noResultsTitle,
  noResultsDescription,
  clearSearchLabel,
  groupCountLabel,
}: ToolsBrowserProps) {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);

  const filteredGroups = useMemo(() => {
    const normalizedQuery = normalizeSearchValue(deferredQuery);

    if (!normalizedQuery) {
      return groups;
    }

    return groups
      .map((group) => {
        const groupMatches =
          normalizeSearchValue(group.title).includes(normalizedQuery) ||
          normalizeSearchValue(group.description).includes(normalizedQuery);

        const items = group.items.filter((item) => {
          const searchableText = `${item.title} ${item.description}`;
          return normalizeSearchValue(searchableText).includes(normalizedQuery);
        });

        if (groupMatches) {
          return group;
        }

        return {
          ...group,
          items,
        };
      })
      .filter((group) => group.items.length > 0);
  }, [deferredQuery, groups]);

  const totalMatches = filteredGroups.reduce((count, group) => count + group.items.length, 0);
  const hasQuery = normalizeSearchValue(query).length > 0;

  return (
    <div className="grid gap-5 sm:gap-6">
      <section className="sticky top-3 z-20 overflow-hidden rounded-[1.1rem] border border-[color:var(--border)] bg-[linear-gradient(135deg,var(--surface)_0%,var(--surface-soft)_100%)] p-5 shadow-[0_18px_48px_rgba(34,24,12,0.08)] backdrop-blur sm:top-4 sm:p-6 lg:static lg:rounded-[1.25rem] lg:p-8">
        <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[radial-gradient(circle,rgba(212,132,31,0.18)_0%,rgba(212,132,31,0)_70%)]" />
        <div className="pointer-events-none absolute -bottom-12 -left-12 h-36 w-36 rounded-full bg-[radial-gradient(circle,rgba(109,78,49,0.14)_0%,rgba(109,78,49,0)_72%)]" />

        <div className="relative flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="w-full min-w-0 lg:flex-1">
            <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--accent)] sm:text-sm">{searchLabel}</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">{searchLabel}</h2>
            <p className="mt-2 max-w-xl text-sm leading-7 text-[color:var(--muted)] sm:text-base">
              {hasQuery ? `${totalMatches} ${searchResultsLabel}` : searchPlaceholder}
            </p>
          </div>

          <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center lg:w-auto lg:min-w-[30rem] lg:flex-1 lg:justify-end">
            <label className="sr-only" htmlFor="tools-search">
              {searchLabel}
            </label>
            <div className="relative flex-1">
              <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[color:var(--muted)]">
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="7" />
                  <path d="m20 20-3.5-3.5" />
                </svg>
              </span>
              <input
                id="tools-search"
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder={searchPlaceholder}
                className="min-w-0 w-full rounded-[0.9rem] border border-[color:var(--border)] bg-[color:var(--surface)] py-3.5 pl-11 pr-4 text-base text-[color:var(--foreground)] outline-none transition placeholder:text-[color:var(--muted)] focus:border-[color:var(--accent)] focus:ring-2 focus:ring-[color:var(--accent)]/20 sm:py-3 sm:text-sm"
              />
            </div>
            {hasQuery ? (
              <button
                type="button"
                onClick={() => setQuery("")}
                className="inline-flex items-center justify-center rounded-[0.9rem] border border-[color:var(--border)] bg-[color:var(--surface-soft)] px-4 py-3.5 text-sm font-semibold text-[color:var(--foreground)] transition-all duration-150 ease-out hover:-translate-y-0.5 hover:bg-[color:var(--surface)] active:translate-y-[1px] active:scale-[0.98] sm:py-3"
              >
                {clearSearchLabel}
              </button>
            ) : null}
          </div>
        </div>
      </section>

      {filteredGroups.length > 0 ? (
        <>
          <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {filteredGroups.map((group) => (
              <a
                key={group.id}
                href={`#${group.id}`}
                className="group rounded-[0.9rem] border border-[color:var(--border)] bg-[color:var(--surface)] p-4 text-left shadow-[0_14px_32px_rgba(34,24,12,0.06)] backdrop-blur transition-all duration-150 ease-out hover:-translate-y-0.5 hover:bg-[color:var(--surface-soft)] active:translate-y-[1px] active:scale-[0.99]"
              >
                <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--accent)] sm:text-sm">{group.title}</p>
                <p className="mt-2 text-sm leading-6 text-[color:var(--muted)]">{group.description}</p>
                <div className="mt-4 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--muted-strong)]">
                  <span>
                    {group.items.length} {groupCountLabel}
                  </span>
                  <span aria-hidden="true" className="transition-transform duration-150 ease-out group-hover:translate-x-0.5">
                    →
                  </span>
                </div>
              </a>
            ))}
          </section>

          <div className="grid gap-5">
            {filteredGroups.map((group) => (
              <section
                key={group.id}
                id={group.id}
                className="scroll-mt-24 rounded-[1.1rem] border border-[color:var(--border)] bg-[color:var(--surface)] p-5 shadow-[0_18px_48px_rgba(34,24,12,0.08)] backdrop-blur sm:p-6 lg:rounded-[1.25rem] lg:p-8"
              >
                <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
                  <div className="w-full min-w-0 lg:flex-1">
                    <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--accent)] sm:text-sm">{group.title}</p>
                    <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">{group.description}</h2>
                  </div>
                  <div className="inline-flex w-fit rounded-full border border-[color:var(--border)] bg-[color:var(--surface-soft)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--muted-strong)] sm:text-sm">
                    {group.items.length} {groupCountLabel}
                  </div>
                </div>

                <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {group.items.map((tool) => (
                    <ToolCard
                      key={tool.slug}
                      title={tool.title}
                      description={tool.description}
                      href={tool.href}
                      slug={tool.slug}
                      variant="light"
                    />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </>
      ) : (
        <section className="rounded-[1.1rem] border border-[color:var(--border)] bg-[color:var(--surface)] p-6 text-center shadow-[0_18px_48px_rgba(34,24,12,0.08)] backdrop-blur sm:p-8 lg:rounded-[1.25rem]">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{noResultsTitle}</h2>
          <p className="mt-3 text-sm leading-7 text-[color:var(--muted)] sm:text-base">{noResultsDescription}</p>
        </section>
      )}
    </div>
  );
}