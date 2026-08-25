import Link from "next/link";
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
  core: "bg-teal-light text-teal",
  family: "bg-coral-light text-coral",
  specialized: "bg-navy text-white",
};

export function ServiceCard({
  service,
  featured = false,
}: {
  service: Service;
  featured?: boolean;
}) {
  const Icon = icons[service.icon];

  return (
    <article
      className={cn(
        "flex h-full flex-col rounded-3xl border bg-white p-6 shadow-[var(--shadow-card)] transition duration-200 hover:-translate-y-1 hover:shadow-lg",
        service.category === "specialized"
          ? "border-navy/10"
          : service.category === "family"
            ? "border-coral/15"
            : "border-teal/15",
        featured && "md:col-span-2 lg:col-span-1",
      )}
    >
      <div
        className={cn(
          "mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl",
          categoryStyles[service.category],
        )}
      >
        <Icon className="h-6 w-6" aria-hidden />
      </div>
      <h3 className="text-xl font-bold text-navy">{service.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-6 text-muted">
        {service.shortDescription}
      </p>
      <div className="mt-5 flex flex-col gap-2 sm:flex-row">
        <Link
          href={`/services/${service.slug}`}
          className="inline-flex h-11 items-center justify-center rounded-full border border-navy/10 px-4 text-sm font-semibold text-navy hover:border-teal hover:text-teal"
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
    </article>
  );
}
