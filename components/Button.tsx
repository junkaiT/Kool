import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

const VARIANT_CLASSES = {
  wa: "bg-wa text-white",
  dark: "bg-dark text-white",
  outline: "bg-white text-dark border-[1.5px] border-dark",
} as const;

type Variant = keyof typeof VARIANT_CLASSES;

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: Variant;
  children: ReactNode;
  className?: string;
};

export function Button({ href, variant = "wa", children, className = "", ...rest }: ButtonProps) {
  const isExternal = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");
  const base =
    "inline-flex items-center justify-center gap-2 rounded-lg font-bold text-sm px-[22px] py-[13px]";
  const classes = `${base} ${VARIANT_CLASSES[variant]} ${className}`;

  if (isExternal) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
