import { defineConfig } from 'astro/config';
import vercelStatic from '@astrojs/vercel/static';
import prefetch from '@astrojs/prefetch';
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercelStatic(),
  integrations: [
    prefetch({
      throttle: 3
    }),
    react(),
  ]
});
