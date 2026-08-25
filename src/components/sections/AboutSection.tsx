import Image from "next/image";
import { Check } from "lucide-react";
import { PhoneButton } from "@/components/cta/PhoneButton";
import { WhatsAppButton } from "@/components/cta/WhatsAppButton";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn } from "@/components/ui/fade-in";
import { ABOUT_HIGHLIGHTS } from "@/lib/content";

export function AboutSection() {
  return (
    <section className="bg-soft py-16 sm:py-20" id="about">
      <Container className="grid items-center gap-10 lg:grid-cols-2">
        <FadeIn>
          <div className="relative overflow-hidden rounded-[2rem] shadow-[var(--shadow-card)]">
            <Image
              src="/images/about-care.jpg"
              alt="Indian caregiver sitting with an elderly family member at home in Kerala"
              width={1200}
              height={900}
              className="h-full w-full object-cover"
            />
          </div>
        </FadeIn>
        <FadeIn delay={0.08}>
          <SectionHeading
            eyebrow="About CareHive"
            title="Care That Feels Like Family"
            description="CareHive Healthcare Services is dedicated to providing reliable, compassionate and professional home healthcare support for individuals and families."
          />
          <p className="mt-4 text-base leading-7 text-muted">
            Whether your loved one is recovering after hospitalization, living
            with a chronic condition, requiring elderly care, or needs
            specialized nursing support, our goal is to make quality care
            accessible in the comfort of home.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {ABOUT_HIGHLIGHTS.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm font-semibold text-navy">
                <Check className="h-4 w-4 text-teal" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <PhoneButton label="Speak to Care Expert" />
            <WhatsAppButton label="WhatsApp CareHive" messageKey="general" variant="outline" />
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
