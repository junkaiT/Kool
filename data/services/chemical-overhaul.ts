import type { ServicePageData } from "./types";

// TODO: howItWorks is placeholder copy — replace with real step-by-step content when available.
export const chemicalOverhaul: ServicePageData = {
  slug: "chemical-overhaul",
  breadcrumbLabel: "Chemical overhaul",
  title: "Chemical Overhaul",
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
      icon: "🔧",
      h: "Full dismantle of fan coil unit",
      body: "Every component is removed individually — not just flushed in place. This is what separates a chemical overhaul from every other service.",
    },
    {
      icon: "💧",
      h: "Deep clean and scrub blower wheel",
      body: "The blower wheel is the hardest component to clean without a full dismantle. Removed, scrubbed, and cleaned thoroughly — impossible to do properly any other way.",
    },
    {
      icon: "💨",
      h: "Chemical treatment of air filters and evaporators",
      body: "Filters are soaked and treated with our certified bio-enzyme solution, removing buildup that vacuuming alone cannot shift.",
    },
    { icon: "⚡", h: "Clean and wash water tray", body: "Removed, cleaned, and flushed individually before reassembly." },
    {
      icon: "💧",
      h: "Thorough water wash of all components",
      body: "Every part washed thoroughly with clean water after chemical treatment, ensuring no residue remains before the unit is rebuilt.",
    },
    { icon: "🧹", h: "Wipe clean all parts and components", body: "Every component wiped down individually before reassembly." },
    { icon: "🔩", h: "Full reassembly", body: "The entire unit rebuilt from scratch and inspected before testing." },
    {
      icon: "⚡",
      h: "Electrical check and outdoor unit inspection",
      body: "Connections checked and tightened. Outdoor unit inspected. Any issues flagged in your WhatsApp report.",
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
