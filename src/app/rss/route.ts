import { siteConfig, siteLinks } from "@/lib/consts"
import { getLocalContent } from "@/lib/localContent"

export function GET() {
  const thoughts = getLocalContent("thoughts")

  const itemsXml = thoughts
    .sort((a, b) => {
      if (
        a.publishedAt &&
        b.publishedAt &&
        new Date(a.publishedAt) > new Date(b.publishedAt)
      ) {
        return -1
      }
      return 1
    })
    .map(
      (post) =>
        `<item>
          <title>${post.title}</title>
          <link>${siteLinks.here}/thoughts/${post.slug}</link>
          <pubDate>${
            post.publishedAt ? new Date(post.publishedAt).toUTCString() : ""
          }</pubDate>
        </item>`
    )
    .join("\n")

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
        <title>${siteConfig.title}</title>
        <link>${siteLinks.here}</link>
        <description>${siteConfig.description}</description>
        ${itemsXml}
    </channel>
  </rss>`

  return new Response(rssFeed, {
    headers: {
      "Content-Type": "text/xml",
    },
  })
}
