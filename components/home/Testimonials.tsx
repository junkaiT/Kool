import { ImagePlaceholder } from "@/components/ImagePlaceholder";

const REVIEWS = [
  { label: "Screenshot 1", caption: "Customer praises before/after photos · [Name · Area · Service]" },
  { label: "Screenshot 2", caption: "Customer comments on colder aircon · [Name · Area · Service]" },
  { label: "Screenshot 3", caption: "Customer mentions referral or repeat · [Name · Area · Service]" },
];

export function Testimonials() {
  return (
    <section className="border-b border-border bg-bg px-[18px] py-7 md:px-0 md:py-14">
      <div className="max-w-[1280px] mx-auto md:px-10">
        <div className="mb-4 md:flex md:justify-between md:items-end md:mb-6">
          <div>
            <div className="text-[11px] font-bold text-teal uppercase tracking-[1.5px] mb-2.5">
              What customers say
            </div>
            <h2 className="text-xl md:text-[26px] font-extrabold text-black tracking-[-0.3px] mb-3.5 md:mb-0">
              What customers say
            </h2>
          </div>
          <div className="bg-white border border-border rounded-lg px-3.5 py-2.5 flex items-center gap-2.5 mb-3.5 md:mb-0">
            <div className="w-7 h-7 rounded-full bg-[#4285f4] flex items-center justify-center text-[13px] font-bold text-white shrink-0">
              G
            </div>
            <div>
              <div className="text-[13px] font-bold text-black">⭐ 4.9 stars · [X] Google reviews</div>
              <div className="text-[11px] text-muted">See all reviews ↗</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-2.5 md:gap-4 mb-3.5 md:mb-4">
          {REVIEWS.map((r) => (
            <div key={r.label} className="bg-white border border-border rounded-[10px] overflow-hidden md:flex-1">
              <ImagePlaceholder label={r.label} height="auto" className="aspect-[2/1]" />
              <div className="px-3 py-2 text-[11px] text-muted">{r.caption}</div>
            </div>
          ))}
        </div>

        <div className="bg-white border border-border rounded-[9px] px-4 py-3.5 flex items-center gap-3">
          <span className="text-[22px]">📜</span>
          <div>
            <div className="text-[13px] font-bold text-black">BCA Registered Contractor</div>
            <div className="text-[11px] text-muted">
              Verified on the Building and Construction Authority directory · Reg. No. [XXXXX]
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
