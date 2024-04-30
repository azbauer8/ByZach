import { siteLinks } from "@/lib/consts"

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
      },
    ],
    sitemap: `${siteLinks.here}/sitemap.xml`,
  }
}
