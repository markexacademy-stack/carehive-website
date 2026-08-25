import { z } from "zod";

export const CARE_REQUIRED_OPTIONS = [
  "Patient Care",
  "Nursing Care",
  "Elderly Care",
  "Mother & Baby Care",
  "Bystander Support",
  "Post-Hospitalization Care",
  "Tracheostomy Care",
  "Colostomy Care",
  "Wound Care",
  "Palliative Care",
  "Other",
] as const;

export const PREFERRED_CARE_OPTIONS = [
  "24 Hours",
  "Day Care",
  "Night Care",
  "Short Term",
  "Long Term",
  "Hospital Bystander",
] as const;

export const LEAD_STATUSES = [
  "NEW",
  "CONTACTED",
  "FOLLOW_UP",
  "CONVERTED",
  "CLOSED",
] as const;

export type LeadStatus = (typeof LEAD_STATUSES)[number];

const phonePattern = /^(?:\+91[\s-]?)?[6-9]\d{9}$/;

export const leadFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your full name.")
    .max(80, "Name is too long."),
  phone: z
    .string()
    .trim()
    .min(10, "Please enter a valid phone number.")
    .refine((value) => phonePattern.test(value.replace(/\s/g, "")), {
      message: "Enter a valid Indian mobile number.",
    }),
  whatsapp: z
    .string()
    .trim()
    .optional()
    .refine(
      (value) => !value || phonePattern.test(value.replace(/\s/g, "")),
      "Enter a valid WhatsApp number or leave this blank.",
    ),
  location: z
    .string()
    .trim()
    .min(2, "Please enter your location.")
    .max(120, "Location is too long."),
  patientAge: z
    .string()
    .trim()
    .max(20, "Please enter a valid age.")
    .optional(),
  careRequired: z.enum(CARE_REQUIRED_OPTIONS, {
    message: "Please select the care required.",
  }),
  preferredCareType: z.enum(PREFERRED_CARE_OPTIONS, {
    message: "Please select a preferred care type.",
  }),
  preferredStartDate: z.string().trim().optional(),
  additionalInformation: z
    .string()
    .trim()
    .max(2000, "Please keep additional information under 2000 characters.")
    .optional(),
  source: z.string().trim().optional(),
});

export type LeadFormValues = z.infer<typeof leadFormSchema>;

export type StoredLead = LeadFormValues & {
  id: string;
  createdAt: string;
  status: LeadStatus;
  notes: string;
  followUpAt: string | null;
};
