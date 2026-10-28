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
    <section className="bg-white py-16 sm:py-20" id="contact">
      <Container>
        <SectionHeading
          className="mb-10"
          eyebrow="Contact"
          title={heading}
          description="Call, WhatsApp, or send a care request. CareHive Healthcare Services is based in Kazhakkoottam, Thiruvananthapuram."
        />
        <div className={`grid gap-8 ${showForm ? "lg:grid-cols-2" : ""}`}>
          <div className="space-y-5">
            <div className="rounded-3xl border border-line bg-soft p-6">
              <h3 className="text-lg font-bold text-navy">{SITE.name}</h3>
              <p className="mt-3 flex items-start gap-2 text-sm leading-6 text-muted">
                <MapPin className="mt-0.5 h-4 w-4 text-teal" aria-hidden />
                {SITE.location.display}
              </p>
              <p className="mt-3 flex items-center gap-2 text-sm font-semibold text-navy">
                <Phone className="h-4 w-4 text-teal" aria-hidden />
                <a href={SITE.phone.href} className="hover:text-teal">
                  {SITE.phone.display}
                </a>
              </p>
              <p className="mt-2 flex items-center gap-2 text-sm font-semibold text-navy">
                <Phone className="h-4 w-4 text-teal" aria-hidden />
                <a href={SITE.secondaryPhone.href} className="hover:text-teal">
                  {SITE.secondaryPhone.display}
                </a>
              </p>
              <p className="mt-2 flex items-center gap-2 text-sm font-semibold text-navy">
                <MessageCircle className="h-4 w-4 text-teal" aria-hidden />
                WhatsApp {SITE.whatsapp.display}
              </p>
              <p className="mt-2 text-sm font-semibold text-navy">
                <a href={`mailto:${SITE.email}`} className="hover:text-teal">
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
            <div className="overflow-hidden rounded-3xl border border-line bg-teal-light min-h-64">
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
                  <p className="mt-3 font-semibold text-navy">
                    Map location will be added once the exact CareHive address is confirmed.
                  </p>
                  <p className="mt-2 text-sm text-muted">
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
