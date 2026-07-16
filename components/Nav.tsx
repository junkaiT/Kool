"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Logo } from "./Logo";
import { WhatsAppButton } from "./WhatsAppButton";
import { NAV_LINKS, SERVICES } from "@/lib/site";

export function Nav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [svcOpen, setSvcOpen] = useState(false);
  const [mobSvcOpen, setMobSvcOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isServicePage = SERVICES.some((s) => pathname === `/${s.slug}`);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setSvcOpen(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  function closeMobileMenu() {
    setMobileOpen(false);
  }

  return (
    <header className="sticky top-0 z-[100] bg-white border-b border-border">
      <div className="max-w-[1280px] mx-auto px-10 min-h-[60px] flex items-center justify-between gap-6">
        <Logo />

        <nav className="hidden md:flex flex-1 justify-center gap-0.5">
          <NavLink href="/" active={pathname === "/"}>
            Home
          </NavLink>

          <div className="relative inline-flex items-center" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setSvcOpen((v) => !v)}
              className={`text-[13px] px-3.5 py-[7px] rounded-md font-medium ${
                isServicePage ? "text-black font-semibold" : "text-grey hover:text-black hover:font-semibold"
              }`}
            >
              Services ▾
            </button>
            <div
              className={`${svcOpen ? "block" : "hidden"} absolute top-[calc(100%+4px)] left-0 bg-white border border-border rounded-[10px] shadow-[0_8px_24px_rgba(0,0,0,0.10)] min-w-[210px] z-[200] py-1.5`}
            >
              {SERVICES.map((s, i) => (
                <div key={s.slug}>
                  {i === 4 && <div className="h-px bg-border my-1" />}
                  <Link
                    href={`/${s.slug}`}
                    className="block px-[18px] py-[9px] text-[13px] font-medium text-grey whitespace-nowrap hover:text-black hover:bg-bg"
                    onClick={() => setSvcOpen(false)}
                  >
                    {s.icon} {s.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {NAV_LINKS.slice(1).map((link) => (
            <NavLink key={link.href} href={link.href} active={pathname === link.href}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:inline-flex">
          <WhatsAppButton>WhatsApp us</WhatsAppButton>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Menu"
          className="md:hidden bg-none border-none p-1 flex flex-col gap-[5px]"
        >
          <span className="block w-[22px] h-0.5 bg-dark rounded-sm" />
          <span className="block w-[22px] h-0.5 bg-dark rounded-sm" />
          <span className="block w-[22px] h-0.5 bg-dark rounded-sm" />
        </button>
      </div>

      <div className={`${mobileOpen ? "flex" : "hidden"} md:hidden flex-col border-t border-border bg-white`}>
        <Link href="/" onClick={closeMobileMenu} className="text-[15px] font-semibold text-dark px-5 py-3.5 border-b border-border">
          Home
        </Link>

        <button
          type="button"
          onClick={() => setMobSvcOpen((v) => !v)}
          className="text-[15px] font-semibold text-dark px-5 py-3.5 border-b border-border flex justify-between items-center w-full text-left bg-none"
        >
          Services <span>{mobSvcOpen ? "▴" : "▾"}</span>
        </button>
        <div className={`${mobSvcOpen ? "flex" : "hidden"} flex-col bg-bg`}>
          {SERVICES.map((s) => (
            <Link
              key={s.slug}
              href={`/${s.slug}`}
              onClick={closeMobileMenu}
              className="text-sm font-medium text-grey py-[11px] pl-8 pr-5 border-b border-border hover:text-black"
            >
              {s.icon} {s.name}
            </Link>
          ))}
        </div>

        {NAV_LINKS.slice(1).map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={closeMobileMenu}
            className="text-[15px] font-semibold text-dark px-5 py-3.5 border-b border-border"
          >
            {link.label}
          </Link>
        ))}

        <div className="mx-5 mt-3.5 mb-[18px]">
          <WhatsAppButton className="w-full justify-center rounded-[9px] p-3.5">WhatsApp us</WhatsAppButton>
        </div>
      </div>
    </header>
  );
}

function NavLink({ href, active, children }: { href: string; active: boolean; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className={`text-[13px] px-3.5 py-[7px] rounded-md font-medium ${
        active ? "text-black font-semibold" : "text-grey hover:text-black hover:font-semibold"
      }`}
    >
      {children}
    </Link>
  );
}
