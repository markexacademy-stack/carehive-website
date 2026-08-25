import Link from "next/link";
import { Logo } from "@/components/layout/Logo";
import { WhatsAppButton } from "@/components/cta/WhatsAppButton";
import { PhoneButton } from "@/components/cta/PhoneButton";
import {
  FOOTER_SERVICE_LINKS,
  getConfiguredSocialLinks,
  NAV_LINKS,
  SITE,
} from "@/lib/site";

export function Footer() {
  const socials = getConfiguredSocialLinks();
  const hasSocials = socials.length > 0;

  return (
    <footer className="bg-navy-deep text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <Logo variant="footer" />
          <p className="mt-4 max-w-xs text-sm leading-6 text-white/75">
            {SITE.tagline}
          </p>
          <p className="mt-3 max-w-xs text-sm leading-6 text-white/65">
            {SITE.positioning}
          </p>
        </div>

        <div>
          <h2 className="text-sm font-bold tracking-[0.14em] text-teal-light">
            Quick Links
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-white/80 hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold tracking-[0.14em] text-teal-light">
            Services
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            {FOOTER_SERVICE_LINKS.map((link) => (
              <li key={link.href + link.label}>
                <Link href={link.href} className="text-white/80 hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold tracking-[0.14em] text-teal-light">
            Contact
          </h2>
          <p className="mt-4 text-sm text-white/80">{SITE.phone.display}</p>
          <p className="mt-2 text-sm leading-6 text-white/70">
            {SITE.location.shortDisplay}
          </p>
          <div className="mt-5 flex flex-col gap-2">
            <PhoneButton label="Call CareHive" size="sm" />
            <WhatsAppButton label="Chat With CareHive" size="sm" />
          </div>
          <div className="mt-5 text-sm text-white/70">
            <p className="font-semibold text-white/85">Social</p>
            {hasSocials ? (
              <ul className="mt-2 space-y-1">
                {socials.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-2 text-white/55">
                Instagram, Facebook and Google Business Profile links will be
                added once official pages are published.
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-5 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>
            © {new Date().getFullYear()} {SITE.name}. {SITE.tagline}
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-white">
              Terms & Conditions
            </Link>
            <Link href="/disclaimer" className="hover:text-white">
              Disclaimer
            </Link>
          </div>
        </div>
        <p className="mx-auto max-w-6xl px-4 text-xs text-white/55 sm:px-6 lg:px-8">
          Developed by{" "}
          <a
            href="https://bitvion.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-teal-light transition hover:text-white"
          >
            Bitvion Technologies
          </a>
        </p>
        <p className="mx-auto max-w-6xl px-4 pb-8 pt-3 text-xs leading-5 text-white/50 sm:px-6 lg:px-8">
          {SITE.medicalDisclaimer}
        </p>
      </div>
    </footer>
  );
}
