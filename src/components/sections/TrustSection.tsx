import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { TRUST_POINTS } from "@/lib/content";

export function TrustSection() {
  return (
    <section className="bg-soft py-16 sm:py-20">
      <Container>
        <SectionHeading
          className="mb-10"
          title="Your Family Deserves Care You Can Trust"
          description="CareHive is built around a professional, family-focused way of working — without exaggerated claims or invented credentials."
        />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TRUST_POINTS.map((item) => (
            <li
              key={item}
              className="flex items-center gap-3 rounded-2xl border border-line bg-white px-5 py-4 text-sm font-semibold text-navy"
            >
              <CheckCircle2 className="h-5 w-5 text-teal" aria-hidden />
              {item}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
