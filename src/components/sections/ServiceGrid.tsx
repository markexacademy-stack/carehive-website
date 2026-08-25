import Link from "next/link";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn } from "@/components/ui/fade-in";
import { services } from "@/lib/services";

export function ServiceGrid({
  heading = true,
  limit,
}: {
  heading?: boolean;
  limit?: number;
}) {
  const items = limit ? services.slice(0, limit) : services;

  return (
    <section className="bg-white py-16 sm:py-20" id="services">
      <Container>
        {heading ? (
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Services"
              title="Home healthcare, organised around real family needs"
              description="From daily patient care to specialised nursing support, every CareHive service is designed to be clear, personal and easy to request."
            />
            <Link href="/services" className="text-sm font-semibold text-teal hover:text-teal-dark">
              View all services
            </Link>
          </div>
        ) : null}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((service, index) => (
            <FadeIn key={service.slug} delay={index * 0.03}>
              <ServiceCard service={service} />
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
