import type { Metadata } from "next";
import { AboutSection } from "@/components/sections/AboutSection";
import { WhyCareHive } from "@/components/sections/WhyCareHive";
import { TrustSection } from "@/components/sections/TrustSection";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { LeadFormSection } from "@/components/sections/LeadFormSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { PageHero } from "@/components/sections/PageHero";
import { WhatsAppButton } from "@/components/cta/WhatsAppButton";
import { PhoneButton } from "@/components/cta/PhoneButton";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About CareHive | Home Healthcare in Trivandrum",
  description:
    "CareHive Healthcare Services provides compassionate, professional home healthcare, nursing and caregiver support in Kazhakkoottam, Thiruvananthapuram.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Care That Feels Like Family"
        description="CareHive Healthcare Services is dedicated to providing reliable, compassionate and professional home healthcare support for individuals and families in Thiruvananthapuram."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <WhatsAppButton label="Talk to a Care Expert" messageKey="general" />
          <PhoneButton label="Speak to Care Expert" variant="outline" />
        </div>
      </PageHero>
      <AboutSection />
      <WhyCareHive />
      <TrustSection />
      <ProcessSteps />
      <LeadFormSection source="about" />
      <FinalCTA />
    </>
  );
}
