import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://minjungmi.kr',
  build: {
    inlineStylesheets: 'auto',
  },
  image: {
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
});
