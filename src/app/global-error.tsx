"use client";

import { useEffect } from "react";
import Link from "next/link";
import { WhatsAppButton } from "@/components/cta/WhatsAppButton";
import { PhoneButton } from "@/components/cta/PhoneButton";
import { Container } from "@/components/ui/container";

export default function GlobalError({
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
    <html lang="en-IN">
      <body className="min-h-screen bg-[#F7FAFA] font-sans text-[#17212B]">
        <section className="py-24">
          <Container className="max-w-2xl text-center">
            <p className="text-xs font-semibold tracking-[0.18em] text-[#0896AC]">
              SOMETHING WENT WRONG
            </p>
            <h1 className="mt-3 text-4xl font-extrabold text-[#003064]">
              We could not load this page
            </h1>
            <p className="mt-4 text-[#4d5c69]">
              Please try again, or contact CareHive directly for care support.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <button
                type="button"
                onClick={reset}
                className="inline-flex h-12 items-center rounded-full bg-[#0896AC] px-5 text-sm font-semibold text-white"
              >
                Try again
              </button>
              <Link
                href="/"
                className="inline-flex h-12 items-center rounded-full border border-[#003064]/15 px-5 text-sm font-semibold text-[#003064]"
              >
                Back to home
              </Link>
              <WhatsAppButton label="WhatsApp CareHive" messageKey="general" />
              <PhoneButton label="Call Now" variant="outline" />
            </div>
          </Container>
        </section>
      </body>
    </html>
  );
}
