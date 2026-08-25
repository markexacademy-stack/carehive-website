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

      <section className="bg-gradient-to-br from-teal-light via-soft to-white py-12 sm:py-16">
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <Breadcrumbs items={crumbs} />
            <p className="text-xs font-semibold tracking-[0.18em] text-teal">
              CAREHIVE SERVICE
            </p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-navy sm:text-5xl">
              {service.title}
            </h1>
            <p className="mt-4 text-lg leading-8 text-ink">{service.description}</p>
            <p className="mt-4 text-base leading-7 text-muted">{service.overview}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <WhatsAppButton
                label="WhatsApp Enquiry"
                messageKey={service.whatsappKey}
                size="lg"
              />
              <PhoneButton label="Call CareHive" variant="outline" size="lg" />
            </div>
          </div>
          <div className="overflow-hidden rounded-[2rem] shadow-[var(--shadow-card)]">
            <Image
              src={service.image}
              alt={service.imageAlt}
              width={1200}
              height={900}
              className="h-full w-full object-cover"
              sizes="(max-width: 1024px) 100vw, 560px"
              priority
            />
          </div>
        </Container>
      </section>

      <section className="bg-white py-16">
        <Container className="grid gap-8 lg:grid-cols-2">
          <article className="rounded-3xl border border-line bg-soft p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-navy">Who may need this support</h2>
            <ul className="mt-5 space-y-3">
              {service.whoNeedsIt.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-ink">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </article>
          <article className="rounded-3xl border border-line bg-white p-6 shadow-[var(--shadow-card)] sm:p-8">
            <h2 className="text-2xl font-bold text-navy">What CareHive can provide</h2>
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

      <section className="bg-soft py-16">
        <Container className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-navy">Benefits</h2>
            <ul className="mt-5 space-y-3">
              {service.benefits.map((item) => (
                <li key={item} className="rounded-2xl bg-white px-4 py-3 text-sm leading-6 text-ink">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-navy">Care considerations</h2>
            <ul className="mt-5 space-y-3">
              {service.considerations.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-line bg-white px-4 py-3 text-sm leading-6 text-muted"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16">
        <Container className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="text-2xl font-bold text-navy">
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

      <section className="bg-teal-light/40 py-16">
        <Container>
          <h2 className="text-2xl font-bold text-navy">Related services</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {related.map((item) => (
              <Link
                key={item.slug}
                href={`/services/${item.slug}`}
                className="rounded-3xl border border-line bg-white p-5 transition hover:border-teal hover:shadow-[var(--shadow-card)]"
              >
                <h3 className="font-bold text-navy">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">
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
