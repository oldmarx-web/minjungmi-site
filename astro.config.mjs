import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://minjungmi.kr',
  integrations: [
    sitemap({
      // 초안/관리자 페이지는 사이트맵에서 제외
      filter: (page) => !page.includes('/index-new') && !page.includes('/admin'),
    }),
  ],
  build: {
    inlineStylesheets: 'auto',
  },
  image: {
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
});
