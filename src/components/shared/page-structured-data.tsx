import { siteConfig } from "@/src/config/site";
import type { CalculatorSeoFaqItem } from "@/src/features/calculators/shared/types";

type BreadcrumbItem = {
	name: string;
	href: string;
};

type ItemListEntry = {
	name: string;
	href: string;
	description: string;
};

type PageStructuredDataProps = {
	kind: "home" | "hub" | "calculator";
	title: string;
	description: string;
	pathname: string;
	faq?: CalculatorSeoFaqItem[];
	breadcrumbs?: BreadcrumbItem[];
	items?: ItemListEntry[];
};

function toAbsoluteUrl(pathname: string) {
	const baseUrl = siteConfig.url.replace(/\/$/, "");
	const cleanPath = pathname.startsWith("/") ? pathname : `/${pathname}`;
	return `${baseUrl}${cleanPath}`;
}

function renderJsonLd(data: unknown) {
	return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function PageStructuredData({ kind, title, description, pathname, faq, breadcrumbs, items }: PageStructuredDataProps) {
	const pageUrl = toAbsoluteUrl(pathname);
	const scripts: Array<{ key: string; data: unknown }> = [];

	if (kind === "home") {
		scripts.push({
			key: "website",
			data: {
				"@context": "https://schema.org",
				"@type": "WebSite",
				name: title,
				description,
				url: pageUrl,
			},
		});
	}

	if (kind === "hub") {
		scripts.push({
			key: "collection",
			data: {
				"@context": "https://schema.org",
				"@type": "CollectionPage",
				name: title,
				description,
				url: pageUrl,
				mainEntity: {
					"@type": "ItemList",
					itemListElement: (items ?? []).map((item, index) => ({
						"@type": "ListItem",
						position: index + 1,
						name: item.name,
						url: toAbsoluteUrl(item.href),
						description: item.description,
					})),
				},
			},
		});
	}

	if (kind === "calculator") {
		scripts.push({
			key: "webpage",
			data: {
				"@context": "https://schema.org",
				"@type": "WebPage",
				name: title,
				description,
				url: pageUrl,
			},
		});

		if (breadcrumbs?.length) {
			scripts.push({
				key: "breadcrumbs",
				data: {
					"@context": "https://schema.org",
					"@type": "BreadcrumbList",
					itemListElement: breadcrumbs.map((item, index) => ({
						"@type": "ListItem",
						position: index + 1,
						name: item.name,
						item: toAbsoluteUrl(item.href),
					})),
				},
			});
		}

		if (faq?.length) {
			scripts.push({
				key: "faq",
				data: {
					"@context": "https://schema.org",
					"@type": "FAQPage",
					mainEntity: faq.map((item) => ({
						"@type": "Question",
						name: item.question,
						acceptedAnswer: {
							"@type": "Answer",
							text: item.answer,
						},
					})),
				},
			});
		}
	}

	return (
		<>
			{scripts.map((script) => (
				<script key={script.key} type="application/ld+json" dangerouslySetInnerHTML={{ __html: renderJsonLd(script.data) }} />
			))}
		</>
	);
}