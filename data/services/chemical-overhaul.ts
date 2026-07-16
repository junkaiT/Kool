import type { ServicePageData } from "./types";

// TODO: howItWorks is placeholder copy — replace with real step-by-step content when available.
export const chemicalOverhaul: ServicePageData = {
  slug: "chemical-overhaul",
  breadcrumbLabel: "Chemical overhaul",
  title: "Chemical Overhaul",
  heroImage: "/images/services/chemical-overhaul/hero.png",
  heroBody:
    "Our most thorough service — reserved for units that need more than a chemical wash can fix. We fully dismantle every component, chemically treat and wash each part individually, then rebuild the unit from scratch. As close to a factory reset as your aircon can get without replacing it entirely.",
  bestFor: "Best for: Severely neglected units · Persistent issues after a chemical wash · Units not serviced in over a year",
  pricing: {
    label: "Pricing",
    displayPrice: "$130",
    unit: "per unit",
    note: "Price varies by BTU — $130 to $160 per unit. WhatsApp us for an exact quote.",
  },
  whenHeading: "Why do you need a chemical overhaul?",
  whenCards: [
    {
      icon: "⚠️",
      h: "Your aircon still isn't performing after a chemical wash",
      body: "If your ΔT reading remains below 6°C after a chemical wash, the problem goes deeper than the coil surface. The blower wheel or internal components have a level of compacted buildup that chemical flushing alone can't dislodge. The only way to clean these properly is to fully dismantle the unit, treat each component individually, and reassemble it from scratch. A chemical overhaul at this stage isn't an upgrade — it's the correct fix.",
    },
    {
      icon: "🕐",
      h: "Your unit hasn't been serviced in 12 or more months",
      body: "Buildup compounds over time. A unit that's gone 12 or more months without a proper service has layers of grime, dust, and biological growth throughout its internal components — not just on the surfaces a chemical wash can reach. At this stage, dismantling the unit is the only way to clean it properly. Attempting a chemical wash first would be like mopping a floor that needs scrubbing — it addresses the surface but leaves the problem underneath.",
    },
    {
      icon: "📅",
      h: "Persistent water leaks or unusual noise",
      body: "Water leaks and noise are symptoms, not causes. The most common causes are a blocked drainage system and a dirty or unbalanced blower wheel — both of which are deep inside the unit and can only be properly inspected and cleaned during a full dismantle. A chemical overhaul addresses both at the source, rather than treating the symptom and hoping it resolves.",
    },
  ],
  included: [
    {
      h: "Wind Flow Measurement — Your Baseline",
      body: "Before we touch anything, we measure the wind flow of your unit. This tells us exactly how well your aircon is performing right now — and gives us a number to beat.",
      image: "/images/services/chemical-wash/anemometer-1.png",
    },
    {
      h: "Protective Setup",
      body: "We set up protective covers and water collection before any cleaning begins. No mess, no water damage to your walls or furniture.",
      image: "/images/services/chemical-overhaul/protection.png",
    },
    {
      h: "Full Unit Dismantle",
      body: "Every component is individually removed — front cover, blower wheel, water tray, filters, and drainage system. Nothing is flushed in place. This is what separates a chemical overhaul from every other service, and the only way to clean certain components properly.",
      image: "/images/services/chemical-overhaul/hero.png",
    },
    {
      h: "Clean Filters with Cleaning Agent",
      body: "Filters are soaked and scrubbed to remove built-up dust and bacteria.",
      image: "/images/services/chemical-wash/filter-clean.png",
    },
    {
      h: "Deep Clean Blower and Drainage Trays",
      body: "The blower wheel is removed and scrubbed. This is the component most chemical washes miss — it's deep inside the unit and covered in mould that a standard service simply can't reach.",
      image: "/images/services/chemical-wash/component-clean.png",
    },
    {
      h: "Deep Clean Fan Coil",
      body: "We apply our cleaning compound directly to the fan coil and flush it through with clean water. This breaks down mould and bacteria.",
      image: "/images/services/chemical-overhaul/fancoil-clean.png",
    },
    {
      h: "Drainage Tray & Pipe Vacuum",
      body: "The drainage tray and condensate pipe are fully flushed and vacuumed. Blocked drainage is one of the most common causes of water leaks — this step clears it completely.",
      image: "/images/services/general-servicing/drainage-flush.png",
    },
    {
      h: "Drying & Internal Wipe Down",
      body: "All internal surfaces are wiped clean and dried before reassembly. Reassembling a wet unit traps moisture and encourages mould to return faster — drying properly extends the results of the wash.",
      image: "/images/services/chemical-overhaul/dry.png",
    },
    {
      h: "Full Reassembly",
      body: "The entire unit is rebuilt from scratch — every component reattached, sealed, and inspected before testing. Not a partial reattachment — a complete rebuild.",
      image: "/images/services/chemical-overhaul/reassembly.png",
    },
    {
      h: "Final Wind Flow Measurement — Proof It Worked",
      body: "We measure wind flow output again. You see the exact improvement in black and white — before and after, every single visit. This reading goes directly into your WhatsApp report.",
      image: "/images/services/chemical-wash/anemometer-2.png",
    },
  ],
  howItWorks: [
    { h: "Booking confirmed", body: "WhatsApp us your address, unit model, and unit count for an exact quote." },
    { h: "Technician arrives & assesses", body: "ΔT reading and inspection to confirm a full overhaul is the right fix." },
    { h: "Full dismantle & rebuild", body: "Every component removed, chemically treated, washed, and reassembled from scratch." },
    { h: "WhatsApp report sent", body: "Before/after photos, ΔT results, and confirmation the unit is running as it should." },
  ],
  faqHeading: "Questions about chemical overhaul",
  faq: [
    {
      q: "What's the difference between chemical wash and chemical overhaul?",
      a: "A chemical wash flushes the coil in place. An overhaul fully dismantles the unit — blower wheel, front panel, drainage tray — and cleans every part individually. It's significantly more thorough.",
    },
    { q: "How long does it take?", a: "About 60–90 minutes per unit. Full dismantle and reassembly takes longer than any other service." },
    {
      q: "Will it make my aircon as good as new?",
      a: "In most cases yes — our ΔT reading after the overhaul will confirm performance is restored. If refrigerant or compressor issues are present, we'll advise you clearly.",
    },
    {
      q: "How is the price determined?",
      a: "By BTU rating — $130 to $160 per unit. WhatsApp us with your unit model and we'll confirm the exact price before booking.",
    },
  ],
  related: [
    {
      name: "Chemical wash",
      desc: "Best for: Poor cooling · Foul or musty odours · Unusual noise · First clean in 6+ months. From $70",
      href: "/chemical-wash",
    },
    { name: "General servicing", desc: "Best for: Regular maintenance · Rental maintenance. From $19", href: "/general-servicing" },
    { name: "KoolJet wash", desc: "High-pressure clean. From $60", href: "/kooljet" },
  ],
  ctaHeading: "Ready to book a chemical overhaul?",
  ctaBody: "WhatsApp us your address, number of units, and unit model. We'll confirm the exact price and slot within the hour.",
};
