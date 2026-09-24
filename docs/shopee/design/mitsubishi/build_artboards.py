"""Writes the Shopee image artboards (.dc.html) and canvas.json for the Mitsubishi Starmex batch.

Brand tokens are lifted from app/globals.css and components/Logo.tsx:
teal #5bad92, teal-bg #ebf7f2, blue #4a90e2 (KooL wordmark), black #111111, grey #555555,
muted #888888, border #e5e5e5, bg #f8f8f8; Inter; extrabold headings with slight negative tracking.
Product photos: Mitsubishi Electric Singapore Starmex R32 product pages (official images).
"""
import json
from PIL import Image

HEAD = """<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <script src="./support.js"></script>
</head>
<body>
<x-dc>
<helmet>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&amp;display=swap">
  <style>
    body { margin: 0; background: #f8f8f8; font-family: Inter, Arial, Helvetica, sans-serif; color: #111111; }
    * { box-sizing: border-box; }
    a { color: #5bad92; } a:hover { color: #4a90e2; }
  </style>
</helmet>
"""
TAIL = """
</x-dc>
</body>
</html>
"""

LEAF = """<svg width="54" height="54" viewBox="0 0 30 30" fill="none">
        <path d="M5 22 Q4 15 9 10 Q11 8 15 9 Q10 14 10 19 Q10 23 12 24 Q8 25 5 22Z" fill="#5BAD92" opacity="0.9"></path>
        <path d="M9 26 Q7 18 13 12 Q15 10 19 11 Q14 17 14 22 Q14 26 17 27 Q12 28 9 26Z" fill="#5BAD92" opacity="0.65"></path>
        <path d="M14 28 Q12 20 18 14 Q20 12 24 13 Q19 19 19 24 Q19 28 22 29 Q17 30 14 28Z" fill="#5BAD92" opacity="0.4"></path>
      </svg>"""

HEADER = """  <div style="height: 132px; flex-shrink: 0; background: #ffffff; border-bottom: 1px solid #e5e5e5; display: flex; align-items: center; justify-content: space-between; padding: 0 48px;">
    <img src="kool-logo.webp" alt="KooL - Cool Air, Cool Life" style="width: 199px; height: 84px;">
    <div style="font-size: 21px; font-weight: 600; color: #555555;">Kool &amp; Kleen Aircon Servicing</div>
  </div>
"""


def bar(left, right="HDB · Condo · Landed"):
    return f"""  <div style="height: 92px; flex-shrink: 0; background: #5bad92; display: flex; align-items: center; justify-content: space-between; padding: 0 48px; color: #ffffff;">
    <div style="font-size: 27px; font-weight: 700; letter-spacing: -0.2px;">{left}</div>
    <div style="font-size: 21px; font-weight: 500;">{right}</div>
  </div>
"""


def frame(inner, bg="#f8f8f8"):
    return (HEAD + f"""<div style="position: relative; width: 1024px; height: 1024px; overflow: hidden; background: {bg}; display: flex; flex-direction: column;">
""" + inner + "</div>" + TAIL)


def size(img, w=None, h=None):
    iw, ih = Image.open(img).size
    if w is not None:
        return round(w), round(w * ih / iw)
    return round(h * iw / ih), round(h)


SHADOW = "filter: drop-shadow(0 12px 18px rgba(17, 17, 17, 0.14));"

SYSTEMS = {
    1: dict(indoor="mit-indoor-gp.webp", outdoor="mit-outdoor-s1.webp", out_h=236, in_w=520, step=0, shift=0,
            sub="Single split · 1 room · 5 Ticks", models="MUY-GP10VF + MSY-GP10VF"),
    2: dict(indoor="mit-indoor-fp.webp", outdoor="mit-outdoor-s2.webp", out_h=244, in_w=460, step=118, shift=28,
            sub="Up to 2 rooms · 5 Ticks", models="MXY-2H20VF + 2 × MSXY-FP10VG"),
    3: dict(indoor="mit-indoor-fp.webp", outdoor="mit-outdoor-s3.webp", out_h=276, in_w=476, step=104, shift=24,
            sub="Up to 3 rooms · 5 Ticks", models="MXY-3H28VG + 3 × MSXY-FP10VG"),
    4: dict(indoor="mit-indoor-fp.webp", outdoor="mit-outdoor-s4.webp", out_h=290, in_w=400, step=84, shift=20,
            sub="Up to 4 rooms · 5 Ticks", models="MXY-4H33VG + 3 × MSXY-FP10VG + 1 × MSXY-FP24VG"),
}


