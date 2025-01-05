import { defineConfig, envField } from 'astro/config';
import { rehypeHeadingIds } from '@astrojs/markdown-remark';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown';
import UnoCSS from 'unocss/astro';
import remarkBreaks from 'remark-breaks';
import remarkFlexibleCodeTitles from 'remark-flexible-code-titles';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

// https://astro.build/config
export default defineConfig({
  site: 'https://changeofpace.site',
  integrations: [
    mdx(),
    sitemap(),
    UnoCSS({
      injectReset: true,
    }),
    partytown({
      config: {
        forward: ['dataLayer.push'],
      },
    }),
  ],
  build: {
    format: 'file',
  },
  markdown: {
    shikiConfig: {
      theme: 'dark-plus',
    },
    remarkPlugins: [remarkBreaks, remarkFlexibleCodeTitles],
    rehypePlugins: [
      // デフォルトでは、Astro は rehype プラグインが実行された後に id 属性を注入する
      // rehypeAutolinkHeadings 実行時に組み合わせて使用したいため、指定しておく
      rehypeHeadingIds,
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'append',
          properties: {
            className: ['ml-2', 'heading-link'],
          },
          content: {
            type: 'text',
            value: '#',
          },
        },
      ],
    ],
  },
  env: {
    schema: {
      GOOGLE_ANALYTICS_TAG: envField.string({
        context: 'server',
        access: 'public',
      }),
      GOOGLE_SITE_VERIFICATION: envField.string({
        context: 'server',
        access: 'public',
      }),
      PUBLIC_GOOGLE_ADSENSE_PUBLISHER_ID: envField.string({
        context: 'client',
        access: 'public',
      }),
      PUBLIC_GOOGLE_ADSENSE_SLOT: envField.string({
        context: 'client',
        access: 'public',
      }),
    },
  },
});
