"use client";

import { useState } from "react";

function formatMoney(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  }).format(value);
}

function formatPercent(value: number) {
  return `${value.toFixed(2)}%`;
}

export default function HomePage() {
  const [revenue, setRevenue] = useState("12000");
  const [cost, setCost] = useState("7500");

  const revenueValue = Number(revenue) || 0;
  const costValue = Number(cost) || 0;
  const profit = revenueValue - costValue;
  const margin = revenueValue > 0 ? (profit / revenueValue) * 100 : 0;
  const markup = costValue > 0 ? (profit / costValue) * 100 : 0;

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
                  Financial calculators built for fast decisions.
                </h1>
                <p className="max-w-2xl text-base leading-7 text-[#5c554b] sm:text-lg">
                  Homepage MVP để bạn deploy test ngay: gọn, dễ đọc, và có sẵn 1 calculator cơ bản cho profit margin.
                </p>
              </div>
            </div>

            <div className="grid gap-3 text-sm text-[#5c554b] sm:grid-cols-3 lg:w-[30rem]">
              {[
                ["Fast", "Simple calculator-first layout"],
                ["SEO-ready", "One tool, one clear page"],
                ["Scalable", "Easy to add more tools"],
              ].map(([title, description]) => (
                <div key={title} className="rounded-2xl border border-black/10 bg-[#fbf8f3] p-4">
                  <div className="font-semibold text-[#1b1a17]">{title}</div>
                  <div className="mt-1 text-sm leading-6">{description}</div>
                </div>
              ))}
            </div>
          </div>
        </header>

        <section className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[2rem] border border-black/10 bg-[#201c17] p-6 text-white shadow-[0_20px_60px_rgba(34,24,12,0.12)] sm:p-8">
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-[#c9b79d]">Calculator</p>
                <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">Profit Margin</h2>
                <p className="mt-2 max-w-xl text-sm leading-6 text-white/72">
                  Nhập revenue và cost để kiểm tra profit, margin, và markup. Đây là bản cơ bản để test deploy trước.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-right">
                <div className="text-xs uppercase tracking-[0.22em] text-white/50">Output</div>
                <div className="mt-1 text-sm text-white/80">Live calculation</div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-2">
                <span className="text-sm font-medium text-white/80">Revenue</span>
                <input
                  type="number"
                  value={revenue}
                  onChange={(event) => setRevenue(event.target.value)}
                  className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-base text-white outline-none transition placeholder:text-white/30 focus:border-[#d0b08a] focus:ring-2 focus:ring-[#d0b08a]/30"
                  placeholder="12000"
                />
              </label>

              <label className="space-y-2">
                <span className="text-sm font-medium text-white/80">Cost</span>
                <input
                  type="number"
                  value={cost}
                  onChange={(event) => setCost(event.target.value)}
                  className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-base text-white outline-none transition placeholder:text-white/30 focus:border-[#d0b08a] focus:ring-2 focus:ring-[#d0b08a]/30"
                  placeholder="7500"
                />
              </label>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {[
                ["Profit", formatMoney(profit)],
                ["Margin", formatPercent(margin)],
                ["Markup", formatPercent(markup)],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-xs uppercase tracking-[0.24em] text-white/45">{label}</div>
                  <div className="mt-2 text-2xl font-semibold text-white">{value}</div>
                </div>
              ))}
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-[2rem] border border-black/10 bg-white/80 p-6 shadow-[0_20px_60px_rgba(34,24,12,0.08)] backdrop-blur sm:p-8">
              <p className="text-sm uppercase tracking-[0.24em] text-[#8a6b45]">Why this page exists</p>
              <h2 className="mt-2 text-2xl font-semibold">Deploy check first, expansion second</h2>
              <p className="mt-3 text-sm leading-6 text-[#5c554b]">
                Khi deploy ổn, mình sẽ tách calculator ra từng route riêng trong tools directory và nối dữ liệu chung sau.
              </p>
            </div>

            <div className="rounded-[2rem] border border-black/10 bg-[#f7f1e8] p-6 sm:p-8">
              <p className="text-sm uppercase tracking-[0.24em] text-[#8a6b45]">Next step</p>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-[#5c554b]">
                <li>• Xem homepage có render ổn trên deploy</li>
                <li>• Test nhập số và kết quả profit/margin/markup</li>
                <li>• Nếu ổn, mình sẽ làm trang tools tiếp theo</li>
              </ul>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}
