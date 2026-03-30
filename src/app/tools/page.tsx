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
    <main className="min-h-screen px-4 py-6 text-[#1b1a17] sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
        <section className="rounded-[2rem] border border-black/10 bg-white/80 p-6 shadow-[0_20px_60px_rgba(34,24,12,0.08)] backdrop-blur sm:p-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl space-y-3">
              <span className="inline-flex w-fit rounded-full border border-black/10 bg-[#f4efe8] px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-[#6b5a43]">
                Calculator Hub
              </span>
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                All calculators in one place.
              </h1>
              <p className="max-w-2xl text-base leading-7 text-[#5c554b] sm:text-lg">
                Choose a calculator and start from a prefilled example.
              </p>
            </div>

          </div>
        </section>

        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
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
