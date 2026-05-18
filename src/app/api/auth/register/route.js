// app/api/auth/register/route.js

import { NextResponse } from "next/server";
import { createActionSupabaseClient } from "@/lib/supabase/action";

export async function POST(req) {
  const formData = await req.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const fullName = formData.get("fullName");

  const supabase = await createActionSupabaseClient();

  const {  error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: fullName,
      },
    },
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }

  return NextResponse.json({ success: true });
}