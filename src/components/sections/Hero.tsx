import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { PhoneButton } from "@/components/cta/PhoneButton";
import { WhatsAppButton } from "@/components/cta/WhatsAppButton";
import { Container } from "@/components/ui/container";
import { HERO_TRUST } from "@/lib/content";
import { SITE } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-teal-light via-soft to-coral-light/40">
      <DecorativeShapes />
      <Container className="grid items-center gap-10 py-10 sm:py-12 lg:grid-cols-[1.05fr_0.95fr] lg:py-16">
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-teal">
            {SITE.name.toUpperCase()}
          </p>
          <p className="mt-2 text-xs font-semibold tracking-[0.16em] text-muted">
            {SITE.location.area.toUpperCase()} · {SITE.location.cityShort.toUpperCase()} · KERALA
          </p>
          <h1 className="mt-4 text-4xl font-extrabold leading-[1.08] tracking-tight text-navy sm:text-5xl lg:text-[3.35rem]">
            Professional Care.
            <span className="mt-1 block bg-gradient-to-r from-teal to-coral bg-clip-text text-transparent">
              Right at Home.
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-lg font-medium leading-8 text-ink">
            Trusted nurses, caregivers and specialized home healthcare services
            for your loved ones.
          </p>
          <p className="mt-3 max-w-xl text-base leading-7 text-muted">
            From elderly care and post-hospitalization support to specialized
            nursing and palliative care, CareHive brings dependable healthcare
            support to your doorstep in {SITE.location.city}, Kerala.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <WhatsAppButton
              label="Get Care Now"
              messageKey="hero"
              size="lg"
              variant="primary"
            />
            <PhoneButton label="Call CareHive" size="lg" variant="outline" />
          </div>
          <p className="mt-4 text-sm text-muted">
            Or{" "}
            <Link href="/services" className="font-semibold text-teal hover:text-teal-dark">
              explore our services
            </Link>
            .
          </p>
          <ul className="mt-7 grid grid-cols-2 gap-3 sm:max-w-lg">
            {HERO_TRUST.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm font-semibold text-navy">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-teal text-white">
                  <Check className="h-3.5 w-3.5" aria-hidden />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full bg-coral/15 blur-2xl" />
          <div className="absolute -bottom-6 -right-4 h-28 w-28 rounded-full bg-teal/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/80 shadow-[var(--shadow-card)]">
            <Image
              src="/images/hero-caregiver.jpg"
              alt="Professional Indian caregiver supporting an elderly patient at home in Kerala"
              width={1200}
              height={900}
              priority
              sizes="(max-width: 1024px) 100vw, 560px"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-4 left-4 right-4 max-w-[17rem] rounded-2xl bg-white/95 p-4 shadow-lg sm:left-6 sm:right-auto">
            <p className="text-sm font-bold text-navy">Home-based care, close to family.</p>
            <p className="mt-1 text-xs text-muted">
              {SITE.location.area}, {SITE.location.city}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

function DecorativeShapes() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <svg className="absolute left-[-40px] top-10 h-40 w-40 text-coral/20" viewBox="0 0 100 100">
        <path
          fill="currentColor"
          d="M50 88 C50 88 12 62 12 38 C12 24 22 16 32 16 C40 16 46 20 50 28 C54 20 60 16 68 16 C78 16 88 24 88 38 C88 62 50 88 50 88 Z"
        />
      </svg>
      <svg className="absolute right-8 top-16 h-28 w-28 text-navy/10" viewBox="0 0 80 80">
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          d="M40 12 L68 34 V64 C68 68 64 72 60 72 H20 C16 72 12 68 12 64 V34 Z"
        />
      </svg>
    </div>
  );
}
