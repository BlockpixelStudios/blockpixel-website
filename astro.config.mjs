import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/server'; // <--- ADAPTER DO VERCEL

export default defineConfig({
  output: 'server',
  adapter: vercel(),  // <--- AQUI!!!
});
