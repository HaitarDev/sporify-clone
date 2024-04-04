"use server";

import { createClient } from "@/utils/supabase/server";

export async function readUserSession() {
  const supabase = createClient();

  return await supabase.auth.getUser();
}
