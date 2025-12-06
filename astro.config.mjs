import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/server';

export default defineConfig({
  output: 'server',
  adapter: vercel(),
  // outras opções que você já tiver (integrations, vite, etc) podem ficar aqui
});
