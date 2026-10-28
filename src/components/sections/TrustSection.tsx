import { Container } from "@/components/ui/container";
import { TRUST_POINTS } from "@/lib/content";

export function TrustSection() {
  return (
    <section className="overflow-hidden bg-[#fff8f0] py-16 sm:py-20">
      <Container>
        <p className="text-xs font-bold tracking-[0.22em] text-teal">Trust</p>
        <h2 className="font-brand mt-3 max-w-4xl text-4xl font-semibold leading-tight text-navy sm:text-6xl">
          Your Family Deserves Care You Can Trust
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
          CareHive is built around a professional, family-focused way of working — without exaggerated claims or invented credentials.
        </p>
        <ol className="mt-10 divide-y divide-navy/10 border-y border-navy/10">
          {TRUST_POINTS.map((item, index) => (
            <li key={item} className="flex items-baseline gap-6 py-5">
              <span className="font-brand text-2xl text-coral">0{index + 1}</span>
              <span className="text-lg font-semibold text-navy">{item}</span>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
