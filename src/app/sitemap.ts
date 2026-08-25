import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site";
import { services } from "@/lib/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const pages = [
    "/",
    "/about",
    "/services",
    "/why-carehive",
    "/how-it-works",
    "/faqs",
    "/contact",
    "/privacy-policy",
    "/terms-and-conditions",
    "/disclaimer",
    ...services.map((service) => `/services/${service.slug}`),
  ];

  return pages.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path.startsWith("/services") ? 0.8 : 0.6,
  }));
}
