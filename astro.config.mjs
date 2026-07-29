// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://jperez26.github.io',
  base: '/mountaineering-blog',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
