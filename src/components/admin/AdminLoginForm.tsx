"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/sections/PageHero";

export function AdminLoginForm({ configured }: { configured: boolean }) {
  const router = useRouter();
  const params = useSearchParams();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    setLoading(true);
    setError("");
    const response = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    setLoading(false);
    if (!response.ok) {
      setError("That password is not correct.");
      return;
    }
    router.push(params.get("from") || "/admin/leads");
    router.refresh();
  }

  return (
    <>
      <PageHero
        eyebrow="Admin"
        title="CareHive lead workspace"
        description="Protected area for reviewing care enquiries. Not indexed for public visitors."
      />
      <section className="bg-white py-16">
        <Container className="max-w-md">
          {!configured ? (
            <div className="rounded-3xl border border-line bg-soft p-6 text-sm leading-7 text-muted">
              <p className="font-semibold text-navy">Admin is not configured yet.</p>
              <p className="mt-3">
                Add <code>ADMIN_PASSWORD</code> and optionally{" "}
                <code>ADMIN_SESSION_SECRET</code> to <code>.env.local</code>, then
                restart the app. Until then, this login cannot be used.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="rounded-3xl border border-line bg-white p-6 shadow-[var(--shadow-card)]">
              <label className="block text-sm font-semibold text-navy">
                Admin password
                <input
                  type="password"
                  className="mt-2 w-full rounded-2xl border border-line px-4 py-3 text-sm"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  required
                />
              </label>
              {error ? (
                <p className="mt-3 text-sm text-coral" role="alert">
                  {error}
                </p>
              ) : null}
              <button
                type="submit"
                disabled={loading}
                className="mt-5 inline-flex h-11 w-full items-center justify-center rounded-full bg-navy text-sm font-semibold text-white"
              >
                {loading ? "Signing in..." : "Sign in"}
              </button>
            </form>
          )}
        </Container>
      </section>
    </>
  );
}
