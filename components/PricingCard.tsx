import Link from "next/link";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export type PricingCardData = {
  icon: string;
  name: string;
  isNew?: boolean;
  desc: string;
  bestFor?: string;
  rows: { label: string; price: string }[];
  note?: string;
  href: string;
};

export function PricingCard({ data }: { data: PricingCardData }) {
  return (
    <div className="bg-white border border-border rounded-[10px] p-4">
      <div className="flex items-start gap-3 mb-3">
        <div className="text-[22px] shrink-0">{data.icon}</div>
        <div>
          <div className="text-sm font-bold text-black mb-0.5">
            {data.name}{" "}
            {data.isNew && (
              <span className="inline-block bg-[#D4EDDA] text-[#155724] text-[9px] font-bold px-1.5 py-0.5 rounded-full">
                New
              </span>
            )}
          </div>
          <div className="text-xs text-muted leading-[1.6] mt-1">
            {data.desc}
            {data.bestFor && (
              <>
                <br />
                <br />
                <em>{data.bestFor}</em>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        {data.rows.map((row) => (
          <div
            key={row.label}
            className="flex justify-between items-center py-[7px] border-b border-border last:border-b-0 text-xs text-grey"
          >
            <span>{row.label}</span>
            <strong className="text-[13px] font-bold text-black">{row.price}</strong>
          </div>
        ))}
      </div>
      {data.note && <p className="text-[11px] text-muted my-2">{data.note}</p>}
      <div className="flex justify-between items-center mt-3.5 gap-2.5">
        <Link href={data.href} className="text-xs text-blue">
          Learn more →
        </Link>
        <WhatsAppButton className="text-xs px-4 py-2.5 whitespace-nowrap">Book on WhatsApp</WhatsAppButton>
      </div>
    </div>
  );
}
