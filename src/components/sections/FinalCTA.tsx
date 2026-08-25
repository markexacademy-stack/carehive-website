import { PhoneButton } from "@/components/cta/PhoneButton";
import { WhatsAppButton } from "@/components/cta/WhatsAppButton";
import { Container } from "@/components/ui/container";

export function FinalCTA() {
  return (
    <section className="bg-navy py-14 text-white">
      <Container className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight">
            Ready to arrange care at home?
          </h2>
          <p className="mt-2 max-w-xl text-white/75">
            WhatsApp or call CareHive. Tell us what your loved one needs, and we
            will help you take the next step.
          </p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <WhatsAppButton label="WhatsApp CareHive" messageKey="requestCare" size="lg" />
          <PhoneButton label="Call Now" variant="white" size="lg" />
        </div>
      </Container>
    </section>
  );
}
