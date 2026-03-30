import Link from "next/link";

import { createPageMetadata } from "@/src/lib/metadata";

export const metadata = createPageMetadata(
  "NobleCalculator",
  "Financial calculators now live on dedicated routes with shared registry data.",
  "/",
  ["financial calculator", "profit margin calculator", "markup calculator", "freelance calculator"]
);

export default function HomePage() {
  return (
    <main className="min-h-screen px-4 py-6 text-[#1b1a17] sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
        <header className="rounded-[2rem] border border-black/10 bg-white/75 p-6 shadow-[0_20px_60px_rgba(34,24,12,0.08)] backdrop-blur sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl space-y-4">
              <span className="inline-flex w-fit rounded-full border border-black/10 bg-[#f4efe8] px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-[#6b5a43]">
                NobleCalculator
              </span>
              <div className="space-y-3">
                <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                  Financial calculators now live on dedicated routes.
                </h1>
                <p className="max-w-2xl text-base leading-7 text-[#5c554b] sm:text-lg">
                  Homepage chỉ còn vai trò landing page. Toàn bộ calculator đã được tách sang tools/[slug] và lấy metadata chung từ một registry.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/tools"
                  className="inline-flex rounded-full border border-black/10 bg-[#201c17] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-black"
                >
                  Browse tools
                </Link>
                <Link
                  href="/tools/profit-margin"
                  className="inline-flex rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-[#1b1a17] transition-colors hover:bg-[#f7f1e8]"
                >
                  Open Profit Margin
                </Link>
              </div>
            </div>

            <div className="grid gap-3 text-sm text-[#5c554b] sm:grid-cols-3 lg:w-[30rem]">
              {[
                { label: "Routes", value: "6 dedicated pages" },
                { label: "Source", value: "Shared registry" },
                { label: "SEO", value: "One page per tool" },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl border border-black/10 bg-[#fbf8f3] p-4">
                  <div className="text-xs uppercase tracking-[0.24em] text-[#8a6b45]">{item.label}</div>
                  <div className="mt-1 font-semibold text-[#1b1a17]">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </header>

        <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-black/10 bg-[#201c17] p-6 text-white shadow-[0_20px_60px_rgba(34,24,12,0.12)] sm:p-8">
            <p className="text-sm uppercase tracking-[0.24em] text-[#c9b79d]">Shared data</p>
            <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">One registry powers the whole tools section</h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-white/72">
              Tất cả metadata cho calculator đang nằm trong một registry chung, nên khi thêm tool mới chỉ cần thêm 1 entry là xong.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                { label: "Directory", value: "/tools" },
                { label: "Detail route", value: "/tools/[slug]" },
                { label: "Source of truth", value: "calculatorRegistry" },
                { label: "Next step", value: "Wire form/result modules" },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-xs uppercase tracking-[0.24em] text-white/45">{item.label}</div>
                  <div className="mt-2 text-sm font-semibold text-white">{item.value}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { title: "Profit Margin", href: "/tools/profit-margin", description: "Revenue vs cost landing page for quick checks." },
              { title: "Markup", href: "/tools/markup", description: "Markup and price planning for sales decisions." },
              { title: "Freelance Hourly Rate", href: "/tools/freelance-hourly-rate", description: "Target hourly rate for freelancers and consultants." },
              { title: "VAT Calculator", href: "/tools/vat-calculator", description: "Net, gross, and tax values in one place." },
            ].map((tool) => (
              <article
                key={tool.href}
                className="rounded-[1.75rem] border border-black/10 bg-white/80 p-5 shadow-[0_18px_48px_rgba(34,24,12,0.08)] backdrop-blur transition-transform duration-200 hover:-translate-y-1"
              >
                <p className="text-xs uppercase tracking-[0.24em] text-[#8a6b45]">Tool</p>
                <h3 className="mt-2 text-xl font-semibold text-[#1b1a17]">{tool.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#5c554b]">{tool.description}</p>
                <Link
                  href={tool.href}
                  className="mt-5 inline-flex rounded-full border border-black/10 bg-[#f7f1e8] px-4 py-2 text-sm font-semibold text-[#1b1a17] transition-colors hover:bg-[#efe2cf]"
                >
                  Open route
                </Link>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
