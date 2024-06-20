import { links } from "@/lib/metadata"

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
      },
    ],
    sitemap: `${links.here.full}/sitemap.xml`,
  }
}
