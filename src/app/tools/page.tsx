import Link from "next/link";

import { tools } from "@/src/config/tools";
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
            <article
              key={tool.slug}
              className="group rounded-[1.75rem] border border-black/10 bg-[#201c17] p-5 text-white shadow-[0_18px_48px_rgba(34,24,12,0.12)] transition-transform duration-200 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-[#c9b79d]">/{tool.slug}</p>
                  <h2 className="mt-2 text-xl font-semibold">{tool.title}</h2>
                </div>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.22em] text-white/55">
                  Route
                </span>
              </div>

              <p className="mt-4 text-sm leading-6 text-white/72">{tool.description}</p>

              <div className="mt-6 flex items-center justify-between gap-3">
                <span className="text-xs uppercase tracking-[0.22em] text-white/45">Shared data connected</span>
                <Link
                  href={`/tools/${tool.slug}`}
                  className="rounded-full border border-[#d0b08a]/30 bg-[#d0b08a] px-4 py-2 text-sm font-semibold text-[#201c17] transition-colors hover:bg-[#e0c19a]"
                >
                  Open tool
                </Link>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
