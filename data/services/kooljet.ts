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
      icon: "🔧",
      h: "Full protective cover setup",
      body: "Your unit and surrounding area are fully covered before any water is used. No mess, no water damage to your walls or furniture.",
    },
    {
      icon: "💧",
      h: "Jet wash of filters, coils, blower, and drainage tray",
      body: "Every internal component flushed with water — reaching compacted dirt and grime that hand cleaning cannot dislodge.",
    },
    { icon: "💨", h: "Dirty water collection", body: "All dirty water flushed out and collected and properly disposed." },
    { icon: "⚡", h: "Full reassembly and operational test", body: "Unit reassembled, tested, and confirmed cold before we leave." },
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
