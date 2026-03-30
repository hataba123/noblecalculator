import { tools } from "@/src/config/tools";
import { ToolCard } from "@/src/components/shared/tool-card";
import { createPageMetadata } from "@/src/lib/metadata";

export const metadata = createPageMetadata(
  "Calculator Hub",
  "Browse all calculators in one place and open the one you need.",
  "/tools",
  ["financial tools", "calculator directory", "SEO landing pages", "calculator registry"]
);

export default function ToolsPage() {
  return (
    <main className="min-h-screen px-3 py-4 text-[#1b1a17] sm:px-6 sm:py-6 lg:px-8 xl:px-10">
      <div className="mx-auto flex w-full max-w-[90rem] flex-col gap-6 sm:gap-8">
        <section className="rounded-[1.75rem] border border-black/10 bg-white/80 p-5 shadow-[0_18px_48px_rgba(34,24,12,0.08)] backdrop-blur sm:p-6 lg:rounded-[2rem] lg:p-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl space-y-3">
              <span className="inline-flex w-fit rounded-full border border-black/10 bg-[#f4efe8] px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-[#6b5a43] sm:text-xs">
                Calculator Hub
              </span>
              <h1 className="text-[2.15rem] font-semibold tracking-tight sm:text-5xl xl:text-6xl">
                All calculators in one place.
              </h1>
              <p className="max-w-2xl text-sm leading-7 text-[#5c554b] sm:text-base lg:text-lg">
                Choose a calculator and start from a prefilled example.
              </p>
            </div>

          </div>
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
