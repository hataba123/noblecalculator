import Link from "next/link";
import { notFound } from "next/navigation";

import { tools, getCalculatorDefinition } from "@/src/config/tools";

type ToolPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return tools.map((tool) => ({ slug: tool.slug }));
}

export default async function ToolPage({ params }: ToolPageProps) {
  const { slug } = await params;
  const tool = getCalculatorDefinition(slug);

  if (!tool) {
    notFound();
  }

  return (
    <main className="min-h-screen px-4 py-6 text-[#1b1a17] sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-black/10 bg-[#201c17] p-6 text-white shadow-[0_20px_60px_rgba(34,24,12,0.12)] sm:p-8">
            <p className="text-sm uppercase tracking-[0.24em] text-[#c9b79d]">Dedicated route</p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-5xl">{tool.title}</h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/72 sm:text-lg">{tool.description}</p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { label: "Slug", value: tool.slug },
                { label: "Source", value: "Shared registry" },
                { label: "State", value: "Ready to wire form/result" },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-xs uppercase tracking-[0.24em] text-white/45">{item.label}</div>
                  <div className="mt-2 text-sm font-semibold text-white">{item.value}</div>
                </div>
              ))}
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-[2rem] border border-black/10 bg-white/80 p-6 shadow-[0_20px_60px_rgba(34,24,12,0.08)] backdrop-blur sm:p-8">
              <p className="text-sm uppercase tracking-[0.24em] text-[#8a6b45]">How this route works</p>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-[#5c554b]">
                <li>• Route data comes from calculatorRegistry.</li>
                <li>• The page is generated for each calculator slug.</li>
                <li>• Form and result modules can be connected on top of this scaffold later.</li>
              </ul>
            </div>

            <div className="rounded-[2rem] border border-black/10 bg-[#f7f1e8] p-6 sm:p-8">
              <p className="text-sm uppercase tracking-[0.24em] text-[#8a6b45]">Path</p>
              <p className="mt-3 text-lg font-semibold text-[#1b1a17]">/tools/{tool.slug}</p>
              <p className="mt-3 text-sm leading-6 text-[#5c554b]">
                Đây là route riêng cho calculator này, nên sau này có thể gắn form, validation và kết quả mà không chạm vào các tool khác.
              </p>
            </div>
          </aside>
        </section>

        <section className="rounded-[2rem] border border-black/10 bg-white/80 p-6 shadow-[0_20px_60px_rgba(34,24,12,0.08)] backdrop-blur sm:p-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-[#8a6b45]">Shared data</p>
              <h2 className="mt-2 text-2xl font-semibold">All calculators stay connected to the same source</h2>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-[#5c554b]">
                Bạn chỉ cần thêm hoặc sửa metadata trong registry là cả directory page lẫn route chi tiết sẽ tự cập nhật.
              </p>
            </div>

            <Link
              href="/tools"
              className="inline-flex w-fit rounded-full border border-black/10 bg-[#201c17] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-black"
            >
              Back to tools
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
