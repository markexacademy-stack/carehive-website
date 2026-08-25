import Link from "next/link";
import { WhatsAppButton } from "@/components/cta/WhatsAppButton";
import { PhoneButton } from "@/components/cta/PhoneButton";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <section className="bg-soft py-24">
      <Container className="max-w-2xl text-center">
        <p className="text-xs font-semibold tracking-[0.18em] text-teal">404</p>
        <h1 className="mt-3 text-4xl font-extrabold text-navy">Page not found</h1>
        <p className="mt-4 text-muted">
          This page does not exist. You can return home or contact CareHive
          directly.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex h-12 items-center rounded-full bg-teal px-5 text-sm font-semibold text-white"
          >
            Back to home
          </Link>
          <WhatsAppButton label="WhatsApp CareHive" messageKey="general" />
          <PhoneButton label="Call Now" variant="outline" />
        </div>
      </Container>
    </section>
  );
}
