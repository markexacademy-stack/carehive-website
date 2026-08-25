import { PhoneButton } from "@/components/cta/PhoneButton";
import { WhatsAppButton } from "@/components/cta/WhatsAppButton";
import { Container } from "@/components/ui/container";

export function QuickEnquiryBar() {
  return (
    <section className="bg-navy">
      <Container className="flex flex-col items-start justify-between gap-4 py-5 sm:flex-row sm:items-center">
        <p className="text-lg font-semibold text-white">
          Need a caregiver or nurse for your loved one?
        </p>
        <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row">
          <WhatsAppButton label="WhatsApp Now" messageKey="requestCare" />
          <PhoneButton label="Call CareHive" variant="white" />
        </div>
      </Container>
    </section>
  );
}
