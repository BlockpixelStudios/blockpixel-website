// src/middleware.ts
import type { Handler } from 'astro';

export const onRequest: Handler = async ({ request, next }) => {
  // Exemplo: bloquear indexação do /admin
  const url = new URL(request.url);
  const response = await next(); // chama o próximo middleware / rota

  // Se quiser modificar headers, clone a resposta e adicione headers
  const newHeaders = new Headers(response.headers);
  newHeaders.set('X-Frame-Options', 'DENY');
  newHeaders.set('X-Content-Type-Options', 'nosniff');
  newHeaders.set('Referrer-Policy', 'no-referrer-when-downgrade');

  if (url.pathname.startsWith('/admin')) {
    newHeaders.set('X-Robots-Tag', 'noindex, nofollow');
  }

  // Retorna a Response resultante com os headers adicionados
  return new Response(await response.arrayBuffer(), {
    status: response.status,
    statusText: response.statusText,
    headers: newHeaders
  });
};
