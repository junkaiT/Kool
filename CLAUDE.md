# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A static marketing website for Kool Aircon, a Singapore aircon servicing/installation company. There is no build system, package manager, framework, or server — just standalone `.html` files meant to be opened directly or hosted as static files (e.g. GitHub Pages).

## Development workflow

- No install/build/lint/test commands exist — there is no `package.json`. Edit HTML files directly and open them in a browser to preview.
- Git history shows this repo is normally edited via GitHub's web "Add files via upload" flow, not a typical local commit workflow — don't assume CI, PR checks, or branch protections are in place.

## Architecture

- **One fully self-contained HTML file per page** (`index.html`, `about.html`, `prices.html`, `faq.html`, `articles.html`, `referral.html`, and the service pages `general-servicing.html`, `chemical-wash.html`, `chemical-overhaul.html`, `kooljet.html`, `installation.html`, `commercial.html`). Each file inlines its own `<style>` block and a small vanilla-JS `<script>` block at the end — there are no shared `.css`/`.js` files.
- **The header nav, mobile menu, footer, and WhatsApp CTA buttons are duplicated verbatim across every page.** There is no templating or includes mechanism. When changing the nav, footer, phone number, WhatsApp link, or address, you must find-and-replace across *all* HTML files, not just one.
- Shared boilerplate to watch for when making sitewide changes:
  - WhatsApp contact link: `https://wa.me/6588150254` (also shown as `+65 8815 0254`)
  - Email: `hello@kool.com.sg`
  - Address: `73 Upper Paya Lebar Road, Singapore`
  - Services dropdown/footer links to the six service pages, `prices.html`, `about.html`, `referral.html`, `articles.html`, `faq.html`
  - A `privacy.html` link appears in every footer but that file does not exist in the repo yet.
- Per-page `<style>` blocks are near-duplicates of each other (same CSS variable palette, same class names like `.nav`, `.hero`, `.faq-item`, `.btn-wa`) with page-specific sections added/removed. When editing shared visual patterns (e.g. FAQ accordion behavior, mobile nav toggle), check whether the same JS/CSS block appears in other pages and needs the same fix.
- Common inline JS patterns repeated per page: `toggleMenu()` (mobile nav), `toggleSvcDropdown()` / `toggleMobSvc()` (services dropdown), `toggleFaq()` (FAQ accordion expand/collapse).
- Design system conventions used throughout (CSS custom properties defined per-page in `:root`): `--blue`, `--teal`, `--dark`, `--grey`, `--wa` (WhatsApp green), etc. Mobile-first CSS with a `@media(min-width:900px)` breakpoint for desktop layout.
- `.img-ph` is a placeholder-image component (dashed border box with "Replace with real image URL in content sheet") used wherever a real photo has not been supplied yet — treat these as intentional TODOs, not bugs.

## Images

- `images/` contains brand logos (Daikin, Mitsubishi, Samsung, Panasonic, LG, Fujitsu, Sharp, Toshiba, Sanyo, Midea).
- These are referenced in `index.html`'s brand marquee **via absolute GitHub raw URLs** (`https://raw.githubusercontent.com/junkaiT/Kool/main/images/<Brand>.png`), not relative paths — so they only render correctly once pushed to the `junkaiT/Kool` GitHub repo's `main` branch, not when previewing `index.html` from a local checkout offline.
- Other hero/content images across pages are hotlinked from Unsplash or left as `.img-ph` placeholders.
