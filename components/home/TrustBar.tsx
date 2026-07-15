const TRUST_ITEMS = [
  { icon: "⭐", val: "4.9 stars on Google", lbl: "1000 + verified reviews" },
  { icon: "👍", val: "90% recommend", lbl: "Facebook reviews" },
  { icon: "🕐", val: "10 years", lbl: "experienced company" },
  { icon: "🛡", val: "BCA registered", lbl: "bizSAFE Level 2 certified" },
];

export function TrustBar() {
  return (
    <div className="bg-bg border-b border-border md:bg-transparent md:border-none">
      <div className="grid grid-cols-2 gap-2 px-[18px] py-3.5 md:max-w-[1280px] md:mx-auto md:grid-cols-4 md:gap-4 md:px-10 md:py-7">
        {TRUST_ITEMS.map((item) => (
          <div
            key={item.lbl}
            className="bg-white border border-border rounded-[9px] px-[13px] py-[11px] flex items-center gap-2.5"
          >
            <span className="text-[19px] shrink-0">{item.icon}</span>
            <div>
              <div className="text-[13px] font-bold text-black leading-tight">{item.val}</div>
              <div className="text-[10px] text-muted mt-0.5">{item.lbl}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
