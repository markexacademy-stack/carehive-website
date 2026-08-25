"use client";

import { usePathname } from "next/navigation";
import { MessageCircle } from "lucide-react";
import { createWhatsAppLinkFromKey } from "@/lib/whatsapp";

export function FloatingWhatsApp() {
  const pathname = usePathname();
  if (pathname.startsWith("/admin")) return null;

  return (
    <a
      href={createWhatsAppLinkFromKey("general")}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed right-4 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-lg bottom-[calc(5.75rem+env(safe-area-inset-bottom))] md:bottom-6 md:h-16 md:w-16"
      aria-label="Chat with CareHive on WhatsApp"
    >
      <span
        className="pulse-ring absolute inset-0 rounded-full bg-whatsapp"
        aria-hidden
      />
      <MessageCircle className="relative h-7 w-7" aria-hidden />
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-full bg-navy px-3 py-1.5 text-xs font-semibold text-white opacity-0 shadow-md transition group-hover:opacity-100 md:block">
        Chat with CareHive
      </span>
    </a>
  );
}
