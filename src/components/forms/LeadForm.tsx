"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PhoneButton } from "@/components/cta/PhoneButton";
import { WhatsAppButton } from "@/components/cta/WhatsAppButton";
import {
  CARE_REQUIRED_OPTIONS,
  leadFormSchema,
  PREFERRED_CARE_OPTIONS,
  type LeadFormValues,
} from "@/lib/leads/schema";
import { cn } from "@/lib/utils";

const fieldClass =
  "mt-1.5 w-full rounded-2xl border border-line bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-teal disabled:bg-soft";

export function LeadForm({ source = "website" }: { source?: string }) {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<LeadFormValues>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      whatsapp: "",
      location: "",
      patientAge: "",
      preferredStartDate: "",
      additionalInformation: "",
      source,
    },
  });

  async function onSubmit(values: LeadFormValues) {
    setStatus("idle");
    setErrorMessage("");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, source }),
      });

      if (!response.ok) {
        const payload = (await response.json().catch(() => null)) as
          | { error?: string }
          | null;
        setStatus("error");
        setErrorMessage(
          payload?.error ||
            "We could not send your request. Please call or WhatsApp CareHive.",
        );
        return;
      }

      reset();
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage(
        "Something went wrong while sending your request. Please WhatsApp or call CareHive.",
      );
    }
  }

  return (
    <div className="rounded-[2rem] border border-line bg-white p-6 shadow-[var(--shadow-card)] sm:p-8">
      <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
        Tell Us What Kind of Care You Need
      </h2>
      <p className="mt-2 text-sm leading-6 text-muted">
        A short form is enough for CareHive to understand your requirement and
        contact you. We use these details only to discuss care for your family —
        not for marketing lists.
      </p>

      {status === "success" ? (
        <div className="mt-6 rounded-2xl bg-teal-light p-5" role="status" aria-live="polite">
          <p className="font-semibold text-navy">
            Thank you for contacting CareHive. Our team will get in touch with you shortly.
          </p>
          <p className="mt-2 text-sm text-muted">
            Prefer to speak now? WhatsApp or call us directly.
          </p>
          <div className="mt-4 flex flex-col gap-2 sm:flex-row">
            <WhatsAppButton label="WhatsApp CareHive" messageKey="requestCare" />
            <PhoneButton label="Call CareHive" variant="outline" />
          </div>
        </div>
      ) : null}

      <form
        className={cn("mt-6 grid gap-4 md:grid-cols-2", status === "success" && "hidden")}
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <Field label="Full Name" error={errors.name?.message} required htmlFor="lead-name">
          <input
            id="lead-name"
            className={fieldClass}
            autoComplete="name"
            placeholder="Your full name"
            disabled={isSubmitting}
            {...register("name")}
          />
        </Field>
        <Field label="Phone Number" error={errors.phone?.message} required htmlFor="lead-phone">
          <input
            id="lead-phone"
            className={fieldClass}
            autoComplete="tel"
            inputMode="tel"
            placeholder="10-digit mobile number"
            disabled={isSubmitting}
            {...register("phone")}
          />
        </Field>
        <Field label="WhatsApp Number" error={errors.whatsapp?.message} htmlFor="lead-whatsapp">
          <input
            id="lead-whatsapp"
            className={fieldClass}
            inputMode="tel"
            placeholder="Same as phone if preferred"
            disabled={isSubmitting}
            {...register("whatsapp")}
          />
        </Field>
        <Field label="Location" error={errors.location?.message} required htmlFor="lead-location">
          <input
            id="lead-location"
            className={fieldClass}
            autoComplete="address-level2"
            placeholder="City / area"
            disabled={isSubmitting}
            {...register("location")}
          />
        </Field>
        <Field label="Patient Age" error={errors.patientAge?.message} htmlFor="lead-age">
          <input
            id="lead-age"
            className={fieldClass}
            inputMode="numeric"
            placeholder="Optional"
            disabled={isSubmitting}
            {...register("patientAge")}
          />
        </Field>
        <Field
          label="Care Required"
          error={errors.careRequired?.message}
          required
          htmlFor="lead-care"
        >
          <select
            id="lead-care"
            className={fieldClass}
            defaultValue=""
            disabled={isSubmitting}
            {...register("careRequired")}
          >
            <option value="" disabled>
              Select care required
            </option>
            {CARE_REQUIRED_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>
        <Field
          label="Preferred Care Type"
          error={errors.preferredCareType?.message}
          required
          htmlFor="lead-type"
        >
          <select
            id="lead-type"
            className={fieldClass}
            defaultValue=""
            disabled={isSubmitting}
            {...register("preferredCareType")}
          >
            <option value="" disabled>
              Select preferred care type
            </option>
            {PREFERRED_CARE_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>
        <Field
          label="Preferred Start Date"
          error={errors.preferredStartDate?.message}
          htmlFor="lead-date"
        >
          <input
            id="lead-date"
            className={fieldClass}
            type="date"
            disabled={isSubmitting}
            {...register("preferredStartDate")}
          />
        </Field>
        <div className="md:col-span-2">
          <Field
            label="Additional Information"
            error={errors.additionalInformation?.message}
            htmlFor="lead-notes"
          >
            <textarea
              id="lead-notes"
              className={cn(fieldClass, "min-h-28 resize-y")}
              placeholder="Share only what helps us understand the care need. Avoid unnecessary medical records."
              disabled={isSubmitting}
              {...register("additionalInformation")}
            />
          </Field>
        </div>
        {status === "error" ? (
          <div className="md:col-span-2 rounded-2xl border border-coral/30 bg-coral-light p-4" role="alert">
            <p className="text-sm font-semibold text-navy">{errorMessage}</p>
            <div className="mt-3 flex flex-col gap-2 sm:flex-row">
              <WhatsAppButton label="WhatsApp CareHive" messageKey="requestCare" size="sm" />
              <PhoneButton label="Call CareHive" variant="outline" size="sm" />
            </div>
          </div>
        ) : null}
        <div className="md:col-span-2 flex flex-col gap-3 sm:flex-row sm:items-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex h-12 items-center justify-center rounded-full bg-teal px-6 text-sm font-semibold text-white transition hover:bg-teal-dark disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? "Sending request..." : "Request Care"}
          </button>
          <p className="text-sm text-muted">Prefer WhatsApp?</p>
          <WhatsAppButton label="Chat with CareHive" messageKey="requestCare" size="sm" />
        </div>
      </form>
    </div>
  );
}

function Field({
  label,
  required,
  error,
  children,
  htmlFor,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
  htmlFor?: string;
}) {
  return (
    <div className="block">
      <label htmlFor={htmlFor} className="text-sm font-semibold text-navy">
        {label}
        {required ? (
          <span className="text-coral" aria-hidden>
            {" "}
            *
          </span>
        ) : null}
        {required ? <span className="sr-only"> (required)</span> : null}
      </label>
      {children}
      {error ? (
        <p className="mt-1 text-xs font-medium text-coral" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
