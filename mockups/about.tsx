// Archived: the live /about route was removed (app/about/page.tsx deleted) to
// temporarily take the About page offline. This is the last version of that
// page's content, kept here for reference/revival — not part of the build.

import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const VALUES = [
  {
    h: "We measure everything.",
    body: "The only way to know if a service actually worked is to measure cold air output before and after. So we do — on every visit, for every customer. We call it the ΔT reading. It takes two minutes and it tells you exactly what changed. No other aircon company in Singapore makes this standard.",
  },
  {
    h: "We keep you informed.",
    body: "Within 20 minutes of every service, you receive a full WhatsApp report — before and after photos of every unit, labelled by room, with any issues found and what we recommend. You shouldn't have to wonder what the technician actually did. With Kool, you always know.",
  },
  {
    h: "We care about what goes into your home.",
    body: "Most aircon companies use cheap alkaline chemicals because they're fast and inexpensive. We don't. We use certified bio-enzyme agents — non-toxic, biodegradable, and safe for elderly residents, young children, and pets. It costs us more. We think it's the right thing to do.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <section className="border-b border-border px-[18px] py-8">
        <div className="max-w-[1280px] mx-auto md:px-10 md:flex md:gap-12 md:items-start">
          <div className="md:flex-1">
            <div className="text-[11px] font-bold text-teal uppercase tracking-[1.5px] mb-2.5">About us</div>
            <h1 className="text-[26px] font-extrabold text-black leading-[1.2] mb-3 tracking-[-0.4px]">
              About Kool Aircon
            </h1>
            <p className="text-sm text-grey leading-[1.7]">
              Kool started with a frustration most Singapore homeowners will recognise.
            </p>
            <p className="text-sm text-grey leading-[1.7] mt-2.5">
              Our co-founder Duri had been through enough aircon servicing appointments to see a pattern.
              Technicians who rushed through the job, left without explaining what they'd done, and pushed
              contracts he didn't need. His aircon still wasn't cold after service. Nobody could tell him why, or
              prove that anything had actually improved.
            </p>
            <p className="text-sm text-grey leading-[1.7] mt-2.5">He decided to build the service he'd been looking for.</p>
          </div>
          <div className="mt-5 md:mt-0 md:flex-none md:w-[400px]">
            <ImagePlaceholder height="auto" className="aspect-[2/1]" />
          </div>
        </div>
      </section>

      <section className="border-b border-border px-[18px] py-7">
        <div className="max-w-[1280px] mx-auto md:px-10 md:flex md:gap-12 md:items-start">
          <div className="md:flex-1">
            <h2 className="text-xl font-extrabold text-black mb-3.5 tracking-[-0.2px]">Where we are today</h2>
            <p className="text-[13px] text-grey leading-[1.8] mb-3">
              We're a small, growing team of full-time technicians — all experienced, background-checked, and
              trained on Kool's quality standards before they service a customer's home independently.
            </p>
            <p className="text-[13px] text-grey leading-[1.8] mb-3">
              Every new technician works alongside an experienced team member first, learning our process and what
              we consider acceptable work.
            </p>
            <p className="text-[13px] text-grey leading-[1.8]">
              We've completed over 3,000 jobs across Singapore and we're growing fast — because customers who
              experience the difference tend to come back, and tend to tell their friends.
            </p>
          </div>
          <div className="mt-5 md:mt-0 md:flex-none md:w-[400px]">
            <ImagePlaceholder height="auto" className="aspect-[2/1]" />
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-bg px-[18px] py-7">
        <div className="max-w-[1280px] mx-auto md:px-10">
          <h2 className="text-xl font-extrabold text-black mb-5 tracking-[-0.2px]">
            What we do differently — and why
          </h2>
          <div className="flex flex-col md:flex-row gap-2.5 md:gap-3.5">
            {VALUES.map((v) => (
              <div key={v.h} className="bg-white border border-border rounded-[10px] p-4 md:flex-1">
                <div className="text-sm font-bold text-black mb-[5px]">{v.h}</div>
                <p className="text-xs text-grey leading-[1.6]">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border px-[18px] py-7">
        <div className="max-w-[1280px] mx-auto md:px-10 md:flex md:gap-12 md:items-start">
          <div className="md:flex-1">
            <h2 className="text-xl font-extrabold text-black mb-2.5 tracking-[-0.2px]">The team</h2>
            <p className="text-[13px] text-grey leading-[1.7]">
              We started Kool because we believed Singapore deserved better aircon servicing. Every decision we've
              made since — the bio-enzyme agents, the WhatsApp report, the no hard-selling policy — comes back to
              that. We want every customer to finish a Kool service knowing exactly what was done, knowing it was
              done properly, and knowing their home is safer for it.
            </p>
            <div className="mt-4 px-4 py-3 bg-bg border border-border rounded-[9px]">
              <div className="text-xs font-bold text-black mb-[3px]">📜 BCA Registered Contractor · Reg. No. [XXXXX]</div>
              <div className="text-xs text-muted">🛡 bizSAFE Level 2 certified</div>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:flex-none md:w-[400px]">
            <ImagePlaceholder height="auto" className="aspect-[2/1]" />
          </div>
        </div>
      </section>

      <section className="bg-bg px-[18px] py-6">
        <div className="max-w-[1280px] mx-auto md:px-10 text-center">
          <h2 className="text-[19px] font-extrabold text-black mb-2">Questions? Just WhatsApp us.</h2>
          <p className="text-[13px] text-grey mb-[18px]">We reply within the hour.</p>
          <div className="flex justify-center">
            <WhatsAppButton>Book on WhatsApp Now</WhatsAppButton>
          </div>
        </div>
      </section>
    </main>
  );
}
