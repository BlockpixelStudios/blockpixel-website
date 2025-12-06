// src/lib/supabaseAdmin.js
import { createClient } from '@supabase/supabase-js';

const url = process.env.PUBLIC_SUPABASE_URL || process.env.PUBLIC_SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!url || !serviceKey) {
  throw new Error('SUPABASE_SERVICE_ROLE_KEY or PUBLIC_SUPABASE_URL missing on server.');
}

export const supabaseAdmin = createClient(url, serviceKey);
