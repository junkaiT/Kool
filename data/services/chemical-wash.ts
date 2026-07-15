import type { ServicePageData } from "./types";

// TODO: howItWorks is placeholder copy — replace with real step-by-step content when available.
export const chemicalWash: ServicePageData = {
  slug: "chemical-wash",
  breadcrumbLabel: "Chemical wash",
  title: "Chemical Wash",
  heroBody:
    "Where general servicing cleans the surface, a chemical wash goes deeper. We remove the internal components, apply a certified bio-enzyme compound directly to the fan coil and drainage system — reaching the mould, bacteria, and grime that a standard service can't touch — then rinse, vacuum, and reassemble. You'll notice the difference in cooling and air quality immediately.",
  bestFor: "Best for: Poor cooling · Foul or musty odours · Unusual noise · First clean in 6+ months",
  pricing: {
    label: "Pricing",
    displayPrice: "$70",
    unit: "per unit",
    rows: [
      { label: "1 unit", price: "$80" },
      { label: "2 units", price: "$150" },
      { label: "3 units", price: "$220" },
      { label: "4 units", price: "$280" },
      { label: "5+ units", price: "$350+" },
    ],
  },
  whenHeading: "Why do you need a chemical wash?",
  whenCards: [
    {
      icon: "⚠️",
      h: "Your aircon smells musty or stale",
      body: "That smell is mould and bacteria growing inside the coil. It's not a surface issue — it's deep inside the unit, which is why it persists even after a general service. A chemical wash flushes the entire coil with our certified bio-enzyme solution, eliminating the source rather than masking it. The smell doesn't come back until the colony re-establishes — which is why we recommend a chemical wash every 6 months.",
    },
    {
      icon: "🕐",
      h: "Your aircon still isn't cold after a general service",
      body: "If your ΔT reading remains low after a recent service, the coil has a deeper layer of compacted grime restricting heat exchange. Surface cleaning won't fix this — the coil needs to be chemically flushed to restore proper cooling performance. This is one of the most common reasons customers come to us after being disappointed by another company's service.",
    },
    {
      icon: "📅",
      h: "You can see mould on the filter or coil",
      body: "Visible mould means the colony is already established and actively spreading. Every time your unit runs, it circulates mould spores through your home — through the same air your family breathes. A general service at this stage would be insufficient. A chemical wash removes it properly, treating the coil directly with bio-enzyme solution that breaks down the mould at a biological level rather than simply wiping the surface.",
    },
  ],
  included: [
    {
      icon: "🔧",
      h: "Remove and soak air filter in bio-enzyme solution",
      body: "Deep soaking removes stubborn dirt and bacteria that vacuuming alone cannot shift.",
    },
    {
      icon: "💧",
      h: "Flush evaporator coil with bio-enzyme cleaning agent",
      body: "The coil is where most mould and efficiency loss occurs. Flushed thoroughly with our certified bio-enzyme solution.",
    },
    {
      icon: "💨",
      h: "Flush and vacuum drainage tray and pipe",
      body: "Blocked drainage causes water leaks. Fully flushed and vacuumed on every wash.",
    },
    {
      icon: "⚡",
      h: "Check blower wheel, electrical connections, and outdoor unit",
      body: "Full inspection included — any issues flagged in your WhatsApp report with a clear recommendation.",
    },
    {
      icon: "🧹",
      h: "Wipe clean all internal surfaces",
      body: "Every accessible interior surface wiped down before reassembly.",
    },
    {
      icon: "✅",
      h: "Reassemble and test",
      body: "The unit is fully reassembled, tested for correct operation, and confirmed cold before we leave.",
    },
  ],
  howItWorks: [
    { h: "Booking confirmed", body: "WhatsApp us your address, unit count, and the issue you're noticing." },
    { h: "Technician arrives & assesses", body: "ΔT reading taken and the coil inspected before any chemical is applied." },
    { h: "Bio-enzyme wash performed", body: "Components removed, flushed with bio-enzyme solution, rinsed, and reassembled." },
    { h: "WhatsApp report sent", body: "Before/after photos, ΔT results, and any follow-up recommendations sent after the visit." },
  ],
  faqHeading: "Questions about chemical wash",
  faq: [
    {
      q: "How is a chemical wash different from a general service?",
      a: "A general service cleans the accessible parts of your air conditioner as part of regular maintenance. A chemical wash is a deeper clean where the unit is dismantled further to thoroughly clean the internal components. We offer both a traditional chemical solution and a gentler bio-enzyme cleaning solution, which is suitable for homes with children, elderly family members and pets. A chemical wash is recommended for units that haven't been serviced for over 6 months, have visible mould, persistent odours, or heavy dirt build-up.",
    },
    { q: "How long does a chemical wash take?", a: "About 45–60 minutes per unit. The bio-enzyme solution needs time to work before rinsing." },
    {
      q: "Will it fix my aircon not being cold?",
      a: "In most cases where poor cooling is caused by dirt, grime, or mould buildup on the coil — yes, a chemical wash will make a noticeable difference, and our ΔT reading before and after will show you exactly how much. But if your aircon still isn't performing after the wash, we don't just pack up and leave. We run a full diagnostic on the spot — checking refrigerant levels, compressor pressure, and electrical components — to identify the root cause. We'll tell you exactly what the issue is, what it will cost to fix, and what we recommend. No pressure to proceed, no charge for the diagnostic.",
    },
    {
      q: "How often should I do a chemical wash?",
      a: "Once every 6 months is typical for most Singapore homes, alongside quarterly general servicing. More frequently if you notice smells or reduced cooling.",
    },
  ],
  related: [
    {
      name: "Chemical overhaul",
      desc: "Best for: Severely neglected units · Persistent issues after a chemical wash · Units not serviced in over a year. From $130",
      href: "/chemical-overhaul",
    },
    { name: "General servicing", desc: "Best for: Regular maintenance · Rental maintenance. From $19", href: "/general-servicing" },
    { name: "KoolJet wash", desc: "High-pressure clean. From $60", href: "/kooljet" },
  ],
  ctaHeading: "Ready to book a chemical wash?",
  ctaBody: "WhatsApp us your address and number of units. We'll confirm your slot within the hour.",
};
