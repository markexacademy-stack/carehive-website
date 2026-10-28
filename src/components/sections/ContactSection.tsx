import { MapPin, Phone, MessageCircle } from "lucide-react";
import { PhoneButton } from "@/components/cta/PhoneButton";
import { WhatsAppButton } from "@/components/cta/WhatsAppButton";
import { LeadForm } from "@/components/forms/LeadForm";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { SITE } from "@/lib/site";

export function ContactSection({
  showForm = true,
  heading = "Let's Talk About Your Care Requirement",
}: {
  showForm?: boolean;
  heading?: string;
}) {
  const mapsUrl = process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL;

  return (
    <section className="bg-[#102a56] py-16 text-white sm:py-24" id="contact">
      <Container>
        <SectionHeading
          invert
          className="mb-10"
          eyebrow="Contact"
          title={heading}
          description="Call, WhatsApp, or send a care request. CareHive Healthcare Services is based in Kazhakkoottam, Thiruvananthapuram."
        />
        <div className={`grid gap-8 ${showForm ? "lg:grid-cols-2" : "lg:grid-cols-[1.1fr_0.9fr]"}`}>
          <div className="space-y-5">
            <div className="rounded-[2rem] border border-white/10 bg-navy-deep p-6 sm:p-8">
              <h3 className="font-brand text-2xl font-semibold">{SITE.name}</h3>
              <p className="mt-3 flex items-start gap-2 text-sm leading-6 text-white/75">
                <MapPin className="mt-0.5 h-4 w-4 text-[#55e6dc]" aria-hidden />
                {SITE.location.display}
              </p>
              <p className="mt-3 flex items-center gap-2 text-sm font-semibold">
                <Phone className="h-4 w-4 text-[#55e6dc]" aria-hidden />
                <a href={SITE.phone.href} className="hover:text-[#55e6dc]">
                  {SITE.phone.display}
                </a>
              </p>
              <p className="mt-2 flex items-center gap-2 text-sm font-semibold">
                <Phone className="h-4 w-4 text-[#55e6dc]" aria-hidden />
                <a href={SITE.secondaryPhone.href} className="hover:text-[#55e6dc]">
                  {SITE.secondaryPhone.display}
                </a>
              </p>
              <p className="mt-2 flex items-center gap-2 text-sm font-semibold">
                <MessageCircle className="h-4 w-4 text-[#55e6dc]" aria-hidden />
                WhatsApp {SITE.whatsapp.display}
              </p>
              <p className="mt-2 text-sm font-semibold">
                <a href={`mailto:${SITE.email}`} className="hover:text-[#55e6dc]">
                  {SITE.email}
                </a>
              </p>
              <p className="mt-1 text-sm font-semibold text-teal">
                <a href={SITE.website.href} target="_blank" rel="noopener noreferrer" className="hover:text-teal-dark">
                  {SITE.website.label}
                </a>
              </p>
              <div className="mt-5 flex flex-col gap-2 sm:flex-row">
                <PhoneButton label="Call CareHive" />
                <WhatsAppButton label="WhatsApp CareHive" messageKey="general" />
              </div>
            </div>
            <div className="min-h-64 overflow-hidden rounded-[2rem] border border-white/10 bg-[#07162e]">
              {mapsUrl ? (
                <iframe
                  title="CareHive location map"
                  src={mapsUrl}
                  className="h-80 w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              ) : (
                <div className="flex h-80 flex-col items-center justify-center px-6 text-center">
                  <MapPin className="h-8 w-8 text-teal" aria-hidden />
                  <p className="mt-3 font-semibold text-white">
                    Map location will be added once the exact CareHive address is confirmed.
                  </p>
                  <p className="mt-2 text-sm text-white/70">
                    {SITE.location.display}
                  </p>
                </div>
              )}
            </div>
          </div>
          {showForm ? <LeadForm source="contact" /> : null}
        </div>
      </Container>
    </section>
  );
}
