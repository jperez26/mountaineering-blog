// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Update these once you know your GitHub username / repo name (see SETUP.md).
  site: 'https://your-username.github.io',
  base: '/mountaineering-blog',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
