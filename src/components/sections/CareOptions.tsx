import { WhatsAppButton } from "@/components/cta/WhatsAppButton";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { CARE_OPTIONS } from "@/lib/content";

const tones = [
  "bg-navy text-white",
  "bg-white text-navy",
  "bg-coral text-white",
  "bg-[#12315f] text-white",
  "bg-[#fff1ea] text-navy",
  "bg-teal text-white",
  "bg-navy-deep text-white",
];

export function CareOptions() {
  return (
    <section className="bg-[#07162e] py-16 text-white sm:py-24">
      <Container>
        <SectionHeading
          invert
          className="mb-10 max-w-3xl"
          eyebrow="Care Options"
          title="Choose the hours that fit your family"
          description="No published prices — every arrangement is discussed based on the patient's needs. Request a quote and CareHive will talk it through."
        />
        <div className="grid gap-4 md:grid-cols-12">
          {CARE_OPTIONS.map((option, index) => (
            <article
              key={option.title}
              className={`flex flex-col justify-between rounded-[1.75rem] p-6 ${tones[index % tones.length]} ${
                index % 4 === 0 ? "md:col-span-7 min-h-56" : "md:col-span-5"
              }`}
            >
              <div>
                <p className="text-xs font-bold tracking-[0.2em] opacity-70">
                  0{index + 1}
                </p>
                <h3 className="font-brand mt-3 text-3xl font-semibold">{option.title}</h3>
                <p className="mt-3 max-w-md text-sm leading-6 opacity-80">{option.text}</p>
              </div>
              <div className="mt-6">
                <WhatsAppButton label="Request a Quote" messageKey="quote" size="sm" />
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
