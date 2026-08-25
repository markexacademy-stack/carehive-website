import Link from "next/link";
import { cn } from "@/lib/utils";

const variants = {
  primary:
    "bg-teal text-white shadow-sm hover:bg-teal-dark hover:-translate-y-0.5",
  secondary:
    "bg-navy text-white shadow-sm hover:bg-navy-deep hover:-translate-y-0.5",
  outline:
    "border border-navy/15 bg-white text-navy hover:border-teal hover:text-teal",
  coral:
    "bg-coral text-white shadow-sm hover:bg-coral-dark hover:-translate-y-0.5",
  white:
    "bg-white text-navy hover:bg-teal-light",
  ghost:
    "bg-transparent text-navy hover:bg-teal-light",
  whatsapp:
    "bg-whatsapp text-white shadow-sm hover:brightness-110 hover:-translate-y-0.5",
  phone:
    "bg-navy text-white shadow-sm hover:bg-navy-deep hover:-translate-y-0.5",
};

const sizes = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-5 text-sm sm:text-[0.95rem]",
  lg: "h-14 px-6 text-base",
};

type CTAButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  className?: string;
  external?: boolean;
  icon?: React.ReactNode;
};

export function CTAButton({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  external,
  icon,
}: CTAButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-200 focus-visible:outline-none",
    variants[variant],
    sizes[size],
    className,
  );

  if (external || href.startsWith("http") || href.startsWith("tel:")) {
    return (
      <a
        href={href}
        className={classes}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {icon}
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {icon}
      {children}
    </Link>
  );
}
