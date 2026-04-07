# NobleCalculator

NobleCalculator is a lean Next.js app for fast, SEO-friendly financial calculators.
It is built for freelancers, agencies, and small businesses that need quick answers for pricing, tax, margin, and transfer questions.

## What this project is

The project follows one simple rule: each calculator gets its own route, but shared data and shared UI stay centralized.

That gives us:
- one source of truth for calculator metadata
- one route per tool for SEO and sharing
- pure calculation logic that is easy to test
- a small shared UI layer that keeps the app consistent

## Product goals

The app is designed to:
- ship useful calculator pages quickly
- rank each calculator as its own landing page
- support future integrations with accounting and payment tools
- stay simple enough to extend without a large refactor

## Current calculator set

The current registry includes:
- Profit Margin Calculator
- Markup Calculator
- Freelance Hourly Rate Calculator
- VAT Calculator
- Invoice Calculator
- International Transfer Fee Calculator

## Project structure

This is the current repository layout and the role of each main folder:

```text
src/
├─ app/
│  ├─ layout.tsx                 # Root layout and global metadata
│  ├─ page.tsx                   # Home landing page
│  ├─ robots.ts                  # Robots metadata route
│  ├─ sitemap.ts                 # Sitemap metadata route
│  ├─ api/
│  │  └─ calculators/
│  │     └─ route.ts             # Registry-backed API endpoint
│  └─ tools/
│     ├─ page.tsx                # Tools directory page
│     └─ [slug]/
│        └─ page.tsx             # Dynamic page for each calculator
│
├─ components/
│  ├─ shared/                    # Reusable page blocks and cards
│  │  ├─ app-header.tsx
│  │  ├─ app-footer.tsx
│  │  ├─ calculator-shell.tsx
│  │  ├─ result-card.tsx
│  │  └─ tool-card.tsx
│  └─ ui/                        # Lower-level UI primitives
│     └─ button.tsx
│
├─ config/
│  ├─ site.ts                    # Site name and base URL
│  └─ tools.ts                   # Shared calculator registry export
│
├─ features/
│  ├─ calculators/
│  │  ├─ shared/                 # Shared calculator helpers and registry
│  │  ├─ profit-margin/
│  │  ├─ markup/
│  │  ├─ freelance-hourly-rate/
│  │  ├─ vat-calculator/
│  │  ├─ invoice-calculator/
│  │  └─ international-transfer-fee/
│  └─ integrations/              # Future QuickBooks, Wise, Xero connectors
│
├─ lib/
│  ├─ format.ts                  # Number and currency formatting helpers
│  ├─ metadata.ts                # Shared page metadata helper
│  └─ utils.ts                   # General utility helpers
│
└─ tests/
	└─ calculators/               # Formula tests for each calculator

packages/
├─ calculators-core/             # Shared calculator schema, config, and formula logic
└─ shared-format/                # Shared number and money formatting helpers

public/
└─ og-image.svg                  # Shared social preview image

dataflow.md                      # End-to-end data flow documentation
README.md                        # Project overview and architecture notes
```

### How the structure works

- `app/` owns routing, page composition, and route-level metadata.
- `components/shared/` holds reusable UI blocks used across pages.
- `config/` stores small application-wide configuration and shared registry data.
- `features/calculators/` contains the business logic for each calculator.
- `packages/` contains shared code that can be reused by the web app and a future React Native app.
- `lib/` contains generic helpers that are not tied to one feature.
- `tests/` contains formula tests, so the math stays easy to verify.
- `public/` stores static assets used by social sharing and the browser.

## Architecture pattern

The codebase uses a registry-driven, feature-first design.

### 1. Registry-driven routing

Calculator metadata lives in `src/features/calculators/shared/calculator-registry.ts`.

That registry feeds:
- the tools directory page
- the dynamic calculator route
- the API response
- the sitemap

### 2. Calculator module pattern

Each calculator follows the same structure:

```text
calculator-name/
├─ config.ts
├─ schema.ts
├─ formula.ts
├─ form.tsx
├─ result.tsx
├─ calculator.tsx
└─ index.ts
```

