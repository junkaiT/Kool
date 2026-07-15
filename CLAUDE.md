# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A marketing + booking website for Kool Aircon, a Singapore aircon servicing/installation company, built as a **Next.js 16 (App Router) / React 19 / TypeScript / Tailwind CSS 4** app.

The site was originally a set of standalone static HTML files (still kept for reference under `mockups/`) and was rebuilt into this componentized Next.js app. Don't follow patterns from `mockups/*.html` when editing live pages — those files are frozen design references, not part of the build.

## Development workflow

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run start` — run a production build
- `npm run lint` — ESLint (flat config in `eslint.config.mjs`)
- No test suite exists.
- Path alias `@/*` maps to the repo root (see `tsconfig.json`), e.g. `@/lib/site`, `@/components/Nav`.

## Architecture

- **App Router pages** live under `app/`, one folder per route (`app/about/page.tsx`, `app/prices/page.tsx`, etc.). `app/layout.tsx` wraps every page with the shared `Nav` and `Footer` components and sets global metadata/fonts.
- **Shared site data lives in one place**: [lib/site.ts](lib/site.ts) exports `WHATSAPP_NUMBER`, `WHATSAPP_URL`, `PHONE_TEL`, `EMAIL`, `ADDRESS`, `SERVICES`, `NAV_LINKS`, `FOOTER_COMPANY_LINKS`. When changing the phone number, WhatsApp link, email, address, or nav/footer links, edit this file — do **not** hunt for duplicated strings across pages like the old static-HTML version required.
- **Nav and footer are single components**, not duplicated per page: [components/Nav.tsx](components/Nav.tsx) (desktop nav, services dropdown, mobile menu) and `components/Footer.tsx`. Fix nav/footer behavior once, here.
- **The six service pages (`general-servicing`, `chemical-wash`, `chemical-overhaul`, `kooljet`, `installation`, `commercial`) are one template driven by data**, not six separate HTML files:
  - [components/service/ServicePageTemplate.tsx](components/service/ServicePageTemplate.tsx) renders the page shell (hero, pricing panel, "when it matters", "what's included", "how it works", FAQ, related services, final CTA).
  - Each service's content is a data object in `data/services/<slug>.ts` typed by `ServicePageData` in [data/services/types.ts](data/services/types.ts).
  - To edit service copy or pricing, edit the data file, not the template. To change the shared layout/structure of all service pages, edit the template.
- **Booking flow** (`app/book/page.tsx`, client component) is a multi-step form that talks to an external "OpenClaw" booking API for date/slot availability, configured via `NEXT_PUBLIC_OPENCLAW_URL` in `.env.local` (see `.env.example`). If that env var is unset, the page shows a "booking availability isn't connected yet" fallback state.
  - [lib/booking.ts](lib/booking.ts) holds the local price table (`getLocalPrice`, mirrors the CRM's pricing table) used as a fallback/estimate before the remote API returns an authoritative price, plus shared types (`ServiceCode`, `Slot`, `DateAvailability`, `SlotsResponse`).
- **Reusable UI components** live in `components/`: `Button`, `WhatsAppButton`, `FaqAccordion` (accordion state via `useState<Set<number>>`), `ImagePlaceholder` (placeholder box for photos not yet supplied — treat as an intentional TODO, not a bug), `NumberedStep`, `PricingCard`, `Logo`, plus `components/home/*` (homepage sections: `Hero`, `ServicesSection`, `Testimonials`, `TrustBar`, `WhyKool`, `BrandsMarquee`, `HomeFAQ`, `FinalCTA`) and `components/service/*` (`ProofTabs`, `StatsBar`, `ServicePageTemplate`).
- **Styling**: Tailwind CSS 4 utility classes inline in JSX (no more per-page `<style>` blocks). Design tokens (colors) are CSS custom properties defined in [app/globals.css](app/globals.css) under `:root` and mapped into Tailwind's theme via `@theme inline` — e.g. `--color-blue`, `--color-teal`, `--color-wa` (WhatsApp green), `--color-bg`, `--color-border`, `--color-muted`. Use the corresponding Tailwind classes (`bg-blue`, `text-grey`, `border-border`, etc.) rather than hardcoding hex values. The custom breakpoint is `md` = 900px (mobile-first).

## Images

- `images/` holds source brand logos (Daikin, Mitsubishi, Samsung, Panasonic, LG, Fujitsu, Sharp, Toshiba, Sanyo, Midea); `public/images/` holds the copies actually served by Next.js — keep both in sync if you add/replace a logo.
- Other hero/content images are hotlinked from Unsplash or left as `ImagePlaceholder` components where a real photo hasn't been supplied yet.

## Repo conventions

- This repo was historically edited via GitHub's web "Add files via upload" flow, but the Next.js rebuild was committed as a single local commit — don't assume CI, PR checks, or branch protections are in place.
- `mockups/*.html` are static, standalone reference files (inline styles/scripts, no shared boilerplate) kept for design reference only. Do not edit them expecting it to affect the live site, and do not copy their duplicated-nav/footer pattern into new live pages.
