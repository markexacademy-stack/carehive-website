import type { Metadata } from "next";
import { WhyCareHive } from "@/components/sections/WhyCareHive";
import { TrustSection } from "@/components/sections/TrustSection";
import { LeadFormSection } from "@/components/sections/LeadFormSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { PageHero } from "@/components/sections/PageHero";
import { WhatsAppButton } from "@/components/cta/WhatsAppButton";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Why CareHive | Home Healthcare in Trivandrum",
  description:
    "Why families choose CareHive for compassionate, personalised home healthcare and caregiver support in Trivandrum, Kerala.",
  path: "/why-carehive",
});

export default function WhyCareHivePage() {
  return (
    <>
      <PageHero
        eyebrow="Why CareHive"
        title="Care arranged with dignity, clarity and family in mind"
        description="We work with families to understand the requirement and connect them with suitable home care support."
      >
        <WhatsAppButton label="Talk to a Care Expert" messageKey="general" />
      </PageHero>
      <WhyCareHive />
      <TrustSection />
      <LeadFormSection source="why-carehive" />
      <FinalCTA />
    </>
  );
}
