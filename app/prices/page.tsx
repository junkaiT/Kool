import { PricingCard, type PricingCardData } from "@/components/PricingCard";
import { FaqAccordion } from "@/components/FaqAccordion";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { WHATSAPP_DISPLAY } from "@/lib/site";

const INCLUDED_CHIPS = ["Fast Booking", "Experienced Technicians", "Service Guarantee", "No Hard Selling"];

const CARDS: PricingCardData[] = [
  {
    icon: "❄️",
    name: "General Servicing",
    desc: "Think of this as your aircon's regular health check. We clean everything that's accessible — filters, panels, cooling coil, drainage tray, and blower wheel — without dismantling the unit. Fast, thorough, and done quarterly.",
    bestFor: "Best for: Regular maintenance · Rental maintenance",
    rows: [
      { label: "1 unit", price: "$50" },
      { label: "2 units", price: "$65" },
      { label: "3 units", price: "$75" },
      { label: "4 units", price: "$85" },
      { label: "5 units", price: "$95" },
      { label: "6+ units", price: "$19 per unit" },
    ],
    href: "/general-servicing",
  },
  {
    icon: "💧",
    name: "Chemical wash",
    desc: "Where general servicing cleans the surface, a chemical wash goes deeper. We remove the internal components, apply a certified bio-enzyme compound directly to the fan coil and drainage system — reaching the mould, bacteria, and grime that a standard service can't touch — then rinse, vacuum, and reassemble. You'll notice the difference in cooling and air quality immediately.",
    bestFor: "Best for: Poor cooling · Foul or musty odours · Unusual noise · First clean in 6+ months",
    rows: [
      { label: "1 unit", price: "$80" },
      { label: "2 units", price: "$150" },
      { label: "3 units", price: "$220" },
      { label: "4 units", price: "$280" },
      { label: "5+ units", price: "from $350" },
    ],
    href: "/chemical-wash",
  },
  {
    icon: "🔧",
    name: "Chemical overhaul",
    desc: "Our most thorough service — reserved for units that need more than a chemical wash can fix. We fully dismantle every component, chemically treat and wash each part individually, then rebuild the unit from scratch. As close to a factory reset as your aircon can get without replacing it entirely.",
    bestFor: "Best for: Severely neglected units · Persistent issues after a chemical wash · Units not serviced in over a year",
    rows: [{ label: "Per unit", price: "$130 – $160 per unit" }],
    note: "WhatsApp us with your unit model for an exact quote.",
    href: "/chemical-overhaul",
  },
  {
    icon: "💦",
    name: "KoolJet wash",
    isNew: true,
    desc: "A significant step up from a general servicing, without the full dismantle of a chemical wash. We remove the cover, drainage tray, and blower wheel, then use a high-pressure water jet to blast out dirt, dust, and debris that hand cleaning simply cannot reach — including compacted grime on the evaporator coil and drainage pipe. The result is noticeably cleaner airflow and improved cooling, done efficiently in a single visit.",
    bestFor:
      "Best for: Poor cooling · Foul or musty odours · Unusual noise · Post-renovation dust buildup · Customers who want more than a standard service without a chemical wash",
    rows: [{ label: "Per unit", price: "$60 per unit (flat rate)" }],
    href: "/kooljet",
  },
  {
    icon: "⚙️",
    name: "Aircon installation",
    desc: "We handle everything from start to finish — assessing your space, recommending the right system and BTU for each room without overselling, and completing the installation neatly with minimal disruption to your home. Every installation ends with a full operational test and a WhatsApp report confirming everything is running as it should. All brands supported, HDB to landed.",
    bestFor: "Best for: New homes · Renovations · Replacing an old or faulty unit",
    rows: [{ label: "Starting from", price: "From $300 — WhatsApp for exact quote" }],
    href: "/installation",
  },
  {
    icon: "📅",
    name: "Annual servicing contract",
    desc: "Lock in today's prices for the year and never think about rebooking. Contract customers get priority scheduling, a guaranteed slot every quarter, and our lowest per-service rate. If anything comes up between scheduled visits, you go to the front of the queue.",
    bestFor:
      "Best for: Homeowners who run their aircon daily · Households with elderly residents or young children · Anyone who wants one less thing to think about",
    rows: [
      { label: "2 units/year", price: "$240/year" },
      { label: "3 units/year", price: "$280/year" },
      { label: "4 units/year", price: "$320/year" },
      { label: "5 units/year", price: "$360/year" },
      { label: "6+ units", price: "$19 per unit per visit" },
    ],
    href: "/general-servicing",
  },
];

