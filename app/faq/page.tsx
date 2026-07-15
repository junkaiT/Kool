import { FaqAccordion } from "@/components/FaqAccordion";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const GENERAL_FAQ = [
  {
    q: "How often should I service my aircon?",
    a: "Every 3 months for a general service or KoolJet wash. Every 6 months for a chemical wash. Once a year for a chemical overhaul — or sooner if a chemical wash hasn't resolved the issue. If you run your aircon more than 8 hours a day, or have elderly residents or young children at home, stick to the shorter intervals.",
  },
  {
    q: "How do you check if my aircon is operating efficiently?",
    a: "ΔT is the temperature difference between the warm air going into your aircon and the cold air coming out. A healthy Singapore split unit should show 8–11°C. We measure it before and after every service so you can see in black and white whether your aircon improved — and by how much. No other aircon company in Singapore makes this standard.",
  },
  {
    q: "Why is my aircon not cold even after servicing?",
    a: "A few common reasons: mould or bacteria buildup deep in the coil that a standard service can't reach, blocked airflow from a clogged filter, a dirty outdoor condenser, or low refrigerant levels. Our ΔT reading after every service tells us exactly where the problem lies — if the unit is still underperforming, we'll tell you why and recommend the right fix. No guesswork, no upselling.",
  },
  {
    q: "Do I need to be home during the service?",
    a: "Someone should be home to let our technician in. You don't need to supervise — most customers go about their day. We'll send the WhatsApp report when done.",
  },
  {
    q: "What if I have an issue after my service?",
    a: "WhatsApp us within 48 hours and we'll return at no charge, no questions asked. That's our service guarantee.",
  },
  {
    q: "Why do most aircon companies use alkaline chemicals — and should I be worried?",
    a: "Most companies use cheap alkaline-based chemicals because they're inexpensive and fast-acting. The problem is they're harsh — potentially irritating to the respiratory system and hard on your aircon's internal components over time. At Kool, we use certified bio-enzyme agents instead — non-toxic, biodegradable, and safe for elderly residents, young children, and pets. It costs us more. We think it's the right call.",
  },
  {
    q: "What is the difference between a general service, chemical wash, KoolJet wash, and chemical overhaul?",
    a: "A general service cleans everything accessible without dismantling the unit — filters, coil, drainage, blower wheel. A KoolJet wash goes further using high-pressure water jets to blast out compacted dirt that hand cleaning can't shift. A chemical wash removes internal components and flushes them with bio-enzyme solution — the right fix for mould, bacteria, and persistent odours. A chemical overhaul fully dismantles every component, treats each one individually, and rebuilds the unit from scratch. Not sure which you need? WhatsApp us and we'll advise honestly.",
  },
  {
    q: "Will the service fix my aircon not being cold?",
    a: "Before we recommend any service, we run a diagnostic first — checking your ΔT reading, refrigerant levels, compressor pressure, and unit condition. This tells us exactly what's causing the problem and what will fix it. We'll explain what we found, what we recommend, and what it will cost — before any work begins. You decide whether to proceed. No pressure, no charge for the diagnostic.\n\nIf we recommend a service and carry it out, the ΔT reading before and after will confirm whether performance has improved. If the issue runs deeper than the service can address, we'll tell you honestly and advise on the right next step.",
  },
  {
    q: "What brands do you install?",
    a: "We install all major brands available in Singapore. If you have a brand or model in mind, WhatsApp us and we'll confirm availability and pricing. Not sure what to get? We'll advise on the best option for your room size, usage pattern, and budget — without pushing you towards any particular brand.",
  },
  {
    q: "Do you handle HDB, condo, and landed installations?",
    a: "Yes — we install across all property types. For HDB installations, we manage the approval process where required.",
  },
  {
    q: "How long does installation take?",
    a: "A single unit typically takes 2 to 3 hours. A full home installation of 3 to 5 units is usually completed within a day.",
  },
  {
    q: "Can you remove and dispose of my old unit?",
    a: "Yes — dismantling and responsible disposal of your existing unit can be included in the same visit. Let us know when you WhatsApp us for a quote.",
  },
  {
    q: "Are there hidden costs in installation?",
    a: "Our quoted price is always nett. The main variables are pipe length — additional charges apply if pipe runs exceed 15 metres per unit — and whether brackets, powerpoints, or isolator switches are required. We identify all of these during the site assessment and include them in your quote before any work begins.",
  },
  {
    q: "What materials do you use — and does it matter?",
    a: "It matters more than most people realise. We use Gauge 21 copper pipes (thicker than the standard Gauge 22, less prone to refrigerant leaks), ½ inch Kflex pipe insulation (fire propagation certified), 16mm drainage pipes, 3-core wire cables, DNE PVC trunking, and Grade 304 stainless steel brackets (rust-resistant — standard steel deteriorates within a few years in Singapore's humidity). Before accepting any quote, ask which grade of copper pipe, insulation thickness, and bracket material they use.",
  },
  {
    q: "What is BTU and how do I know which size I need?",
    a: "BTU measures how powerful your aircon is. Too low and your room won't cool properly. Too high and you'll overpay on electricity. For most Singapore HDB homes, we recommend 9,000 BTU for bedrooms and 18,000 BTU for standard living rooms. For larger 5-room living rooms, 24,000 BTU is more appropriate. Not sure? Tell us your room size and we'll advise directly.",
  },
  {
    q: "What is the difference between System 1, 2, 3, and 4?",
    a: "The system number tells you how many indoor units are connected to one outdoor compressor. System 2 means one compressor powers two indoor units, System 3 powers three, and so on. If you need aircon in three rooms, a System 3 is the right choice. We'll help you confirm during a free consultation.",
  },
];

