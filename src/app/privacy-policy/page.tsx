import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/container";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy | CareHive Healthcare Services",
  description:
    "How CareHive Healthcare Services collects and uses enquiry information submitted through this website.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="This page explains how CareHive handles information you share through the website. It is a working policy statement and can be updated when formal legal counsel is completed."
      />
      <section className="bg-white py-16">
        <Container className="max-w-3xl space-y-8 text-sm leading-7 text-muted">
          <p>
            {SITE.name} (“CareHive”, “we”, “us”) operates this website to explain
            our home healthcare services and to receive care enquiries.
          </p>
          <section>
            <h2 className="text-xl font-bold text-navy">Information we collect</h2>
            <p className="mt-3">
              When you submit the Request Care or contact form, we collect the
              details you provide, which may include your name, phone number,
              WhatsApp number, location, patient age, type of care requested,
              preferred care hours, preferred start date and any additional
              information you choose to share.
            </p>
            <p className="mt-3">
              We ask families not to include unnecessary medical records,
              diagnoses or sensitive health documents in the form. Share only
              what is needed for us to understand the care requirement.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-navy">How we use information</h2>
            <p className="mt-3">
              Enquiry details are used to respond to your request, discuss
              suitable care support, and keep an internal record of the
              conversation. We do not sell personal information.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-navy">Sharing</h2>
            <p className="mt-3">
              Information may be shared internally with CareHive team members
              who need it to respond to your enquiry. If you later engage a
              caregiver or nurse through CareHive, relevant practical details
              may be shared as needed to arrange that support.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-navy">Storage and security</h2>
            <p className="mt-3">
              Submitted enquiries are stored using the website’s configured
              lead-storage method (currently a protected server-side store,
              with optional webhook or database integration when credentials
              are provided). We take reasonable steps to keep this information
              from being publicly accessible.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-navy">Your choices</h2>
            <p className="mt-3">
              You may contact CareHive on {SITE.phone.display} to ask about an
              enquiry you submitted, or to request that we update or close a
              record where practical.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-navy">Contact</h2>
            <p className="mt-3">
              {SITE.name}, {SITE.location.display}. Phone / WhatsApp:{" "}
              {SITE.phone.display}.
            </p>
          </section>
        </Container>
      </section>
      <FinalCTA />
    </>
  );
}
