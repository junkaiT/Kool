"""The full Mitsubishi Starmex Shopee image set as one 1080x1080 deck for Canva.

14 slides: 4 covers (the layout approved on System 4), 4 promotion images, 6 gallery pages.
Every text element is a named text box and every photo a named picture, so Canva keeps them
as separate editable layers.
"""
from pptx import Presentation
from pptx.util import Emu, Pt
from pptx.dml.color import RGBColor
from pptx.enum.text import PP_ALIGN, MSO_ANCHOR
from pptx.enum.shapes import MSO_SHAPE
from PIL import Image

PX, S = 9525, 1080
TEAL = RGBColor(0x5B, 0xAD, 0x92)
TEAL_BG = RGBColor(0xEB, 0xF7, 0xF2)
INK = RGBColor(0x11, 0x11, 0x11)
GREY = RGBColor(0x44, 0x44, 0x44)
MUTED = RGBColor(0x88, 0x88, 0x88)
BORDER = RGBColor(0xE5, 0xE5, 0xE5)
WHITE = RGBColor(0xFF, 0xFF, 0xFF)
FONT = "Arial"

COVERS = {
    1: dict(out_h=300, in_w=296, sub="Single split · 1 room · 5 Ticks", indoor=[(8, 392)]),
    2: dict(out_h=320, in_w=282, sub="Up to 2 rooms · 5 Ticks", indoor=[(8, 338), (790, 338)]),
    3: dict(out_h=350, in_w=330, sub="Up to 3 rooms · 5 Ticks", indoor=[(8, 268), (8, 452), (742, 360)]),
    4: dict(out_h=360, in_w=300, sub="Up to 4 rooms · 5 Ticks",
            indoor=[(8, 262), (8, 446), (772, 262), (772, 446)]),
}
TILES = [("tile-1.png", 349), ("tile-2.png", 546), ("tile-3.png", 753)]


def wh(path, w=None, h=None):
    iw, ih = Image.open(path).size
    return (w, round(w * ih / iw)) if w else (round(h * iw / ih), h)


def text(slide, x, y, w, h, s, size_px, *, bold=False, color=INK, align=PP_ALIGN.LEFT,
         line=None, name=None, anchor=MSO_ANCHOR.TOP):
    box = slide.shapes.add_textbox(Emu(round(x) * PX), Emu(round(y) * PX), Emu(round(w) * PX), Emu(round(h) * PX))
    tf = box.text_frame
    tf.word_wrap = True
    tf.margin_left = tf.margin_right = tf.margin_top = tf.margin_bottom = 0
    tf.vertical_anchor = anchor
    p = tf.paragraphs[0]
    p.alignment = align
    if line is not None:
        p.line_spacing = line
    run = p.add_run()
    run.text = s
    f = run.font
    f.name, f.size, f.bold, f.color.rgb = FONT, Pt(size_px * 0.75), bold, color
    if name:
        box.name = name
    return box


def picture(slide, path, x, y, w=None, h=None, name=None):
    ww, hh = wh(path, w=w, h=h)
    pic = slide.shapes.add_picture(path, Emu(round(x) * PX), Emu(round(y) * PX), Emu(ww * PX), Emu(hh * PX))
    if name:
        pic.name = name
    return pic


def shape(slide, kind, x, y, w, h, fill, *, linecol=None, name=None, radius=None):
    sh = slide.shapes.add_shape(kind, Emu(round(x) * PX), Emu(round(y) * PX), Emu(round(w) * PX), Emu(round(h) * PX))
    if radius is not None and kind == MSO_SHAPE.ROUNDED_RECTANGLE:
        sh.adjustments[0] = radius
    if fill is None:
        sh.fill.background()
    else:
        sh.fill.solid()
        sh.fill.fore_color.rgb = fill
    if linecol is None:
        sh.line.fill.background()
    else:
        sh.line.color.rgb = linecol
        sh.line.width = Pt(1)
    sh.shadow.inherit = False
    if name:
        sh.name = name
    return sh


def numbered(slide, n, x, y, d, size_px):
    circle = shape(slide, MSO_SHAPE.OVAL, x, y, d, d, TEAL, name=f"Step {n} circle")
    tf = circle.text_frame
    tf.margin_left = tf.margin_right = tf.margin_top = tf.margin_bottom = 0
    tf.vertical_anchor = MSO_ANCHOR.MIDDLE
    p = tf.paragraphs[0]
    p.alignment = PP_ALIGN.CENTER
    r = p.add_run()
    r.text = str(n)
    r.font.name, r.font.size, r.font.bold, r.font.color.rgb = FONT, Pt(size_px * 0.75), True, WHITE


def logo(slide):
    picture(slide, "kool-logo.png", 18, 14, w=178, name="Kool logo")


