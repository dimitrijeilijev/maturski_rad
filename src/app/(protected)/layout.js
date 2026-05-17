// app/(protected)/layout.js

import { createServerSupabaseClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import {getCurrentUserProfile} from "@/lib/data-service";

export default async function ProtectedLayout({ children }) {
  const supabase = createServerSupabaseClient();

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();
  const user1 = await getCurrentUserProfile();


  if (error || !user) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen flex bg-gray-200 text-gray-800">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header user={user1} />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}

