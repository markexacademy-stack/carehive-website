import { promises as fs } from "node:fs";
import path from "node:path";
import type { LeadFormValues, LeadStatus, StoredLead } from "@/lib/leads/schema";

const dataFile = path.join(process.cwd(), "data", "leads.json");

async function ensureStore() {
  await fs.mkdir(path.dirname(dataFile), { recursive: true });
  try {
    await fs.access(dataFile);
  } catch {
    await fs.writeFile(dataFile, "[]", "utf8");
  }
}

async function readLeads(): Promise<StoredLead[]> {
  await ensureStore();
  const raw = await fs.readFile(dataFile, "utf8");
  try {
    const parsed = JSON.parse(raw) as StoredLead[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

async function writeLeads(leads: StoredLead[]) {
  await ensureStore();
  await fs.writeFile(dataFile, JSON.stringify(leads, null, 2), "utf8");
}

export async function createLead(
  input: LeadFormValues,
  source = "website",
): Promise<StoredLead> {
  const lead: StoredLead = {
    ...input,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    status: "NEW",
    notes: "",
    followUpAt: null,
    source: input.source || source,
  };

  const webhook = process.env.LEADS_WEBHOOK_URL;
  if (webhook) {
    try {
      await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lead),
      });
    } catch {
      // Continue to local storage so the enquiry is not lost.
    }
  }

  const resendKey = process.env.RESEND_API_KEY;
  const notifyEmail = process.env.LEAD_NOTIFY_EMAIL;
  const notifyFrom =
    process.env.LEAD_NOTIFY_FROM ||
    "CareHive Website <onboarding@resend.dev>";
  if (resendKey && notifyEmail) {
    try {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: notifyFrom,
          to: [notifyEmail],
          subject: `New CareHive enquiry from ${lead.name}`,
          text: `New enquiry received.\nName: ${lead.name}\nPhone: ${lead.phone}\nLocation: ${lead.location}\nCare: ${lead.careRequired}\nType: ${lead.preferredCareType}`,
        }),
      });
    } catch {
      // Email notification is optional; the lead is still stored.
    }
  }

  const leads = await readLeads();
  leads.unshift(lead);
  await writeLeads(leads);
  return lead;
}

export async function listLeads() {
  return readLeads();
}

export async function getLead(id: string) {
  const leads = await readLeads();
  return leads.find((lead) => lead.id === id) ?? null;
}

export async function updateLead(
  id: string,
  patch: Partial<Pick<StoredLead, "status" | "notes" | "followUpAt">>,
) {
  const leads = await readLeads();
  const index = leads.findIndex((lead) => lead.id === id);
  if (index === -1) return null;

  const current = leads[index];
  const next: StoredLead = {
    ...current,
    status: (patch.status as LeadStatus | undefined) ?? current.status,
    notes: patch.notes ?? current.notes,
    followUpAt:
      patch.followUpAt === undefined ? current.followUpAt : patch.followUpAt,
  };
  leads[index] = next;
  await writeLeads(leads);
  return next;
}
