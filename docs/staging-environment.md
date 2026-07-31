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
instance is low enough that a full second running instance isn't worth building yet.

**Correction (2026-07-31): the swap is a code edit, not a `9_Settings` row.** Read
`crm/sheets.js` directly (mirrored in the Shared Drive) to confirm — the Sheet IDs are
hardcoded module constants, not a settings-table lookup (which would be circular anyway: you
can't read "which sheet to use" from inside the sheet you're deciding whether to use):

```js
const SPREADSHEET_ID = '1YSU2zdeijOyp4KZYxav6ASoLLNst6IrPZ5Vo2lB05p4';
const TECH_APP_SPREADSHEET_ID = '1Oa8szd_6Zy9lAkZHpwq_aH6zKGSUcAjlXjZsKOkW258';
```

Every other module (`crm.js`, `booking.js`, `module3.js`, `index.ts`, etc.) calls into
`sheets.js`'s exported functions rather than referencing a spreadsheet ID directly — confirmed
by searching the Shared Drive source for the literal ID, which only appears in `sheets.js`
among the code files. So exactly **one file, two constants** need to change per swap.

Staging copies already exist (created 2026-07-30, full data verified):
- `STAGING_Aircon CRM Database` → `1CH51ZXQWRUcRxPawObRGuBUvqwkrqrsxPcZjSWngdMg`
- `STAGING_Kool Aircon Technician App` → `1TnvGa-P-ek1kOVJZ3X-Xwxa63sAQnlKVBnfraXtXkg8`

The swap procedure (for the kool-crm session — editing the Drive-mirrored copy of `sheets.js`
alone does **not** deploy it; per this system's own deploy-pattern notes, "a Shared Drive
upload being reconciled does not mean deployed" — this must go through the real deploy
script):

1. In `crm/sheets.js` on the live server, change `SPREADSHEET_ID` and
   `TECH_APP_SPREADSHEET_ID` to the `STAGING_` IDs above.
2. Deploy via the normal deploy process.
3. Test (e.g. add a distinguishing test row to the `STAGING_` sheet first, then confirm a
   command/the browser `/ui` reflects it, and confirm nothing lands in the production sheet).
4. Change the two constants back to the production IDs and deploy again.
5. This is manual and requires discipline (don't forget to swap back), but it's free and
   needs no second OpenClaw workspace, no second ngrok tunnel, and no second Telegram bot.

**Nice-to-have for later, not blocking**: making these two constants read from an environment
variable (`process.env.SPREADSHEET_ID || '<prod-id>'`) would turn future swaps into a
one-line env/restart change instead of an edit-and-redeploy cycle each way.

**When to graduate to a fully isolated second OpenClaw instance** (separate Sheet + Drive
folder + Calendar + Telegram bot + ngrok tunnel, as originally scoped): once there's real
production traffic that can't be interrupted by a manual sheet-swap window. Revisit this
section at that point rather than building the full isolation pre-emptively.

Because there's only ever one running OpenClaw instance and one `NEXT_PUBLIC_OPENCLAW_URL`
(section 1), the website side of a test run needs no configuration at all — just do the
`sheets.js` constant swap above (deployed) before testing bookings through the (single,
always-production-URL) site, and swap back after.

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
kool-crm:    edit sheets.js's two ID constants to the STAGING_ copies, deploy
kool-aircon: no change needed — same site, same OpenClaw URL, always
tech app:    (only once it has staging infra) land on staging GitHub Pages repo
     |
     v
Test through the live site as normal — it's now reading/writing the STAGING_ sheets
     |
     v
Edit sheets.js's two ID constants back to production, deploy again
     |
     v
Promote the actual code change: kool-aircon merges to `main` (Vercel auto-deploys);
kool-crm / tech app promote via whatever the kool-crm session defines
```

## 6. Open items to resolve

- When production traffic starts, revisit section 2's manual sheet-swap approach and graduate
  to a fully isolated second OpenClaw workspace/instance — the swap-and-remember-to-swap-back
  discipline stops being acceptable once real customer data is at stake.
