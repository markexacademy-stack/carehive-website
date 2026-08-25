import { ArrowUpRight } from "lucide-react";
import { WhatsAppButton } from "@/components/cta/WhatsAppButton";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { SPECIALIZED_HIGHLIGHTS } from "@/lib/content";

export function SpecializedCare() {
  return (
    <section className="bg-navy py-16 text-white sm:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <SectionHeading
            invert
            eyebrow="Specialized Care"
            title="When Care Needs More Attention"
            description="Some families need more than daily companionship. CareHive can discuss specialised home support according to professional medical instructions."
          />
          <ul className="grid gap-3 sm:grid-cols-2">
            {SPECIALIZED_HIGHLIGHTS.map((item) => (
              <li
                key={item}
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold"
              >
                {item}
                <ArrowUpRight className="h-4 w-4 text-coral" aria-hidden />
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-10">
          <WhatsAppButton
            label="Discuss Your Care Requirement"
            messageKey="specialized"
            size="lg"
          />
        </div>
      </Container>
    </section>
  );
}
