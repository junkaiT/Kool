import Link from "next/link";
import { FaqAccordion } from "@/components/FaqAccordion";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const FAQS = [
  {
    q: "How often should I service my aircon?",
    a: "Every 3 months for a general service — this keeps your unit running efficiently and the air clean. If you notice foul smells or reduced cooling, book a chemical wash — ideally every 6 months. For units that haven't been serviced in over a year or have persistent issues, a chemical overhaul once a year will restore performance. Not sure which you need? WhatsApp us and we'll advise honestly.",
  },
  {
    q: "Why is my aircon still not cold after servicing?",
    a: "A few common reasons: mould or bacteria build-up deep in the coils that a standard service can't reach, blocked airflow from a dirty or damaged filter, low refrigerant levels, or a failing compressor. After every service if the unit is still underperforming, we'll tell you why and recommend the right fix, whether that's a chemical wash, a KoolJet, or a refrigerant top-up. No guesswork, no upselling.",
  },
  {
    q: "Why do most aircon companies use alkaline chemicals — and should I be worried?",
    a: "Most companies use cheap alkaline-based chemicals because they're inexpensive and fast-acting. The problem is they're harsh — they can irritate the respiratory system, are dangerous around children and elderly residents, and degrade your aircon's components over time. At Kool, we offer certified bio-enzyme agents instead — non-toxic, biodegradable, and safe for the whole household. It costs us more, but it's the right thing to do.",
  },
  {
    q: "Do I need to be home during the service?",
    a: "Someone needs to be home to let our technician in, but you don't need to supervise. Most customers carry on with their day. You'll receive a full WhatsApp report — with before and after photos of every unit — within 20 minutes of the service being completed.",
  },
  {
    q: "What if I have an issue after my service?",
    a: "WhatsApp us within 48 hours and we'll return at no charge, no questions asked. That's our service guarantee.",
  },
  {
    q: "What is BTU and how do I know which size I need?",
    a: "BTU measures how powerful your aircon is. Too low and your room won't cool properly. Too high and you'll overpay on electricity bills. For most Singapore HDB homes, we recommend 9,000 BTU for bedrooms and 18,000 BTU for standard living rooms. For a larger 5-room living room, 24,000 BTU is more appropriate. Not sure? Tell us your room size and we'll advise you directly.",
  },
  {
    q: "What is the difference between System 1, 2, 3, and 4?",
    a: "The system number tells you how many indoor units are connected to one outdoor compressor. System 2 means one compressor powers two indoor units, System 3 powers three, and so on. If you need aircon in three rooms, a System 3 is the right choice. Simple as that — and we'll help you confirm during a free consultation.",
  },
  {
    q: "Are there hidden costs I should know about before booking?",
    a: "No hidden costs — ever. Our quoted price is always nett and covers supply, labour, installation, and warranty unless stated otherwise. The only additional costs that sometimes arise are bracket fees for units without a ledge, or removal fees if old piping needs replacing. We'll always tell you upfront before any work begins, and we'll never proceed without your agreement.",
  },
];

export function HomeFAQ() {
  return (
    <section className="border-b border-border px-[18px] py-7 md:px-0 md:py-14">
      <div className="max-w-[1280px] mx-auto md:px-10 md:grid md:grid-cols-[1fr_2fr] md:gap-16">
        <div>
          <h2 className="text-xl md:text-[22px] font-extrabold text-black mb-1.5 tracking-[-0.3px]">
            Common questions
          </h2>
          <p className="text-[13px] md:text-sm text-grey leading-[1.6] md:leading-[1.7] mb-4 md:mb-5">
            Can't find your answer? WhatsApp us and we'll reply within the hour.
          </p>
          <WhatsAppButton variant="outline" showIcon={false} className="text-[13px] px-[18px] py-2.5">
            WhatsApp a question
          </WhatsAppButton>
          <Link href="/faq" className="hidden md:block text-[13px] text-blue mt-3">
            View all FAQs →
          </Link>
        </div>
        <div>
          <FaqAccordion items={FAQS} defaultOpen={[0, 1]} />
        </div>
      </div>
    </section>
  );
}
