# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A marketing + booking website for Kool Aircon, a Singapore aircon servicing/installation company, built as a **Next.js 16 (App Router) / React 19 / TypeScript / Tailwind CSS 4** app.

The site was originally a set of standalone static HTML files (still kept for reference under `mockups/`) and was rebuilt into this componentized Next.js app. Don't follow patterns from `mockups/*.html` when editing live pages — those files are frozen design references, not part of the build.

## Development workflow

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run start` — run a production build
- `npm run lint` — ESLint (flat config in `eslint.config.mjs`; `mockups/**` is excluded since it's reference material, not build source)
- No test suite exists.
- Path alias `@/*` maps to the repo root (see `tsconfig.json`), e.g. `@/lib/site`, `@/components/Nav`.

## Architecture

- **App Router pages** live under `app/`, one folder per route (`app/prices/page.tsx`, `app/book/page.tsx`, etc.). `app/layout.tsx` wraps every page with the shared `Nav` and `Footer` components and sets global metadata/fonts.
  - **The About page is currently offline on purpose**: `app/about/page.tsx` was removed (so `/about` 404s) and its last version archived at `mockups/about.tsx` for later revival. `NAV_LINKS`/`FOOTER_COMPANY_LINKS` in `lib/site.ts` no longer reference it. Don't re-add an About link without first checking whether the page should come back.
- **Shared site data lives in one place**: [lib/site.ts](lib/site.ts) exports `WHATSAPP_NUMBER`, `WHATSAPP_URL`, `PHONE_TEL`, `EMAIL`, `ADDRESS`, `SERVICES`, `NAV_LINKS`, `FOOTER_COMPANY_LINKS`, `FINAL_CTA_IMAGE`. When changing the phone number, WhatsApp link, email, address, nav/footer links, or the shared Final CTA photo, edit this file — do **not** hunt for duplicated strings/paths across pages like the old static-HTML version required.
- **Nav and footer are single components**, not duplicated per page: [components/Nav.tsx](components/Nav.tsx) (desktop nav, services dropdown, mobile menu) and `components/Footer.tsx`. Fix nav/footer behavior once, here.
- **The six service pages (`general-servicing`, `chemical-wash`, `chemical-overhaul`, `kooljet`, `installation`, `commercial`) are one template driven by data**, not six separate HTML files:
  - [components/service/ServicePageTemplate.tsx](components/service/ServicePageTemplate.tsx) renders the page shell (hero, pricing panel, proof tabs, "when it matters", "Our Process", FAQ, related services, final CTA).
  - Each service's content is a data object in `data/services/<slug>.ts` typed by `ServicePageData` in [data/services/types.ts](data/services/types.ts).
  - To edit service copy or pricing, edit the data file, not the template. To change the shared layout/structure of all service pages, edit the template.
  - **"Our Process" is a photographed step-by-step section**, not a generic icon+bullet list: each entry in `ServicePageData.included` (typed `IncludedStep`) has `h`, an optional `body` (steps without supplied copy render an italic "Copy coming soon." placeholder), and an optional `image`. `ServicePageData.heroImage` is also optional. When either `image`/`heroImage` is set, the template renders it via `next/image`; when unset, it falls back to `ImagePlaceholder`. All 6 service pages currently have real photos throughout.
- **`WhatsAppButton` always renders a pair, not a single button**: [components/WhatsAppButton.tsx](components/WhatsAppButton.tsx) renders the WhatsApp link *and* a second "Check Slots Online" button (→ `/book`), with the word "or" as plain text between them (not inside either button). This is true for every usage across the site (nav, hero sections, FAQs, pricing cards, etc.) — it's a property of the shared component, so don't reintroduce a single-button variant without checking why the pairing was added.
- **Booking flow** (`app/book/page.tsx`, client component) is a multi-step form that talks to an external "OpenClaw" booking API for date/slot availability, configured via `NEXT_PUBLIC_OPENCLAW_URL` in `.env.local` (see `.env.example`). If that env var is unset, the page shows a "booking availability isn't connected yet" fallback state.
  - [lib/booking.ts](lib/booking.ts) holds the local price table (`getLocalPrice`, mirrors the CRM's pricing table) used as a fallback/estimate before the remote API returns an authoritative price, plus shared types (`ServiceCode`, `Slot`, `DateAvailability`, `SlotsResponse`).
  - **Gotcha**: the OpenClaw endpoint is currently tunneled through ngrok. The fetch call must send `ngrok-skip-browser-warning: "true"` and `Content-Type: application/json` headers, or ngrok's free-tier interstitial silently intercepts requests from real browsers (a plain `curl` request works fine without these headers, which is what makes this confusing to debug — the failure only reproduces in an actual browser). If slot-fetching starts failing again after an ngrok URL rotation, check these headers are still present before assuming the API contract changed.
  - `NEXT_PUBLIC_OPENCLAW_URL` is set locally via `.env.local` (git-ignored, machine-specific). A separate deployment (e.g. Vercel) needs this env var configured in *its own* dashboard — it does not inherit from a local `.env.local` or from what's committed to git.

## Images

Two different conventions are in play — don't assume the wrong one for a new image:

- **Brand logos** (Daikin, Mitsubishi, Samsung, Panasonic, LG, Fujitsu, Sharp, Toshiba, Sanyo — rendered by [components/home/BrandsMarquee.tsx](components/home/BrandsMarquee.tsx)) exist in **two places that must be kept in sync**: `images/` holds the source files, `public/images/` holds the copies actually served by Next.js. If you add/replace/remove a brand logo, update both and update `BrandsMarquee.tsx`'s `BRANDS` array to match.
- **Homepage and service-page content photos** (`public/images/home/`, `public/images/services/<slug>/`) live **only** in `public/images/` — there is no top-level `images/` counterpart for these, unlike brand logos. Referenced from `lib/site.ts` (`FINAL_CTA_IMAGE`), `components/home/*.tsx`, and each `data/services/<slug>.ts`'s `heroImage`/`included[].image` fields.
- Where a real photo hasn't been supplied yet, pages fall back to the `ImagePlaceholder` component — treat these as an intentional TODO, not a bug.

## Repo conventions

- This repo was historically edited via GitHub's web "Add files via upload" flow, but the Next.js rebuild was committed as a single local commit — don't assume CI, PR checks, or branch protections are in place.
- `mockups/*.html` are static, standalone reference files (inline styles/scripts, no shared boilerplate) kept for design reference only. Do not edit them expecting it to affect the live site, and do not copy their duplicated-nav/footer pattern into new live pages. `mockups/about.tsx` is a different kind of entry in this same folder — it's the archived source of the removed live About page (see Architecture above), not a static design reference.
