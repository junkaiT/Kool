import type { ServicePageData } from "./types";

// TODO: howItWorks is placeholder copy — replace with real step-by-step content when available.
export const installation: ServicePageData = {
  slug: "installation",
  breadcrumbLabel: "Aircon installation",
  title: "Aircon Installation",
  heroBody:
    "We handle everything from start to finish — assessing your space, recommending the right system and BTU for each room without overselling, and completing the installation neatly with minimal disruption to your home. Every installation ends with a full operational test and a WhatsApp report confirming everything is running as it should. All brands supported, HDB to landed.",
  bestFor: "Best for: New homes · Renovations · Replacing an old or faulty unit",
  pricing: {
    label: "Pricing",
    displayPrice: "$300",
    unit: "per unit",
    note: "Prices vary by unit type, brand, and installation complexity. WhatsApp us for a full quote — typically from $300 per unit.",
  },
  whenHeading: "Why getting your aircon installation right matters",
  whenCards: [
    {
      icon: "⚠️",
      h: "Starting fresh in a new home or renovation",
      body: "Installation during a renovation is the best opportunity you'll ever have to get your aircon system exactly right — pipes can be routed cleanly behind walls, units can be positioned for optimal airflow, and you can choose a system sized correctly for each room. We advise on placement, pipe routing, BTU requirements, and brand selection before a single hole is drilled. Getting this right from the start is significantly cheaper than fixing it later.",
    },
    {
      icon: "🕐",
      h: "Your existing unit is beyond repair",
      body: "Every aircon has a lifespan. When repair costs start approaching the cost of a new unit, or when a unit simply can't be restored to adequate performance, replacement is the more economical long-term decision. If our ΔT reading confirms a unit is no longer recoverable, we'll tell you honestly — and quote for a like-for-like replacement or recommend a more efficient upgrade where it makes sense.",
    },
    {
      icon: "📅",
      h: "Upgrading to a more energy-efficient model",
      body: "Older aircon units consume significantly more electricity than modern inverter systems. If your unit is more than 8 to 10 years old, upgrading to a higher-tick model could reduce your electricity bill meaningfully over the coming years — often offsetting the cost of installation within 2 to 3 years. We handle the full process: dismantling and responsible disposal of your old unit, installation of the new one, and a post-installation ΔT check to confirm everything is running as it should.",
    },
  ],
  included: [
    {
      h: "Site assessment and unit recommendation",
      body: "Before anything is installed, we assess your space — room size, ceiling height, window placement, and usage pattern — and recommend the right BTU and model for each room. No overselling, no undersizing.",
    },
    {
      h: "Supply and installation of indoor and outdoor units",
      body: "All major brands available. Units positioned for optimal airflow and installed cleanly, with cored holes sealed after every job.",
    },
    {
      h: "Pipe and wiring run",
      body: "Properly insulated pipe runs, neatly trunked and concealed where possible. No exposed wiring, no shortcuts on insulation quality.",
    },
    {
      h: "Drainage setup",
      body: "Correct gradient drainage installed from the start — one of the most common causes of post-installation water leaks is improper drainage slope. We get this right the first time.",
    },
  ],
  howItWorks: [
    { h: "Booking confirmed", body: "WhatsApp us your unit type, room count, and any brand preferences for a quote." },
    { h: "Site assessment", body: "We assess your space and recommend the right BTU, model, and placement for each room." },
    { h: "Installation performed", body: "Units, pipe runs, wiring, and drainage installed cleanly by our technicians." },
    { h: "WhatsApp report sent", body: "Operational test results confirming the system is running as it should." },
  ],
  faqHeading: "Questions about aircon installation",
  faq: [
    {
      q: "What brands do you install?",
      a: "We install all major brands available in Singapore. If you have a brand or model in mind, WhatsApp us and we'll confirm availability and pricing. Not sure what to get? We'll advise on the best option for your room size, usage pattern, and budget — without pushing you towards any particular brand.",
    },
    {
      q: "Do you handle HDB and condo installations?",
      a: "Yes — we install across all property types in Singapore. For HDB installations, we manage the approval process where required, so you don't have to deal with the paperwork.",
    },
    {
      q: "How long does installation take?",
      a: "A single unit typically takes 2 to 3 hours. A full home installation of 3 to 5 units is usually completed within a day. We'll give you a more accurate timeframe when you WhatsApp us with your requirements.",
    },
    {
      q: "Can you remove and dispose of my old unit?",
      a: "Yes — dismantling and responsible disposal of your existing unit can be included in the same visit. Let us know when you WhatsApp us for a quote so we can factor it into the schedule.",
    },
    {
      q: "Are there any hidden costs I should know about?",
      a: "Our quoted price is always nett. The main variables that can affect the final price are pipe length — additional charges apply if pipe runs exceed 15 metres per unit — and whether brackets, powerpoints, or isolator switches are required. We'll identify all of these during the site assessment and include them in your quote before any work begins. No surprises on the day.",
    },
    {
      q: "What materials do you use — and does it matter?",
      a: "It matters more than most people realise. The materials used during installation directly affect how long your aircon performs without problems. We use Gauge 21 copper pipes (thicker than the standard Gauge 22), ½ inch Kflex pipe insulation (fire propagation certified), 16mm drainage pipes, appropriately rated 3-core wire cables, DNE PVC trunking, and Grade 304 stainless steel brackets. Before accepting any installation quote, it's worth asking your installer which grade of copper pipe, insulation thickness, and bracket material they use. The difference in material cost is small. The difference in long-term reliability is significant.",
    },
  ],
  related: [
    { name: "General servicing", desc: "Best for: Regular maintenance · Rental maintenance. From $19", href: "/general-servicing" },
    {
      name: "Chemical wash",
      desc: "Best for: Poor cooling · Foul or musty odours · Unusual noise · First clean in 6+ months. From $70",
      href: "/chemical-wash",
    },
    { name: "KoolJet wash", desc: "High-pressure clean. From $60", href: "/kooljet" },
  ],
  ctaHeading: "Ready to get a quote for installation?",
  ctaBody: "WhatsApp us with your unit type, number of rooms, and any brand preferences. We'll send a quote within the hour.",
};
