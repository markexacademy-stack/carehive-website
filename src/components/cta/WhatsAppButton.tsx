import { MessageCircle } from "lucide-react";
import { CTAButton } from "@/components/cta/CTAButton";
import {
  createWhatsAppLink,
  createWhatsAppLinkFromKey,
  type WhatsAppMessageKey,
} from "@/lib/whatsapp";

type WhatsAppButtonProps = {
  label?: string;
  message?: string;
  messageKey?: WhatsAppMessageKey;
  variant?: "whatsapp" | "outline" | "white" | "primary";
  size?: "sm" | "md" | "lg";
  className?: string;
  showIcon?: boolean;
};

export function WhatsAppButton({
  label = "WhatsApp Us",
  message,
  messageKey = "general",
  variant = "whatsapp",
  size = "md",
  className,
  showIcon = true,
}: WhatsAppButtonProps) {
  const href = message
    ? createWhatsAppLink(message)
    : createWhatsAppLinkFromKey(messageKey);

  return (
    <CTAButton
      href={href}
      variant={variant}
      size={size}
      className={className}
      icon={showIcon ? <MessageCircle className="h-4 w-4" aria-hidden /> : undefined}
    >
      {label}
    </CTAButton>
  );
}
