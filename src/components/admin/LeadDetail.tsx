"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { StoredLead } from "@/lib/leads/schema";
import { LEAD_STATUSES } from "@/lib/leads/schema";
import { Container } from "@/components/ui/container";

export function LeadDetail({ lead }: { lead: StoredLead }) {
  const router = useRouter();
  const [status, setStatus] = useState(lead.status);
  const [notes, setNotes] = useState(lead.notes);
  const [followUpAt, setFollowUpAt] = useState(lead.followUpAt ?? "");
  const [message, setMessage] = useState("");

  async function save() {
    setMessage("");
    const response = await fetch(`/api/admin/leads/${lead.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        status,
        notes,
        followUpAt: followUpAt || null,
      }),
    });
    if (!response.ok) {
      setMessage("Could not save changes.");
      return;
    }
    setMessage("Saved.");
    router.refresh();
  }

  return (
    <Container className="py-10">
      <Link href="/admin/leads" className="text-sm font-semibold text-teal">
        Back to enquiries
      </Link>
      <h1 className="mt-4 text-3xl font-extrabold text-navy">{lead.name}</h1>
      <p className="mt-1 text-sm text-muted">
        Received {new Date(lead.createdAt).toLocaleString("en-IN")}
      </p>

      <dl className="mt-8 grid gap-4 rounded-3xl border border-line bg-white p-6 sm:grid-cols-2">
        <Item label="Phone" value={lead.phone} />
        <Item label="WhatsApp" value={lead.whatsapp || lead.phone} />
        <Item label="Location" value={lead.location} />
        <Item label="Patient age" value={lead.patientAge || "—"} />
        <Item label="Care required" value={lead.careRequired} />
        <Item label="Preferred care type" value={lead.preferredCareType} />
        <Item label="Preferred start date" value={lead.preferredStartDate || "—"} />
        <Item label="Source" value={lead.source || "website"} />
        <div className="sm:col-span-2">
          <Item
            label="Additional information"
            value={lead.additionalInformation || "—"}
          />
        </div>
      </dl>

      <div className="mt-6 space-y-4 rounded-3xl border border-line bg-white p-6">
        <label className="block text-sm font-semibold text-navy">
          Status
          <select
            className="mt-2 h-11 w-full rounded-2xl border border-line px-4 text-sm"
            value={status}
            onChange={(event) =>
              setStatus(event.target.value as StoredLead["status"])
            }
          >
            {LEAD_STATUSES.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
        <label className="block text-sm font-semibold text-navy">
          Follow-up date
          <input
            type="date"
            className="mt-2 h-11 w-full rounded-2xl border border-line px-4 text-sm"
            value={followUpAt}
            onChange={(event) => setFollowUpAt(event.target.value)}
          />
        </label>
        <label className="block text-sm font-semibold text-navy">
          Internal notes
          <textarea
            className="mt-2 min-h-32 w-full rounded-2xl border border-line px-4 py-3 text-sm"
            value={notes}
            onChange={(event) => setNotes(event.target.value)}
          />
        </label>
        <button
          type="button"
          onClick={save}
          className="h-11 rounded-full bg-navy px-5 text-sm font-semibold text-white"
        >
          Save updates
        </button>
        {message ? <p className="text-sm text-teal">{message}</p> : null}
      </div>
    </Container>
  );
}

function Item({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs font-semibold tracking-[0.12em] text-muted">{label}</dt>
      <dd className="mt-1 text-sm text-ink">{value}</dd>
    </div>
  );
}
