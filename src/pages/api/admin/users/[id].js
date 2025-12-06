// src/pages/api/admin/users/[id].js
import { supabaseAdmin } from '../../../../lib/supabaseAdmin.js';
import { requireAdminFromRequest } from '../../../../lib/requireAdmin.js';

export async function put({ request, params }) {
  const chk = await requireAdminFromRequest(request);
  if (!chk.ok) return new Response(JSON.stringify({ error: chk.message }), { status: 401 });

  const body = await request.json();
  const { id } = params;
  const { data, error } = await supabaseAdmin.from('profiles').update(body).eq('id', id).select().single();
  if (error) return new Response(JSON.stringify({ error: error.message }), { status: 500 });

  return new Response(JSON.stringify({ user: data }), { status: 200 });
}

export async function del({ request, params }) {
  const chk = await requireAdminFromRequest(request);
  if (!chk.ok) return new Response(JSON.stringify({ error: chk.message }), { status: 401 });
  const { id } = params;

  // delete profile entry only (not auth.user). Removing auth user should be a careful op.
  const { error } = await supabaseAdmin.from('profiles').delete().eq('id', id);
  if (error) return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  return new Response(JSON.stringify({ ok: true }), { status: 200 });
                                                                            }
