import type { Metadata } from "next";
import { getSiteUrl, SITE } from "@/lib/site";
import type { FaqItem } from "@/lib/faqs";
import type { Service } from "@/lib/services";

type BuildMetadataInput = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  noIndex?: boolean;
};

const defaultKeywords = [
  "home nursing service in Trivandrum",
  "home healthcare services in Trivandrum",
  "patient care services in Trivandrum",
  "home nurse in Trivandrum",
  "elderly care services in Trivandrum",
  "caregiver service in Trivandrum",
  "home nursing service in Kazhakkoottam",
  "patient care service in Kazhakkoottam",
  "elderly care in Kazhakkoottam",
  "home healthcare Kerala",
  "home nurse Kerala",
  "palliative care at home Kerala",
  "hospital bystander service Trivandrum",
  "mother baby care Trivandrum",
];

export function buildMetadata({
  title,
  description,
  path = "/",
  keywords = defaultKeywords,
  noIndex = false,
}: BuildMetadataInput): Metadata {
  const siteUrl = getSiteUrl();
  const url = `${siteUrl}${path}`;

  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE.name,
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: `${siteUrl}/images/hero-caregiver.jpg`,
          width: 1200,
          height: 900,
          alt: "CareHive home healthcare caregiver supporting a patient in Kerala",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${siteUrl}/images/hero-caregiver.jpg`],
    },
  };
}

export function organizationJsonLd() {
  const siteUrl = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: siteUrl,
    logo: `${siteUrl}/images/carehive-logo.png`,
    telephone: SITE.phone.e164,
    description: SITE.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.location.area,
      addressLocality: SITE.location.city,
      addressRegion: SITE.location.state,
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SITE.phone.e164,
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["English", "Malayalam"],
    },
  };
}

export function websiteJsonLd() {
  const siteUrl = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: siteUrl,
    description: SITE.description,
    inLanguage: "en-IN",
    publisher: {
      "@type": "Organization",
      name: SITE.name,
    },
  };
}

export function localBusinessJsonLd() {
  const siteUrl = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeHealthCareService"],
    "@id": `${siteUrl}/#business`,
    name: SITE.name,
    image: `${siteUrl}/images/carehive-logo.png`,
    url: siteUrl,
    telephone: SITE.phone.e164,
    description: SITE.description,
    slogan: SITE.tagline,
    priceRange: "$$",
    areaServed: [
      {
        "@type": "Place",
        name: SITE.location.area,
      },
      {
        "@type": "City",
        name: SITE.location.city,
      },
      {
        "@type": "State",
        name: SITE.location.state,
      },
      {
        "@type": "Country",
        name: "India",
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.location.area,
      addressLocality: SITE.location.city,
      addressRegion: SITE.location.state,
      addressCountry: "IN",
    },
  };
}

export function faqPageJsonLd(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbJsonLd(
  items: { name: string; path: string }[],
) {
  const siteUrl = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.path}`,
    })),
  };
}

export function serviceJsonLd(service: Service) {
  const siteUrl = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    url: `${siteUrl}/services/${service.slug}`,
    provider: {
      "@type": "Organization",
      name: SITE.name,
      telephone: SITE.phone.e164,
      address: {
        "@type": "PostalAddress",
        streetAddress: SITE.location.area,
        addressLocality: SITE.location.city,
        addressRegion: SITE.location.state,
        addressCountry: "IN",
      },
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: `${SITE.location.city}, ${SITE.location.state}`,
    },
    serviceType: "Home healthcare and caregiver support",
  };
}
