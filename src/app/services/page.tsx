import type { Metadata } from "next";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { SpecializedCare } from "@/components/sections/SpecializedCare";
import { LeadFormSection } from "@/components/sections/LeadFormSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { PageHero } from "@/components/sections/PageHero";
import { WhatsAppButton } from "@/components/cta/WhatsAppButton";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Home Healthcare Services in Trivandrum | CareHive",
  description:
    "Explore CareHive home nursing, patient care, elderly care, bystander, mother and baby, and specialised home healthcare services in Trivandrum.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Home healthcare services for every stage of need"
        description="Choose a service to understand who it is for, what CareHive can provide, and how to request support."
      >
        <WhatsAppButton label="Get Care Now" messageKey="hero" />
      </PageHero>
      <ServiceGrid heading={false} />
      <SpecializedCare />
      <LeadFormSection source="services" />
      <FinalCTA />
    </>
  );
}
