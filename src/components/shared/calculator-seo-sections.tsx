import type { ReactNode } from "react";

import type { CalculatorSeoContent } from "@/src/features/calculators/shared/types";

type CalculatorSeoSectionsProps = {
	content?: CalculatorSeoContent;
};

type VisualVariant = NonNullable<CalculatorSeoContent["visual"]>["variant"];

function SectionCard({ title, children }: { title: string; children: ReactNode }) {
	return (
		<section className="rounded-[1.75rem] border border-black/10 bg-white/80 p-5 shadow-[0_18px_48px_rgba(34,24,12,0.08)] backdrop-blur sm:p-6 lg:rounded-[2rem] lg:p-8">
			<p className="text-xs uppercase tracking-[0.24em] text-[#8a6b45] sm:text-sm">{title}</p>
			<div className="mt-3 text-sm leading-7 text-[#2c261f] sm:text-base">{children}</div>
		</section>
	);
}

function VisualStatCards({ stats }: { stats: NonNullable<CalculatorSeoContent["visual"]>["stats"] }) {
	const swatches = ["from-[#f0a14f] to-[#f6c27a]", "from-[#6c8cff] to-[#96b0ff]", "from-[#58b49f] to-[#8dd8c7]"];

	return (
		<div className="grid gap-2 sm:grid-cols-3">
			{stats.map((stat, index) => (
				<div key={stat.label} className="rounded-[1.2rem] border border-white/80 bg-white/88 p-3 shadow-[0_10px_24px_rgba(67,43,15,0.07)]">
					<div className="flex items-center gap-2">
						<span className={`h-2.5 w-2.5 rounded-full bg-gradient-to-br ${swatches[index % swatches.length]}`} />
						<div className="text-[0.64rem] uppercase tracking-[0.2em] text-[#8a6b45]">{stat.label}</div>
					</div>
					<div className="mt-2 text-lg font-semibold text-[#1b1a17] sm:text-[1.05rem]">{stat.value}</div>
				</div>
			))}
		</div>
	);
}

