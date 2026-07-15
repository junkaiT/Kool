import Image from "next/image";

const PILLARS = [
  {
    num: "Proof of Servicing",
    h: "See the proof your aircon is performing better",
    body: "We measure the cold air output before and after every service. Real numbers — not just our word for it. Most services show a saving of $20–30/month on electricity, and a noticeably colder aircon from day one.",
    image: "/images/home/pillar-1.png",
  },
  {
    num: "Check Our Work",
    h: "See exactly what was done, room by room.",
    body: "Receive a WhatsApp report within 20 minutes of every service — before and after photos of every unit, labelled by room, plus any issues found and what we recommend. No jargon, no surprises.",
    image: "/images/home/pillar-2.png",
  },
  {
    num: "No Nasty Chemicals",
    h: "Certified safe for elderly, children, and pets. Zero harsh chemicals.",
    body: "Most aircon companies use cheap, harsh alkaline chemicals. We offer certified bio-enzyme agents as standard on all servicing — non-toxic, biodegradable, and safe for your whole household.",
    image: "/images/home/pillar-3.png",
  },
];

const SECONDARY = [
  { icon: "📅", h: "Fast booking", body: "Book in 5 minutes. Same-day slots available." },
  { icon: "👷", h: "Experienced technicians", body: "Trained. Experienced. Background checked." },
  { icon: "✅", h: "Service guarantee", body: "Issues after your service? We return within 48 hours, no charge." },
  { icon: "😊", h: "No hard selling", body: "We recommend only what your aircon actually needs." },
];

export function WhyKool() {
  return (
    <section className="border-b border-border px-[18px] py-7 md:px-0 md:py-14">
      <div className="max-w-[1280px] mx-auto md:px-10">
        <h2 className="text-xl md:text-[26px] font-extrabold text-black mb-[5px] md:mb-1.5 tracking-[-0.3px]">
          The Kool Difference
        </h2>
        <p className="text-[13px] md:text-sm text-grey leading-[1.6] mb-[18px] md:mb-7">
          Three things no other aircon company in Singapore does.
        </p>

        <div className="flex flex-col md:flex-row gap-2.5 md:gap-4 mb-3.5 md:mb-5">
          {PILLARS.map((p) => (
            <div key={p.num} className="bg-white border border-border rounded-[10px] p-4 md:flex-1 md:p-5">
              <div className="text-[9px] font-bold text-teal uppercase tracking-[1.5px] mb-[7px]">{p.num}</div>
              <div className="text-sm md:text-[15px] font-bold text-black mb-1.5 leading-[1.3]">{p.h}</div>
              <p className="text-xs md:text-[13px] text-grey leading-[1.6]">{p.body}</p>
              {p.image && (
                <div className="mt-3 relative h-[180px] rounded-lg overflow-hidden">
                  <Image src={p.image} alt={p.h} fill className="object-cover" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-3">
          {SECONDARY.map((s) => (
            <div key={s.h} className="bg-bg border border-border rounded-[9px] px-3.5 py-3 flex gap-2.5 items-start">
              <span className="text-lg shrink-0 mt-px">{s.icon}</span>
              <div>
                <div className="text-xs font-bold text-black mb-[3px]">{s.h}</div>
                <div className="text-[11px] text-grey leading-[1.5]">{s.body}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
