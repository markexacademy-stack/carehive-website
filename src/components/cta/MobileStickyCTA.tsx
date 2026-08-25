"use client";

import { usePathname } from "next/navigation";
import { ClipboardList, MessageCircle, Phone } from "lucide-react";
import { PHONE_HREF } from "@/lib/phone";
import { createWhatsAppLinkFromKey } from "@/lib/whatsapp";

export function MobileStickyCTA() {
  const pathname = usePathname();
  if (pathname.startsWith("/admin")) return null;

  const requestHref = pathname === "/" ? "#request-care" : "/#request-care";

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white/95 pb-[env(safe-area-inset-bottom)] shadow-[0_-8px_24px_-16px_rgb(0_48_100_/_0.35)] backdrop-blur md:hidden"
      role="navigation"
      aria-label="Quick contact actions"
    >
      <div className="grid grid-cols-3 gap-2 px-3 py-2.5">
        <a
          href={PHONE_HREF}
          className="inline-flex min-h-12 items-center justify-center gap-1.5 rounded-2xl bg-navy px-2 text-sm font-semibold text-white"
          aria-label="Call CareHive"
        >
          <Phone className="h-4 w-4" aria-hidden />
          Call
        </a>
        <a
          href={createWhatsAppLinkFromKey("requestCare")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-12 items-center justify-center gap-1.5 rounded-2xl bg-whatsapp px-2 text-sm font-semibold text-white"
          aria-label="WhatsApp CareHive"
        >
          <MessageCircle className="h-4 w-4" aria-hidden />
          WhatsApp
        </a>
        <a
          href={requestHref}
          className="inline-flex min-h-12 items-center justify-center gap-1.5 rounded-2xl bg-teal px-2 text-sm font-semibold text-white"
          aria-label="Request care form"
        >
          <ClipboardList className="h-4 w-4" aria-hidden />
          Request Care
        </a>
      </div>
    </div>
  );
}
