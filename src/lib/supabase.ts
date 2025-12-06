// src/lib/supabase.ts
import { createClient } from '@supabase/supabase-js';

/**
 * Supabase client (browser)
 * Usa as env vars PUBLIC_SUPABASE_URL e PUBLIC_SUPABASE_ANON_KEY (defina no Vercel)
 *
 * Observação: não coloque a service role key aqui.
 */

const url = import.meta.env.PUBLIC_SUPABASE_URL as string;
const anon = import.meta.env.PUBLIC_SUPABASE_ANON_KEY as string;

if (!url || !anon) {
  // apenas aviso em build/dev — não quebra a build
  console.warn('Supabase public env vars are missing: PUBLIC_SUPABASE_URL or PUBLIC_SUPABASE_ANON_KEY');
}

export const supabase = createClient(url ?? '', anon ?? '', {
  auth: {
    persistSession: true,
    detectSessionInUrl: true,
  }
});

// helper útil para pegar session (opcional)
export async function getSession() {
  const { data } = await supabase.auth.getSession();
  return data?.session ?? null;
}

export default supabase;
