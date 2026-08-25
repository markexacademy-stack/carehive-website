import type { Metadata } from "next";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { PageHero } from "@/components/sections/PageHero";
import { WhatsAppButton } from "@/components/cta/WhatsAppButton";
import { PhoneButton } from "@/components/cta/PhoneButton";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata, faqPageJsonLd } from "@/lib/seo";
import { faqs } from "@/lib/faqs";

export const metadata: Metadata = buildMetadata({
  title: "CareHive FAQs | Home Nursing and Caregiver Questions",
  description:
    "Answers about CareHive home nursing, elderly care, bystander support, specialised care and how to request a caregiver in Trivandrum.",
  path: "/faqs",
});

export default function FaqsPage() {
  return (
    <>
      <JsonLd data={faqPageJsonLd(faqs)} />
      <PageHero
        eyebrow="FAQs"
        title="Questions families usually ask"
        description="If your question is not listed, WhatsApp or call CareHive and we will help you from there."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <WhatsAppButton label="WhatsApp CareHive" messageKey="general" />
          <PhoneButton label="Call Now" variant="outline" />
        </div>
      </PageHero>
      <FAQSection />
      <ContactSection showForm={false} />
      <FinalCTA />
    </>
  );
}
