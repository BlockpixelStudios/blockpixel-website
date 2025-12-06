// src/lib/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const url = import.meta.env.PUBLIC_SUPABASE_URL;
const anon = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;
if (!url || !anon) console.warn('Supabase public env missing');

export const supabase = createClient(url, anon, {
  auth: { persistSession: true, detectSessionInUrl: true }
});
