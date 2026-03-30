import Link from "next/link";

import { tools } from "@/src/config/tools";
import { ToolCard } from "@/src/components/shared/tool-card";
import { createPageMetadata } from "@/src/lib/metadata";

export const metadata = createPageMetadata(
  "Tools Directory",
  "Browse every financial calculator in NobleCalculator from one shared registry.",
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
                Tools Directory
              </span>
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                One shared registry, one route per calculator.
              </h1>
              <p className="max-w-2xl text-base leading-7 text-[#5c554b] sm:text-lg">
                Mỗi calculator giờ có route riêng trong tools/[slug], còn dữ liệu chung như title và description đi từ một nguồn duy nhất.
              </p>
            </div>

            <div className="grid gap-3 text-sm text-[#5c554b] sm:grid-cols-3 lg:w-[30rem]">
              {[
                { label: "Routes", value: "6 dedicated pages" },
                { label: "Source", value: "Shared registry" },
                { label: "Status", value: "SEO-ready scaffold" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-black/10 bg-[#fbf8f3] p-4">
                  <div className="text-xs uppercase tracking-[0.24em] text-[#8a6b45]">{stat.label}</div>
                  <div className="mt-1 font-semibold text-[#1b1a17]">{stat.value}</div>
                </div>
              ))}
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
