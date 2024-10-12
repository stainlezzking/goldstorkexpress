import { auth } from "@/app/auth";
import AdminRoot from "@/components/builders/admin.root";
import { redirect } from "next/navigation";

export default async function RootLayout({ children }) {
  const session = await auth();
  if (!session) {
    redirect("/admin");
  }
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <AdminRoot />
      <div className="flex-grow justify-stretch flex items-stretch">{children}</div>
    </div>
  );
}
