import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { PhoneButton } from "@/components/cta/PhoneButton";
import { WhatsAppButton } from "@/components/cta/WhatsAppButton";
import { Entrance } from "@/components/motion/Entrance";
import { HERO_TRUST } from "@/lib/content";
import { SITE } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-navy-deep text-white">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <span className="orb left-[-8%] top-16 h-72 w-72 bg-teal/40" />
        <span className="orb orb-slow right-[-6%] top-24 h-80 w-80 bg-coral/35" />
        <span className="orb bottom-0 left-1/3 h-64 w-64 bg-[#8265f8]/30" />
      </div>

      <div className="relative mx-auto grid min-h-[100svh] max-w-7xl items-center gap-10 px-4 pb-16 pt-28 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-7">
          <Entrance>
            <p className="text-xs font-semibold tracking-[0.28em] text-[#55e6dc]">
              {SITE.name.toUpperCase()}
            </p>
            <p className="mt-3 text-xs font-semibold tracking-[0.18em] text-white/70">
              {SITE.location.area.toUpperCase()} · {SITE.location.cityShort.toUpperCase()} · KERALA
            </p>
          </Entrance>
          <Entrance delay={0.08}>
            <h1 className="font-brand mt-6 text-[clamp(3.1rem,7.4vw,6.6rem)] font-semibold leading-[0.92] tracking-tight">
              Professional
              <span className="block">Care.</span>
              <span className="mt-2 block bg-gradient-to-r from-[#55e6dc] via-white to-coral bg-clip-text text-transparent">
                Right at Home.
              </span>
            </h1>
          </Entrance>
          <Entrance delay={0.16}>
            <p className="mt-6 max-w-xl text-lg font-medium leading-8 text-white/90">
              Trusted nurses, caregivers and specialized home healthcare services
              for your loved ones.
            </p>
            <p className="mt-3 max-w-xl text-base leading-7 text-white/70">
              From elderly care and post-hospitalization support to specialized
              nursing and palliative care, CareHive brings dependable healthcare
              support to your doorstep in {SITE.location.city}, Kerala.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <WhatsAppButton label="Get Care Now" messageKey="hero" size="lg" />
              <PhoneButton label="Call CareHive" size="lg" variant="white" />
            </div>
            <p className="mt-4 text-sm text-white/65">
              Or{" "}
              <Link href="/services" className="font-semibold text-[#55e6dc] hover:text-white">
                explore our services
              </Link>
              .
            </p>
            <ul className="mt-8 flex flex-wrap gap-2">
              {HERO_TRUST.map((item) => (
                <li
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2 text-sm font-semibold"
                >
                  <Check className="h-3.5 w-3.5 text-[#55e6dc]" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </Entrance>
        </div>

        <Entrance delay={0.12} className="relative lg:col-span-5">
          <div className="relative mx-auto w-full max-w-xl">
            <div
              aria-hidden
              className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-teal/50 via-white/10 to-coral/40 blur-md"
            />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/25 shadow-[0_30px_80px_-30px_rgb(0_198_200/0.55)]">
              <Image
                src="/images/hero-caregiver.jpg"
                alt="Professional Indian caregiver supporting an elderly patient at home in Kerala"
                width={1536}
                height={1024}
                priority
                loading="eager"
                quality={90}
                sizes="(max-width: 1024px) 92vw, 560px"
                className="h-auto w-full"
              />
            </div>
          </div>
          <div className="absolute bottom-4 left-4 max-w-[16rem] rounded-2xl bg-white p-4 text-navy shadow-xl sm:bottom-6">
            <p className="text-sm font-bold">Home-based care, close to family.</p>
            <p className="mt-1 text-xs text-muted">
              {SITE.location.area}, {SITE.location.city}
            </p>
          </div>
        </Entrance>
      </div>

      <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-[0.65rem] font-semibold tracking-[0.28em] text-white/50">
        SCROLL
      </p>
    </section>
  );
}