Responsibilities:
- `schema.ts` defines input and output types
- `formula.ts` contains pure calculation logic
- `form.tsx` renders user input controls
- `result.tsx` formats and displays output
- `calculator.tsx` connects state, form, and formula
- `index.ts` exposes the public module API

### 3. Shared UI layer

Shared components live in `src/components/shared/`.

They provide:
- `AppHeader`
- `AppFooter`
- `CalculatorShell`
- `ToolCard`
- `ResultCard`

These components keep the app visually consistent while each calculator stays isolated.

### 4. Shared metadata pattern

Metadata is centralized in `src/lib/metadata.ts`.

The project uses:
- root metadata in `src/app/layout.tsx`
- page metadata via `createPageMetadata()`
- Open Graph metadata for social sharing
- Twitter card metadata for previews
- robots rules and sitemap routes for crawl support

## Data flow

The detailed data flow is documented in [dataflow.md](dataflow.md).

In short:
1. The registry defines the calculator list.
2. Pages read the registry.
3. Dynamic routes resolve a slug to a calculator module.
4. Calculator modules compute values with pure formulas.
5. Shared UI renders and formats the result.
6. SEO routes expose the same structure to search engines.

## Route map

- `/` - landing page
- `/tools` - tools directory
- `/tools/[slug]` - individual calculator page
- `/api/calculators` - registry-backed API response
- `/sitemap.xml` - sitemap generated from the registry
- `/robots.txt` - crawl rules for the site

## SEO implementation

SEO is built into the app, not added later.

Included pieces:
- canonical metadata
- Open Graph metadata
- Twitter metadata
- robots directives
- Google bot directives
- a shared social image at `public/og-image.svg`
- sitemap generation from the same registry data

## Planned integrations

The integrations folder is reserved for future connector flows:
- QuickBooks
- Wise
- Xero

Those modules are currently stubs, but they define where sync/export/payout features will live later.

## Design principles

The codebase follows these patterns:
- registry-driven architecture
- feature-first module layout
- pure formula functions
- UI composition through shared shells and cards
- SEO metadata centralized in one place
- route files kept thin and declarative

## GoF patterns reflected in the project

The project does not implement all 23 GoF patterns, but a few are clearly reflected in the current structure.

### 1. Strategy

Each calculator formula acts like a strategy: the route or page selects the calculator by slug, then the corresponding formula module performs the calculation.

That keeps the math swappable and isolated in `formula.ts` files.

### 2. Simple Factory

The dynamic route uses a slug-to-component map to resolve which calculator component should render.

This is a practical simple-factory style lookup rather than a full abstract factory.

### 3. Facade

`createPageMetadata()` provides one small API over Next.js metadata object construction.

`CalculatorShell` also acts like a facade over the repeated page chrome used by calculator pages.

### 4. Template Method style layout

The calculator pages follow the same overall flow:
resolve slug, load metadata, render shell, render calculator module.

The sequence is consistent, while the module content varies per calculator.

### 5. Composition

The UI is assembled from smaller components like `AppHeader`, `AppFooter`, `ToolCard`, `CalculatorShell`, and `ResultCard`.

This is not a strict GoF pattern by itself, but it is the main way the UI stays modular and reusable.

## Why this structure works

This structure reduces duplication and keeps the app easy to maintain.

When you add a new calculator, you typically only need to:
- add a registry entry
- add the calculator module
- let the route and sitemap pick it up automatically

That keeps the app scalable without unnecessary abstraction.

## Tech stack

Core stack:
- Next.js
- React
- TypeScript
- Tailwind CSS

Supporting tooling:
- ESLint
- Vitest

## Scripts

- `npm run dev` - start development server
- `npm run build` - build production bundle
- `npm start` - start production server
- `npm run lint` - run ESLint
- `npm test` - run calculator formula tests

## Repository status

The project currently has a working MVP foundation with:
- dedicated calculator routes
- shared registry data
- shared metadata and SEO routes
- calculator formula tests
- reusable UI shells and cards

