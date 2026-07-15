import type { ServicePageData } from "./types";

// TODO: howItWorks is placeholder copy — replace with real step-by-step content when available.
export const generalServicing: ServicePageData = {
  slug: "general-servicing",
  breadcrumbLabel: "General servicing",
  title: "General Servicing",
  heroBody:
    "Think of this as your aircon's regular health check. We clean everything that's accessible — filters, panels, cooling coil, drainage tray, and blower wheel — without dismantling the unit. Fast, thorough, and done quarterly.",
  bestFor: "Best for: Regular maintenance · Rental maintenance",
  pricing: {
    label: "Pricing — one-time visit",
    displayPrice: "$19",
    unit: "per unit",
    rows: [
      { label: "1 unit", price: "$50" },
      { label: "2 units", price: "$65" },
      { label: "3 units", price: "$75" },
      { label: "4 units", price: "$85" },
      { label: "5+ units", price: "$95+" },
    ],
  },
  whenHeading: "Why regular aircon servicing matters",
  whenCards: [
    {
      icon: "❄️",
      h: "Regular servicing keeps your aircon performing at its best",
      body: "Dust, moisture, and debris build up inside your unit constantly — coating the coils, clogging the filters, and blocking airflow. The result: your aircon struggles to reach the temperature you set, runs for longer to compensate, and draws more electricity doing it. A regular service removes that buildup completely, restoring your unit to full efficiency and keeping your electricity bill where it should be.",
    },
    {
      icon: "💡",
      h: "Lower electricity bills, immediately",
      body: "A dirty aircon consumes significantly more power to produce the same cooling. Studies show a poorly maintained unit can use up to 25% more electricity than a clean one. Regular servicing keeps your unit running at peak efficiency — which shows up directly on your monthly bill.",
    },
    {
      icon: "🌬️",
      h: "Cleaner air for your family",
      body: "Your aircon doesn't just cool the air — it circulates it. A dirty unit recirculates dust, mould spores, and bacteria through every room. Regular cleaning of the filters and internal components removes these contaminants, which matters especially if you have elderly residents, young children, or anyone with respiratory sensitivities at home.",
    },
    {
      icon: "🔍",
      h: "Catch problems before they become expensive",
      body: "A routine service is also a health check. Our technicians inspect for blocked drainage pipes, refrigerant issues, worn components, and anything else that could turn into a breakdown. Catching a $50 problem early is always better than a $500 repair later — or replacing the unit entirely.",
    },
  ],
  included: [
    {
      icon: "🔧",
      h: "Clean filters, panels and cooling coil",
      body: "All accessible surfaces cleaned and inspected — the fastest way to restore airflow and cooling performance.",
    },
    {
      icon: "💧",
      h: "Clean and check blower wheel",
      body: "Dust buildup on the blower wheel restricts airflow. Cleaned and checked on every visit.",
    },
    {
      icon: "💨",
      h: "Flush drainage tray and vacuum drain pipe",
      body: "Prevents water leaks. We flush and vacuum the full condensate system every visit.",
    },
    {
      icon: "🌡️",
      h: "Check outdoor condenser and refrigerant level",
      body: "Inspected for blockages and dirt buildup. Refrigerant levels checked to confirm the system is operating correctly.",
    },
    {
      icon: "🔩",
      h: "Check compressor pressure where necessary",
      body: "If readings suggest an issue, we flag it clearly in your service report with a recommendation.",
    },
    {
      icon: "⚡",
      h: "Tighten electrical connections and fan motor bearing",
      body: "Loose connections reduce efficiency and can cause faults. Checked and tightened on every visit.",
    },
  ],
  howItWorks: [
    { h: "Booking confirmed", body: "WhatsApp us your address and unit count — we'll confirm a slot within the hour." },
    { h: "Technician arrives & assesses", body: "We take an initial ΔT reading so you have a before-and-after comparison." },
    { h: "Service performed", body: "Filters, panels, coil, drainage and blower wheel cleaned per the checklist above." },
    { h: "WhatsApp report sent", body: "Photos, ΔT results, and any recommendations sent within 20 minutes of finishing." },
  ],
  faqHeading: "Questions about general servicing",
  faq: [
    {
      q: "How often should I service my aircon?",
      a: "Every 3 months for regular use. If you run it daily or have elderly or young children at home, quarterly keeps performance and air quality at their best.",
    },
    {
      q: "How long does a general service take per unit?",
      a: "About 30–45 minutes per unit including the ΔT measurement. A 3-unit home typically takes 2 hours.",
    },
    {
      q: "Do I need to be home?",
      a: "Someone should be home to let us in. You don't need to supervise — we'll send the WhatsApp report when done.",
    },
    {
      q: "What's the difference between this and a chemical wash?",
      a: "A general service cleans the accessible parts of your air conditioner as part of regular maintenance. A chemical wash is a deeper clean where the unit is dismantled further to thoroughly clean the internal components. We offer both a traditional chemical solution and a gentler bio-enzyme cleaning solution, which is suitable for homes with children, elderly family members and pets. A chemical wash is recommended for units that haven't been serviced for over 6 months, have visible mould, persistent odours, or heavy dirt build-up.",
    },
    {
      q: "What's the difference between this and a Jet Wash?",
      a: "A jet wash is a deeper clean than a general service, using high-pressure water to flush dirt and debris from the evaporator coil and drainage system. It's ideal for units with significant dust build-up or those that haven't been serviced for over 6 months, while a general service is intended for routine maintenance every 3 to 4 months to keep your air conditioner performing efficiently.",
    },
  ],
  related: [
    {
      name: "Chemical wash",
      desc: "Best for: Poor cooling · Foul or musty odours · Unusual noise · First clean in 6+ months. From $70",
      href: "/chemical-wash",
    },
    { name: "Annual servicing contract", desc: "4 visits/year · from $18/visit", href: "/general-servicing" },
    { name: "KoolJet wash", desc: "High-pressure clean. From $60", href: "/kooljet" },
  ],
  ctaHeading: "Ready to book a general service?",
  ctaBody: "WhatsApp us your address and number of units. We'll confirm your slot within the hour.",
};
