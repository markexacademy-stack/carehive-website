import { WhatsAppButton } from "@/components/cta/WhatsAppButton";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { CARE_OPTIONS } from "@/lib/content";

export function CareOptions() {
  return (
    <section className="bg-teal-light/60 py-16 sm:py-20">
      <Container>
        <SectionHeading
          className="mb-10"
          eyebrow="Care Options"
          title="Choose the hours that fit your family"
          description="No published prices — every arrangement is discussed based on the patient's needs. Request a quote and CareHive will talk it through."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CARE_OPTIONS.map((option) => (
            <article
              key={option.title}
              className="flex h-full flex-col rounded-3xl border border-white bg-white p-6 shadow-[var(--shadow-card)]"
            >
              <h3 className="text-lg font-bold text-navy">{option.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-6 text-muted">{option.text}</p>
              <div className="mt-5">
                <WhatsAppButton
                  label="Request a Quote"
                  messageKey="quote"
                  size="sm"
                />
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
