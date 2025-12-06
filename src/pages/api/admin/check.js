// src/pages/api/admin/check.js
import { requireAdminFromRequest } from '../../../lib/requireAdmin.js';

export async function post({ request }) {
  try {
    const result = await requireAdminFromRequest(request);
    if (!result.ok) return new Response(JSON.stringify({ ok: false, message: result.message }), { status: 401 });
    return new Response(JSON.stringify({ ok: true, profile: result.profile }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ ok: false, message: err.message }), { status: 500 });
  }
}
