import Link from "next/link";

import { PageStructuredData } from "@/src/components/shared/page-structured-data";
import { HomeCalculator } from "@/src/components/shared/home-calculator";
import { ToolCard } from "@/src/components/shared/tool-card";
import { createPageMetadata } from "@/src/lib/metadata";

export const metadata = createPageMetadata(
  "NobleCalculator",
  "Simple financial calculators for pricing, profit, tax, and transfer costs.",
  "/",
  ["financial calculator", "profit margin calculator", "markup calculator", "freelance calculator", "tax calculator", "business calculator"]
);

export default function HomePage() {
  return (
    <main className="min-h-screen px-3 py-4 text-[#1b1a17] sm:px-6 sm:py-6 lg:px-8 xl:px-10">
      <PageStructuredData kind="home" title="NobleCalculator" description="Simple financial calculators for pricing, profit, tax, and transfer costs." pathname="/" />
      <div className="mx-auto flex w-full max-w-[90rem] flex-col gap-6 sm:gap-8">
        <header className="rounded-[1.75rem] border border-black/10 bg-white/75 p-5 shadow-[0_18px_48px_rgba(34,24,12,0.08)] backdrop-blur sm:p-6 lg:rounded-[2rem] lg:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl space-y-4">
              <span className="inline-flex w-fit rounded-full border border-black/10 bg-[#f4efe8] px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-[#6b5a43] sm:text-xs">
                Noble Calculator
              </span>
              <div className="space-y-3">
                <h1 className="text-[2.15rem] font-semibold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
                  Practical calculators for everyday tasks.
                </h1>
                <p className="max-w-2xl text-sm leading-7 text-[#5c554b] sm:text-base lg:text-lg">
                  Pick a calculator, enter a few numbers, and get a clear result right away.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 pt-1">
                <Link
                  href="/tools"
                  className="inline-flex rounded-full border border-black/10 bg-[#201c17] px-4 py-2.5 text-sm font-semibold !text-white transition-colors hover:bg-black hover:!text-white sm:px-5 sm:py-3"
                >
                  Browse calculators
                </Link>
                <Link
                  href="/tools/profit-margin"
                  className="inline-flex rounded-full border border-black/10 bg-white px-4 py-2.5 text-sm font-semibold text-[#1b1a17] transition-colors hover:bg-[#f7f1e8] sm:px-5 sm:py-3"
                >
                  Open Profit Margin
                </Link>
              </div>
            </div>

          </div>
        </header>

        <HomeCalculator />

        <section className="grid gap-5 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="rounded-[1.75rem] border border-black/10 bg-white/80 p-5 shadow-[0_18px_48px_rgba(34,24,12,0.08)] backdrop-blur sm:p-6 lg:rounded-[2rem] lg:p-8">
            <p className="text-xs uppercase tracking-[0.24em] text-[#8a6b45] sm:text-sm">Why people use this</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
              Fast answers for pricing, tax, and cash flow.
            </h2>
            <p className="mt-3 text-sm leading-7 text-[#5c554b] sm:text-base">
              Each calculator is built to get you from question to answer quickly, with clear breakdowns and plain-English explanations.
            </p>
            <div className="mt-5 grid gap-3 text-sm text-[#5c554b] sm:grid-cols-2">
              <div className="rounded-2xl border border-black/10 bg-[#f7f1e8] p-4">Use them when you need a quote, a tax estimate, or a quick pricing check.</div>
              <div className="rounded-2xl border border-black/10 bg-[#f7f1e8] p-4">Switch between tools without losing the context of your calculation.</div>
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-black/10 bg-[#201c17] p-5 text-white shadow-[0_18px_48px_rgba(34,24,12,0.12)] sm:p-6 lg:rounded-[2rem] lg:p-8">
            <p className="text-xs uppercase tracking-[0.24em] text-[#c9b79d] sm:text-sm">Good for</p>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {[
                "Freelance pricing",
                "Invoice and tax planning",
                "Ad spend and ROI checks",
                "Website budget estimates",
              ].map((item) => (
                <li key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/82">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4 lg:col-span-2">
            {[
              { title: "Profit Margin", href: "/tools/profit-margin", description: "See how much profit you keep after costs.", slug: "profit-margin" },
              { title: "Markup", href: "/tools/markup", description: "Find a selling price from your cost and markup.", slug: "markup" },
              { title: "Freelance Hourly Rate", href: "/tools/freelance-hourly-rate", description: "Set an hourly rate that matches your income goal.", slug: "freelance-hourly-rate" },
              { title: "VAT Calculator", href: "/tools/vat-calculator", description: "Add VAT to a price or split it back out.", slug: "vat-calculator" },
            ].map((tool) => (
              <ToolCard key={tool.href} title={tool.title} href={tool.href} slug={tool.slug} description={tool.description} variant="light" />
            ))}
          </div>
        </section>

        <section className="rounded-[1.75rem] border border-black/10 bg-white/80 p-5 shadow-[0_18px_48px_rgba(34,24,12,0.08)] backdrop-blur sm:p-6 lg:rounded-[2rem] lg:p-8">
          <div className="grid gap-5 lg:grid-cols-[1fr_1fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-[#8a6b45] sm:text-sm">What to expect</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">Clear breakdowns, not just one number.</h2>
              <p className="mt-3 text-sm leading-7 text-[#5c554b] sm:text-base">
                Every calculator shows the final answer and the values behind it, so you can understand the result instead of just copying it.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "Instant results as you type",
                "Friendly copy for non-technical users",
                "Responsive layout on mobile and desktop",
                "Shared design across every tool",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-black/10 bg-[#f7f1e8] p-4 text-sm text-[#5c554b]">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

    </main>
  );
}
