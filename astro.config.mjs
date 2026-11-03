import react from '@astrojs/react'
import { defineConfig } from 'astro/config'

export default defineConfig({
  output: 'static',
  site: 'https://www.garethweaver.com',
  compressHTML: true,
  integrations: [react()],
  prefetch: {
    throttle: 3,
  },
  redirects: {
    '/folio': '/portfolio',
    '/folio/[slug]': '/portfolio/[slug]',
  },
})
