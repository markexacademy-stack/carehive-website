import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  variant?: "footer" | "default";
  priority?: boolean;
};

const fullLogoStyles = {
  footer: "logo-on-navy h-36 w-auto max-w-[12.5rem] sm:h-40",
  default: "h-16 w-auto max-w-[10rem]",
};

export function Logo({
  className,
  variant = "default",
  priority = false,
}: LogoProps) {
  return (
    <Image
      src="/images/carehive-logo-clear.png"
      alt="CareHive Healthcare Services — Care That Feels Like Home"
      width={545}
      height={596}
      priority={priority}
      loading={priority ? "eager" : "lazy"}
      unoptimized
      className={cn(
        "h-auto w-auto object-contain object-left",
        fullLogoStyles[variant],
        className,
      )}
    />
  );
}
