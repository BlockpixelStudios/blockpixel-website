// src/lib/requireAdmin.js
import { supabaseAdmin } from "./supabaseAdmin.js";

/**
 * Verifica token do header Authorization: Bearer <token>
 * Retorna { ok, user, profile, message }
 */
export async function requireAdminFromRequest(request) {
  const auth = request.headers.get("authorization") || "";
  const token = auth.replace("Bearer ", "") || null;
  if (!token) return { ok: false, message: "No token provided" };

  const { data: userData, error: userErr } = await supabaseAdmin.auth.getUser(token);
  if (userErr || !userData?.user) return { ok: false, message: "Invalid token" };
  const user = userData.user;

  const { data: profile, error: profileErr } = await supabaseAdmin
    .from("profiles")
    .select("role, auth_id, email")
    .eq("auth_id", user.id)
    .limit(1)
    .single();

  if (profileErr || !profile) return { ok: false, message: "Profile not found" };
  if (profile.role !== "admin") return { ok: false, message: "Not admin" };

  return { ok: true, user, profile };
    }
