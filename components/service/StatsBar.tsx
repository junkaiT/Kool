const STATS = [
  { val: "4.9★", lbl: "Google Reviews" },
  { val: "10+ yrs", lbl: "Experience" },
  { val: "90%", lbl: "Facebook Recommended" },
];

export function StatsBar({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center bg-white border border-border rounded-[10px] overflow-hidden ${className}`}>
      {STATS.map((s, i) => (
        <div key={s.lbl} className="contents">
          {i > 0 && <div className="w-px bg-border h-[30px]" />}
          <div className="flex-1 text-center px-2 py-3">
            <div className="text-lg font-extrabold text-black">{s.val}</div>
            <div className="text-[10px] text-muted mt-0.5">{s.lbl}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
