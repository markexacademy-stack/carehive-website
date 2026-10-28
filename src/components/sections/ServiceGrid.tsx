import Link from "next/link";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
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
    <section className="relative overflow-hidden bg-soft py-16 sm:py-24" id="services">
      <div aria-hidden className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-teal via-navy to-coral" />
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
        <div className="grid auto-rows-fr gap-4 md:grid-cols-6">
          {items.map((service, index) => (
            <ServiceCard
              key={service.slug}
              service={service}
              index={index}
              featured={index === 0 || index === 5}
              className={
                index === 0
                  ? "md:col-span-4"
                  : index === 1 || index === 5
                    ? "md:col-span-2"
                    : index % 5 === 0
                      ? "md:col-span-3"
                      : "md:col-span-2"
              }
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
