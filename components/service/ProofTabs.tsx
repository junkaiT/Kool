"use client";

import { useEffect, useRef, useState } from "react";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";

const SLIDES = [
  {
    tab: "01 · Proof of Servicing",
    label: "Proof of Servicing",
    h: "See the proof your aircon is performing better",
    body: "We measure the cold air output before and after every service. Real numbers — not just our word for it. Most services show a saving of $20–30/month on electricity, and a noticeably colder aircon from day one.",
  },
  {
    tab: "02 · Check Our Work",
    label: "Check Our Work",
    h: "See exactly what was done, room by room.",
    body: "Receive a WhatsApp report within 20 minutes of every service — before and after photos of every unit, labelled by room, plus any issues found and what we recommend. No jargon, no surprises.",
  },
  {
    tab: "03 · No Nasty Chemicals",
    label: "No Nasty Chemicals",
    h: "Certified safe for elderly, children, and pets. Zero harsh chemicals.",
    body: "Most aircon companies use cheap, harsh alkaline chemicals. We offer certified bio-enzyme agents as standard on all servicing — non-toxic, biodegradable, and safe for your whole household.",
  },
];

const AUTO_ADVANCE_MS = 5000;

export function ProofTabs() {
  const [active, setActive] = useState(0);
  const [progressKey, setProgressKey] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  function resetTimer() {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % SLIDES.length);
    }, AUTO_ADVANCE_MS);
  }

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setProgressKey((k) => k + 1);
  }, [active]);

  function selectSlide(i: number) {
    setActive(i);
    resetTimer();
  }

  return (
    <section className="border-b border-border bg-bg">
      <div className="max-w-[1280px] mx-auto px-[18px] py-6 md:px-10 md:py-10">
        <div className="mb-3.5 md:flex md:justify-between md:items-end md:mb-5">
          <div>
            <h2 className="text-lg font-extrabold text-black mb-3 tracking-[-0.2px]">
              Every service comes with proof.
            </h2>
            <p className="text-[13px] text-grey leading-[1.6] mb-3.5">
              Three things no other Singapore aircon company does as standard.
            </p>
          </div>
          <span className="text-[11px] text-muted">Tap each tab to explore</span>
        </div>

        <div
          className="bg-white border border-border rounded-[10px] overflow-hidden"
          onMouseEnter={() => timerRef.current && clearInterval(timerRef.current)}
          onMouseLeave={resetTimer}
        >
          <div className="flex overflow-x-auto border-b border-border [scrollbar-width:none]">
            {SLIDES.map((s, i) => (
              <button
                key={s.tab}
                onClick={() => selectSlide(i)}
                className={`shrink-0 px-4 py-[11px] text-[11px] font-semibold whitespace-nowrap border-b-2 ${
                  active === i ? "text-dark border-blue" : "text-muted border-transparent"
                }`}
              >
                {s.tab}
              </button>
            ))}
          </div>
          <div className="h-0.5 bg-border relative overflow-hidden">
            <div
              key={progressKey}
              className="absolute left-0 top-0 h-full bg-blue w-0"
              style={{ animation: `proofProgress ${AUTO_ADVANCE_MS}ms linear` }}
            />
          </div>

          <div className="p-[18px] md:p-7">
            <div className="flex flex-col md:flex-row gap-4 md:gap-10 md:items-center">
              <div>
                <div className="text-[9px] font-bold text-teal uppercase tracking-[1.5px] mb-2">
                  {SLIDES[active].label}
                </div>
                <h3 className="text-sm font-bold text-black mb-2 leading-[1.3]">{SLIDES[active].h}</h3>
                <p className="text-xs text-grey leading-[1.6] mb-3">{SLIDES[active].body}</p>
                {active === 0 && (
                  <div className="flex justify-between items-center px-3 py-2 bg-green-bg border border-green-border rounded-lg text-xs text-grey">
                    <span>Save up to est.</span>
                    <strong className="text-sm font-extrabold text-green">
                      $20–30 / month with regular maintenance
                    </strong>
                  </div>
                )}
                {active === 1 && (
                  <div className="flex flex-col gap-2">
                    {[
                      ["📷", "Before/after photos of filter and coil — labelled by room"],
                      ["🎥", "Dirty water disposal video — proof of what was cleaned"],
                      ["🌡", "ΔT reading and estimated electricity saving"],
                      ["📋", "Issues found and honest recommendations — no pressure"],
                    ].map(([icon, text]) => (
                      <div key={text} className="flex gap-2 items-start text-xs text-grey leading-[1.5]">
                        <span>{icon}</span>
                        <span>{text}</span>
                      </div>
                    ))}
                  </div>
                )}
                {active === 2 && (
                  <div className="grid grid-cols-2 gap-2 mt-3">
                    <div className="p-3 bg-bg border border-border rounded-lg">
                      <div className="text-[8px] font-bold text-muted uppercase tracking-wider mb-1">
                        Industry standard
                      </div>
                      <div className="text-[13px] font-bold text-black mb-[3px]">Alkaline chemicals</div>
                      <div className="text-[11px] text-muted">Harsh · Corrosive · ~$1–2/job</div>
                    </div>
                    <div className="p-3 bg-white border-2 border-dark rounded-lg">
                      <div className="text-[8px] font-bold text-muted uppercase tracking-wider mb-1">
                        Kool standard
                      </div>
                      <div className="text-[13px] font-bold text-black mb-[3px]">Bio-enzyme agents</div>
                      <div className="text-[11px] text-muted">Non-toxic · Safe · ~$10–20/job</div>
                    </div>
                  </div>
                )}
              </div>
              <div className="md:flex-none md:w-[260px]">
                <ImagePlaceholder height="180px" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
