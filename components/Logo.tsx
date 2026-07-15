import Link from "next/link";
import { COMPANY_TAGLINE } from "@/lib/site";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
        <path
          d="M5 22 Q4 15 9 10 Q11 8 15 9 Q10 14 10 19 Q10 23 12 24 Q8 25 5 22Z"
          fill="#5BAD92"
          opacity="0.9"
        />
        <path
          d="M9 26 Q7 18 13 12 Q15 10 19 11 Q14 17 14 22 Q14 26 17 27 Q12 28 9 26Z"
          fill="#5BAD92"
          opacity="0.65"
        />
        <path
          d="M14 28 Q12 20 18 14 Q20 12 24 13 Q19 19 19 24 Q19 28 22 29 Q17 30 14 28Z"
          fill="#5BAD92"
          opacity="0.4"
        />
      </svg>
      <div>
        <div className="text-xl font-extrabold leading-none tracking-[-0.3px] text-blue">KooL</div>
        <div className="text-[8.5px] text-teal font-medium mt-0.5">{COMPANY_TAGLINE}</div>
      </div>
    </Link>
  );
}
