"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { StoredLead } from "@/lib/leads/schema";
import { LEAD_STATUSES } from "@/lib/leads/schema";
import { Container } from "@/components/ui/container";

export function LeadTable({ leads }: { leads: StoredLead[] }) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [service, setService] = useState("all");
  const [status, setStatus] = useState("all");

  const filtered = useMemo(() => {
    return leads.filter((lead) => {
      const haystack = `${lead.name} ${lead.phone} ${lead.location} ${lead.careRequired}`.toLowerCase();
      const matchesQuery = haystack.includes(query.toLowerCase());
      const matchesService = service === "all" || lead.careRequired === service;
      const matchesStatus = status === "all" || lead.status === status;
      return matchesQuery && matchesService && matchesStatus;
    });
  }, [leads, query, service, status]);

  function exportCsv() {
    const header = [
      "id",
      "createdAt",
      "name",
      "phone",
      "whatsapp",
      "location",
      "careRequired",
      "preferredCareType",
      "status",
    ];
    const rows = filtered.map((lead) =>
      header
        .map((key) => `"${String(lead[key as keyof StoredLead] ?? "").replace(/"/g, '""')}"`)
        .join(","),
    );
    const blob = new Blob([[header.join(","), ...rows].join("\n")], {
      type: "text/csv;charset=utf-8;",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "carehive-leads.csv";
    link.click();
    URL.revokeObjectURL(url);
  }

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin");
    router.refresh();
  }

  return (
    <Container className="py-10">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-3xl font-extrabold text-navy">Enquiries</h1>
          <p className="mt-1 text-sm text-muted">
            {filtered.length} of {leads.length} records
          </p>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={exportCsv}
            className="h-10 rounded-full bg-teal px-4 text-sm font-semibold text-white"
          >
            Export CSV
          </button>
          <button
            type="button"
            onClick={logout}
            className="h-10 rounded-full border border-line px-4 text-sm font-semibold text-navy"
          >
            Sign out
          </button>
        </div>
      </div>

      <div className="mt-6 grid gap-3 md:grid-cols-3">
        <input
          className="h-11 rounded-2xl border border-line px-4 text-sm"
          placeholder="Search name, phone, location"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <select
          className="h-11 rounded-2xl border border-line px-4 text-sm"
          value={service}
          onChange={(event) => setService(event.target.value)}
        >
          <option value="all">All services</option>
          {[...new Set(leads.map((lead) => lead.careRequired))].map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        <select
          className="h-11 rounded-2xl border border-line px-4 text-sm"
          value={status}
          onChange={(event) => setStatus(event.target.value)}
        >
          <option value="all">All statuses</option>
          {LEAD_STATUSES.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-6 overflow-x-auto rounded-3xl border border-line bg-white">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-soft text-navy">
            <tr>
              <th className="px-4 py-3 font-semibold">Created</th>
              <th className="px-4 py-3 font-semibold">Name</th>
              <th className="px-4 py-3 font-semibold">Phone</th>
              <th className="px-4 py-3 font-semibold">Care</th>
              <th className="px-4 py-3 font-semibold">Status</th>
              <th className="px-4 py-3 font-semibold">Details</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((lead) => (
              <tr key={lead.id} className="border-t border-line">
                <td className="px-4 py-3 text-muted">
                  {new Date(lead.createdAt).toLocaleString("en-IN")}
                </td>
                <td className="px-4 py-3 font-semibold text-navy">{lead.name}</td>
                <td className="px-4 py-3">{lead.phone}</td>
                <td className="px-4 py-3">{lead.careRequired}</td>
                <td className="px-4 py-3">{lead.status}</td>
                <td className="px-4 py-3">
                  <Link href={`/admin/leads/${lead.id}`} className="font-semibold text-teal">
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filtered.length === 0 ? (
          <p className="px-4 py-8 text-sm text-muted">No enquiries match these filters.</p>
        ) : null}
      </div>
    </Container>
  );
}
