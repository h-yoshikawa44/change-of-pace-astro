import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE_TITLE, SITE_DESCRIPTION } from "@/consts";
import { extractPostSlug } from "@/utils/extractPostSlug";

export async function get(context) {
  const posts = (await getCollection("posts"))
    .filter((post) => post.data.category === "tool-and-service")
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
    .map((post) => {
      return { ...post, slug: extractPostSlug(post.slug) };
    });

  return rss({
    title: `ツール・サービス | ${SITE_TITLE}`,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: posts.map((post) => ({
      ...post.data,
      link: `/posts/${post.slug}/`,
    })),
    stylesheet: "/pretty-feed-v3.xsl",
  });
}
