import type { Metadata } from "next";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { CareOptions } from "@/components/sections/CareOptions";
import { LeadFormSection } from "@/components/sections/LeadFormSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { PageHero } from "@/components/sections/PageHero";
import { WhatsAppButton } from "@/components/cta/WhatsAppButton";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "How CareHive Works | Request a Caregiver in Trivandrum",
  description:
    "See how CareHive arranges home healthcare: tell us what you need, we understand the requirement, match a caregiver, and care begins at home.",
  path: "/how-it-works",
});

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="How It Works"
        title="From the first message to care at home"
        description="Requesting a caregiver should be simple. CareHive follows a clear four-step process."
      >
        <WhatsAppButton label="Start Your Care Request" messageKey="requestCare" />
      </PageHero>
      <ProcessSteps />
      <CareOptions />
      <LeadFormSection source="how-it-works" />
      <FinalCTA />
    </>
  );
}
