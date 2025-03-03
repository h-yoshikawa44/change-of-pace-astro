import type { APIRoute } from 'astro';
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
import { SITE_TITLE, SITE_DESCRIPTION, SITE_DOMAIN } from '@/consts';
import { extractPostId } from '@/utils/extractPostId';

const parser = new MarkdownIt();

export const GET: APIRoute = async (context) => {
  const posts = (await getCollection('posts'))
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
    .map((post) => {
      return { ...post, id: extractPostId(post.id) };
    });

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site ?? SITE_DOMAIN,
    items: posts.map((post) => ({
      ...post.data,
      link: `/posts/${post.id}`,
      content: post.body ? sanitizeHtml(parser.render(post.body)) : '',
    })),
    stylesheet: '/pretty-feed-v3.xsl',
    trailingSlash: false,
  });
};
