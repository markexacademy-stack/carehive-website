import { PhoneButton } from "@/components/cta/PhoneButton";
import { WhatsAppButton } from "@/components/cta/WhatsAppButton";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-teal via-[#12315f] to-coral px-4 py-20 text-white sm:px-6 sm:py-28">
      <p
        aria-hidden
        className="pointer-events-none absolute -left-4 top-0 font-brand text-[18vw] leading-none text-white/10"
      >
        Home
      </p>
      <div className="relative mx-auto flex max-w-5xl flex-col items-start gap-8">
        <h2 className="font-brand max-w-3xl text-4xl font-semibold leading-[1.05] sm:text-6xl">
          Ready to arrange care at home?
        </h2>
        <p className="max-w-xl text-lg text-white/85">
          WhatsApp or call CareHive. Tell us what your loved one needs, and we
          will help you take the next step.
        </p>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <WhatsAppButton label="WhatsApp CareHive" messageKey="requestCare" size="lg" />
          <PhoneButton label="Call Now" variant="white" size="lg" />
        </div>
      </div>
    </section>
  );
}
