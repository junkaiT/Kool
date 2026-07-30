# Staging environment: whole-stack runbook

**Goal:** every change — frontend or backend — lands on staging first, gets verified there,
then gets promoted to live. **Constraint:** no additional cost anywhere in this setup.

The live system spans three pieces, only one of which (`kool-aircon`, this repo) is checked
out in the session that wrote this doc. The other two live in different codebases/sessions;
this doc gives them a precise, zero-cost spec to execute against rather than assuming access
to do it directly.

| # | Piece | Lives in | Owner for staging setup |
|---|---|---|---|
| 1 | Public site | `kool-aircon` (this repo), Vercel | This repo — done below |
| 2 | CRM/booking backend ("OpenClaw"/kool-crm) | Separate Claude Code session, OVH/Docker | kool-crm session — manual sheet-swap for now, see section 2 |
| 3 | Technician app | `junkaiT/KoolAir-Aircon-App`, GitHub Pages | kool-crm session / manual GitHub setup |

## 1. Public site (`kool-aircon`) — done

Vercel's GitHub integration (already connected — `kool-pi.vercel.app` auto-deploys `main`)
builds a **Preview Deployment** for every non-production branch at no extra cost on any plan,
including Hobby. A persistent `staging` branch gets a **stable** preview URL that doesn't
change between pushes, unlike ephemeral per-commit preview URLs — that's what makes it usable
as a bookmarkable staging site.

**Status: the `staging` branch already exists and is pushed to `origin`.** It currently mirrors
`main` exactly. Vercel should already have picked it up and started building a preview
deployment for it (check the Vercel dashboard's Deployments tab, filtered to the `staging`
branch, for the generated URL).

**Manual step still needed (Vercel dashboard — not executable from a coding session, needs
your own Vercel login):**
- Project Settings → Environment Variables → add `NEXT_PUBLIC_OPENCLAW_URL` scoped to the
  **Preview** environment (leave the existing **Production** value, used by `main`, untouched).
  Point the Preview value at the staging OpenClaw backend URL once step 2 exists. Until then,
  the staging preview correctly falls back to the "booking availability isn't connected yet"
  state on `/book` — expected, not a bug.

**Going forward:** feature branches merge into `staging` first → verify on the `staging`
preview URL against the rest of the staging stack (below) → merge `staging` into `main` to
promote to production.

## 2. CRM/booking backend ("OpenClaw"/kool-crm) — for the kool-crm session

This backend (Telegram/WhatsApp bot + Google Sheets database + operator web UI) isn't checked
out here; execute this section in that session.

**Current recommendation (revised): manual sheet-swap, not a second OpenClaw workspace.**
There are no live customers on the system yet, so the risk of a single shared backend
instance is low enough that a full second running instance isn't worth building yet. Instead:

1. Create the staging Google Sheets now: File → Make a copy of the "Aircon CRM Database"
   sheet and the "Kool Aircon Technician App" workbook, prefix `STAGING_`. Free, immediate,
   same Drive quota.
2. When testing a change, temporarily swap the Sheet ID in `9_Settings` over to the staging
   copy.
3. Swap it back to the production Sheet ID when done testing.
4. This is manual and requires discipline (don't forget to swap back), but it's free and
   needs no second OpenClaw workspace, no second ngrok tunnel, and no second Telegram bot.

**When to graduate to a fully isolated second OpenClaw instance** (separate Sheet + Drive
folder + Calendar + Telegram bot + ngrok tunnel, as originally scoped): once there's real
production traffic that can't be interrupted by a manual sheet-swap window. Revisit this
section at that point rather than building the full isolation pre-emptively.

Until a staging OpenClaw URL exists (i.e. until the graduation point above), `kool-aircon`'s
Vercel **Preview** environment variable (section 1) has nothing separate to point at — the
`staging` branch preview will keep showing the "booking availability isn't connected yet"
fallback, or can point at the same production OpenClaw URL if testing against real
availability is more useful in the meantime (paired with the manual sheet-swap discipline
above so test bookings land in the staging Sheet, not the production one).

## 3. Technician app — for the kool-crm session / manual GitHub setup

The live app (`junkaiT/KoolAir-Aircon-App` on GitHub Pages) talks directly to Google
Calendar/Drive using the technician's own OAuth token — no backend API of its own.

- Create a second free public GitHub repo (e.g. `KoolAir-Staging`) with its own free GitHub
  Pages site (GitHub Pages only supports one deployment source per repo, so a branch alone
  isn't enough here — a second repo is the free option).
- Point its hardcoded `CFG` (Calendar ID, Drive root folder ID) at the staging Calendar and
  Drive folder from section 2, not the production ones.

## 4. Xero

Use Xero's built-in **Demo Company** — free for any Xero account, purpose-built for this exact
use case. Keep it fully separate from the real Sleek-managed org; only point integration code
at the real org once a full staging run-through is clean. (This restates the sequencing
already agreed in the earlier Xero-invoicing handoff spec, kept here so this doc stands alone.)

## 5. Workflow summary

```
Change ready
     |
     v
kool-aircon: land on `staging` branch  ---->  Vercel Preview URL (stable, staging env vars)
kool-crm:    land on the shared OpenClaw instance, but swap 9_Settings' Sheet ID to the
             STAGING_ copy first, test, then swap it back
tech app:    land on staging GitHub Pages repo -> staging Drive/Calendar
     |
     v
Verify end-to-end against the staging Sheet + staging tech-app site
     |
     v
Promote: kool-aircon `staging` -> `main` (Vercel auto-deploys production)
         kool-crm / tech app: promote via whatever the kool-crm session defines
```

## 6. Open items to resolve

- When production traffic starts, revisit section 2's manual sheet-swap approach and graduate
  to a fully isolated second OpenClaw workspace/instance — the swap-and-remember-to-swap-back
  discipline stops being acceptable once real customer data is at stake.
