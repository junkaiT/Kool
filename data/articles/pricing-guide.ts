import type { ArticleData } from "./types";

export const pricingGuide: ArticleData = {
  slug: "aircon-servicing-prices-singapore",
  title: "Aircon Servicing Prices in Singapore: What You Should Actually Pay in 2026",
  category: "Pricing",
  excerpt:
    "A breakdown of what general servicing, chemical wash, chemical overhaul, and KoolJet actually cost in Singapore, and what changes the price.",
  heroImage: "/images/articles/aircon-servicing-prices-singapore/hero.png",
  midImage: "/images/articles/aircon-servicing-prices-singapore/mid.png",
  publishedDate: "11 Aug 2026",
  readTime: "6 min read",
  intro:
    "Aircon servicing prices in Singapore vary more than most homeowners expect, and not always for clear reasons. Some of that variation is legitimate: a chemical wash is a different job from a general clean, and the price should reflect that. Some of it isn't: quotes that look cheap on a Google ad and then grow once a technician is at your door. Here's what each type of service actually costs, what drives the difference, and how to tell whether a quote is fair.",
  priceComparison: {
    heading: "How Kool's prices compare to the Singapore market",
    intro:
      "Total price to service 3 aircon units in one visit — the most common household size in Singapore — based on typical rates published by providers across Singapore in 2026.",
    rows: [
      { service: "General servicing", economy: "$65", kool: "$75", premium: "$165" },
      { service: "Chemical wash", economy: "$90 – $150", kool: "$220", premium: "$360 – $500" },
      { service: "Chemical overhaul", economy: "$330 – $390", kool: "$390 – $480", premium: "$480 – $650" },
    ],
  },
  sections: [
    {
      h: "General servicing: from $19 per unit",
      body: "A general service is the routine clean — filters, panels, cooling coil, drainage tray, and blower wheel, done without dismantling the unit. This is the one to book quarterly, and pricing is usually tiered by how many units you're servicing in the same visit. At Kool, it runs from $50 for a single unit down to $19 per unit for six or more, which is standard for the industry: the more units in one visit, the lower the per-unit rate, since a lot of the job is technician time and setup that doesn't scale linearly with unit count.",
    },
    {
      h: "Chemical wash: roughly $80 to $350+ depending on unit count",
      body: "A chemical wash costs more than a general service because it's a fundamentally deeper job — components are removed and flushed with a cleaning solution rather than wiped down in place. Expect to pay more per unit than a general service, with the same volume discount pattern as unit count goes up. If a quote for a chemical wash is priced the same as a general service, that's usually a sign corners are being cut, not that you've found a bargain.\n\nWorth checking before you book: what solution is actually being used. Many companies still use cheap alkaline-based chemicals because they're inexpensive and fast-acting, even though they can irritate the respiratory system and are harsh on households with children, elderly residents, or pets. Bio-enzyme alternatives cost the provider more, so it's a fair question to ask directly.",
    },
    {
      h: "Chemical overhaul: typically $130 to $160 per unit",
      body: "This is the most involved service — every component individually removed, chemically treated, and rebuilt from scratch. Because it's priced by BTU rather than a flat per-unit rate, quotes should come after the provider knows your unit's model or capacity, not before. If a company quotes a fixed price for a chemical overhaul sight unseen, ask what happens if your unit turns out to be a higher-BTU model — that's usually where the surprise line item shows up later.",
    },
    {
      h: "KoolJet / hydro-jet wash: a flat rate, usually around $60 per unit",
      body: "A jet wash sits between a general service and a chemical wash — deeper than hand cleaning, without the full dismantle of a chemical wash. Because the process doesn't vary by unit type the way a chemical overhaul does, this is one of the few services that's reasonably priced as a flat rate regardless of unit count.",
    },
    {
      h: "What actually causes price surprises",
      body: "Almost none of it is the base service price. It's bracket fees for units without an existing mounting ledge, removal and disposal fees for old piping, and travel charges some companies quietly add for locations outside a core service area. A nett quote — one price, covering supply, labour, and standard installation or servicing, with any add-ons flagged upfront — is the difference between a company that's transparent and one that isn't. Ask for it in writing before you agree to a slot, not after the technician has already started.",
    },
  ],
  citation: {
    label: "Aircon Chemical Wash Price in Singapore (2026) — AirconServices.sg",
    url: "https://airconservices.sg/blog/aircon-chemical-wash-price-singapore",
  },
  ctaHeading: "Want an exact quote for your home?",
  ctaBody: "WhatsApp us your address and number of units. We'll confirm a nett price and slot within the hour, no hidden fees.",
};
