// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://glemarketing.github.io',
  base: process.env.npm_lifecycle_event === 'build' ? '/PAGINA-WEB' : '',
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react()]
});