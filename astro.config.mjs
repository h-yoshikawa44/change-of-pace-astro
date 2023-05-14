import { defineConfig } from 'astro/config';
import { rehypeHeadingIds } from '@astrojs/markdown-remark';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import UnoCSS from 'unocss/astro';
import remarkBreaks from 'remark-breaks';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

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
});
