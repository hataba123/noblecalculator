import Link from "next/link";

import { HomeCalculator } from "@/src/components/shared/home-calculator";
import { ToolCard } from "@/src/components/shared/tool-card";
import { createPageMetadata } from "@/src/lib/metadata";

export const metadata = createPageMetadata(
  "NobleCalculator",
  "Simple financial calculators for pricing, profit, tax, and transfer costs.",
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
                  Practical calculators for everyday tasks.
                </h1>
                <p className="max-w-2xl text-base leading-7 text-[#5c554b] sm:text-lg">
                  Pick a calculator, enter a few numbers, and get a clear result right away.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/tools"
                  className="inline-flex rounded-full border border-black/10 bg-[#201c17] px-5 py-3 text-sm font-semibold !text-white transition-colors hover:bg-black hover:!text-white"
                >
                  Browse calculators
                </Link>
                <Link
                  href="/tools/profit-margin"
                  className="inline-flex rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-[#1b1a17] transition-colors hover:bg-[#f7f1e8]"
                >
                  Open Profit Margin
                </Link>
              </div>
            </div>

          </div>
        </header>

        <HomeCalculator />

        <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2">
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
      </div>

    </main>
  );
}
