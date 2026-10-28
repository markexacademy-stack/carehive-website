"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  Activity,
  Baby,
  Bandage,
  ClipboardPlus,
  HeartHandshake,
  HeartPulse,
  Hospital,
  PersonStanding,
  Stethoscope,
  UserRound,
  Users,
  Wind,
} from "lucide-react";
import { WhatsAppButton } from "@/components/cta/WhatsAppButton";
import type { Service, ServiceIconName } from "@/lib/services";
import { cn } from "@/lib/utils";

const icons: Record<ServiceIconName, React.ComponentType<{ className?: string }>> = {
  heartHandshake: HeartHandshake,
  stethoscope: Stethoscope,
  userRound: UserRound,
  personStanding: PersonStanding,
  baby: Baby,
  hospital: Hospital,
  wind: Wind,
  activity: Activity,
  bandage: Bandage,
  heartPulse: HeartPulse,
  clipboardPlus: ClipboardPlus,
  users: Users,
};

const categoryStyles = {
  core: "bg-teal text-white",
  family: "bg-coral text-white",
  specialized: "bg-navy text-white",
};

export function ServiceCard({
  service,
  index = 0,
  featured = false,
  className,
}: {
  service: Service;
  index?: number;
  featured?: boolean;
  className?: string;
}) {
  const Icon = icons[service.icon];
  const reduce = useReducedMotion();

  return (
    <motion.article
      initial={reduce ? false : { opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.7,
        delay: reduce ? 0 : (index % 3) * 0.12,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={reduce ? undefined : { y: -10 }}
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-[1.6rem] border border-white/40 bg-white shadow-[0_24px_50px_-32px_rgb(7_22_46/0.55)]",
        className,
      )}
    >
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 z-10 h-1 origin-left scale-x-0 bg-gradient-to-r from-teal via-navy to-coral transition duration-500 group-hover:scale-x-100"
      />
      <div className="relative overflow-hidden">
        <Image
          src={service.image}
          alt={service.imageAlt}
          width={1536}
          height={1024}
          quality={90}
          sizes={featured ? "(max-width: 768px) 100vw, 60vw" : "(max-width: 640px) 100vw, 33vw"}
          className="h-auto w-full"
        />
        <span
          className={cn(
            "absolute bottom-3 left-3 inline-flex h-11 w-11 items-center justify-center rounded-2xl shadow-md transition duration-300 group-hover:-translate-y-1",
            categoryStyles[service.category],
          )}
        >
          <Icon className="h-5 w-5" aria-hidden />
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="font-brand text-2xl font-semibold text-navy">{service.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-6 text-muted">{service.shortDescription}</p>
        <div className="mt-5 flex flex-col gap-2 sm:flex-row">
          <Link
            href={`/services/${service.slug}`}
            className="inline-flex h-11 items-center justify-center rounded-full bg-navy px-4 text-sm font-semibold text-white transition hover:bg-teal"
          >
            Know More
          </Link>
          <WhatsAppButton
            label="WhatsApp Enquiry"
            messageKey={service.whatsappKey}
            size="sm"
            className="h-11"
          />
        </div>
      </div>
    </motion.article>
  );
}