const PRICING_FAQ = [
  {
    q: "Are there any hidden charges?",
    a: "No. Our quoted price is always nett and includes the WhatsApp report and bio-enzyme cleaning agents. Any additional costs — such as replacement parts — are communicated and agreed before we proceed. We never start work you haven't approved.",
  },
  { q: "Do you charge for travel?", a: "No travel charge anywhere in Singapore." },
  { q: "How do I pay?", a: "PayNow after the service is completed. No upfront payment required." },
];

const BOOKING_FAQ = [
  {
    q: "How quickly can you come?",
    a: "Same-day slots are often available. WhatsApp us your address and we'll confirm what's available.",
  },
  {
    q: "How do I book?",
    a: "WhatsApp us at +65 8815 0254. Tell us your address, number of units, and preferred service. We'll confirm within the hour.",
  },
  {
    q: "Do you serve my area?",
    a: "We cover the whole of Singapore — HDB estates, condominiums, and landed properties island-wide.",
  },
];

function FaqCategory({ heading, items, bg }: { heading: string; items: typeof GENERAL_FAQ; bg?: boolean }) {
  return (
    <section className={`border-b border-border px-[18px] py-6 ${bg ? "bg-bg" : ""}`}>
      <div className="max-w-[1280px] mx-auto md:px-10">
        <h2 className="text-base font-bold text-black mb-3.5 pb-2.5 border-b-2 border-blue">{heading}</h2>
        <FaqAccordion items={items} defaultOpen={[0]} />
      </div>
    </section>
  );
}

export default function FaqPage() {
  return (
    <main>
      <section className="border-b border-border px-[18px] pt-8 pb-6">
        <div className="max-w-[1280px] mx-auto md:px-10">
          <div className="text-[11px] font-bold text-teal uppercase tracking-[1.5px] mb-2.5">FAQ</div>
          <h1 className="text-[26px] font-extrabold text-black mb-2 tracking-[-0.4px]">Frequently Asked Questions</h1>
          <p className="text-sm text-grey leading-[1.65]">
            Can't find your answer? WhatsApp us — we reply within the hour.
          </p>
        </div>
      </section>

      <FaqCategory heading="General" items={GENERAL_FAQ} />
      <FaqCategory heading="Pricing" items={PRICING_FAQ} bg />
      <FaqCategory heading="Booking" items={BOOKING_FAQ} />

      <section className="bg-bg px-[18px] py-6">
        <div className="max-w-[1280px] mx-auto md:px-10 text-center">
          <h2 className="text-[19px] font-extrabold text-black mb-2">Still have a question?</h2>
          <p className="text-[13px] text-grey mb-[18px]">WhatsApp us — we reply within the hour.</p>
          <div className="flex justify-center">
            <WhatsAppButton>WhatsApp a question</WhatsAppButton>
          </div>
        </div>
      </section>
    </main>
  );
}
