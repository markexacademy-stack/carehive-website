import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { LeadTable } from "@/components/admin/LeadTable";
import { getAdminSession } from "@/lib/admin-auth";
import { listLeads } from "@/lib/leads/store";

export const metadata: Metadata = {
  title: "Enquiries | CareHive Admin",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

export default async function AdminLeadsPage() {
  if (!(await getAdminSession())) {
    redirect("/admin");
  }
  const leads = await listLeads();
  return (
    <section className="bg-soft">
      <LeadTable leads={leads} />
    </section>
  );
}
