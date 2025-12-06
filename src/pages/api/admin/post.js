// src/pages/api/admin/posts.js
import { supabaseAdmin } from "../../../lib/supabaseAdmin.js";
import { verifyAdminFromToken } from "../../../lib/adminAuth.js";

export async function get() {
  try {
    const { data, error } = await supabaseAdmin
      .from("posts")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) return new Response(JSON.stringify({ error: error.message }), { status: 500 });

    return new Response(JSON.stringify({ posts: data }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}

export async function post({ request }) {
  try {
    // validate admin
    const auth = request.headers.get("authorization") || "";
    const token = auth.replace("Bearer ", "") || null;
    const check = await verifyAdminFromToken(token);
    if (!check.ok) return new Response(JSON.stringify({ error: check.message }), { status: 401 });

    const body = await request.json();
    const { title, slug, excerpt, content } = body;
    if (!title || !slug) return new Response(JSON.stringify({ error: "title and slug required" }), { status: 400 });

    const { data, error } = await supabaseAdmin
      .from("posts")
      .insert([{
        title, slug, excerpt, content, author_id: check.user.id, created_at: new Date().toISOString()
      }])
      .select()
      .single();

    if (error) return new Response(JSON.stringify({ error: error.message }), { status: 500 });

    return new Response(JSON.stringify({ post: data }), { status: 201 });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
