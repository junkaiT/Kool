# Staging environment: whole-stack runbook

**Goal:** every change to the CRM/booking backend lands on staging data first, gets verified
there, then gets promoted to live. **Constraint:** no additional cost anywhere in this setup.

**Correction (2026-07-31): Vercel/the website is not a real "environment" and doesn't need
one.** The public site (`kool-aircon`, this repo) is stateless — it holds no data of its own,
it just renders UI and calls out to the OpenClaw booking API. The thing that actually needs a
production/staging split is wherever real data lives, which is entirely on the **OpenClaw/CRM
side** (the Google Sheets). This doc originally set up a separate Vercel "staging" branch with
its own scoped environment variable, as if the website itself needed a parallel environment —
that was unnecessary complexity and has been corrected below.

The live system spans three pieces, only one of which (`kool-aircon`, this repo) is checked
out in the session that wrote this doc. The other two live in different codebases/sessions;
this doc gives them a precise, zero-cost spec to execute against rather than assuming access
to do it directly.

| # | Piece | Lives in | Has its own data needing a staging/prod split? |
|---|---|---|---|
| 1 | Public site | `kool-aircon` (this repo), Vercel | No — stateless, see section 1 |
| 2 | CRM/booking backend ("OpenClaw"/kool-crm) | Separate Claude Code session, OVH/Docker | **Yes — this is the real staging boundary**, see section 2 |
| 3 | Technician app | `junkaiT/KoolAir-Aircon-App`, GitHub Pages | Only indirectly, via the Drive/Calendar it points at |

## 1. Public site (`kool-aircon`) — no staging environment needed

Vercel's GitHub integration (already connected — `kool-pi.vercel.app` auto-deploys `main`)
builds a **Preview Deployment** automatically for every branch and PR, at no cost on any plan.
That's a convenient way to eyeball a website code change before merging — it is **not** a
parallel "environment" with its own data, because the site has no data of its own.

`NEXT_PUBLIC_OPENCLAW_URL` never needs a second, staging-scoped value: the site always talks
to the same single running OpenClaw instance. What changes between "testing" and "production"
is which Google Sheet *that instance* is currently reading from — handled entirely in section
2, not here.

There is no dedicated `staging` git branch — it added no value once the environment-variable
split turned out to be unnecessary, so it's been deleted. Ordinary feature branches (which
Vercel already previews automatically) are enough.

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

Because there's only ever one running OpenClaw instance and one `NEXT_PUBLIC_OPENCLAW_URL`
(section 1), the website side of a test run needs no configuration at all — just do the
`9_Settings` swap above before testing bookings through the (single, always-production-URL)
site, and swap back after.

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
kool-crm:    swap 9_Settings' Sheet ID to the STAGING_ copy
kool-aircon: no change needed — same site, same OpenClaw URL, always
tech app:    (only once it has staging infra) land on staging GitHub Pages repo
     |
     v
Test through the live site as normal — it's now reading/writing the STAGING_ sheet
     |
     v
Swap 9_Settings' Sheet ID back to production
     |
     v
Promote the actual code change: kool-aircon merges to `main` (Vercel auto-deploys);
kool-crm / tech app promote via whatever the kool-crm session defines
```

## 6. Open items to resolve

- When production traffic starts, revisit section 2's manual sheet-swap approach and graduate
  to a fully isolated second OpenClaw workspace/instance — the swap-and-remember-to-swap-back
  discipline stops being acceptable once real customer data is at stake.
