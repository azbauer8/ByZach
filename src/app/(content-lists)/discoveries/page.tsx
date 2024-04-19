import { Metadata } from "next/types"
import { siteConfig, siteLinks } from "@/config"

import Discoveries from "@/app/(content-lists)/discoveries/Discoveries"

export const metadata: Metadata = {
  title: "Discoveries",
  description: "Websites, articles, and projects I've found to be useful.",
  openGraph: {
    title: "Discoveries",
    description: "Websites, articles, and projects I've found to be useful.",
    url: `${siteLinks.here}/uses`,
    images: [
      {
        url: `${siteLinks.here}/og?title=${encodeURIComponent(siteConfig.title)}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Discoveries",
    description: "Websites, articles, and projects I've found to be useful.",
    images: [
      {
        url: `${siteLinks.here}/og?title=${encodeURIComponent(siteConfig.title)}`,
      },
    ],
  },
}

export default async function DiscoveriesPage() {
  return <Discoveries />
}
