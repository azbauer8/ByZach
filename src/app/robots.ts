import { siteMetadata } from "@/lib/metadata"

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
      },
    ],
    sitemap: `${siteMetadata.here.full}/sitemap.xml`,
  }
}
