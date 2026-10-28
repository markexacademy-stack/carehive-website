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
    <section className="relative overflow-hidden bg-[#07162e] py-16 text-white sm:py-24" id="about">
      <Container className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <FadeIn>
          <div>
            <SectionHeading
              invert
              eyebrow="About CareHive"
              title="Care That Feels Like Family"
              description="CareHive Healthcare Services is dedicated to providing reliable, compassionate and professional home healthcare support for individuals and families."
            />
            <p className="mt-4 max-w-xl text-base leading-7 text-white/75">
              Whether your loved one is recovering after hospitalization, living
              with a chronic condition, requiring elderly care, or needs
              specialized nursing support, our goal is to make quality care
              accessible in the comfort of home.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {ABOUT_HIGHLIGHTS.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm font-semibold text-white">
                  <Check className="h-4 w-4 text-[#55e6dc]" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <PhoneButton label="Speak to Care Expert" variant="white" />
              <WhatsAppButton label="WhatsApp CareHive" messageKey="general" />
            </div>
          </div>
        </FadeIn>
        <FadeIn delay={0.08}>
          <div className="relative mx-auto w-full max-w-xl">
            <div
              aria-hidden
              className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-coral/40 to-teal/40 blur-md"
            />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/20">
              <Image
                src="/images/about-care.jpg"
                alt="Indian caregiver sitting with an elderly family member at home in Kerala"
                width={1536}
                height={1024}
                quality={90}
                className="h-auto w-full"
                sizes="(max-width: 1024px) 92vw, 560px"
              />
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