def page_head(slide, title, lead=None):
    logo(slide)
    text(slide, 60, 130, 960, 80, title, 58, bold=True, name="Page title")
    if lead:
        text(slide, 60, 226, 900, 90, lead, 27, color=GREY, line=1.4, name="Lead text")


prs = Presentation()
prs.slide_width = Emu(S * PX)
prs.slide_height = Emu(S * PX)
blank = prs.slide_layouts[6]
new = lambda: prs.slides.add_slide(blank)

# ---------------- covers ----------------
for n, cfg in COVERS.items():
    sl = new()
    logo(sl)
    picture(sl, "starmex-logo.png", 222, 72, w=560, name="Mitsubishi Starmex logo")
    picture(sl, f"label-s{n}.png", 820, 74, h=136, name="NEA energy label")
    ow, oh = wh(f"unit-s{n}.png", h=cfg["out_h"])
    picture(sl, f"unit-s{n}.png", (S - ow) / 2, 250 + (400 - oh) / 2, h=cfg["out_h"], name="Outdoor unit")
    for i, (x, y) in enumerate(cfg["indoor"], 1):
        picture(sl, "mit-indoor-gp.png" if n == 1 else "mit-indoor-fp.png", x, y, w=cfg["in_w"],
                name=f"Indoor unit {i}")
    text(sl, 0, 668, S, 110, f"System {n}", 86, bold=True, align=PP_ALIGN.CENTER, name="System title")
    text(sl, 0, 786, S, 40, cfg["sub"], 30, color=GREY, align=PP_ALIGN.CENTER, name="Subtitle")
    text(sl, 30, 888, 300, 140, "Free Upgrade To Premium Materials", 34, bold=True, color=TEAL,
         line=1.3, name="Free upgrade heading")
    for i, (tile, x) in enumerate(TILES, 1):
        picture(sl, tile, x, 861, h=185, name=f"Material tile {i}")

# ---------------- promotion images ----------------
for n, cfg in COVERS.items():
    sl = new()
    picture(sl, "starmex-logo.png", 260, 70, w=560, name="Mitsubishi Starmex logo")
    ow, oh = wh(f"unit-s{n}.png", h=330)
    picture(sl, f"unit-s{n}.png", (S - ow) / 2, 250, h=330, name="Outdoor unit")
    picture(sl, "mit-indoor-gp.png" if n == 1 else "mit-indoor-fp.png", 40, 300, w=300, name="Indoor unit")
    picture(sl, f"label-s{n}.png", 856, 268, h=150, name="NEA energy label")
    text(sl, 0, 630, S, 130, f"System {n}", 104, bold=True, align=PP_ALIGN.CENTER, name="System title")
    pill = shape(sl, MSO_SHAPE.ROUNDED_RECTANGLE, 300, 780, 480, 72, TEAL, name="Ticks pill", radius=0.5)
    tf = pill.text_frame
    tf.margin_left = tf.margin_right = 0
    tf.vertical_anchor = MSO_ANCHOR.MIDDLE
    p = tf.paragraphs[0]
    p.alignment = PP_ALIGN.CENTER
    r = p.add_run()
    r.text = "5 Ticks · R32 Inverter"
    r.font.name, r.font.size, r.font.bold, r.font.color.rgb = FONT, Pt(24), True, WHITE
    picture(sl, "kool-logo.png", (S - 220) / 2, 900, w=220, name="Kool logo")

# ---------------- gallery: supply only ----------------
sl = new()
page_head(sl, "Supply Only",
          "Indoor and outdoor units delivered to your home in original manufacturer packaging.")
rows = [("Delivered in original packaging", "Mainland Singapore delivery"),
        ("Installation not included", "Choose this if you already have an installer"),
        ("Want us to install?", "Select Installation Included instead")]
for i, (head, detail) in enumerate(rows):
    y = 380 + i * 150
    shape(sl, MSO_SHAPE.ROUNDED_RECTANGLE, 60, y, 86, 86, TEAL_BG, name=f"Icon tile {i + 1}", radius=0.18)
    text(sl, 176, y + 6, 840, 50, head, 36, bold=True, name=f"Point {i + 1} title")
    text(sl, 176, y + 56, 840, 40, detail, 25, color=GREY, name=f"Point {i + 1} detail")
picture(sl, "unit-s3.png", 700, 840, h=180, name="Outdoor unit")

# ---------------- gallery: installation included ----------------
sl = new()
page_head(sl, "Installation Included")
picture(sl, "install-hero-band.jpg", 60, 226, w=960, name="Installation photo")
steps = ["Site assessment: right capacity and placement for each room",
         "Units installed and positioned, cored holes sealed",
         "Insulated pipes and wiring, neatly trunked",
         "Drainage set at the correct gradient",
         "Full operational test before we leave"]
