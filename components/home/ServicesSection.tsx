import Link from "next/link";

type HomeService = {
  slug: string;
  icon: string;
  mobileName: string;
  desktopName: string;
  isNew?: boolean;
  mobileBest: string;
  mobilePrice: string;
  desktopDesc: string;
  desktopPrice: string;
};

const HOME_SERVICES: HomeService[] = [
  {
    slug: "general-servicing",
    icon: "❄️",
    mobileName: "General Servicing",
    desktopName: "General aircon servicing",
    mobileBest: "Best for: Regular maintenance · Rental maintenance",
    mobilePrice: "From $19 / unit",
    desktopDesc: "Full clean + ΔT proof + report",
    desktopPrice: "from $50",
  },
  {
    slug: "chemical-wash",
    icon: "💧",
    mobileName: "Chemical wash",
    desktopName: "Chemical wash",
    mobileBest: "Best for: Poor cooling · Foul or musty odours · Unusual noise · First clean in 6+ months",
    mobilePrice: "From $70 / unit",
    desktopDesc: "Deep clean with bio-enzyme agents",
    desktopPrice: "from $80",
  },
  {
    slug: "chemical-overhaul",
    icon: "🔧",
    mobileName: "Chemical overhaul",
    desktopName: "Chemical overhaul",
    mobileBest: "Best for: Severely neglected units · Persistent issues · Aircons not serviced in over a year",
    mobilePrice: "From $130 / unit",
    desktopDesc: "Full dismantle, clean, reassemble",
    desktopPrice: "from $130",
  },
  {
    slug: "kooljet",
    icon: "💦",
    mobileName: "KoolJet wash",
    desktopName: "KoolJet wash",
    isNew: true,
    mobileBest: "Best for: No chemical wash needed",
    mobilePrice: "From $60 / unit",
    desktopDesc: "High-pressure condenser clean",
    desktopPrice: "from $60",
  },
  {
    slug: "installation",
    icon: "⚙️",
    mobileName: "Aircon installation",
    desktopName: "Aircon installation",
    mobileBest: "New homes · Renovations · Replacing old or faulty units",
    mobilePrice: "Get a quote",
    desktopDesc: "All brands · HDB to landed",
    desktopPrice: "from $300",
  },
  {
    slug: "commercial",
    icon: "🏢",
    mobileName: "Commercial maintenance",
    desktopName: "Commercial maintenance",
    mobileBest: "Ongoing maintenance contracts · Multi-unit properties · Minimising downtime",
    mobilePrice: "Get a quote",
    desktopDesc: "Offices, retail and F&B",
    desktopPrice: "Get a quote",
  },
];

function NewTag() {
  return (
    <span className="inline-block bg-[#D4EDDA] text-[#155724] text-[9px] font-bold px-1.5 py-0.5 rounded-full">
      New
    </span>
  );
}

export function ServicesSection() {
  return (
    <section id="services" className="border-b border-border bg-bg px-[18px] py-7 md:px-0 md:py-14">
      <div className="max-w-[1280px] mx-auto md:px-10">
        <div className="flex justify-between items-baseline mb-[5px] flex-wrap gap-2">
          <h2 className="text-xl md:text-[26px] font-extrabold text-black tracking-[-0.3px]">Our services</h2>
          <Link href="/prices" className="text-xs text-blue font-semibold">
            View full price list →
          </Link>
        </div>
        <p className="text-[13px] md:text-sm text-grey leading-[1.6] mb-4 md:mb-6">
          No hidden charges. No forced upselling. Transparent prices on every job.
        </p>

        {/* Mobile list */}
        <div className="flex flex-col gap-2 md:hidden">
          {HOME_SERVICES.map((s) => (
            <div
              key={s.slug}
              className="bg-white border border-border rounded-[9px] px-[15px] py-[13px] flex justify-between items-center"
            >
              <div>
                <div className="text-[13px] font-bold text-black mb-[3px]">
                  {s.icon} {s.mobileName} {s.isNew && <NewTag />}
                </div>
                <div className="text-[11px] text-muted">{s.mobileBest}</div>
              </div>
              <div>
                <div className="text-[15px] font-extrabold text-black text-right whitespace-nowrap">
                  {s.mobilePrice}
                </div>
                <div className="text-[11px] text-blue text-right mt-[3px]">
                  <Link href={`/${s.slug}`}>Learn more</Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-3.5">
          {HOME_SERVICES.map((s) => (
            <div key={s.slug} className="bg-white border border-border rounded-[10px] p-5">
              <div className="text-2xl mb-3">{s.icon}</div>
              <div className="text-sm font-bold text-black mb-1">
                {s.desktopName} {s.isNew && <NewTag />}
              </div>
              <div className="text-xs text-muted mb-3">{s.desktopDesc}</div>
              <div className="text-[17px] font-extrabold text-black mb-2">{s.desktopPrice}</div>
              <Link href={`/${s.slug}`} className="text-xs text-blue">
                Learn more →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
