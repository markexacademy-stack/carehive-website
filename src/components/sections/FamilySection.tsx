import Image from "next/image";
import { WhatsAppButton } from "@/components/cta/WhatsAppButton";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function FamilySection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="For families near and far"
            title="Living Away From Your Parents?"
            description="Distance should never mean your loved ones have to manage care alone. CareHive helps families arrange dependable home-based care and support for elderly parents and loved ones."
          />
          <p className="mt-4 text-base leading-7 text-muted">
            Whether you are in another city, another country, or simply at work
            all day, we help you put a caregiver in place and stay informed.
          </p>
          <div className="mt-8">
            <WhatsAppButton
              label="Arrange Care for My Family"
              messageKey="familyNri"
              size="lg"
            />
          </div>
        </div>
        <div className="overflow-hidden rounded-[2rem] shadow-[var(--shadow-card)]">
          <Image
            src="/images/family-parents.jpg"
            alt="Elderly Indian parents at home in Kerala, the family CareHive can support from a distance"
            width={1200}
            height={900}
            className="h-full w-full object-cover"
          />
        </div>
      </Container>
    </section>
  );
}
