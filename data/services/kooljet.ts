import type { ServicePageData } from "./types";

// TODO: howItWorks is placeholder copy — replace with real step-by-step content when available.
export const kooljet: ServicePageData = {
  slug: "kooljet",
  breadcrumbLabel: "KoolJet wash",
  title: "KoolJet Wash",
  heroBody:
    "A significant step up from a general servicing, without the full dismantle of a chemical wash. We remove the cover, drainage tray, and blower wheel, then use a high-pressure water jet to blast out dirt, dust, and debris that hand cleaning simply cannot reach — including compacted grime on the evaporator coil and drainage pipe. The result is noticeably cleaner airflow and improved cooling, done efficiently in a single visit.",
  bestFor:
    "Best for: Poor cooling · Foul or musty odours · Unusual noise · First clean in 6+ months · Post-renovation dust buildup · Customers who want more than a standard service without a chemical wash",
  pricing: {
    label: "Pricing",
    displayPrice: "$60",
    unit: "per unit",
    note: "Flat rate. No price variation by BTU.",
  },
  whenHeading: "Why do you need a KoolJet wash?",
  whenCards: [
    {
      icon: "⚠️",
      h: "It removes what hand cleaning leaves behind",
      body: "A technician's brush and vacuum are effective on accessible surfaces. But compacted grime on the evaporator coil fins and debris lodged deep in the drainage pipe require more than contact cleaning to shift. High-pressure water jets dislodge this buildup completely, leaving the internal components of your unit in a genuinely cleaner state than hand cleaning achieves.",
    },
    {
      icon: "🕐",
      h: "It delivers a deeper clean without the full process of a chemical wash",
      body: "A chemical wash involves removing and chemically treating internal components — the right solution when there's a specific underlying problem. A KoolJet wash delivers a significantly deeper clean than a general service, without requiring that level of intervention. For households that want more than standard maintenance, it's the most efficient way to get there.",
    },
    {
      icon: "📅",
      h: "It keeps your aircon performing at its best between major services",
      body: "Done every 3 months in place of a standard general service, a KoolJet wash prevents the gradual buildup that accumulates visit after visit. The result is consistently better airflow, more efficient cooling, and a unit that's genuinely clean throughout — not just on the surface.",
    },
  ],
  included: [
    {
      h: "Wind Flow Measurement — Your Baseline",
      body: "Before we touch anything, we measure the wind flow of your unit. This tells us exactly how well your aircon is performing right now — and gives us a number to beat.",
      image: "/images/services/general-servicing/anemometer-1.png",
    },
    {
      h: "Protective Setup",
      body: "We set up a protective cover around your unit and place a collection bag to catch all the dirty water. Nothing drips down your wall or pools on your floor.",
    },
    {
      h: "Jetwash — Filters & Panels",
      body: "Filters and panels are jetwashed clean — removing built-up dust and debris that vacuuming alone cannot dislodge.",
    },
    {
      h: "Jetwash — Blower & Drainage Trays",
      body: "The blower wheel and drainage tray are jetwashed individually, reaching compacted grime that hand cleaning and standard servicing physically cannot shift.",
    },
    {
      h: "Jetwash — Fan Coil",
      body: "We jetwash the fan coil fins directly, flushing out compacted dirt and debris from deep inside. The result is noticeably cleaner airflow and improved cooling.",
    },
    {
      h: "Drainage Tray & Pipe Vacuum",
      body: "The drainage tray and condensate pipe are fully flushed and vacuumed. Blocked drainage is one of the most common causes of water leaks — this step clears it completely.",
    },
    {
      h: "Drying & Internal Wipe Down",
      body: "All internal surfaces are wiped clean and dried before reassembly. Drying properly before putting the unit back together prevents moisture from being trapped inside.",
    },
    {
      h: "Final Wind Flow Measurement — Proof It Worked",
      body: "We measure wind flow output again. You see the exact improvement in black and white — before and after, every single visit. This reading goes directly into your WhatsApp report.",
      image: "/images/services/general-servicing/anemometer-2.png",
    },
  ],
  howItWorks: [
    { h: "Booking confirmed", body: "WhatsApp us your address and number of units — we'll confirm a slot within the hour." },
    { h: "Technician arrives & sets up", body: "Protective covers placed around the unit and surrounding area before any water is used." },
    { h: "High-pressure jet wash performed", body: "Filters, coils, blower and drainage tray flushed clean, then reassembled." },
    { h: "WhatsApp report sent", body: "Before/after photos and ΔT results sent shortly after the visit." },
  ],
  faqHeading: "Questions about kooljet wash",
  faq: [
    {
      q: "What's the difference between KoolJet and a chemical wash?",
      a: "A KoolJet wash uses high-pressure water to blast out dirt and debris. A chemical wash uses bio-enzyme solution to break down mould and bacteria at a biological level. If your issue is compacted dirt and reduced airflow, a KoolJet wash is the right fix. If your issue is mould, persistent odours, or bacteria buildup, a chemical wash addresses the root cause more effectively. Not sure which you need? WhatsApp us and we'll advise honestly.",
    },
    {
      q: "What's the difference between a KoolJet wash and a general service?",
      a: "Both service the indoor unit, but the method is fundamentally different. A general service cleans by hand — brushes, vacuums, and wipes on accessible surfaces. A KoolJet wash uses water jets to flush out compacted dirt and grime that hand cleaning physically cannot reach, particularly on the evaporator coil fins, blower wheel, and drainage pipe. Same unit, significantly deeper clean.",
    },
    {
      q: "How long does it take?",
      a: "Approximately 45 to 60 minutes per unit, including setup, protective covering, the wash itself, drainage pipe vacuum, reassembly, and our post-service ΔT check.",
    },
    {
      q: "Will it make a mess in my home?",
      a: "No. Before any water is used, your unit and the surrounding area are fully covered with a protective jacket that collects all dirty water as it's flushed out. Nothing runs down your wall or pools on your floor. We also clean up the surrounding area completely before we leave.",
    },
  ],
  related: [
    {
      name: "Chemical wash",
      desc: "Best for: Poor cooling · Foul or musty odours · Unusual noise · First clean in 6+ months. From $70",
      href: "/chemical-wash",
    },
    { name: "General servicing", desc: "Best for: Regular maintenance · Rental maintenance. From $19", href: "/general-servicing" },
    {
      name: "Chemical overhaul",
      desc: "Best for: Severely neglected units · Persistent issues after a chemical wash · Units not serviced in over a year. From $130",
      href: "/chemical-overhaul",
    },
  ],
  ctaHeading: "Ready to book a KoolJet wash?",
  ctaBody: "WhatsApp us your address and number of outdoor units. We'll confirm your slot within the hour.",
};
