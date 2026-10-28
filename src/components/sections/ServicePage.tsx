import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { PhoneButton } from "@/components/cta/PhoneButton";
import { WhatsAppButton } from "@/components/cta/WhatsAppButton";
import { Accordion } from "@/components/ui/accordion";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Container } from "@/components/ui/container";
import { JsonLd } from "@/components/seo/JsonLd";
import { LeadFormSection } from "@/components/sections/LeadFormSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { SITE } from "@/lib/site";
import { breadcrumbJsonLd, faqPageJsonLd, serviceJsonLd } from "@/lib/seo";
import { getRelatedServices, type Service } from "@/lib/services";

export function ServicePage({ service }: { service: Service }) {
  const related = getRelatedServices(service.related);
  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: service.navTitle },
  ];

  return (
    <>
      <JsonLd
        data={[
          serviceJsonLd(service),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: service.title, path: `/services/${service.slug}` },
          ]),
          ...(service.faqs.length
            ? [faqPageJsonLd(service.faqs)]
            : []),
        ]}
      />

      <section className="relative overflow-hidden bg-navy-deep py-16 text-white sm:py-24">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <span className="orb left-[-6%] top-10 h-64 w-64 bg-teal/30" />
          <span className="orb orb-slow right-[-4%] bottom-0 h-72 w-72 bg-coral/25" />
        </div>
        <Container className="relative grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Breadcrumbs
              items={crumbs}
              className="[&_a]:text-white/70 [&_ol]:text-white/70 [&_span]:text-white [&_svg]:text-white/40"
            />
            <p className="text-xs font-semibold tracking-[0.22em] text-[#55e6dc]">
              CAREHIVE SERVICE
            </p>
            <h1 className="font-brand mt-3 text-5xl font-semibold tracking-tight sm:text-7xl">
              {service.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/90">{service.description}</p>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/70">{service.overview}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <WhatsAppButton
                label="WhatsApp Enquiry"
                messageKey={service.whatsappKey}
                size="lg"
              />
              <PhoneButton label="Call CareHive" variant="white" size="lg" />
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-xl lg:col-span-5">
            <div
              aria-hidden
              className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-teal/40 to-coral/30 blur-md"
            />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/20">
              <Image
                src={service.image}
                alt={service.imageAlt}
                width={1536}
                height={1024}
                quality={90}
                className="h-auto w-full"
                sizes="(max-width: 1024px) 92vw, 520px"
                priority
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#fff8f0] py-16 sm:py-24">
        <Container className="grid gap-8 lg:grid-cols-2">
          <article className="rounded-[2rem] bg-navy p-6 text-white sm:p-8">
            <h2 className="font-brand text-3xl font-semibold">Who may need this support</h2>
            <ul className="mt-5 space-y-3">
              {service.whoNeedsIt.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-white/85">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#55e6dc]" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </article>
          <article className="rounded-[2rem] bg-white p-6 sm:p-8">
            <h2 className="font-brand text-3xl font-semibold text-navy">What CareHive can provide</h2>
            <ul className="mt-5 space-y-3">
              {service.whatWeProvide.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-ink">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-coral" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </Container>
      </section>

      <section className="bg-[#07162e] py-16 text-white sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-brand text-3xl font-semibold">Benefits</h2>
            <ul className="mt-5 space-y-3">
              {service.benefits.map((item) => (
                <li key={item} className="border-b border-white/10 px-1 py-3 text-sm leading-6 text-white/85">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-brand text-3xl font-semibold text-[#ffb2ab]">Care considerations</h2>
            <ul className="mt-5 space-y-3">
              {service.considerations.map((item) => (
                <li key={item} className="border-b border-white/10 px-1 py-3 text-sm leading-6 text-white/70">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="bg-[#fff8f0] py-16 sm:py-24">
        <Container className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="font-brand text-3xl font-semibold text-navy">
              Questions about {service.navTitle}
            </h2>
            <p className="mt-3 text-sm leading-6 text-muted">{SITE.medicalDisclaimer}</p>
            <div className="mt-6 flex flex-col gap-2 sm:flex-row">
              <WhatsAppButton
                label="Discuss Your Care Requirement"
                messageKey={service.whatsappKey}
              />
              <PhoneButton label="Speak to Care Expert" variant="outline" />
            </div>
          </div>
          <Accordion items={service.faqs} />
        </Container>
      </section>

      <section className="bg-navy py-16 text-white sm:py-24">
        <Container>
          <h2 className="font-brand text-3xl font-semibold">Related services</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {related.map((item) => (
              <Link
                key={item.slug}
                href={`/services/${item.slug}`}
                className="rounded-[1.6rem] border border-white/10 bg-white/5 p-5 transition hover:-translate-y-1 hover:border-[#55e6dc]"
              >
                <h3 className="font-brand text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/70">
                  {item.shortDescription}
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <LeadFormSection source={`service-${service.slug}`} />
      <FinalCTA />
    </>
  );
}
