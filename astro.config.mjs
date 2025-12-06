import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://your-domain.example',
  output: 'server', // use serverless on Vercel, or 'static' if you prefer static
});
