import { Entrance } from "@/components/motion/Entrance";
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
        "relative overflow-hidden py-20 text-white sm:py-24",
        dark ? "bg-navy" : "bg-navy-deep",
      )}
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <span className="float-soft absolute -left-10 top-8 h-36 w-36 rounded-full bg-coral/10 blur-2xl" />
        <span className="float-soft float-soft-delay absolute right-0 top-0 h-40 w-40 rounded-full bg-teal/15 blur-2xl" />
      </div>
      <Container className="relative grid items-end gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <Entrance>
          {eyebrow ? (
            <p
              className={cn(
                "text-xs font-semibold tracking-[0.18em]",
                "text-[#55e6dc]",
              )}
            >
              {eyebrow}
            </p>
          ) : null}
          <h1
            className={cn(
              "font-brand mt-3 text-4xl font-semibold tracking-tight text-balance sm:text-5xl",
              "text-white",
            )}
          >
            {title}
          </h1>
        </Entrance>
        <Entrance delay={0.08}>
          {description ? (
            <p
              className={cn(
                "max-w-xl text-base leading-7 sm:text-lg",
                "text-white/75",
              )}
            >
              {description}
            </p>
          ) : null}
          {children ? <div className="mt-6">{children}</div> : null}
        </Entrance>
      </Container>
    </section>
  );
}
