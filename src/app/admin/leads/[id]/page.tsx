import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { LeadDetail } from "@/components/admin/LeadDetail";
import { getAdminSession } from "@/lib/admin-auth";
import { getLead } from "@/lib/leads/store";

type PageProps = { params: Promise<{ id: string }> };

export const metadata: Metadata = {
  title: "Enquiry detail | CareHive Admin",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

export default async function AdminLeadDetailPage({ params }: PageProps) {
  if (!(await getAdminSession())) redirect("/admin");
  const { id } = await params;
  const lead = await getLead(id);
  if (!lead) notFound();
  return (
    <section className="bg-soft">
      <LeadDetail lead={lead} />
    </section>
  );
}