def indoor_stack(n, s, top, left):
    parts = []
    for i in range(n):
        w = s["in_w"]
        if n == 4 and i == 3:  # the 24K unit is ~15% wider (923 vs 799 mm)
            w = round(w * 1.155)
        w, h = size(s["indoor"], w=w)
        parts.append(f'    <img src="{s["indoor"]}" alt="Mitsubishi Electric indoor unit" '
                     f'style="position: absolute; left: {left + i * s["shift"]}px; top: {top + i * s["step"]}px; width: {w}px; height: {h}px; {SHADOW}">')
    return "\n".join(parts)


TRUST_CARD = """    <div style="position: absolute; right: 44px; top: 44px; width: 392px; background: #ffffff; border: 1px solid #e5e5e5; border-radius: 14px; padding: 20px; display: flex; flex-direction: column; gap: 14px;">
      <img src="install-pipes.jpg" alt="Insulated copper pipe run installed by our technicians" style="width: 350px; height: 150px; object-fit: cover; border-radius: 8px;">
      <div style="font-size: 26px; font-weight: 800; letter-spacing: -0.3px; line-height: 1.15; color: #111111;">We only use high quality materials</div>
      <div style="display: flex; flex-direction: column; gap: 11px;">
        <div style="display: flex; align-items: center; gap: 9px;">
          <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#5bad92" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12.5l5 5L20 6.5"></path></svg>
          <div style="font-size: 21px; font-weight: 600; color: #111111;">22g copper pipes</div>
        </div>
        <div style="display: flex; align-items: center; gap: 9px;">
          <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#5bad92" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12.5l5 5L20 6.5"></path></svg>
          <div style="font-size: 21px; font-weight: 600; color: #111111;">K-Flex Titan</div>
        </div>
        <div style="display: flex; align-items: center; gap: 9px;">
          <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#5bad92" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12.5l5 5L20 6.5"></path></svg>
          <div style="font-size: 21px; font-weight: 600; color: #111111;">Keystone branded cables</div>
        </div>
      </div>
    </div>
"""


def cover(n):
    s = SYSTEMS[n]
    ow, oh = size(s["outdoor"], h=s["out_h"])
    lw, lh = size("starmex-logo.webp", w=520)
    kw, kh = size("kool-logo.webp", w=200)
    inner = f"""  <div style="position: relative; flex-grow: 1;">
    <img src="starmex-logo.webp" alt="Mitsubishi Electric Starmex" style="position: absolute; left: 52px; top: 44px; width: {lw}px; height: {lh}px;">
    <div style="position: absolute; left: 50px; top: 212px; font-size: 120px; font-weight: 800; line-height: 1; letter-spacing: -3px; color: #111111;">System {n}</div>
    <div style="position: absolute; left: 54px; top: 348px; font-size: 26px; font-weight: 500; color: #555555;">{s["sub"]}</div>
{TRUST_CARD}    <div style="position: absolute; left: 52px; bottom: 26px; display: flex; flex-direction: column; gap: 6px;">
      <img src="kool-logo.webp" alt="KooL - Cool Air, Cool Life" style="width: {kw}px; height: {kh}px;">
      <div style="font-size: 18px; font-weight: 600; color: #555555;">Kool &amp; Kleen Aircon</div>
    </div>
{indoor_stack(n, s, 452, 48)}
    <img src="{s["outdoor"]}" alt="Mitsubishi Electric outdoor unit with NEA energy label" style="position: absolute; right: 44px; bottom: 24px; width: {ow}px; height: {oh}px; {SHADOW}">
  </div>
"""
    return frame(inner, bg="#ffffff")


