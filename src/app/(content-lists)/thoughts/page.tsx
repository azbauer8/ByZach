import { Metadata } from "next/types"
import { siteConfig, siteLinks } from "@/config"

import Thoughts from "@/app/(content-lists)/thoughts/Thoughts"

export const metadata: Metadata = {
  title: "Thoughts",
  description: "Poorly conveyed ideas about technology, design, and the web.",
  openGraph: {
    title: "Thoughts",
    description: "Poorly conveyed ideas about technology, design, and the web.",
    url: `${siteLinks.here}/uses`,
    images: [
      {
        url: siteConfig.favicon,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thoughts",
    description: "Poorly conveyed ideas about technology, design, and the web.",
    images: [
      {
        url: siteConfig.favicon,
      },
    ],
  },
}

export default async function ThoughtsPage() {
  return <Thoughts />
}