for i, stext in enumerate(steps, 1):
    y = 560 + (i - 1) * 78
    numbered(sl, i, 60, y, 56, 26)
    text(sl, 140, y + 12, 880, 44, stext, 27, name=f"Step {i} text")
text(sl, 60, 968, 960, 40, "Covers pipe runs up to 15 m per unit.", 24, color=GREY, name="Pipe note")

# ---------------- gallery: materials ----------------
sl = new()
page_head(sl, "We only use high quality materials")
for i, (tile, _) in enumerate(TILES, 1):
    picture(sl, tile, 60 + (i - 1) * 330, 250, h=300, name=f"Material tile {i}")
more = [("16mm drainage pipe", ""), ("DNE PVC trunking", ""),
        ("Grade 304 stainless brackets", "Rust-resistant in Singapore's humidity")]
for i, (head, detail) in enumerate(more):
    y = 620 + i * 116
    shape(sl, MSO_SHAPE.RECTANGLE, 60, y, 960, 2, BORDER, name=f"Divider {i + 1}")
    text(sl, 60, y + 22, 960, 44, head, 32, bold=True, name=f"Material {i + 4}")
    if detail:
        text(sl, 60, y + 68, 960, 36, detail, 23, color=GREY, name=f"Material {i + 4} detail")

# ---------------- gallery: indoor sizes ----------------
sl = new()
page_head(sl, "Starmex indoor sizes", "Mix sizes to suit each room.")
picture(sl, "mit-indoor-fp.png", 620, 216, w=420, name="Indoor unit")
cols = [("MODEL", 60), ("CAPACITY", 520), ("SIZE", 760)]
for label, x in cols:
    text(sl, x, 400, 200, 30, label, 18, bold=True, color=MUTED, name=f"Header {label.title()}")
sizes = [("MSXY-FP10VG", "2.8 kW", "9,000 BTU"), ("MSXY-FP13VG", "3.5 kW", "12,000 BTU"),
         ("MSXY-FP18VG", "5.0 kW", "18,000 BTU"), ("MSXY-FP20VG", "6.0 kW", "20,000 BTU"),
         ("MSXY-FP24VG", "7.1 kW", "24,000 BTU")]
for i, (m, kw, btu) in enumerate(sizes):
    y = 446 + i * 96
    shape(sl, MSO_SHAPE.RECTANGLE, 60, y, 960, 2, BORDER, name=f"Row divider {i + 1}")
    text(sl, 60, y + 24, 440, 44, m, 32, bold=True, name=f"Model {i + 1}")
    text(sl, 520, y + 26, 220, 44, kw, 30, color=GREY, name=f"Capacity {i + 1}")
    text(sl, 760, y + 26, 300, 44, btu, 30, color=GREY, name=f"Size {i + 1}")
text(sl, 60, 968, 960, 40, "Want a different combination? Ask us on Shopee Chat.", 24, color=GREY,
     name="Combination note")

# ---------------- gallery: what may cost extra ----------------
sl = new()
page_head(sl, "What may cost extra",
          "Our price covers pipe runs up to 15 m per unit. The items below are identified at the site "
          "assessment and quoted before any work begins.")
for i, item in enumerate(["Pipe runs longer than 15 m per unit", "New brackets", "Powerpoints",
                          "Isolator switches"]):
    y = 400 + i * 104
    shape(sl, MSO_SHAPE.OVAL, 60, y + 16, 18, 18, TEAL, name=f"Bullet {i + 1}")
    text(sl, 104, y, 900, 50, item, 34, bold=True, name=f"Extra {i + 1}")
shape(sl, MSO_SHAPE.ROUNDED_RECTANGLE, 60, 848, 960, 120, TEAL_BG, name="Disposal note card", radius=0.12)
text(sl, 96, 884, 890, 80, "Replacing an old unit? Removal and disposal can be arranged in the same visit.",
     27, line=1.3, name="Disposal note")

# ---------------- gallery: how to order ----------------
sl = new()
page_head(sl, "How to order")
order = [("Choose your option", "Supply Only or Installation Included, then check out"),
         ("Message us on Shopee Chat", "Send your postal code and preferred date"),
         ("We confirm your date", "Within 2 working days")]
for i, (head, detail) in enumerate(order, 1):
    y = 300 + (i - 1) * 180
    numbered(sl, i, 60, y, 92, 42)
    text(sl, 190, y + 8, 830, 60, head, 42, bold=True, name=f"Order step {i}")
    text(sl, 190, y + 66, 830, 44, detail, 27, color=GREY, name=f"Order detail {i}")
text(sl, 60, 900, 960, 100, "For HDB installations, we manage the approval process where required.",
     26, color=GREY, line=1.35, name="HDB note")

prs.save("kool-shopee-mitsubishi-listing-pack.pptx")
print("wrote kool-shopee-mitsubishi-listing-pack.pptx —", len(prs.slides._sldIdLst), "slides")
