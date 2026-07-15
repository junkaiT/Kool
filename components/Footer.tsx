import Link from "next/link";
import { ADDRESS, COMPANY_TAGLINE, EMAIL, FOOTER_COMPANY_LINKS, PHONE_TEL, SERVICES, WHATSAPP_DISPLAY, WHATSAPP_URL } from "@/lib/site";

const linkClass = "block text-xs text-[#666] leading-[2.3] hover:text-white";
const headingClass = "text-[11px] font-semibold text-[#aaa] uppercase tracking-wider mb-2.5";

export function Footer() {
  return (
    <footer className="bg-[#111] px-[18px] py-9 text-[#888] md:px-0 md:py-12">
      <div className="mx-auto max-w-[1280px] md:px-10">
        <div className="grid grid-cols-1 gap-5 mb-5 md:grid-cols-[2fr_1fr_1fr_1fr] md:gap-10 md:mb-7">
          <div>
            <div className="text-base font-extrabold text-blue mb-[3px]">KooL</div>
            <div className="text-[9px] text-teal font-medium mb-3.5">{COMPANY_TAGLINE}</div>
            <div className="text-xs text-[#666] leading-[2] mb-5">
              {ADDRESS}
              <br />
              {WHATSAPP_DISPLAY}
              <br />
              {EMAIL}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5 md:contents">
            <div>
              <div className={headingClass}>Services</div>
              {SERVICES.map((s) => (
                <Link key={s.slug} href={`/${s.slug}`} className={linkClass}>
                  {s.name}
                </Link>
              ))}
            </div>
            <div>
              <div className={headingClass}>Company</div>
              {FOOTER_COMPANY_LINKS.map((l) => (
                <Link key={l.href} href={l.href} className={linkClass}>
                  {l.label}
                </Link>
              ))}
            </div>
            <div>
              <div className={headingClass}>Contact</div>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener" className={linkClass}>
                WhatsApp us
              </a>
              <a href={`tel:${PHONE_TEL}`} className={linkClass}>
                Call us
              </a>
              <a href={`mailto:${EMAIL}`} className={linkClass}>
                Email us
              </a>
            </div>
          </div>
        </div>

        <div className="pt-3.5 border-t border-[#222] text-[11px] text-[#444] leading-[1.8] md:flex md:justify-between">
          <div>© 2025 Kool Aircon Pte. Ltd. · BCA Registered · bizSAFE Level 2 · Reg. No. [XXXXX]</div>
          <Link href="/privacy" className="text-[#444]">
            Privacy policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
