import { CTAButton } from "@/components/cta/CTAButton";
import { WhatsAppButton } from "@/components/cta/WhatsAppButton";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { PROCESS_STEPS } from "@/lib/content";

export function ProcessSteps() {
  return (
    <section className="bg-[#fff1ea] py-16 sm:py-24" id="how-it-works">
      <Container>
        <SectionHeading
          className="mb-10"
          eyebrow="How It Works"
          title="Requesting care should feel straightforward"
          description="Four clear steps from the first message to care beginning at home."
        />
        <ol className="relative grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          <li
            aria-hidden
            className="pointer-events-none absolute left-[12%] right-[12%] top-10 hidden h-px bg-gradient-to-r from-teal via-teal/40 to-coral xl:block"
          />
          {PROCESS_STEPS.map((step) => (
            <li key={step.number} className="relative px-1 py-2">
              <span className="font-brand relative z-10 block text-5xl font-semibold text-coral">
                {step.number}
              </span>
              <h3 className="mt-3 text-lg font-bold text-navy">{step.title}</h3>
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
