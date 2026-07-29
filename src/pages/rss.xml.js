import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = (await getCollection('blog', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');

  return rss({
    title: 'Avg Joe Mountaineering',
    description: 'Trip reports, training notes, and lessons learned along the way.',
    site: new URL(`${base}/`, context.site),
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.excerpt,
      pubDate: post.data.date,
      link: `${base}/blog/${post.id}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
