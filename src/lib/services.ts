import type { WhatsAppMessageKey } from "@/lib/whatsapp";

export type ServiceCategory = "core" | "family" | "specialized";

export type ServiceIconName =
  | "heartHandshake"
  | "stethoscope"
  | "userRound"
  | "personStanding"
  | "baby"
  | "hospital"
  | "wind"
  | "activity"
  | "bandage"
  | "heartPulse"
  | "clipboardPlus"
  | "users";

export type ServiceFaq = {
  question: string;
  answer: string;
};

export type Service = {
  slug: string;
  title: string;
  navTitle: string;
  shortDescription: string;
  description: string;
  overview: string;
  category: ServiceCategory;
  icon: ServiceIconName;
  image: string;
  imageAlt: string;
  whatsappKey: WhatsAppMessageKey;
  whoNeedsIt: string[];
  whatWeProvide: string[];
  benefits: string[];
  considerations: string[];
  faqs: ServiceFaq[];
  related: string[];
  seoTitle: string;
  seoDescription: string;
};

export const services: Service[] = [
  {
    slug: "patient-care",
    title: "Patient Care",
    navTitle: "Patient Care",
    shortDescription:
      "Attentive home-based support for patients who need daily assistance, monitoring and compassionate company.",
    description:
      "CareHive patient care brings trained caregivers into the home to help with daily living, comfort, mobility and family communication — so recovery and routine care can continue in familiar surroundings.",
    overview:
      "When a loved one needs extra help at home, families often look for more than a pair of hands. CareHive patient care is designed around dignity, routine and dependable support. Our caregivers assist with daily living activities, keep families informed, and work within the guidance shared by the patient's treating doctors.",
    category: "core",
    icon: "heartHandshake",
    image: "/images/hero-caregiver.jpg",
    imageAlt:
      "Indian caregiver supporting an elderly patient at home in Kerala",
    whatsappKey: "patientCare",
    whoNeedsIt: [
      "Patients who need help with daily activities after illness or reduced mobility",
      "Families who cannot stay with a loved one throughout the day",
      "People recovering at home who still need attentive support",
      "Households looking for a reliable caregiver rather than ad-hoc help",
    ],
    whatWeProvide: [
      "Assistance with daily living, hygiene and comfort",
      "Companionship and supervision at home",
      "Support with mobility and simple routines",
      "Regular updates for family members",
      "Care aligned with instructions given by the treating doctor",
    ],
    benefits: [
      "Care in the comfort of home",
      "A calmer routine for the patient and family",
      "A dedicated person to observe changes and communicate promptly",
      "Flexible day, night or longer-term arrangements",
    ],
    considerations: [
      "Patient care is support at home. It does not replace hospital treatment or emergency medical care.",
      "Medication and clinical decisions remain with the patient's doctor.",
      "Availability depends on the patient's requirement and service location. Contact CareHive to discuss your needs.",
    ],
    faqs: [
      {
        question: "Is patient care the same as nursing care?",
        answer:
          "Patient care focuses on daily support, comfort and companionship. If a registered nurse is required for clinical procedures, we can discuss home nursing as a separate or combined arrangement.",
      },
      {
        question: "Can CareHive provide a caregiver only during the day?",
        answer:
          "Yes. Families can request day care, night care, short-term or longer-term support depending on the requirement.",
      },
    ],
    related: ["home-nursing", "elderly-care", "companionship-care"],
    seoTitle: "Patient Care at Home in Trivandrum | CareHive",
    seoDescription:
      "Home-based patient care and caregiver support in Kazhakkoottam and Trivandrum. Compassionate daily assistance for patients and families.",
  },
  {
    slug: "home-nursing",
    title: "Home Nursing Care",
    navTitle: "Nursing Care",
    shortDescription:
      "Professional nursing support at home for families who need clinically guided care without staying in hospital.",
    description:
      "Home nursing from CareHive connects families with nursing professionals who can support recovery, observation and routine clinical care at home according to professional medical instructions.",
    overview:
      "Some situations need more than companionship. Home nursing is for families who want a nurse to support care at home — including observation, routine nursing tasks and coordination with the treating doctor. CareHive does not replace hospitals or emergency services; we help families continue medically guided care in a home setting.",
    category: "core",
    icon: "stethoscope",
    image: "/images/nursing-home.jpg",
    imageAlt:
      "Indian home nurse assisting a patient in a Kerala bedroom",
    whatsappKey: "nursing",
    whoNeedsIt: [
      "Patients discharged from hospital who still need nursing support",
      "Families managing injections, dressings or nursing observation at home",
      "People living with conditions that require regular nursing attention",
      "Households who want a nurse for night or full-day coverage",
    ],
    whatWeProvide: [
      "Home nursing support according to professional medical instructions",
      "Assistance with routine nursing tasks discussed at the time of enquiry",
      "Observation and timely communication with the family",
      "Coordination around the patient's prescribed care plan",
      "Flexible nursing hours based on the requirement",
    ],
    benefits: [
      "Nursing attention without remaining in hospital",
      "A more familiar environment for recovery",
      "Family members can stay informed without carrying the full care load",
      "Support that can be adjusted as the patient's needs change",
    ],
    considerations: [
      "Home nursing is provided according to professional medical instructions. It does not replace the treating doctor.",
      "Emergency symptoms should be directed to the appropriate emergency medical service.",
      "Availability depends on the patient's requirement and service location. Contact CareHive to discuss your needs.",
    ],
    faqs: [
      {
        question: "Do you provide nurses at home in Trivandrum?",
        answer:
          "Yes. CareHive arranges home nursing support based on the patient's requirement. Share the care need on WhatsApp or phone and our team will discuss suitable options.",
      },
      {
        question: "Can a nurse follow the hospital discharge notes?",
        answer:
          "Home nursing support is arranged according to professional medical instructions, including guidance shared by the treating doctor or hospital team.",
      },
    ],
    related: ["patient-care", "post-hospitalization-care", "wound-care"],
    seoTitle: "Home Nursing Service in Trivandrum | CareHive",
    seoDescription:
      "Home nurse and home nursing care in Trivandrum and Kazhakkoottam. Professional nursing support at home according to medical instructions.",
  },
  {
    slug: "bystander-support",
    title: "Bystander Support",
    navTitle: "Bystander Support",
    shortDescription:
      "A dependable hospital bystander or caregiver so families do not have to manage every hour of a hospital stay alone.",
    description:
      "CareHive bystander support provides a caregiver to stay with a patient in hospital or during medical visits, helping with comfort, communication and practical assistance.",
    overview:
      "Hospital stays are tiring for patients and families. A bystander is there to remain with the patient, help with basic needs, and keep family members updated — especially when relatives live far away, work full days, or cannot stay overnight.",
    category: "family",
    icon: "userRound",
    image: "/images/about-care.jpg",
    imageAlt:
      "Caregiver sitting with an elderly Indian patient and providing attentive support",
    whatsappKey: "bystander",
    whoNeedsIt: [
      "Families who cannot stay with a patient throughout a hospital admission",
      "NRIs and relatives living in another city who need someone present on the ground",
      "Patients who need a companion during investigations, admission or discharge",
      "Households covering night duty in hospital",
    ],
    whatWeProvide: [
      "A caregiver to remain with the patient as a bystander",
      "Help with comfort, meals (as permitted) and personal needs",
      "Updates to the family when they cannot be present",
      "Support during admission, waiting and discharge, as requested",
      "Day, night or rotation options depending on availability",
    ],
    benefits: [
      "The patient is not left unattended",
      "Family members can rest, work or travel with more peace of mind",
      "A calmer hospital experience for the patient",
      "Clearer communication between the hospital stay and the family",
    ],
    considerations: [
      "A bystander supports comfort and presence. Clinical treatment remains with the hospital team.",
      "Hospital rules on bystanders vary. We work within the facility's visitor and attendant guidelines.",
      "Availability depends on the patient's requirement and service location. Contact CareHive to discuss your needs.",
    ],
    faqs: [
      {
        question: "Do you provide hospital bystander service in Trivandrum?",
        answer:
          "Yes. CareHive can arrange a hospital bystander or caregiver. Share the hospital location, shift timing and patient needs so we can check a suitable arrangement.",
      },
      {
        question: "Can a bystander stay overnight?",
        answer:
          "Night bystander support can be discussed based on the hospital's rules and caregiver availability.",
      },
    ],
    related: ["patient-care", "post-hospitalization-care", "companionship-care"],
    seoTitle: "Hospital Bystander Service in Trivandrum | CareHive",
    seoDescription:
      "Hospital bystander and caregiver support in Trivandrum. A dependable attendant for patients when family cannot stay throughout.",
  },
  {
    slug: "elderly-care",
    title: "Elderly / Geriatric Care",
    navTitle: "Elderly Care",
    shortDescription:
      "Respectful, patient support for older adults who want to live at home with help they can rely on.",
    description:
      "Elderly care from CareHive supports ageing parents and seniors with daily living, companionship, mobility assistance and family-centred communication at home.",
    overview:
      "Ageing should not mean losing dignity or the comfort of home. CareHive geriatric support is paced, respectful and practical — helping with daily routines, safety at home, meals, companionship and the small tasks that become harder with age. We work with families, including those living away from Kerala, to understand what their parent actually needs.",
    category: "core",
    icon: "personStanding",
    image: "/images/elderly-care.jpg",
    imageAlt:
      "Indian elderly woman receiving compassionate home care in Kerala",
    whatsappKey: "elderly",
    whoNeedsIt: [
      "Seniors who need help with bathing, meals, walking or medication reminders",
      "Adult children who live away and want a trusted person at home",
      "Older adults living alone who would benefit from regular company",
      "Families managing memory changes, reduced mobility or frailty",
    ],
    whatWeProvide: [
      "Assistance with personal care and daily routines",
      "Companionship and a reassuring presence at home",
      "Mobility support and help around the house",
      "Reminders and support around prescribed routines",
      "Regular communication with family members",
    ],
    benefits: [
      "Parents can remain at home for longer with support",
      "A familiar environment rather than an unfamiliar facility",
      "Families receive updates instead of worrying in silence",
      "Care can start part-time and increase if needs change",
    ],
    considerations: [
      "Elderly care is supportive. Sudden medical emergencies require the appropriate emergency medical service.",
      "Memory care and complex nursing needs should be described clearly so we can suggest the right type of support.",
      "Availability depends on the patient's requirement and service location. Contact CareHive to discuss your needs.",
    ],
    faqs: [
      {
        question: "Do you provide elderly care in Kazhakkoottam and Trivandrum?",
        answer:
          "Yes. Elderly and geriatric home care is one of CareHive's core services. Contact us with your parent's routine, mobility and preferred hours.",
      },
      {
        question: "Can you support parents if we live abroad?",
        answer:
          "Yes. Many families arrange care from a distance. We discuss the requirement, keep communication open, and help you stay involved in decisions.",
      },
    ],
    related: ["companionship-care", "patient-care", "chronic-disease-care"],
    seoTitle: "Elderly Care Services in Trivandrum | CareHive",
    seoDescription:
      "Elderly and geriatric care at home in Kazhakkoottam and Trivandrum. Compassionate caregiver support for ageing parents and seniors.",
  },
  {
    slug: "mother-baby-care",
    title: "Mother & Baby Care",
    navTitle: "Mother & Baby Care",
    shortDescription:
      "Gentle postnatal and newborn support at home so mothers can recover while the baby is cared for with attention.",
    description:
      "CareHive mother and baby care offers home support for new mothers and infants, including rest, newborn routines and practical help during the postnatal period.",
    overview:
      "The weeks after delivery are physically and emotionally demanding. Mother and baby care at home is about rest, hygiene, feeding support as guided by the doctor, and a calm extra pair of trained hands — not about replacing the paediatrician or obstetrician. Families can request day support, night support or a short postnatal period of help.",
    category: "family",
    icon: "baby",
    image: "/images/mother-baby.jpg",
    imageAlt:
      "Caregiver supporting an Indian mother and newborn at home in Kerala",
    whatsappKey: "motherBaby",
    whoNeedsIt: [
      "New mothers recovering after delivery",
      "Families who want help with newborn routines at home",
      "Households without nearby family support",
      "Mothers who need night support so they can rest",
    ],
    whatWeProvide: [
      "Support for the mother during postnatal recovery",
      "Help with newborn care routines as guided by the family and doctor",
      "Assistance with hygiene, comfort and household care around the mother and baby",
      "Night or day support depending on the request",
      "A calm, respectful presence in the home",
    ],
    benefits: [
      "Mother can rest while the baby is attended to",
      "Support in a private home setting rather than only in hospital",
      "Practical help during a physically demanding period",
      "Family members can share the load more evenly",
    ],
    considerations: [
      "Mother and baby care is supportive. It does not replace paediatric or obstetric medical advice.",
      "Feeding, medication and clinical decisions remain with the treating doctors.",
      "Availability depends on the patient's requirement and service location. Contact CareHive to discuss your needs.",
    ],
    faqs: [
      {
        question: "Do you provide mother and baby care in Trivandrum?",
        answer:
          "Yes. CareHive offers mother and baby home support. Tell us whether you need day care, night care or a short postnatal arrangement.",
      },
      {
        question: "Can support start after discharge from hospital?",
        answer:
          "Yes. Many families request care once mother and baby are home. Share the expected start date so we can plan accordingly.",
      },
    ],
    related: ["patient-care", "home-nursing", "post-hospitalization-care"],
    seoTitle: "Mother and Baby Care in Trivandrum | CareHive",
    seoDescription:
      "Mother and baby care at home in Trivandrum. Postnatal and newborn support so mothers can recover with professional help.",
  },
  {
    slug: "post-hospitalization-care",
    title: "Post-Hospitalization Care",
    navTitle: "Post-Hospital Care",
    shortDescription:
      "Structured support after discharge so recovery can continue at home with someone watching over the details.",
    description:
      "Post-hospitalization care from CareHive helps patients transition from hospital to home with caregiver or nursing support, routine assistance and family communication.",
    overview:
      "Discharge is not always the end of needing help. Patients may still be weak, in pain, or unsure about daily routines. CareHive post-hospital support is planned around the discharge advice — mobility, hygiene, meals, observation and, where needed, nursing tasks according to professional medical instructions.",
    category: "core",
    icon: "hospital",
    image: "/images/nursing-home.jpg",
    imageAlt:
      "Home caregiver supporting a patient after hospital discharge in Kerala",
    whatsappKey: "postHospital",
    whoNeedsIt: [
      "Patients recently discharged after surgery or a hospital stay",
      "Families who cannot provide full-time support during recovery",
      "People who need help with mobility, wound observation or daily living after discharge",
      "Households managing a short, intensive recovery period at home",
    ],
    whatWeProvide: [
      "Caregiver or nursing support after discharge",
      "Help following the home-care points in discharge advice",
      "Assistance with daily living during recovery",
      "Observation and prompt family updates",
      "Short-term or extended support as recovery progresses",
    ],
    benefits: [
      "A safer, more supported first stretch at home",
      "Less strain on family members returning to work",
      "Continuity between hospital advice and home routine",
      "Flexibility to reduce hours as the patient improves",
    ],
    considerations: [
      "Post-hospital care supports recovery at home. It does not replace follow-up visits with the treating doctor.",
      "Warning symptoms described at discharge should be treated as medical issues, not only caregiver issues.",
      "Availability depends on the patient's requirement and service location. Contact CareHive to discuss your needs.",
    ],
    faqs: [
      {
        question: "How soon after discharge can care begin?",
        answer:
          "Share the expected discharge date and care notes. Availability depends on the requirement and location; we will discuss timing as soon as you contact us.",
      },
      {
        question: "Do you support post-operative recovery at home?",
        answer:
          "Yes. Post-operative home support can be arranged. Nursing or specialised tasks are provided according to professional medical instructions.",
      },
    ],
    related: ["home-nursing", "wound-care", "patient-care"],
    seoTitle: "Post-Hospitalization Care in Trivandrum | CareHive",
    seoDescription:
      "Post-hospitalization and post-operative home care in Trivandrum. Caregiver and nursing support after hospital discharge.",
  },
  {
    slug: "tracheostomy-care",
    title: "Tracheostomy Care",
    navTitle: "Tracheostomy Care",
    shortDescription:
      "Specialised home support for tracheostomy care, arranged according to professional medical instructions.",
    description:
      "CareHive tracheostomy care is home support for families managing a tracheostomy, with caregivers or nursing professionals guided by the treating doctor's instructions.",
    overview:
      "Tracheostomy care at home requires calm, trained attention. CareHive helps families arrange support for routine tracheostomy-related care at home according to professional medical instructions. We do not replace ENT or critical-care specialists; we help the household carry out the care plan they have already been given, with someone present who understands the responsibility.",
    category: "specialized",
    icon: "wind",
    image: "/images/nursing-home.jpg",
    imageAlt:
      "Home nursing support for specialised respiratory care in a Kerala household",
    whatsappKey: "tracheostomy",
    whoNeedsIt: [
      "Patients discharged with a tracheostomy who need trained support at home",
      "Families who have been taught a care routine and need a professional to continue it",
      "Households needing day or night coverage around tracheostomy care",
      "People looking for longer-term home support after a hospital stay",
    ],
    whatWeProvide: [
      "Home support for tracheostomy care according to professional medical instructions",
      "A caregiver or nursing professional matched to the stated requirement",
      "Help with the daily care routine explained by the treating team",
      "Family communication and a steady presence at home",
      "Discussion of shift patterns, including 24-hour options where feasible",
    ],
    benefits: [
      "Specialised attention in a home environment",
      "Reduced pressure on family members who cannot provide all hours of care",
      "Continuity with the hospital or doctor's care plan",
      "A clearer point of contact for the household",
    ],
    considerations: [
      "Tracheostomy support is provided according to professional medical instructions. It does not replace specialist medical care.",
      "Breathing emergencies require the appropriate emergency medical service immediately.",
      "Availability depends on the patient's requirement and service location. Contact CareHive to discuss your needs.",
    ],
    faqs: [
      {
        question: "Can CareHive provide tracheostomy care at home?",
        answer:
          "We can discuss tracheostomy home support based on the doctor's instructions, the patient's condition and caregiver availability. Contact CareHive with the care notes you have been given.",
      },
      {
        question: "Is this a substitute for ICU care?",
        answer:
          "No. Home tracheostomy support is not intensive-care treatment. It is supportive care at home according to medical instructions.",
      },
    ],
    related: ["home-nursing", "post-hospitalization-care", "palliative-care"],
    seoTitle: "Tracheostomy Care at Home in Trivandrum | CareHive",
    seoDescription:
      "Tracheostomy care support at home in Trivandrum, according to professional medical instructions. Speak to CareHive about your requirement.",
  },
  {
    slug: "colostomy-care",
    title: "Colostomy Care",
    navTitle: "Colostomy Care",
    shortDescription:
      "Discreet, respectful home support for colostomy care following the guidance of the treating medical team.",
    description:
      "CareHive colostomy care helps patients and families manage stoma-related support at home with privacy, hygiene and care according to professional medical instructions.",
    overview:
      "Living with a colostomy is easier when support is skilled, discreet and unhurried. CareHive arranges home support for colostomy care according to professional medical instructions — helping with the practical routine, hygiene, comfort and confidence, while clinical decisions stay with the treating doctor.",
    category: "specialized",
    icon: "activity",
    image: "/images/hands-care.jpg",
    imageAlt:
      "Compassionate home caregiver holding a patient's hand during specialised care",
    whatsappKey: "colostomy",
    whoNeedsIt: [
      "Patients recently discharged with a colostomy",
      "People who need help with pouch changes and hygiene at home",
      "Families who want trained support rather than managing every step alone",
      "Patients seeking short-term training support or longer-term assistance",
    ],
    whatWeProvide: [
      "Colostomy care support according to professional medical instructions",
      "Assistance with hygiene, comfort and daily routine",
      "A discreet, respectful caregiver presence",
      "Coordination with the family around the prescribed care plan",
      "Flexible hours based on the patient's needs",
    ],
    benefits: [
      "Privacy and dignity at home",
      "Practical help with a routine that can feel overwhelming at first",
      "Family members can learn alongside a caregiver if they wish",
      "Support that can reduce as the patient becomes more independent",
    ],
    considerations: [
      "Colostomy support is provided according to professional medical instructions. It does not replace surgical or specialist follow-up.",
      "Signs of infection, blockage or other complications should be reviewed by the treating doctor.",
      "Availability depends on the patient's requirement and service location. Contact CareHive to discuss your needs.",
    ],
    faqs: [
      {
        question: "Do you provide colostomy care at home?",
        answer:
          "Yes, CareHive can discuss colostomy home support. Please share the care instructions you received from the hospital or specialist.",
      },
      {
        question: "Will the caregiver be sensitive about privacy?",
        answer:
          "Dignity and privacy are central to this service. We match support with an understanding of how personal this care is.",
      },
    ],
    related: ["wound-care", "home-nursing", "post-hospitalization-care"],
    seoTitle: "Colostomy Care at Home in Trivandrum | CareHive",
    seoDescription:
      "Colostomy care support at home in Trivandrum. Discreet home healthcare according to professional medical instructions.",
  },
  {
    slug: "wound-care",
    title: "Wound Care Support",
    navTitle: "Wound Care",
    shortDescription:
      "Home support for dressing changes and wound care, carried out according to professional medical instructions.",
    description:
      "CareHive wound care support helps families continue dressing and wound-related care at home, following the treating clinician's instructions.",
    overview:
      "Wounds heal better when dressings stay consistent and the home environment stays clean. CareHive provides wound care support according to professional medical instructions — not independent medical treatment. Families typically share discharge notes or the surgeon's dressing plan, and we arrange suitable nursing or caregiver support around that plan.",
    category: "specialized",
    icon: "bandage",
    image: "/images/hands-care.jpg",
    imageAlt:
      "Gentle home healthcare support with a caregiver holding a patient's hands",
    whatsappKey: "woundCare",
    whoNeedsIt: [
      "Patients with surgical wounds who need dressing support at home",
      "People who cannot travel frequently for simple dressing visits",
      "Families managing pressure sores or chronic wounds under a doctor's plan",
      "Households who want a nurse to handle hygiene and dressing changes",
    ],
    whatWeProvide: [
      "Wound care support according to professional medical instructions",
      "Assistance with dressing changes as directed by the treating clinician",
      "Observation of the wound area and updates to the family",
      "Help keeping the care environment clean and organised",
      "Home visits or stay-in support depending on the requirement",
    ],
    benefits: [
      "Fewer stressful trips for routine dressing changes",
      "A consistent person following the same care plan",
      "Family members are not left to manage dressings alone if they are unsure",
      "Recovery can continue in a familiar home setting",
    ],
    considerations: [
      "Wound care support follows the clinician's plan. It is not a substitute for surgical review.",
      "Spreading redness, fever, heavy discharge or sudden pain should be reported to the treating doctor.",
      "Availability depends on the patient's requirement and service location. Contact CareHive to discuss your needs.",
    ],
    faqs: [
      {
        question: "Can a nurse come home for dressing changes?",
        answer:
          "Wound care support at home can be arranged according to professional medical instructions. Share the dressing frequency and any hospital notes when you contact us.",
      },
      {
        question: "Do you treat wounds independently?",
        answer:
          "No. CareHive provides support according to the treating doctor's or hospital's instructions. Clinical decisions remain with the medical team.",
      },
    ],
    related: ["home-nursing", "post-hospitalization-care", "colostomy-care"],
    seoTitle: "Wound Care at Home in Trivandrum | CareHive",
    seoDescription:
      "Wound care support and dressing assistance at home in Trivandrum, according to professional medical instructions.",
  },
  {
    slug: "palliative-care",
    title: "Palliative Care",
    navTitle: "Palliative Care",
    shortDescription:
      "Gentle home support focused on comfort, dignity and family presence during serious or long-term illness.",
    description:
      "CareHive palliative home care supports comfort, daily living and family-centred presence for people living with serious illness, alongside — not instead of — medical care.",
    overview:
      "Palliative support at home is about comfort, dignity and not facing difficult days alone. CareHive provides caregiver and nursing support for daily needs, comfort measures as advised by the treating team, and a calm presence for the family. We do not replace palliative physicians or hospice medical programmes; we help families bring compassionate support into the home.",
    category: "specialized",
    icon: "heartPulse",
    image: "/images/elderly-care.jpg",
    imageAlt:
      "Compassionate palliative home care for an elderly Indian patient",
    whatsappKey: "palliative",
    whoNeedsIt: [
      "Families caring for a loved one with a serious or life-limiting illness",
      "Patients who wish to remain at home with supportive care",
      "Households who need night support or respite for family caregivers",
      "People already under a doctor's palliative or symptom-management plan",
    ],
    whatWeProvide: [
      "Comfort-focused caregiver or nursing support at home",
      "Assistance with personal care, positioning and daily comfort",
      "Support according to professional medical instructions",
      "A respectful presence for the patient and family",
      "Flexible hours, including longer-term arrangements where feasible",
    ],
    benefits: [
      "Care in familiar surroundings",
      "Family members can share the load and still be present",
      "Attention to dignity in everyday moments",
      "A steadier routine during an emotionally demanding time",
    ],
    considerations: [
      "Palliative home support does not replace specialist medical care or emergency treatment.",
      "Symptom changes should be discussed with the treating doctor.",
      "Availability depends on the patient's requirement and service location. Contact CareHive to discuss your needs.",
    ],
    faqs: [
      {
        question: "Do you provide palliative care at home in Kerala?",
        answer:
          "CareHive can arrange palliative home support and caregiver assistance. Medical treatment remains with the patient's doctor. Contact us to discuss the situation with care and privacy.",
      },
      {
        question: "Can this include overnight support?",
        answer:
          "Night and longer-hour support can be discussed based on the requirement and availability.",
      },
    ],
    related: ["chronic-disease-care", "home-nursing", "companionship-care"],
    seoTitle: "Palliative Care at Home in Kerala | CareHive",
    seoDescription:
      "Palliative home care and comfort-focused caregiver support in Trivandrum, Kerala. Dignified home-based assistance for families.",
  },
  {
    slug: "chronic-disease-care",
    title: "Chronic Disease Care",
    navTitle: "Chronic Disease Care",
    shortDescription:
      "Steady home support for people living with long-term conditions, built around routine, observation and family peace of mind.",
    description:
      "Chronic disease care from CareHive helps patients live at home with daily assistance, reminders and caregiver or nursing support aligned with their ongoing medical plan.",
    overview:
      "Long-term conditions often need a reliable daily rhythm more than occasional crisis help. CareHive supports people living with chronic illness through assistance with daily living, companionship, observation and care according to professional medical instructions. The treating physician remains responsible for diagnosis and treatment.",
    category: "specialized",
    icon: "clipboardPlus",
    image: "/images/about-care.jpg",
    imageAlt:
      "Caregiver providing steady long-term support for an elderly Indian patient at home",
    whatsappKey: "chronic",
    whoNeedsIt: [
      "People living with long-term conditions who need daily help at home",
      "Patients who need reminders, mobility support or observation",
      "Families managing diabetes, stroke recovery support, or similar long-term needs under a doctor's care",
      "Households looking for consistent, not one-off, caregiver support",
    ],
    whatWeProvide: [
      "Daily living assistance tailored to the patient's routine",
      "Support according to professional medical instructions",
      "Companionship and a consistent caregiver presence",
      "Updates for family members, including those living away",
      "Day, night, short-term or long-term options",
    ],
    benefits: [
      "A more stable home routine",
      "Earlier notice for families when something seems different",
      "Less burnout for relatives who have been providing all the care",
      "Support that can continue as a long-term arrangement",
    ],
    considerations: [
      "Chronic disease care is supportive. It does not replace specialist clinics or prescribed treatment.",
      "New or worsening symptoms should be reviewed by the treating doctor.",
      "Availability depends on the patient's requirement and service location. Contact CareHive to discuss your needs.",
    ],
    faqs: [
      {
        question: "Can you support stroke recovery at home?",
        answer:
          "We can discuss caregiver and nursing support for stroke recovery at home. Therapy and medical treatment remain with the patient's clinicians. Support is arranged according to professional medical instructions.",
      },
      {
        question: "Is long-term care possible?",
        answer:
          "Yes. Long-term caregiver arrangements can be discussed after we understand the routine, hours and location.",
      },
    ],
    related: ["elderly-care", "patient-care", "palliative-care"],
    seoTitle: "Chronic Disease Care at Home in Trivandrum | CareHive",
    seoDescription:
      "Chronic illness home care in Trivandrum. Daily caregiver and nursing support aligned with the patient's medical plan.",
  },
  {
    slug: "companionship-care",
    title: "Companionship Care",
    navTitle: "Companionship Care",
    shortDescription:
      "Warm, reliable company at home for seniors and patients who need presence, conversation and a watchful eye.",
    description:
      "Companionship care from CareHive is for families who want a trusted person at home — for conversation, meals, walks, supervision and the comfort of not being alone.",
    overview:
      "Not every care need is clinical. Many older adults and recovering patients mainly need company, a regular meal, help getting around the house, and someone who notices if something is wrong. Companionship care is gentle, unhurried and focused on making the day feel safer and less lonely.",
    category: "family",
    icon: "users",
    image: "/images/elderly-care.jpg",
    imageAlt:
      "Companion caregiver spending time with an elderly Indian woman at home",
    whatsappKey: "elderly",
    whoNeedsIt: [
      "Seniors who spend long hours alone",
      "Patients who are stable but need supervision and company",
      "Families who want a presence at home while they are at work",
      "People who would enjoy conversation, reading, walks or simple shared routines",
    ],
    whatWeProvide: [
      "A companion caregiver at home",
      "Help with simple daily routines and meals",
      "Conversation, encouragement and a watchful presence",
      "Escort support around the home as needed",
      "Updates to the family",
    ],
    benefits: [
      "Less isolation for the person at home",
      "A calmer household for working family members",
      "Someone present who can call the family if help is needed",
      "A human, not clinical, approach to daily support",
    ],
    considerations: [
      "Companionship care is not emergency medical care or specialist nursing unless separately arranged.",
      "If nursing or specialised procedures are required, we can discuss combining services.",
      "Availability depends on the patient's requirement and service location. Contact CareHive to discuss your needs.",
    ],
    faqs: [
      {
        question: "Is companionship care only for elderly people?",
        answer:
          "It is most often requested for seniors, but it can also support adults recovering at home who mainly need company and supervision.",
      },
      {
        question: "Can this be a few hours a day?",
        answer:
          "Yes. Part-day companionship is a common request. Share the hours that would help your family most.",
      },
    ],
    related: ["elderly-care", "patient-care", "bystander-support"],
    seoTitle: "Companionship Care in Trivandrum | CareHive",
    seoDescription:
      "Companionship caregiver service in Trivandrum. Trusted company and home support for seniors and patients who should not be alone.",
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getRelatedServices(slugs: string[]) {
  return slugs
    .map((slug) => getService(slug))
    .filter((service): service is Service => Boolean(service));
}

export const serviceSlugs = services.map((service) => service.slug);
