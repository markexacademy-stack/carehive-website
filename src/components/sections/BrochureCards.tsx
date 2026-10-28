import Image from "next/image";
import { Globe, Mail, MapPin, Phone } from "lucide-react";
import { SpotlightCard } from "@/components/motion/SpotlightCard";
import { WaveBand } from "@/components/motion/WaveBand";
import { Container } from "@/components/ui/container";
import { SITE } from "@/lib/site";

export function BrochureCards() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-teal-light/40 to-white py-16 sm:py-20">
      <WaveBand className="absolute inset-x-0 top-0" />
      <Container className="relative">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-teal">
          Care that feels like home
        </p>
        <h2 className="mt-3 max-w-3xl font-brand text-3xl font-semibold text-navy sm:text-4xl">
          Home healthcare, patient support and NRI family coordination
        </h2>
        <p className="mt-3 max-w-2xl text-base leading-7 text-muted">
          {SITE.promise}. The same cards families see on our CareHive brochure,
          now on the website.
        </p>

        <ul className="mt-6 flex flex-wrap gap-2">
          {SITE.pillars.map((item) => (
            <li
              key={item}
              className="rounded-full border border-teal/20 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-navy"
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <SpotlightCard>
            <figure className="overflow-hidden rounded-[1.75rem] border border-white bg-white shadow-[var(--shadow-card)]">
              <Image
                src="/images/brochure-brand.png"
                alt="CareHive logo card: Home Healthcare, Patient Support and NRI Family Coordination"
                width={1400}
                height={980}
                className="h-auto w-full object-cover"
              />
            </figure>
          </SpotlightCard>
          <SpotlightCard>
            <figure className="overflow-hidden rounded-[1.75rem] border border-white bg-white shadow-[var(--shadow-card)]">
              <Image
                src="/images/brochure-services.png"
                alt="CareHive services card with patient care, specialised nursing, NRI coordination and both phone numbers"
                width={1400}
                height={980}
                className="h-auto w-full object-cover"
              />
            </figure>
          </SpotlightCard>
        </div>

        <div className="mt-8 grid gap-4 rounded-[1.75rem] bg-navy px-5 py-6 text-white sm:grid-cols-2 lg:grid-cols-4 sm:px-8">
          <a href={SITE.phone.href} className="flex items-start gap-3 hover:text-teal-light">
            <Phone className="mt-0.5 h-5 w-5 text-teal" aria-hidden />
            <span>
              <span className="block text-xs uppercase tracking-[0.16em] text-white/60">Call</span>
              <span className="mt-1 block font-semibold">{SITE.phone.display}</span>
              <span className="block font-semibold">{SITE.secondaryPhone.display}</span>
            </span>
          </a>
          <a
            href={`mailto:${SITE.email}`}
            className="flex items-start gap-3 hover:text-teal-light"
          >
            <Mail className="mt-0.5 h-5 w-5 text-coral" aria-hidden />
            <span>
              <span className="block text-xs uppercase tracking-[0.16em] text-white/60">Email</span>
              <span className="mt-1 block font-semibold">{SITE.email}</span>
            </span>
          </a>
          <a
            href={SITE.website.href}
            className="flex items-start gap-3 hover:text-teal-light"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Globe className="mt-0.5 h-5 w-5 text-teal" aria-hidden />
            <span>
              <span className="block text-xs uppercase tracking-[0.16em] text-white/60">Website</span>
              <span className="mt-1 block font-semibold">{SITE.website.label}</span>
            </span>
          </a>
          <p className="flex items-start gap-3">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-coral" aria-hidden />
            <span>
              <span className="block text-xs uppercase tracking-[0.16em] text-white/60">Visit</span>
              <span className="mt-1 block text-sm leading-6 text-white/85">{SITE.location.display}</span>
            </span>
          </p>
        </div>
      </Container>
      <WaveBand flip className="absolute inset-x-0 bottom-0" />
    </section>
  );
}
