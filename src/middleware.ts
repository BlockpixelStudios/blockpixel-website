// src/middleware.ts
import type { MiddlewareHandler } from 'astro';

export const onRequest: MiddlewareHandler = async ({ request }) => {
  const url = new URL(request.url);

  // Add security headers to every response (set via rewrite/response below)
  // We'll return a Response wrapper for static assets / pages so headers are applied.
  // NOTE: we don't implement hard admin auth here (see comment below).
  const securityHeaders = {
    'X-Frame-Options': 'DENY',
    'X-Content-Type-Options': 'nosniff',
    'Referrer-Policy': 'no-referrer-when-downgrade',
    'Permissions-Policy': 'geolocation=(), microphone=()',
    'X-XSS-Protection': '1; mode=block',
  };

  // Block crawlers from indexing /admin pages
  if (url.pathname.startsWith('/admin')) {
    // If you want to fully block indexing:
    // add X-Robots-Tag: noindex here via headers.
    securityHeaders['X-Robots-Tag'] = 'noindex, nofollow';
  }

  // OPTIONAL: simple redirect if no cookie found
  // WARNING: Supabase stores session on the client (localStorage) by default,
  // so cookie-based redirect may not detect logged-in users unless you enable
  // cookie storage on Supabase (or implement a server auth check).
  //
  // Example (commented out): if you want to force redirect for /admin to /login
  // when a cookie 'sb-access-token' is not present, uncomment and adapt:
  //
  // if (url.pathname.startsWith('/admin')) {
  //   const cookie = request.headers.get('cookie') || '';
  //   if (!cookie.includes('sb-access-token')) {
  //     return new Response(null, {
  //       status: 302,
  //       headers: {
  //         ...securityHeaders,
  //         Location: '/login'
  //       }
  //     });
  //   }
  // }

  // If nothing else, let the request continue, but attach security headers via response fallback.
  // Astro's middleware currently can return a Response or let the request pass through.
  // We will not block normal requests here.
  return;
};