const PRICING_FAQ = [
  {
    q: "Are there any additional charges?",
    a: "No. The only extra would be if replacement parts are needed — we'll always tell you the cost before proceeding.",
  },
  { q: "Do you charge for travel?", a: "No travel charge for anywhere in Singapore." },
  { q: "How do I pay?", a: "Cash or PayNow after the service is completed. No payment needed upfront." },
  {
    q: "Can I get a discount for multiple units?",
    a: "Yes — pricing is already tiered by number of units. For larger commercial jobs, WhatsApp us for a custom quote.",
  },
];

export default function PricesPage() {
  return (
    <main>
      <section className="border-b border-border px-[18px] pt-8 pb-6">
        <div className="max-w-[1280px] mx-auto md:px-10">
          <h1 className="text-[26px] font-extrabold text-black mb-2 tracking-[-0.4px]">
            Honest prices. No surprises.
          </h1>
          <p className="text-sm text-grey leading-[1.65] mb-[18px]">
            No hidden fees, no hard selling. All services include a full WhatsApp report and our 48-hour
            satisfaction guarantee. If you're unsure which service you need, WhatsApp us and we'll advise you
            honestly.
          </p>
          <div className="flex flex-wrap gap-2">
            {INCLUDED_CHIPS.map((chip) => (
              <div
                key={chip}
                className="text-xs font-semibold text-teal bg-teal-bg border border-green-border rounded-full px-3 py-[5px]"
              >
                ✓ {chip}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border px-[18px] py-6">
        <div className="max-w-[1280px] mx-auto md:px-10">
          <div className="flex flex-col gap-3 md:grid md:grid-cols-3 md:gap-3.5">
            {CARDS.map((card) => (
              <PricingCard key={card.name} data={card} />
            ))}
          </div>

          <div className="mt-4 p-3.5 bg-bg border border-border rounded-[9px] flex items-center gap-3">
            <span className="text-xl">🏢</span>
            <div className="flex-1">
              <div className="text-[13px] font-bold text-black">Commercial maintenance</div>
              <div className="text-xs text-muted">Custom quote — WhatsApp for assessment</div>
            </div>
            <WhatsAppButton className="text-xs px-4 py-2.5 whitespace-nowrap">Get a quote</WhatsAppButton>
          </div>
        </div>
      </section>

      <section className="border-b border-border px-[18px] py-6">
        <div className="max-w-[1280px] mx-auto md:px-10">
          <h2 className="text-lg font-extrabold text-black mb-4 tracking-[-0.2px]">Pricing questions</h2>
          <FaqAccordion items={PRICING_FAQ} defaultOpen={[0]} />
        </div>
      </section>

      <section className="bg-bg px-[18px] py-6">
        <div className="max-w-[1280px] mx-auto md:px-10 text-center">
          <h2 className="text-xl font-extrabold text-black mb-2">Ready to book?</h2>
          <p className="text-[13px] text-grey mb-[18px]">No payment needed upfront. Same-day slots often available.</p>
          <div className="flex justify-center">
            <WhatsAppButton>WhatsApp us to book</WhatsAppButton>
          </div>
          <div className="text-xs text-muted mt-2.5">Or call {WHATSAPP_DISPLAY}</div>
        </div>
      </section>
    </main>
  );
}