def promo(n):
    s = dict(SYSTEMS[n])
    ow, oh = size(s["outdoor"], h=round(s["out_h"] * 1.18))
    s["in_w"] = round(s["in_w"] * 1.0)
    inner = f"""  <div style="position: relative; flex-grow: 1;">
    <div style="position: absolute; left: 64px; top: 64px; font-size: 40px; font-weight: 700; letter-spacing: -0.4px; color: #111111;">Mitsubishi Electric Starmex</div>
    <div style="position: absolute; left: 58px; top: 112px; font-size: 176px; font-weight: 800; line-height: 1; letter-spacing: -5px; color: #111111;">System {n}</div>
    <div style="position: absolute; left: 64px; top: 312px; display: flex; gap: 12px;">
      <div style="background: #5bad92; color: #ffffff; font-size: 30px; font-weight: 700; padding: 12px 24px; border-radius: 999px;">5 Ticks</div>
      <div style="background: #ffffff; color: #111111; font-size: 30px; font-weight: 600; padding: 12px 24px; border-radius: 999px; border: 1px solid #e5e5e5;">R32 Inverter</div>
    </div>
{indoor_stack(n, s, 420, 1024 - 44 - s["in_w"] - (n - 1) * s["shift"] - (round(s["in_w"] * 0.155) if n == 4 else 0))}
    <img src="{s["outdoor"]}" alt="Mitsubishi Electric outdoor unit with NEA energy label" style="position: absolute; left: 44px; top: {1024 - 64 - oh}px; width: {ow}px; height: {oh}px; {SHADOW}">
    <img src="kool-logo.webp" alt="KooL - Cool Air, Cool Life" style="position: absolute; right: 48px; bottom: 34px; width: 232px; height: 98px;">
  </div>
"""
    return frame(inner, bg="#ffffff")


def page(title, body, bar_left, bar_right="HDB · Condo · Landed"):
    inner = HEADER + f"""  <div style="flex-grow: 1; display: flex; flex-direction: column; padding: 44px 56px 0 56px; gap: 28px;">
    <div style="font-size: 64px; font-weight: 800; line-height: 1.05; letter-spacing: -1.2px; color: #111111;">{title}</div>
{body}
  </div>
""" + bar(bar_left, bar_right)
    return frame(inner)


def icon(path_d):
    return (f'<div style="width: 76px; height: 76px; flex-shrink: 0; border-radius: 16px; background: #ebf7f2; display: flex; align-items: center; justify-content: center;">'
            f'<svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#5bad92" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">{path_d}</svg></div>')


ICON_BOX = '<path d="M21 8l-9-5-9 5 9 5 9-5z"></path><path d="M3 8v8l9 5 9-5V8"></path><path d="M12 13v8"></path>'
ICON_NO = '<circle cx="12" cy="12" r="9"></circle><path d="M5.6 5.6l12.8 12.8"></path>'
ICON_ARROW = '<path d="M5 12h14"></path><path d="M13 6l6 6-6 6"></path>'


def feature_row(icon_d, head, detail):
    return f"""    <div style="display: flex; align-items: center; gap: 28px;">
      {icon(icon_d)}
      <div style="display: flex; flex-direction: column; gap: 6px;">
        <div style="font-size: 34px; font-weight: 700; letter-spacing: -0.4px; color: #111111;">{head}</div>
        <div style="font-size: 24px; font-weight: 400; color: #555555;">{detail}</div>
      </div>
    </div>"""


def step_row(num, head, detail=None, circle=48, head_size=27):
    det = f'\n        <div style="font-size: 22px; color: #555555;">{detail}</div>' if detail else ""
    return f"""    <div style="display: flex; align-items: center; gap: 22px;">
      <div style="width: {circle}px; height: {circle}px; flex-shrink: 0; border-radius: 999px; background: #5bad92; color: #ffffff; display: flex; align-items: center; justify-content: center; font-size: {round(circle * 0.46)}px; font-weight: 700;">{num}</div>
      <div style="display: flex; flex-direction: column; gap: 4px;">
        <div style="font-size: {head_size}px; font-weight: 600; color: #111111;">{head}</div>{det}
      </div>
    </div>"""


supply_only = page(
    "Supply Only",
    """    <div style="font-size: 28px; line-height: 1.45; color: #555555; max-width: 860px;">Indoor and outdoor units delivered to your home in original manufacturer packaging.</div>
    <div style="display: flex; flex-direction: column; gap: 44px; margin-top: 24px;">
""" + "\n".join([
        feature_row(ICON_BOX, "Delivered in original packaging", "Mainland Singapore delivery"),
        feature_row(ICON_NO, "Installation not included", "Choose this if you already have an installer"),
        feature_row(ICON_ARROW, "Want us to install?", "Select Installation Included instead"),
    ]) + "\n    </div>",
    "Supply only, or installed by our own technicians",
)

