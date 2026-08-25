import { Phone } from "lucide-react";
import { CTAButton } from "@/components/cta/CTAButton";
import { PHONE_HREF } from "@/lib/phone";

type PhoneButtonProps = {
  label?: string;
  variant?: "phone" | "outline" | "white" | "primary";
  size?: "sm" | "md" | "lg";
  className?: string;
  showIcon?: boolean;
};

export function PhoneButton({
  label = "Call Now",
  variant = "phone",
  size = "md",
  className,
  showIcon = true,
}: PhoneButtonProps) {
  return (
    <CTAButton
      href={PHONE_HREF}
      variant={variant}
      size={size}
      className={className}
      icon={showIcon ? <Phone className="h-4 w-4" aria-hidden /> : undefined}
    >
      {label}
    </CTAButton>
  );
}
