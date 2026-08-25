import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  variant?: "footer" | "default";
  priority?: boolean;
};

const fullLogoStyles = {
  footer: "h-36 w-auto max-w-[13rem] sm:h-40",
  default: "h-16 w-auto max-w-[11rem]",
};

export function Logo({
  className,
  variant = "default",
  priority = false,
}: LogoProps) {
  return (
    <Image
      src="/images/carehive-logo.png"
      alt="CareHive Healthcare Services — Care That Feels Like Home"
      width={535}
      height={584}
      priority={priority}
      quality={100}
      className={cn(
        "h-auto w-auto object-contain object-left",
        fullLogoStyles[variant],
        className,
      )}
    />
  );
}
