import Image from "next/image";
import { WhatsAppButton } from "@/components/cta/WhatsAppButton";
import { SectionHeading } from "@/components/ui/section-heading";

export function FamilySection() {
  return (
    <section className="overflow-hidden bg-[#07162e] text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-20">
        <div className="relative overflow-hidden rounded-[1.75rem] border border-white/15">
          <Image
            src="/images/family-parents.jpg"
            alt="Elderly Indian parents at home in Kerala, the family CareHive can support from a distance"
            width={1536}
            height={1024}
            quality={90}
            sizes="(max-width: 1024px) 92vw, 640px"
            className="h-auto w-full"
          />
        </div>
        <div className="rounded-[2rem] border border-white/15 bg-navy-deep/80 p-6 sm:p-8">
          <SectionHeading
            invert
            eyebrow="For families near and far"
            title="Living Away From Your Parents?"
            description="Distance should never mean your loved ones have to manage care alone. CareHive helps families arrange dependable home-based care and support for elderly parents and loved ones."
          />
          <p className="mt-4 text-base leading-7 text-white/80">
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
      </div>
    </section>
  );
}
