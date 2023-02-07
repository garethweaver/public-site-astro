import { defineConfig } from 'astro/config';
import prefetch from '@astrojs/prefetch';
import react from "@astrojs/react";

export default defineConfig({
  output: 'static',
  // adapter: deno({
  //   // analytics: true,
  // }),
  site: 'https://www.garethweaver.com',
  compressHTML: true,
  integrations: [
    prefetch({
      throttle: 3
    }),
    react(),
  ],
  redirects: {
    '/folio': '/portfolio',
    '/folio/[slug]': '/portfolio/[slug]',
  }
});
