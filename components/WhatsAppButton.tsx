import { Button } from "./Button";
import { WhatsAppIcon } from "./icons/WhatsAppIcon";
import { WHATSAPP_URL } from "@/lib/site";

type WhatsAppButtonProps = {
  children: React.ReactNode;
  variant?: "wa" | "outline";
  showIcon?: boolean;
  className?: string;
};

export function WhatsAppButton({
  children,
  variant = "wa",
  showIcon = true,
  className = "",
}: WhatsAppButtonProps) {
  return (
    <div className="flex flex-wrap gap-2 items-center">
      <Button href={WHATSAPP_URL} variant={variant} target="_blank" rel="noopener" className={className}>
        {showIcon && <WhatsAppIcon />}
        {children}
      </Button>
      <span className="text-xs text-muted">or</span>
      <Button href="/book" variant="outline" className={className}>
        Check Slots Online
      </Button>
    </div>
  );
}
