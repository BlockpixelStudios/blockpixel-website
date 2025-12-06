// src/pages/api/admin/posts/[id].js
import { supabaseAdmin } from "../../../../lib/supabaseAdmin.js";
import { verifyAdminFromToken } from "../../../../lib/adminAuth.js";

export async function put({ request, params }) {
  try {
    const auth = request.headers.get("authorization") || "";
    const token = auth.replace("Bearer ", "") || null;
    const check = await verifyAdminFromToken(token);
    if (!check.ok) return new Response(JSON.stringify({ error: check.message }), { status: 401 });

    const body = await request.json();
    const { id } = params;

    const { data, error } = await supabaseAdmin
      .from("posts")
      .update(body)
      .eq("id", id)
      .select()
      .single();

    if (error) return new Response(JSON.stringify({ error: error.message }), { status: 500 });

    return new Response(JSON.stringify({ post: data }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}

export async function del({ request, params }) {
  try {
    const auth = request.headers.get("authorization") || "";
    const token = auth.replace("Bearer ", "") || null;
    const check = await verifyAdminFromToken(token);
    if (!check.ok) return new Response(JSON.stringify({ error: check.message }), { status: 401 });

    const { id } = params;
    const { error } = await supabaseAdmin.from("posts").delete().eq("id", id);

    if (error) return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
                                                         }
