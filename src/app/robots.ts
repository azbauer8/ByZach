import { siteLinks } from "@/config"

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
