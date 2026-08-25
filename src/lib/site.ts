export const SITE = {
  name: "CareHive Healthcare Services",
  shortName: "CareHive",
  tagline: "Professional Care. Right at Home.",
  positioning: "Trusted Healthcare & Caregiver Services at Your Doorstep.",
  description:
    "CareHive provides professional home nursing, patient care, elderly care, caregiver, bystander, mother & baby and specialized home healthcare services in Trivandrum, Kerala.",
  location: {
    area: "Kazhakkoottam",
    city: "Thiruvananthapuram",
    cityShort: "Trivandrum",
    state: "Kerala",
    country: "India",
    display: "Kazhakkoottam, Thiruvananthapuram, Kerala, India",
    shortDisplay: "Kazhakkoottam, Thiruvananthapuram, Kerala",
  },
  phone: {
    display: "+91 97787 81988",
    href: "tel:+919778781988",
    e164: "+919778781988",
  },
  whatsapp: {
    number: "919778781988",
    display: "+91 97787 81988",
  },
  medicalDisclaimer:
    "CareHive provides home healthcare support and caregiver services. Our services do not replace emergency medical treatment or professional medical advice. In case of a medical emergency, contact the appropriate emergency medical service.",
} as const;

export function getSiteUrl() {
  return (
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "http://localhost:3000"
  );
}

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/why-carehive", label: "Why CareHive" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/faqs", label: "FAQs" },
  { href: "/contact", label: "Contact" },
] as const;

export const FOOTER_SERVICE_LINKS = [
  { href: "/services/patient-care", label: "Patient Care" },
  { href: "/services/home-nursing", label: "Nursing Care" },
  { href: "/services/elderly-care", label: "Elderly Care" },
  { href: "/services/mother-baby-care", label: "Mother & Baby Care" },
  { href: "/services/bystander-support", label: "Bystander Support" },
  { href: "/services/post-hospitalization-care", label: "Post-Hospital Care" },
  { href: "/services", label: "Specialized Care" },
  { href: "/services/palliative-care", label: "Palliative Care" },
] as const;

export function getConfiguredSocialLinks() {
  const links = [
    { label: "Instagram", href: process.env.NEXT_PUBLIC_INSTAGRAM_URL },
    { label: "Facebook", href: process.env.NEXT_PUBLIC_FACEBOOK_URL },
    {
      label: "Google Business Profile",
      href: process.env.NEXT_PUBLIC_GOOGLE_BUSINESS_URL,
    },
  ];
  return links.filter(
    (item): item is { label: string; href: string } =>
      Boolean(item.href && item.href.startsWith("http")),
  );
}