installation_included = page(
    "Installation Included",
    """    <img src="install-hero.jpg" alt="Kool &amp; Kleen technician installing an outdoor unit" style="width: 912px; height: 272px; object-fit: cover; border-radius: 12px; margin-top: -6px;">
    <div style="display: flex; flex-direction: column; gap: 16px;">
""" + "\n".join([
        step_row(1, "Site assessment: right capacity and placement for each room"),
        step_row(2, "Units installed and positioned, cored holes sealed"),
        step_row(3, "Insulated pipes and wiring, neatly trunked"),
        step_row(4, "Drainage set at the correct gradient"),
        step_row(5, "Full operational test before we leave"),
    ]) + "\n    </div>",
    "Covers pipe runs up to 15 m per unit",
)

materials_items = [
    ("22g copper pipe", "Full OEM compliance, individually insulated"),
    ("K-Flex Titan", "Fire propagation certified"),
    ("16mm drainage pipe", ""),
    ("Keystone branded cables", "3-core, appropriately rated"),
    ("DNE PVC trunking", ""),
    ("Grade 304 stainless brackets", ""),
]
materials_cells = "\n".join(
    f"""      <div style="border-top: 2px solid #5bad92; padding-top: 14px; display: flex; flex-direction: column; gap: 6px;">
        <div style="font-size: 28px; font-weight: 700; letter-spacing: -0.3px; color: #111111;">{h}</div>""" +
    (f'\n        <div style="font-size: 21px; color: #555555;">{d}</div>' if d else "") +
    "\n      </div>" for h, d in materials_items)
materials = page(
    "Materials we use",
    """    <img src="install-pipes.jpg" alt="Kool &amp; Kleen technicians running insulated pipes" style="width: 912px; height: 300px; object-fit: cover; border-radius: 12px; margin-top: -6px;">
    <div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 26px 40px;">
""" + materials_cells + "\n    </div>",
    "Installed by our own technicians",
)

fw, fh = size("mit-indoor-fp.webp", w=520)
sizes_rows = [("MSXY-FP10VG", "2.8 kW", "9,000 BTU"), ("MSXY-FP13VG", "3.5 kW", "12,000 BTU"),
              ("MSXY-FP18VG", "5.0 kW", "18,000 BTU"), ("MSXY-FP20VG", "6.0 kW", "20,000 BTU"),
              ("MSXY-FP24VG", "7.1 kW", "24,000 BTU")]
sizes_table = "\n".join(
    f"""      <div style="display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); padding: 17px 0; border-top: 1px solid #e5e5e5; font-size: 28px;">
        <div style="font-weight: 700; color: #111111;">{m}</div>
        <div style="color: #555555;">{kw}</div>
        <div style="color: #555555;">{btu} class</div>
      </div>""" for m, kw, btu in sizes_rows)
indoor_sizes = page(
    "Starmex indoor sizes",
    f"""    <div style="display: flex; align-items: center; justify-content: space-between; margin-top: -8px;">
      <div style="font-size: 28px; color: #555555;">Mix sizes to suit each room.</div>
      <img src="mit-indoor-fp.webp" alt="Mitsubishi Electric Starmex indoor unit" style="width: {fw}px; height: {fh}px; {SHADOW}">
    </div>
    <div style="display: flex; flex-direction: column;">
      <div style="display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); padding-bottom: 10px; font-size: 16px; font-weight: 600; letter-spacing: 1.4px; color: #888888;">
        <div>MODEL</div><div>CAPACITY</div><div>SIZE</div>
      </div>
{sizes_table}
    </div>""",
    "Want a different combination? Ask us on Shopee Chat",
    "",
)

extra_items = ["Pipe runs longer than 15 m per unit", "New brackets", "Powerpoints", "Isolator switches"]
extra_rows = "\n".join(
    f"""      <div style="display: flex; align-items: center; gap: 20px; padding: 20px 0; border-top: 1px solid #e5e5e5;">
        <div style="width: 14px; height: 14px; border-radius: 999px; background: #5bad92; flex-shrink: 0;"></div>
        <div style="font-size: 32px; font-weight: 600; color: #111111;">{t}</div>
      </div>""" for t in extra_items)
