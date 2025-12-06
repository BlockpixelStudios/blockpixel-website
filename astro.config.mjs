import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://blockpixel.vercel.app',
  output: 'server', // use serverless on Vercel, or 'static' if you prefer static
});
