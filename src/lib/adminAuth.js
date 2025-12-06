// src/lib/adminAuth.js
import { supabaseAdmin } from "./supabaseAdmin.js";

/**
 * Verifica token enviado pelo client (Bearer <access_token>)
 * - usa supabaseAdmin.auth.getUser(access_token)
 * - busca profiles onde auth_id = user.id e role = 'admin'
 *
 * Retorna: { ok: boolean, user?, profile?, message? }
 */
export async function verifyAdminFromToken(access_token) {
  if (!access_token) return { ok: false, message: "No access token provided" };

  // getUser via global supabase admin
  const { data: userData, error: userError } = await supabaseAdmin.auth.getUser(access_token);
  if (userError || !userData?.user) {
    return { ok: false, message: "Invalid or expired session token" };
  }
  const user = userData.user;

  // check profile role
  const { data: profile, error: profileError } = await supabaseAdmin
    .from("profiles")
    .select("role,auth_id,email")
    .eq("auth_id", user.id)
    .limit(1)
    .single();

  if (profileError || !profile) {
    return { ok: false, message: "Profile not found" };
  }
  if (profile.role !== "admin") {
    return { ok: false, message: "User is not an admin" };
  }

  return { ok: true, user, profile };
}
