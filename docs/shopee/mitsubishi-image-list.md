# Shopee image list — Mitsubishi Electric Starmex (batch 1)

Goes with `Shopee_mass_upload_aircon_mitsubishi.xlsx` (listings `KA-MIT-S1` … `KA-MIT-S4`).

## Reference: how Commercestar builds its Starmex gallery

Viewed on their System 2 listing (263 ratings, 680 sold) on 17 Sep 2026:

| # | What it is |
|---|---|
| 1 | Short video |
| 2 | **Hero collage** — shop-name header strip; the indoor units stacked to show the system count; outdoor unit; NEA tick labels on both; round Climate Vouchers badge; red promo tile quantifying the free material upgrade ("worth up to $320" / "$238") |
| 3 | **Replacement Only** — text sheet listing what that option covers |
| 4 | **HDB Full Install** — text sheet listing what that option covers |
| 5 | **Condo Full Install** — text sheet listing what that option covers |
| 6+ | More images past the thumbnail strip (not captured) |

The pattern is a hero collage, then **one plain text page per install option**. Use the same *structure*, but not their artwork, badges or wording.

## Rules from Shopee's template

- JPG or PNG, **max 2.0 MB** each. Square 1:1, working at **1024 × 1024 px**.
- **A cover image can't be reused on another listing in the same shop**, so every system needs its own cover.
- The Add Product page also asks for a separate 1:1 **Promotion Image**, used in search results and on the promotion page.
- Product renders (units, remote) should be **official Mitsubishi Electric images from your distributor**, not copied from other sellers.

## Images to make — 14 total

### Per listing (8): one cover + one promotion image for each system

| File | Listing | Content |
|---|---|---|
| `mit-s1-cover.jpg` | System 1 | Kool & Kleen header strip · **SYSTEM 1** · 1 × MSY-GP10VF indoor unit + MUY-GP10VF outdoor unit · "9,000 BTU" · "Supply or Installed" callout |
| `mit-s2-cover.jpg` | System 2 | Header strip · **SYSTEM 2** · 2 indoor units stacked (MSXY-FP10VG) + MXY-2H20VF outdoor · 5-tick label · "Supply or Installed" |
| `mit-s3-cover.jpg` | System 3 | Header strip · **SYSTEM 3** · 3 indoor units stacked + MXY-3H28VG outdoor · 5-tick label · "Supply or Installed" |
| `mit-s4-cover.jpg` | System 4 | Header strip · **SYSTEM 4** · 3 small + 1 large indoor unit (FP10VG ×3, FP24VG) + MXY-4H33VG outdoor · 5-tick label · "Supply or Installed" |
| `mit-s1-promo.jpg` … `mit-s4-promo.jpg` | each | Simplified cover: product render + "Mitsubishi Starmex System N" + one benefit line. Keep text large, since it shows small in search. |

**Tick labels:** only System 2–4 are confirmed 5 ticks. Leave the tick label off System 1 until you've confirmed its rating from the unit's actual label.

**Climate Vouchers badge:** only add it once you've confirmed the exact model is on NEA's eligible list. It's an official government scheme mark, so it can't go on every cover by default.

### Shared across all four Mitsubishi listings (6)

Images 02–05 and 07 don't mention a brand, so the same files work for Daikin, Panasonic and Midea later.

| File | Slot | Content (all taken from your own installation page) |
|---|---|---|
| `shared-02-supply-only.jpg` | Item Image 1 | **Supply Only**: units delivered in original packaging · installation not included · pick Installation Included if you want us to install |
| `shared-03-installation-included.jpg` | Item Image 2 | **Installation Included** · the 5 steps (site assessment → units installed & holes sealed → insulated trunked pipe/wiring → drainage gradient → operational test) · "Covers pipe runs up to 15 m per unit" |
| `shared-04-materials.jpg` | Item Image 3 | **Materials we use**: Gauge 21 copper · ½" Kflex insulation (fire propagation certified) · 16mm drainage · 3-core cable · DNE PVC trunking · Grade 304 stainless brackets. Use real photos; `public/images/services/installation/pipe-installation.png` already exists |
| `mit-05-indoor-range.jpg` | Item Image 4 | **Starmex indoor sizes** (brand-specific, used on S2–S4): FP10VG 2.8 kW · FP13VG 3.5 kW · FP18VG 5.0 kW · FP20VG 6.0 kW · FP24VG 7.1 kW, plus "Want a different combination? Chat with us" |
| `shared-06-what-may-cost-extra.jpg` | Item Image 5 | Pipe runs over 15 m · new brackets · powerpoints · isolator switches · all quoted at site assessment before work starts · old-unit removal on request |
| `shared-07-how-to-order.jpg` | Item Image 6 | 3 steps: choose option & check out → Shopee Chat with postal code & date → date confirmed within 2 working days · HDB approvals handled |

Optional: a 10–60 s video (MP4, max 30 MB) of an actual Kool & Kleen installation. It's the first thing in Commercestar's gallery.

## Once they're made

Put the files in `public/images/shopee/mitsubishi/` (and `public/images/shopee/shared/`), deploy, and I'll add the URLs to the upload file's Cover Image and Item Image 1–6 columns. The template accepts image URLs, so you can re-upload through Mass Update with no manual uploading.
