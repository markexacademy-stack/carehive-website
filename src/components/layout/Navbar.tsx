"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, MessageCircle, X } from "lucide-react";
import { CTAButton } from "@/components/cta/CTAButton";
import { WhatsAppButton } from "@/components/cta/WhatsAppButton";
import { NAV_LINKS } from "@/lib/site";
import { createWhatsAppLinkFromKey } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

function NavbarLogo() {
  return (
    <Link
      href="/"
      aria-label="CareHive Healthcare Services home"
      className="flex shrink-0 items-center overflow-visible"
    >
      <Image
        src="/images/carehive-logo.png"
        alt="CareHive Healthcare Services — Care That Feels Like Home"
        width={673}
        height={686}
        priority
        unoptimized
        className="h-[3.35rem] w-auto max-w-[9.5rem] origin-left object-contain object-left sm:h-16 sm:max-w-[11rem] scale-[1.25]"
      />
    </Link>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 overflow-visible border-b transition-all duration-300",
        scrolled
          ? "border-teal/20 bg-white shadow-[var(--shadow-nav)]"
          : "border-transparent bg-white",
      )}
    >
      <div className="mx-auto flex min-h-[4.75rem] max-w-6xl items-center justify-between gap-3 overflow-visible px-4 py-2 sm:min-h-[5.25rem] sm:px-6 lg:max-w-7xl lg:px-8">
        <NavbarLogo />

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Primary"
        >
          {NAV_LINKS.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-full px-3 py-2 text-sm font-semibold transition",
                  active
                    ? "bg-teal-light text-navy ring-1 ring-teal/20"
                    : "text-navy/75 hover:bg-coral-light/70 hover:text-navy",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <WhatsAppButton label="WhatsApp Us" size="sm" />
          <CTAButton href="/#request-care" size="sm">
            Get Care Now
          </CTAButton>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={createWhatsAppLinkFromKey("general")}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-whatsapp text-white"
            aria-label="WhatsApp CareHive"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="h-5 w-5" />
          </a>
          <CTAButton href="/#request-care" size="sm" className="px-3.5">
            Get Care Now
          </CTAButton>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-navy"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-menu"
          className="border-t border-line bg-white lg:hidden"
        >
          <nav
            className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4"
            aria-label="Mobile"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-base font-semibold text-navy hover:bg-teal-light"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-2 pb-2">
              <WhatsAppButton label="WhatsApp Us" className="w-full" />
              <CTAButton href="/#request-care" className="w-full">
                Get Care Now
              </CTAButton>
            </div>
          </nav>
        </div>
      ) : null}
      <div
        className="h-0.5 bg-gradient-to-r from-teal via-teal/40 to-coral"
        aria-hidden
      />
    </header>
  );
}
