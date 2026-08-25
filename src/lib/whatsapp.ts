import { SITE } from "@/lib/site";

export const WHATSAPP_MESSAGES = {
  general: "Hello CareHive, I would like to know more about your services.",
  hero: "Hello CareHive, I need home healthcare support. Please help me with the available services.",
  elderly: "Hello CareHive, I am looking for elderly care for my family member.",
  nursing: "Hello CareHive, I need a nurse for home care.",
  motherBaby: "Hello CareHive, I need mother and baby care support.",
  bystander: "Hello CareHive, I need a hospital bystander/caregiver.",
  palliative: "Hello CareHive, I need information about palliative home care.",
  postHospital:
    "Hello CareHive, I need post-hospitalization care for my family member.",
  requestCare:
    "Hello CareHive, I would like to request a caregiver. Please contact me.",
  familyNri:
    "Hello CareHive, I live away from my family and would like to arrange home healthcare support for my parents/loved one.",
  specialized:
    "Hello CareHive, I would like to discuss a specialized care requirement.",
  quote:
    "Hello CareHive, I would like to request a quote for home healthcare support.",
  patientCare:
    "Hello CareHive, I would like information about patient care services.",
  tracheostomy:
    "Hello CareHive, I need tracheostomy care support according to medical instructions.",
  colostomy:
    "Hello CareHive, I need colostomy care support according to medical instructions.",
  woundCare: "Hello CareHive, I need wound care support at home.",
  chronic: "Hello CareHive, I need chronic disease care support at home.",
  companionship: "Hello CareHive, I am looking for companionship care.",
} as const;

export type WhatsAppMessageKey = keyof typeof WHATSAPP_MESSAGES;

export function createWhatsAppLink(message: string) {
  const encoded = encodeURIComponent(message.trim());
  return `https://wa.me/${SITE.whatsapp.number}?text=${encoded}`;
}

export function createWhatsAppLinkFromKey(key: WhatsAppMessageKey) {
  return createWhatsAppLink(WHATSAPP_MESSAGES[key]);
}

export function assertWhatsAppNumber() {
  return SITE.whatsapp.number === "919778781988";
}