function VisualIllustration({ variant, title }: { variant: VisualVariant; title: string }) {
	if (variant === "margin") {
		return (
			<div className="relative overflow-hidden rounded-[1.4rem] border border-white/60 bg-[linear-gradient(180deg,rgba(255,255,255,0.72)_0%,rgba(255,248,241,0.96)_100%)] p-4 shadow-[0_16px_30px_rgba(85,56,19,0.08)]">
				<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(245,184,122,0.26),transparent_34%),radial-gradient(circle_at_85%_20%,rgba(134,179,255,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(122,204,181,0.16),transparent_30%)]" />
				<div className="relative grid gap-4 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
					<div className="grid gap-3">
						<div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#8a6b45]">
							<span className="h-2.5 w-2.5 rounded-full bg-[#e29d52]" />
							<span>{title}</span>
						</div>
						<div className="flex h-24 items-end gap-3 rounded-[1.2rem] border border-white/70 bg-white/55 px-4 py-4">
							<div className="w-2/5 rounded-t-[1rem] bg-[linear-gradient(180deg,#f0a14f_0%,#f6c27a_100%)] shadow-[0_10px_18px_rgba(0,0,0,0.08)]" style={{ height: "72%" }} />
							<div className="w-2/5 rounded-t-[1rem] bg-[linear-gradient(180deg,#6d8eff_0%,#96b0ff_100%)] shadow-[0_10px_18px_rgba(0,0,0,0.08)]" style={{ height: "48%" }} />
						</div>
					</div>
					<div className="grid gap-2">
						<div className="rounded-[1.1rem] border border-white/70 bg-white/82 p-3 shadow-[0_10px_24px_rgba(67,43,15,0.07)]">
							<div className="text-[0.64rem] uppercase tracking-[0.2em] text-[#8a6b45]">Revenue</div>
							<div className="mt-2 text-lg font-semibold text-[#1b1a17]">$12k</div>
						</div>
						<div className="rounded-[1.1rem] border border-white/70 bg-white/82 p-3 shadow-[0_10px_24px_rgba(67,43,15,0.07)]">
							<div className="text-[0.64rem] uppercase tracking-[0.2em] text-[#8a6b45]">Cost</div>
							<div className="mt-2 text-lg font-semibold text-[#1b1a17]">$7.5k</div>
						</div>
						<div className="rounded-[1.1rem] border border-white/70 bg-white/82 p-3 shadow-[0_10px_24px_rgba(67,43,15,0.07)]">
							<div className="text-[0.64rem] uppercase tracking-[0.2em] text-[#8a6b45]">Margin</div>
							<div className="mt-2 text-lg font-semibold text-[#1b1a17]">37.5%</div>
						</div>
					</div>
				</div>
			</div>
		);
	}

	if (variant === "rate") {
		return (
			<div className="relative overflow-hidden rounded-[1.4rem] border border-white/60 bg-[linear-gradient(180deg,rgba(255,255,255,0.72)_0%,rgba(255,248,241,0.96)_100%)] p-4 shadow-[0_16px_30px_rgba(85,56,19,0.08)]">
				<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(245,184,122,0.22),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(110,140,255,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(88,180,159,0.16),transparent_30%)]" />
				<div className="relative grid gap-4">
					<div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#8a6b45]">
						<span className="h-2.5 w-2.5 rounded-full bg-[#6d8eff]" />
						<span>{title}</span>
					</div>
					<div className="flex items-center justify-between gap-3 rounded-[1.2rem] border border-white/70 bg-white/60 px-4 py-4">
						<div>
							<div className="text-[0.64rem] uppercase tracking-[0.2em] text-[#8a6b45]">Target</div>
							<div className="mt-1 text-sm font-semibold text-[#1b1a17]">$60k</div>
						</div>
						<div className="text-2xl text-[#8a6b45]">→</div>
						<div>
							<div className="text-[0.64rem] uppercase tracking-[0.2em] text-[#8a6b45]">Billable</div>
							<div className="mt-1 text-sm font-semibold text-[#1b1a17]">1,200h</div>
						</div>
						<div className="rounded-2xl bg-[linear-gradient(180deg,#6d8eff_0%,#96b0ff_100%)] px-3 py-2 text-sm font-semibold text-white shadow-[0_10px_18px_rgba(109,142,255,0.28)]">$50/hr</div>
					</div>
					<div className="rounded-[1.2rem] border border-white/70 bg-white/55 px-4 py-3">
						<div className="flex items-end gap-2">
							<div className="h-5 w-5 rounded-full bg-[#f0a14f]" />
							<div className="h-8 w-5 rounded-full bg-[#6d8eff]" />
							<div className="h-12 w-5 rounded-full bg-[#5bb79d]" />
							<div className="h-16 w-5 rounded-full bg-[#f1b56a]" />
						</div>
					</div>
				</div>
			</div>
		);
	}

	if (variant === "income") {
		return (
			<div className="relative overflow-hidden rounded-[1.4rem] border border-white/60 bg-[linear-gradient(180deg,rgba(255,255,255,0.72)_0%,rgba(255,248,241,0.96)_100%)] p-4 shadow-[0_16px_30px_rgba(85,56,19,0.08)]">
				<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(91,183,157,0.2),transparent_34%),radial-gradient(circle_at_78%_22%,rgba(109,142,255,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(240,161,79,0.16),transparent_30%)]" />
				<div className="relative grid gap-4">
					<div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#8a6b45]">
						<span className="h-2.5 w-2.5 rounded-full bg-[#5bb79d]" />
						<span>{title}</span>
					</div>
					<div className="grid gap-3 rounded-[1.2rem] border border-white/70 bg-white/60 p-4">
						<div className="flex items-center justify-between text-sm">
							<span className="text-[#8a6b45]">Take-home</span>
							<span className="font-semibold text-[#1b1a17]">$6k</span>
						</div>
						<div className="flex items-center justify-between text-sm">
							<span className="text-[#8a6b45]">Expenses + tax</span>
							<span className="font-semibold text-[#1b1a17]">$4k</span>
						</div>
						<div className="rounded-2xl bg-[linear-gradient(180deg,#5bb79d_0%,#8dd8c7_100%)] px-4 py-3 text-center text-base font-semibold text-white shadow-[0_10px_18px_rgba(91,183,157,0.24)]">
							Gross target $10k
						</div>
					</div>
				</div>
			</div>
		);
	}

	if (variant === "roi") {
		return (
			<div className="relative overflow-hidden rounded-[1.4rem] border border-white/60 bg-[linear-gradient(180deg,rgba(255,255,255,0.72)_0%,rgba(255,248,241,0.96)_100%)] p-4 shadow-[0_16px_30px_rgba(85,56,19,0.08)]">
				<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(240,161,79,0.22),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(109,142,255,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(91,183,157,0.16),transparent_30%)]" />
				<div className="relative grid gap-4">
					<div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#8a6b45]">
						<span className="h-2.5 w-2.5 rounded-full bg-[#f0a14f]" />
						<span>{title}</span>
					</div>
					<div className="flex items-end gap-3 rounded-[1.2rem] border border-white/70 bg-white/55 px-4 py-4">
						<div className="flex flex-col items-center gap-2">
							<div className="h-20 w-8 rounded-t-full bg-[#6d8eff]" />
							<span className="text-[0.64rem] uppercase tracking-[0.18em] text-[#8a6b45]">Spend</span>
						</div>
						<div className="flex-1 rounded-[999px] bg-[linear-gradient(90deg,#f0a14f_0%,#8dd8c7_100%)] px-4 py-3 text-center text-sm font-semibold text-[#1b1a17] shadow-[0_10px_18px_rgba(240,161,79,0.18)]">
							Return +$4.2k
						</div>
					</div>
				</div>
			</div>
		);
	}

	if (variant === "roas") {
		return (
			<div className="relative overflow-hidden rounded-[1.4rem] border border-white/60 bg-[linear-gradient(180deg,rgba(255,255,255,0.72)_0%,rgba(255,248,241,0.96)_100%)] p-4 shadow-[0_16px_30px_rgba(85,56,19,0.08)]">
				<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(109,142,255,0.22),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(240,161,79,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(91,183,157,0.16),transparent_30%)]" />
				<div className="relative grid gap-4">
					<div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#8a6b45]">
						<span className="h-2.5 w-2.5 rounded-full bg-[#6d8eff]" />
						<span>{title}</span>
					</div>
					<div className="grid grid-cols-[0.9fr_1.1fr] gap-3 rounded-[1.2rem] border border-white/70 bg-white/60 p-4">
						<div className="flex flex-col justify-between rounded-[1rem] bg-[linear-gradient(180deg,#6d8eff_0%,#96b0ff_100%)] p-3 text-white shadow-[0_10px_18px_rgba(109,142,255,0.22)]">
							<div className="text-[0.64rem] uppercase tracking-[0.2em] opacity-85">Spend</div>
							<div className="text-lg font-semibold">$1.2k</div>
						</div>
						<div className="flex flex-col justify-between rounded-[1rem] bg-[linear-gradient(180deg,#f0a14f_0%,#f6c27a_100%)] p-3 text-[#1b1a17] shadow-[0_10px_18px_rgba(240,161,79,0.18)]">
							<div className="text-[0.64rem] uppercase tracking-[0.2em] opacity-85">Revenue</div>
							<div className="text-lg font-semibold">$5.4k</div>
						</div>
					</div>
					<div className="rounded-full border border-[#d9c8b6] bg-white/75 px-4 py-2 text-center text-sm font-semibold text-[#8a6b45]">
						4.5x ROAS
					</div>
				</div>
			</div>
		);
	}

	if (variant === "build") {
		return (
			<div className="relative overflow-hidden rounded-[1.4rem] border border-white/60 bg-[linear-gradient(180deg,rgba(255,255,255,0.72)_0%,rgba(255,248,241,0.96)_100%)] p-4 shadow-[0_16px_30px_rgba(85,56,19,0.08)]">
				<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(240,161,79,0.18),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(109,142,255,0.14),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(91,183,157,0.16),transparent_30%)]" />
				<div className="relative grid gap-4">
					<div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#8a6b45]">
						<span className="h-2.5 w-2.5 rounded-full bg-[#f0a14f]" />
						<span>{title}</span>
					</div>
					<div className="grid gap-2 rounded-[1.2rem] border border-white/70 bg-white/60 p-4">
						<div className="flex items-center justify-between rounded-2xl bg-[#fff4e6] px-3 py-2 text-sm">
							<span className="text-[#8a6b45]">Design</span>
							<span className="font-semibold text-[#1b1a17]">18h</span>
						</div>
						<div className="flex items-center justify-between rounded-2xl bg-[#eef3ff] px-3 py-2 text-sm">
							<span className="text-[#6b7fbf]">Development</span>
							<span className="font-semibold text-[#1b1a17]">42h</span>
						</div>
						<div className="flex items-center justify-between rounded-2xl bg-[#edf8f4] px-3 py-2 text-sm">
							<span className="text-[#4b9a84]">Content</span>
							<span className="font-semibold text-[#1b1a17]">12h</span>
						</div>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className="relative overflow-hidden rounded-[1.4rem] border border-white/60 bg-[linear-gradient(180deg,rgba(255,255,255,0.72)_0%,rgba(255,248,241,0.96)_100%)] p-4 shadow-[0_16px_30px_rgba(85,56,19,0.08)]">
			<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(245,184,122,0.24),transparent_34%),radial-gradient(circle_at_85%_20%,rgba(134,179,255,0.2),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(122,204,181,0.18),transparent_30%)]" />
			<div className="relative grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
				<div className="grid gap-3">
					<div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#8a6b45]">
						<span className="h-2.5 w-2.5 rounded-full bg-[#e29d52]" />
						<span>{title}</span>
					</div>
					<VisualStatCards
						stats={[
							{ label: "Metric A", value: "$12k" },
							{ label: "Metric B", value: "$7.5k" },
							{ label: "Metric C", value: "37.5%" },
						]}
					/>
				</div>
				<div className="grid grid-cols-5 items-end gap-2 rounded-[1.2rem] border border-white/70 bg-white/55 px-3 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]">
					{[
						{ height: "h-10", color: "bg-[#e39c4c]" },
						{ height: "h-16", color: "bg-[#6d8eff]" },
						{ height: "h-12", color: "bg-[#5bb79d]" },
						{ height: "h-20", color: "bg-[#f1b56a]" },
						{ height: "h-14", color: "bg-[#3f342a]" },
					].map((bar, index) => (
						<div key={index} className="flex items-end justify-center">
							<div className={`w-full max-w-10 rounded-t-full ${bar.height} ${bar.color} shadow-[0_10px_18px_rgba(0,0,0,0.08)]`} />
						</div>
					))}
					<div className="col-span-5 mt-1 flex items-center justify-between text-[0.62rem] uppercase tracking-[0.18em] text-[#8b7865]">
						<span>Lower cost</span>
						<span>Higher return</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export function CalculatorSeoSections({ content }: CalculatorSeoSectionsProps) {
	if (!content) {
		return null;
	}

	const sections = [
		{ label: "Formula", href: "#formula" },
		{ label: "Examples", href: "#examples" },
		{ label: "When to use", href: "#when-to-use" },
		{ label: "Mistakes", href: "#common-mistakes" },
		{ label: "FAQ", href: "#faq" },
		{ label: "Next step", href: "#next-step" },
	];

	return (
		<div className="grid gap-5 sm:gap-6">
			<section className="grid gap-5 lg:grid-cols-[1fr_18rem]">
				<section className="rounded-[1.75rem] border border-black/10 bg-white/80 p-5 shadow-[0_18px_48px_rgba(34,24,12,0.08)] backdrop-blur sm:p-6 lg:rounded-[2rem] lg:p-8">
					<p className="text-xs uppercase tracking-[0.24em] text-[#8a6b45] sm:text-sm">Quick take</p>
					<h2 className="mt-2 text-2xl font-semibold text-[#1b1a17] sm:text-3xl">A quick read before you calculate</h2>
					<p className="mt-3 text-sm leading-7 text-[#2c261f] sm:text-base">{content.intro}</p>
					{content.visual ? (
						<div className="mt-5 overflow-hidden rounded-[1.6rem] border border-black/10 bg-[linear-gradient(135deg,#fffaf4_0%,#f9f0e4_44%,#efe2d2_100%)] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.75)] sm:p-5">
							<div className="flex flex-col gap-4">
								<div className="flex items-start justify-between gap-4">
									<div className="max-w-md">
										<p className="text-[0.7rem] uppercase tracking-[0.26em] text-[#8a6b45]">{content.visual.title}</p>
										<p className="mt-2 text-sm leading-7 text-[#5c554b]">{content.visual.summary}</p>
									</div>
									<div className="hidden rounded-full border border-[#d9c8b6] bg-white/70 px-3 py-1 text-[0.65rem] uppercase tracking-[0.24em] text-[#8a6b45] sm:block">
										Example snapshot
									</div>
								</div>
								<VisualIllustration variant={content.visual.variant} title={content.visual.title} />
							</div>
						</div>
					) : null}
					<div className="mt-5 grid gap-3 sm:grid-cols-3">
						<div className="rounded-2xl border border-black/10 bg-[linear-gradient(180deg,#fff8f1_0%,#f7efe2_100%)] p-4">
							<p className="text-xs uppercase tracking-[0.22em] text-[#8a6b45]">Formula</p>
							<p className="mt-2 text-sm text-[#5c554b]">{content.formulaTitle}</p>
						</div>
						<div className="rounded-2xl border border-black/10 bg-[linear-gradient(180deg,#f8fbff_0%,#eef3ff_100%)] p-4">
							<p className="text-xs uppercase tracking-[0.22em] text-[#5f79c7]">Examples</p>
							<p className="mt-2 text-sm text-[#5c554b]">2-3 real scenarios to make the result easier to trust.</p>
						</div>
						<div className="rounded-2xl border border-black/10 bg-[linear-gradient(180deg,#f3fbf8_0%,#e9f7f3_100%)] p-4">
							<p className="text-xs uppercase tracking-[0.22em] text-[#4b9a84]">FAQ</p>
							<p className="mt-2 text-sm text-[#5c554b]">Clear answers to the questions people usually ask first.</p>
						</div>
					</div>
				</section>

				<nav className="rounded-[1.75rem] border border-black/10 bg-[#201c17] p-5 text-white shadow-[0_18px_48px_rgba(34,24,12,0.12)] backdrop-blur sm:p-6 lg:sticky lg:top-6 lg:self-start lg:rounded-[2rem]">
					<p className="text-xs uppercase tracking-[0.24em] text-[#c9b79d] sm:text-sm">On this page</p>
					<ul className="mt-4 grid gap-2 text-sm">
						{sections.map((section) => (
							<li key={section.href}>
								<a className="text-white/80 transition-colors hover:text-white" href={section.href}>
									{section.label}
								</a>
							</li>
						))}
					</ul>
				</nav>
			</section>

			<SectionCard title="Formula">
				<div id="formula" className="scroll-mt-24">
					<p className="font-medium text-[#1b1a17]">{content.formulaTitle}</p>
					<p className="mt-2 text-[#5c554b]">{content.formula}</p>
					<p className="mt-3 text-[#5c554b]">{content.formulaNote}</p>
				</div>
			</SectionCard>

			<SectionCard title="Examples">
				<div id="examples" className="scroll-mt-24 grid gap-4 lg:grid-cols-3">
					{content.examples.map((example) => (
						<article key={example.title} className="rounded-[1.35rem] border border-black/10 bg-[#f7f1e8] p-4">
							<p className="text-sm font-semibold text-[#1b1a17]">{example.title}</p>
							<p className="mt-2 text-sm text-[#5c554b]">{example.scenario}</p>
							<p className="mt-3 text-sm font-medium text-[#1b1a17]">{example.result}</p>
							<p className="mt-2 text-sm leading-6 text-[#5c554b]">{example.explanation}</p>
						</article>
					))}
				</div>
			</SectionCard>

			<SectionCard title="When to use">
				<p id="when-to-use" className="scroll-mt-24">{content.whenToUse}</p>
			</SectionCard>

			<SectionCard title="Common mistakes">
				<ul id="common-mistakes" className="scroll-mt-24 grid gap-3 sm:grid-cols-2">
					{content.commonMistakes.map((mistake) => (
						<li key={mistake} className="rounded-2xl border border-black/10 bg-[#f7f1e8] px-4 py-3">
							{mistake}
						</li>
					))}
				</ul>
			</SectionCard>

			<SectionCard title="FAQ">
				<div id="faq" className="scroll-mt-24 grid gap-4">
					{content.faq.map((item) => (
						<div key={item.question} className="rounded-2xl border border-black/10 bg-[#f7f1e8] p-4">
							<p className="font-semibold text-[#1b1a17]">{item.question}</p>
							<p className="mt-2 text-[#5c554b]">{item.answer}</p>
						</div>
					))}
				</div>
			</SectionCard>

			<SectionCard title="Next step">
				<div id="next-step" className="scroll-mt-24">
					<p className="font-semibold text-[#1b1a17]">{content.ctaTitle}</p>
					<p className="mt-2 text-[#5c554b]">{content.ctaText}</p>
					<p className="mt-3 text-[#5c554b]">{content.ctaNote}</p>
				</div>
			</SectionCard>
		</div>
	);
}
