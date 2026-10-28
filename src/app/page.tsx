import { BrochureCards } from "@/components/sections/BrochureCards";
import { Hero } from "@/components/sections/Hero";
import { QuickEnquiryBar } from "@/components/sections/QuickEnquiryBar";
import { TrustIndicators } from "@/components/sections/TrustIndicators";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { SpecializedCare } from "@/components/sections/SpecializedCare";
import { WhyCareHive } from "@/components/sections/WhyCareHive";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { CareOptions } from "@/components/sections/CareOptions";
import { FamilySection } from "@/components/sections/FamilySection";
import { TrustSection } from "@/components/sections/TrustSection";
import { LeadFormSection } from "@/components/sections/LeadFormSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <BrochureCards />
      <QuickEnquiryBar />
      <TrustIndicators />
      <AboutSection />
      <ServiceGrid />
      <SpecializedCare />
      <WhyCareHive />
      <ProcessSteps />
      <CareOptions />
      <FamilySection />
      <TrustSection />
      <LeadFormSection source="homepage" />
      <Testimonials />
      <FAQSection />
      <ContactSection showForm={false} />
      <FinalCTA />
    </>
  );
}
