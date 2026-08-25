import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePage } from "@/components/sections/ServicePage";
import { buildMetadata } from "@/lib/seo";
import { getService, services } from "@/lib/services";

type ServiceRouteProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: ServiceRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) {
    return buildMetadata({
      title: "Service | CareHive",
      description: "CareHive home healthcare services in Trivandrum.",
      path: "/services",
    });
  }
  return buildMetadata({
    title: service.seoTitle,
    description: service.seoDescription,
    path: `/services/${service.slug}`,
  });
}

export default async function ServiceDetailPage({ params }: ServiceRouteProps) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  return <ServicePage service={service} />;
}
