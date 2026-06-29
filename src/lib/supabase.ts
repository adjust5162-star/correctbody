import { createClient } from "@supabase/supabase-js";
import type { Database } from "./database.types";

let supabaseAdmin: ReturnType<typeof createClient<Database>> | null = null;

export function getSupabaseAdmin() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceRoleKey) {
    return null;
  }

  if (!supabaseAdmin) {
    supabaseAdmin = createClient<Database>(url, serviceRoleKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    });
  }

  return supabaseAdmin;
}
