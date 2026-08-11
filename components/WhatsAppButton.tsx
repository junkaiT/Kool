import { Button } from "./Button";
import { WhatsAppIcon } from "./icons/WhatsAppIcon";
import { WHATSAPP_URL } from "@/lib/site";

type WhatsAppButtonProps = {
  children: React.ReactNode;
  variant?: "wa" | "outline";
  showIcon?: boolean;
  className?: string;
  /** Gives both buttons the same fixed min-width instead of each shrinking to its own text. */
  equalWidth?: boolean;
};

// Wide enough to fit "Book on WhatsApp" (the longer of the two labels, plus icon) at the
// compact px-4/text-xs sizing used wherever equalWidth is set — see components/PricingCard.tsx.
const EQUAL_WIDTH_MIN_PX = 182;

export function WhatsAppButton({
  children,
  variant = "wa",
  showIcon = true,
  className = "",
  equalWidth = false,
}: WhatsAppButtonProps) {
  const equalWidthStyle = equalWidth ? { minWidth: EQUAL_WIDTH_MIN_PX } : undefined;

  return (
    <div className="flex flex-wrap gap-2 items-center">
      <Button
        href={WHATSAPP_URL}
        variant={variant}
        target="_blank"
        rel="noopener"
        className={className}
        style={equalWidthStyle}
      >
        {showIcon && <WhatsAppIcon />}
        {children}
      </Button>
      <span className="text-xs text-muted">or</span>
      <Button href="/book" variant="outline" className={className} style={equalWidthStyle}>
        Check Slots Online
      </Button>
    </div>
  );
}
