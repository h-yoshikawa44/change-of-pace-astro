import type { APIRoute } from 'astro';
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
import {
  SITE_TITLE,
  SITE_DESCRIPTION,
  SITE_DOMAIN,
  CATEGORY_MAP,
} from '@/consts';
import { extractPostSlug } from '@/utils/extractPostSlug';

const category = 'develop';
const parser = new MarkdownIt();

export const GET: APIRoute = async (context) => {
  const posts = (await getCollection('posts'))
    .filter((post) => post.data.category === category)
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
    .map((post) => {
      return { ...post, slug: extractPostSlug(post.slug) };
    });

  return rss({
    title: `${CATEGORY_MAP[category]} | ${SITE_TITLE}`,
    description: SITE_DESCRIPTION,
    site: context.site ?? SITE_DOMAIN,
    items: posts.map((post) => ({
      ...post.data,
      link: `/posts/${post.slug}`,
      content: sanitizeHtml(parser.render(post.body)),
    })),
    stylesheet: '/pretty-feed-v3.xsl',
    trailingSlash: false,
  });
};
