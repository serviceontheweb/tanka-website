import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://tanka.money',
  output: 'static',
  vite: { plugins: [tailwindcss()] },
});
