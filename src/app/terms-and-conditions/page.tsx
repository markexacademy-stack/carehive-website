import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/container";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Terms & Conditions | CareHive Healthcare Services",
  description:
    "Terms for using the CareHive website and requesting home healthcare or caregiver support.",
  path: "/terms-and-conditions",
});

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        description="These terms apply to use of the CareHive website and to care enquiries made through it. They are a professional working draft until company-specific legal terms are finalised."
      />
      <section className="bg-white py-16">
        <Container className="max-w-3xl space-y-8 text-sm leading-7 text-muted">
          <section>
            <h2 className="text-xl font-bold text-navy">Website use</h2>
            <p className="mt-3">
              This website is provided to share information about {SITE.name}
              and to help families request care. Content is for general
              information and does not create a treatment relationship by itself.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-navy">Care enquiries</h2>
            <p className="mt-3">
              Submitting a form, calling, or sending a WhatsApp message is a
              request for information or support. CareHive will discuss
              availability, suitability and next steps. An enquiry does not
              guarantee that a caregiver or nurse can be assigned on a
              particular date or location.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-navy">No medical replacement</h2>
            <p className="mt-3">{SITE.medicalDisclaimer}</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-navy">Accuracy</h2>
            <p className="mt-3">
              We aim to keep service descriptions clear and current. We do not
              publish invented certifications, hospital affiliations or
              guaranteed outcomes. Specialised support is described as care
              according to professional medical instructions where appropriate.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-navy">Liability</h2>
            <p className="mt-3">
              Detailed service terms, fees and responsibilities will be
              confirmed directly with the family before care begins. This
              website does not list prices and does not replace a care
              discussion.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-navy">Contact</h2>
            <p className="mt-3">
              {SITE.name}, {SITE.location.display}. {SITE.phone.display} or{" "}
              {SITE.secondaryPhone.display}.
            </p>
          </section>
        </Container>
      </section>
      <FinalCTA />
    </>
  );
}
