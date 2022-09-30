import image from '@astrojs/image'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'

const site = process.env.SITE_URL || 'https://xsfunc.xyz'

// eslint-disable-next-line import/no-default-export
export default defineConfig({
  site,
  integrations: [sitemap(), tailwind(), image()],
})
