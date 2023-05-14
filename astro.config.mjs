import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import UnoCSS from 'unocss/astro';
import remarkBreaks from 'remark-breaks';

// https://astro.build/config
export default defineConfig({
  site: 'https://changeofpace.site',
  integrations: [mdx(), sitemap(), UnoCSS()],
  build: {
    format: 'file',
  },
  markdown: {
    shikiConfig: {
      theme: 'dark-plus',
    },
    remarkPlugins: [remarkBreaks],
  },
});
