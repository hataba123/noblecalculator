import { tools } from "@/src/config/tools";
import { ToolCard } from "@/src/components/shared/tool-card";
import { PageStructuredData } from "@/src/components/shared/page-structured-data";
import { createPageMetadata } from "@/src/lib/metadata";

export const metadata = createPageMetadata(
  "Calculator Hub",
  "Browse all calculators in one place and open the one you need. Each calculator includes clear breakdowns, real examples, and helpful guidance.",
  "/tools",
  ["financial tools", "calculator directory", "calculator registry", "business calculator hub", "online calculators"]
);

export default function ToolsPage() {
  return (
    <main className="min-h-screen px-3 py-4 text-[color:var(--foreground)] sm:px-6 sm:py-6 lg:px-8 xl:px-10">
      <PageStructuredData
        kind="hub"
        title="Calculator Hub"
        description="Browse all calculators in one place and open the one you need. Each calculator includes clear breakdowns, real examples, and helpful guidance."
        pathname="/tools"
        items={tools.map((tool) => ({
          name: tool.title,
          href: `/tools/${tool.slug}`,
          description: tool.description,
        }))}
      />
      <div className="mx-auto flex w-full max-w-[90rem] flex-col gap-6 sm:gap-8">
        <section className="rounded-[1.75rem] border border-[color:var(--border)] bg-[color:var(--surface)] p-5 shadow-[0_18px_48px_rgba(34,24,12,0.08)] backdrop-blur sm:p-6 lg:rounded-[2rem] lg:p-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="w-full min-w-0 space-y-3 lg:flex-1">
              <span className="inline-flex w-fit rounded-full border border-[color:var(--border)] bg-[color:var(--surface-soft)] px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-[color:var(--muted-strong)] sm:text-xs">
                Calculator Hub
              </span>
              <h1 className="text-balance text-[2.15rem] font-semibold tracking-tight sm:text-5xl xl:text-6xl">
                All calculators in one place.
              </h1>
              <p className="break-words text-sm leading-7 text-[color:var(--muted)] sm:text-base lg:text-lg">
                Choose a calculator and start from a prefilled example.
              </p>
              <p className="break-words text-sm leading-7 text-[color:var(--muted)] sm:text-base">
                Use the hub when you want a fast path to pricing, tax, profit, and marketing decisions without digging through menus.
              </p>
            </div>

          </div>
        </section>

        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {[
            "Pricing and margin checks",
            "Tax and invoice estimates",
            "Marketing performance metrics",
            "Freelance and project planning",
          ].map((item) => (
            <div key={item} className="rounded-[1.35rem] border border-[color:var(--border)] bg-[color:var(--surface)] p-4 text-sm text-[color:var(--muted)] shadow-[0_14px_32px_rgba(34,24,12,0.06)] backdrop-blur">
              {item}
            </div>
          ))}
        </section>

        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {tools.map((tool) => (
            <ToolCard
              key={tool.slug}
              title={tool.title}
              description={tool.description}
              href={`/tools/${tool.slug}`}
              slug={tool.slug}
              variant="dark"
            />
          ))}
        </section>
      </div>
    </main>
  );
}
