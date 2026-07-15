"use client";

import { useState } from "react";

export type FaqItem = { q: string; a: string };

export function FaqAccordion({ items, defaultOpen = [0] }: { items: FaqItem[]; defaultOpen?: number[] }) {
  const [openSet, setOpenSet] = useState<Set<number>>(new Set(defaultOpen));

  function toggle(i: number) {
    setOpenSet((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  }

  return (
    <div>
      {items.map((item, i) => {
        const open = openSet.has(i);
        return (
          <div key={i} className="py-3.5 border-b border-border last:border-b-0">
            <div
              onClick={() => toggle(i)}
              className="text-[13px] font-semibold text-black flex justify-between items-start gap-3 cursor-pointer"
            >
              <span>{item.q}</span>
              <span
                className={`text-muted shrink-0 text-[15px] mt-px transition-transform duration-200 ${
                  open ? "rotate-90" : ""
                }`}
              >
                ›
              </span>
            </div>
            {open && (
              <div className="text-[13px] text-grey leading-[1.65] mt-2 whitespace-pre-line">{item.a}</div>
            )}
          </div>
        );
      })}
    </div>
  );
}
