// src/pages/api/admin/posts.js
import { supabaseAdmin } from '../../../lib/supabaseAdmin.js';

export async function post({ request }) {
  // POST /api/admin/posts  -> create new post (server-side, uses service role)
  try {
    const body = await request.json();
    const { title, slug, excerpt, content } = body;
    const { data, error } = await supabaseAdmin.from('posts').insert([{ title, slug, excerpt, content }]).select().single();
    if (error) return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    return new Response(JSON.stringify({ post: data }), { status: 201 });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}

export async function get() {
  // GET /api/admin/posts -> list posts
  const { data, error } = await supabaseAdmin.from('posts').select('*').order('created_at', { ascending: false });
  if (error) return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  return new Response(JSON.stringify({ posts: data }), { status: 200 });
      }
