const TESTIMONIALS = [
  {
    quote:
      "We have tried their aircon servicing and was overall satisfied with the technician who was prompt and friendly. He explained our aircon issues and we decided to sign up the annual servicing package with them.",
    name: "Ben Khoo",
  },
  {
    quote:
      "This is our first time engaging Kool and we were happy with their professional service. They are patient to explain the issues. Our aircon does not seem to be cold at times and was told airflow of the condenser has issues due to the fan. They have done the chemical wash for us and we are glad the problem had been resolved now.",
    name: "Serene Yeo",
  },
  {
    quote:
      "Kool had help to service all our office aircon units as their price was overall competitive and quality not compromised. They did a wonderful job. They went the extra mile to trouble shoot our aircon issues as it was not cold and there are noises — this could be due to long term usage and we have not done servicing for years. A wonderful servicing team indeed!",
    name: "Amy Wong",
  },
  {
    quote:
      "This is our first time engaging Kool and we find their service efficient and they manage to resolve my aircon issues. My aircon was not cool for many days and they manage to resolve the problem.",
    name: "Steven Tan",
  },
];

export function Testimonials() {
  return (
    <section className="border-b border-border bg-bg px-[18px] py-7 md:px-0 md:py-14">
      <div className="max-w-[1280px] mx-auto md:px-10">
        <div className="mb-4 md:mb-6">
          <div className="text-[11px] font-bold text-teal uppercase tracking-[1.5px] mb-2.5">
            What customers say
          </div>
          <h2 className="text-xl md:text-[26px] font-extrabold text-black tracking-[-0.3px]">What customers say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 md:gap-4">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="bg-white border border-border rounded-[10px] p-4">
              <p className="text-[13px] text-grey leading-[1.65] mb-2.5">&ldquo;{t.quote}&rdquo;</p>
              <div className="text-[12px] font-bold text-black">— {t.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
