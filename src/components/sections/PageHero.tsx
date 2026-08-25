import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
  dark = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <section
      className={cn(
        "py-14 sm:py-16",
        dark
          ? "bg-navy text-white"
          : "bg-gradient-to-br from-teal-light via-soft to-white",
      )}
    >
      <Container className="max-w-4xl">
        {eyebrow ? (
          <p
            className={cn(
              "text-xs font-semibold tracking-[0.18em]",
              dark ? "text-teal-light" : "text-teal",
            )}
          >
            {eyebrow}
          </p>
        ) : null}
        <h1
          className={cn(
            "mt-3 text-4xl font-extrabold tracking-tight text-balance sm:text-5xl",
            dark ? "text-white" : "text-navy",
          )}
        >
          {title}
        </h1>
        {description ? (
          <p
            className={cn(
              "mt-4 max-w-2xl text-base leading-7 sm:text-lg",
              dark ? "text-white/80" : "text-muted",
            )}
          >
            {description}
          </p>
        ) : null}
        {children ? <div className="mt-8">{children}</div> : null}
      </Container>
    </section>
  );
}
