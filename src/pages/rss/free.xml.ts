import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import sanitizeHtml from "sanitize-html";
import MarkdownIt from "markdown-it";
import { SITE_TITLE, SITE_DESCRIPTION } from "@/consts";
import { extractPostSlug } from "@/utils/extractPostSlug";

const parser = new MarkdownIt();

export async function get(context) {
  const posts = (await getCollection("posts"))
    .filter((post) => post.data.category === "free")
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
    .map((post) => {
      return { ...post, slug: extractPostSlug(post.slug) };
    });

  return rss({
    title: `雑談 | ${SITE_TITLE}`,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: posts.map((post) => ({
      ...post.data,
      link: `/posts/${post.slug}`,
      content: sanitizeHtml(parser.render(post.body)),
    })),
    stylesheet: "/pretty-feed-v3.xsl",
    trailingSlash: false,
  });
}