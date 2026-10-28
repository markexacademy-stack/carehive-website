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
        src="/images/carehive-logo-clear.png"
        alt="CareHive Healthcare Services — Care That Feels Like Home"
        width={545}
        height={596}
        priority
        loading="eager"
        unoptimized
        className="logo-on-navy h-14 w-auto max-w-[7.5rem] object-contain object-left sm:h-16 sm:max-w-[8.5rem]"
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
        "header-enter sticky top-0 z-50 overflow-visible border-b border-white/10 text-white backdrop-blur-xl transition-all duration-300",
        scrolled ? "bg-navy-deep/95 shadow-[var(--shadow-nav)]" : "bg-navy-deep/70",
      )}
    >
      <div className="mx-auto flex min-h-[5.25rem] max-w-6xl items-center justify-between gap-3 overflow-visible px-4 py-2 sm:min-h-[5.75rem] sm:px-6 lg:max-w-7xl lg:px-8">
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
                    ? "bg-white/15 text-white"
                    : "text-white/75 hover:bg-white/10 hover:text-white",
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
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white"
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
          className="border-t border-white/10 bg-navy-deep lg:hidden"
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
                className="rounded-2xl px-4 py-3 text-base font-semibold text-white hover:bg-white/10"
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
        className="h-0.5 bg-gradient-to-r from-teal via-[#55e6dc] to-coral"
        aria-hidden
      />
    </header>
  );
}
