import type { ServicePageData } from "./types";

// TODO: howItWorks is placeholder copy — replace with real step-by-step content when available.
export const commercial: ServicePageData = {
  slug: "commercial",
  breadcrumbLabel: "Commercial maintenance",
  title: "Commercial Aircon Maintenance",
  heroBody:
    "Scheduled maintenance contracts for offices, retail outlets, F&B businesses, and other commercial spaces. Island-wide coverage. BCA registered. We work around your operating hours.",
  pricing: {
    label: "Pricing",
    displayPrice: "Custom quote",
    isCustomQuote: true,
    note: "All commercial work is custom-quoted based on number of units, system type, and service frequency. WhatsApp us for a site assessment.",
  },
  whenHeading: "Who is this for?",
  whenCards: [
    {
      icon: "⚠️",
      h: "Offices and co-working spaces",
      body: "A poorly maintained aircon in a meeting room or open-plan office affects productivity and leaves a poor impression on clients. We schedule maintenance around your operating hours — early morning or after hours — so there's zero disruption to your team or your business.",
    },
    {
      icon: "🕐",
      h: "Retail and F&B outlets",
      body: "Aircon failure during service hours is not an option. We build maintenance schedules around your operating hours, service outside peak times, and prioritise commercial clients for emergency response when something goes wrong unexpectedly.",
    },
    {
      icon: "📅",
      h: "Multi-unit commercial properties",
      body: "Managing maintenance across multiple units or floors requires a single point of contact, consistent service quality, and proper documentation. Every commercial service comes with a full written service report — unit by unit, with findings, work done, and recommendations — so you always have a complete record of your system's condition.",
    },
  ],
  included: [
    {
      h: "Tailored scheduling.",
      body: "No fixed contract structure — we build a maintenance schedule around your unit count, usage pattern, and operating hours.",
    },
    {
      h: "Full written service reports.",
      body: "Every visit documented properly, unit by unit. Not a WhatsApp message — a formal service record you can file and reference.",
    },
    {
      h: "Priority breakdown response.",
      body: "Commercial clients go to the front of the queue. If something goes wrong outside a scheduled visit, we treat it as urgent.",
    },
    { h: "Transparent pricing.", body: "A detailed quote before any work begins. No hidden costs, no surprises on the invoice." },
  ],
  howItWorks: [
    { h: "Get in touch", body: "WhatsApp us your property type, unit count, system type, and current servicing frequency." },
    { h: "Site assessment", body: "We assess your requirements and come back with a tailored maintenance schedule and quote." },
    { h: "Scheduled maintenance begins", body: "Visits scheduled around your operating hours with zero disruption to your business." },
    { h: "Written report after every visit", body: "A full service record documenting findings, work done, and recommendations." },
  ],
  faqHeading: "Questions about commercial maintenance",
  faq: [
    {
      q: "Do you service ducted and cassette systems?",
      a: "Yes — we service split units, cassette units, and ducted systems across all major brands. WhatsApp us with your system type and unit count and we'll come back with a specific maintenance recommendation and quote.",
    },
    {
      q: "Can you work outside business hours?",
      a: "Yes. We schedule all commercial services around your operating hours — early morning, evenings, or weekends. Your team and your customers shouldn't know we were there.",
    },
    {
      q: "Do you provide service documentation?",
      a: "Yes — every commercial visit is followed by a full written service report documenting the condition of each unit, work completed, issues found, and recommendations for follow-up. Useful for facilities management, tenancy records, and equipment warranty purposes.",
    },
    {
      q: "What happens if something breaks down between scheduled visits?",
      a: "Commercial clients are prioritised for breakdown response. WhatsApp us and we'll treat it as urgent — because we understand that aircon failure during business hours isn't just inconvenient, it affects your customers and your revenue.",
    },
    {
      q: "How do we get started?",
      a: "WhatsApp us with your property type, number of units, system type, and current servicing frequency. We'll assess your requirements and come back with a tailored schedule and a competitive quote — no obligation, no hard selling.",
    },
  ],
  related: [
    { name: "Aircon installation", desc: "Supply and install for commercial spaces — all brands, HDB to landed.", href: "/installation" },
  ],
  ctaHeading: "Get a quote for commercial maintenance",
  ctaBody: "WhatsApp us with your business address, number of units, and system type. We'll arrange a site assessment.",
};