cost_extra = page(
    "What may cost extra",
    f"""    <div style="font-size: 28px; line-height: 1.45; color: #555555; max-width: 880px;">Our price covers pipe runs up to 15 m per unit. The items below are identified at the site assessment and quoted before any work begins.</div>
    <div style="display: flex; flex-direction: column;">
{extra_rows}
    </div>
    <div style="background: #ebf7f2; border-radius: 12px; padding: 24px 28px; font-size: 26px; line-height: 1.4; color: #111111;">Replacing an old unit? Removal and disposal can be arranged in the same visit.</div>""",
    "No surprises on the day",
)

how_to_order = page(
    "How to order",
    """    <div style="display: flex; flex-direction: column; gap: 48px; margin-top: 20px;">
""" + "\n".join([
        step_row(1, "Choose your option", "Supply Only or Installation Included, then check out", circle=76, head_size=38),
        step_row(2, "Message us on Shopee Chat", "Send your postal code and preferred date", circle=76, head_size=38),
        step_row(3, "We confirm your date", "Within 2 working days", circle=76, head_size=38),
    ]) + """
    </div>
    <div style="font-size: 24px; line-height: 1.45; color: #555555; margin-top: 28px;">For HDB installations, we manage the approval process where required.</div>""",
    "Kool &amp; Kleen Aircon Servicing",
)

files = {
    "CoverS1.dc.html": cover(1), "Main.dc.html": cover(2), "CoverS3.dc.html": cover(3), "CoverS4.dc.html": cover(4),
    "PromoS1.dc.html": promo(1), "PromoS2.dc.html": promo(2), "PromoS3.dc.html": promo(3), "PromoS4.dc.html": promo(4),
    "SupplyOnly.dc.html": supply_only, "InstallationIncluded.dc.html": installation_included,
    "Materials.dc.html": materials, "IndoorSizes.dc.html": indoor_sizes,
    "CostExtra.dc.html": cost_extra, "HowToOrder.dc.html": how_to_order,
}
titles = {
    "CoverS1.dc.html": "mit-s1-cover", "Main.dc.html": "mit-s2-cover", "CoverS3.dc.html": "mit-s3-cover", "CoverS4.dc.html": "mit-s4-cover",
    "PromoS1.dc.html": "mit-s1-promo", "PromoS2.dc.html": "mit-s2-promo", "PromoS3.dc.html": "mit-s3-promo", "PromoS4.dc.html": "mit-s4-promo",
    "SupplyOnly.dc.html": "shared-02-supply-only", "InstallationIncluded.dc.html": "shared-03-installation-included",
    "Materials.dc.html": "shared-04-materials", "IndoorSizes.dc.html": "mit-05-indoor-range",
    "CostExtra.dc.html": "shared-06-what-may-cost-extra", "HowToOrder.dc.html": "shared-07-how-to-order",
}
for name, src in files.items():
    open(name, "w", encoding="utf-8").write(src)

rows = [["CoverS1.dc.html", "Main.dc.html", "CoverS3.dc.html", "CoverS4.dc.html"],
        ["PromoS1.dc.html", "PromoS2.dc.html", "PromoS3.dc.html", "PromoS4.dc.html"],
        ["SupplyOnly.dc.html", "InstallationIncluded.dc.html", "Materials.dc.html",
         "IndoorSizes.dc.html", "CostExtra.dc.html", "HowToOrder.dc.html"]]
artboards = []
for r, row in enumerate(rows):
    for c, f in enumerate(row):
        artboards.append({"file": f, "x": c * 1124, "y": r * 1184, "w": 1024, "h": 1024, "title": titles[f]})
canvas = {
    "artboards": artboards,
    "annotations": [{"id": "export-note", "x": 0, "y": -230, "w": 900,
                     "text": "Shopee images for Mitsubishi Starmex. Row 1: covers (one per listing). Row 2: promotion images. Row 3: gallery pages shared across all four listings.\nExport each as PNG; the artboard name is the file name in the image list."}],
    "launch": {"view": "canvas"},
}
json.dump(canvas, open("canvas.json", "w", encoding="utf-8"), indent=2)
print("wrote", len(files), "artboards")
