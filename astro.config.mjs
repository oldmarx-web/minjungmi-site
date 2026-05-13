import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://minjungmi.kr',
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
  image: {
    // Astro built-in image optimization (sharp)
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
});
