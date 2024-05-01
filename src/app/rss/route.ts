import { siteConfig, siteLinks } from "@/lib/consts"
import { getThoughts } from "@/lib/getLocalContent"

export function GET() {
  const thoughts = getThoughts()

  const itemsXml = thoughts
    .sort((a, b) => {
      if (
        a.entry.dateTime &&
        b.entry.dateTime &&
        new Date(a.entry.dateTime) > new Date(b.entry.dateTime)
      ) {
        return -1
      }
      return 1
    })
    .map(
      (post) =>
        `<item>
          <title>${post.entry.title}</title>
          <link>${siteLinks.here}/thoughts/${post.slug}</link>
          <pubDate>${
            post.entry.dateTime
              ? new Date(post.entry.dateTime).toUTCString()
              : ""
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
