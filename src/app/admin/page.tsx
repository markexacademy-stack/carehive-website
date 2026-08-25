import type { Metadata } from "next";
import { Suspense } from "react";
import { AdminLoginForm } from "@/components/admin/AdminLoginForm";
import { isAdminConfigured } from "@/lib/admin-auth";

export const metadata: Metadata = {
  title: "Admin | CareHive",
  robots: { index: false, follow: false },
};

export default function AdminPage() {
  return (
    <Suspense>
      <AdminLoginForm configured={isAdminConfigured()} />
    </Suspense>
  );
}
