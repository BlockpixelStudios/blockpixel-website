// src/lib/supabaseAdmin.js
import { createClient } from "@supabase/supabase-js";

const url = process.env.PUBLIC_SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!url || !serviceKey) {
  // no build-time crash; only throw if used server-side without envs
  // but here we throw so errors surface early in server environment
  throw new Error("SUPABASE_SERVICE_ROLE_KEY or PUBLIC_SUPABASE_URL missing in env");
}

export const supabaseAdmin = createClient(url, serviceKey, {
  auth: { persistSession: false },
});
