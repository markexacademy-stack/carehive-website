import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/container";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Disclaimer | CareHive Healthcare Services",
  description:
    "Medical and service disclaimer for CareHive home healthcare and caregiver services in Trivandrum.",
  path: "/disclaimer",
});

export default function DisclaimerPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Disclaimer"
        description="Please read this before requesting care or relying on website information."
      />
      <section className="bg-white py-16">
        <Container className="max-w-3xl space-y-8 text-sm leading-7 text-muted">
          <p>{SITE.medicalDisclaimer}</p>
          <p>
            CareHive does not claim to replace doctors, hospitals, diagnostic
            services or emergency response. Specialised services such as
            tracheostomy care, colostomy care and wound care are supportive
            services provided according to professional medical instructions
            given by the patient’s treating clinicians.
          </p>
          <p>
            Website content is general information about home healthcare and
            caregiver services. It is not personalised medical advice.
          </p>
          <p>
            Availability of caregivers or nurses depends on the patient’s
            requirement and service location. Contact CareHive to discuss your
            needs.
          </p>
          <p>
            This page does not list emergency numbers because those can vary by
            location and situation. In an emergency, contact the appropriate
            emergency medical service available to you.
          </p>
          <p>
            {SITE.name}, {SITE.location.display}. {SITE.phone.display}.
          </p>
        </Container>
      </section>
      <FinalCTA />
    </>
  );
}
