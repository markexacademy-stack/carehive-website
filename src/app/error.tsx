"use client";

import { useEffect } from "react";
import Link from "next/link";
import { WhatsAppButton } from "@/components/cta/WhatsAppButton";
import { PhoneButton } from "@/components/cta/PhoneButton";
import { Container } from "@/components/ui/container";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="bg-soft py-24">
      <Container className="max-w-2xl text-center">
        <p className="text-xs font-semibold tracking-[0.18em] text-teal">
          TEMPORARY ISSUE
        </p>
        <h1 className="mt-3 text-4xl font-extrabold text-navy">
          This page could not be loaded
        </h1>
        <p className="mt-4 text-muted">
          Please try again in a moment, or reach CareHive on WhatsApp or phone.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button
            type="button"
            onClick={reset}
            className="inline-flex h-12 items-center rounded-full bg-teal px-5 text-sm font-semibold text-white"
          >
            Try again
          </button>
          <Link
            href="/"
            className="inline-flex h-12 items-center rounded-full border border-navy/15 px-5 text-sm font-semibold text-navy"
          >
            Back to home
          </Link>
          <WhatsAppButton label="WhatsApp CareHive" messageKey="general" />
          <PhoneButton label="Call CareHive" variant="outline" />
        </div>
      </Container>
    </section>
  );
}
