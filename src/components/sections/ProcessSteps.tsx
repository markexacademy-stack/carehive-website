import { CTAButton } from "@/components/cta/CTAButton";
import { WhatsAppButton } from "@/components/cta/WhatsAppButton";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { PROCESS_STEPS } from "@/lib/content";

export function ProcessSteps() {
  return (
    <section className="bg-white py-16 sm:py-20" id="how-it-works">
      <Container>
        <SectionHeading
          className="mb-10"
          eyebrow="How It Works"
          title="Requesting care should feel straightforward"
          description="Four clear steps from the first message to care beginning at home."
        />
        <ol className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {PROCESS_STEPS.map((step) => (
            <li
              key={step.number}
              className="relative rounded-3xl border border-line bg-soft p-6"
            >
              <span className="text-3xl font-extrabold text-teal">{step.number}</span>
              <h3 className="mt-4 text-lg font-bold text-navy">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{step.text}</p>
            </li>
          ))}
        </ol>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <WhatsAppButton label="Start Your Care Request" messageKey="requestCare" />
          <CTAButton href="/#request-care" variant="outline">
            Use the care form
          </CTAButton>
        </div>
      </Container>
    </section>
  );
}
