import type { Metadata } from "next";
import { ContactSection } from "@/components/sections/ContactSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { PageHero } from "@/components/sections/PageHero";
import { PhoneButton } from "@/components/cta/PhoneButton";
import { WhatsAppButton } from "@/components/cta/WhatsAppButton";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Contact CareHive | Home Healthcare in Kazhakkoottam",
  description:
    "Contact CareHive Healthcare Services in Kazhakkoottam, Thiruvananthapuram. Call +91 97787 81988 or +91 88911 55410, or WhatsApp +91 97787 81988 to request a caregiver.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's Talk About Your Care Requirement"
        description={`${SITE.name}, ${SITE.location.display}. Call ${SITE.phone.display} or ${SITE.secondaryPhone.display}, or WhatsApp ${SITE.whatsapp.display}.`}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <PhoneButton label="Call CareHive" />
          <WhatsAppButton label="WhatsApp CareHive" messageKey="general" />
        </div>
      </PageHero>
      <ContactSection />
      <FinalCTA />
    </>
  );
}
