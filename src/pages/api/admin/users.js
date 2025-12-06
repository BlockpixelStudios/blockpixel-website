// src/pages/api/admin/users.js
import { supabaseAdmin } from '../../../lib/supabaseAdmin.js';
import { requireAdminFromRequest } from '../../../lib/requireAdmin.js';

export async function get({ request }) {
  const chk = await requireAdminFromRequest(request);
  if (!chk.ok) return new Response(JSON.stringify({ error: chk.message }), { status: 401 });

  // list profiles
  const { data, error } = await supabaseAdmin.from('profiles').select('*').order('created_at', { ascending: false });
  if (error) return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  return new Response(JSON.stringify({ users: data }), { status: 200 });
}

export async function post({ request }) {
  const chk = await requireAdminFromRequest(request);
  if (!chk.ok) return new Response(JSON.stringify({ error: chk.message }), { status: 401 });

  const body = await request.json();
  const { email, username, role='user' } = body;
  // create user in auth? For security, usually we create just profile and let user sign up; here we only create profile
  const { data, error } = await supabaseAdmin.from('profiles').insert([{ email, display_name: username, role }]).select().single();
  if (error) return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  return new Response(JSON.stringify({ user: data }), { status: 201 });
}
