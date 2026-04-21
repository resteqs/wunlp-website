// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://resteqs.github.io',
  base: '/wunlp-website',
  vite: {
    plugins: [tailwindcss()]
  }
});