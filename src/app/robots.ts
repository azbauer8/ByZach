import { siteMetadata } from "@/siteData"

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
      },
    ],
    sitemap: `${siteMetadata.here}/sitemap.xml`,
  }
}
