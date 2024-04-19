import { Metadata } from "next/types"
import { siteConfig, siteLinks } from "@/config"

import Snippets from "@/app/(content-lists)/snippets/Snippets"

export const metadata: Metadata = {
  title: "Snippets",
  description: "Bits of code I often refer back to.",
  openGraph: {
    title: "Snippets",
    description: "Bits of code I often refer back to.",
    url: `${siteLinks.here}/uses`,
    images: [
      {
        url: `${siteLinks.here}/og?title=${encodeURIComponent(siteConfig.title)}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Snippets",
    description: "Bits of code I often refer back to.",
    images: [
      {
        url: `${siteLinks.here}/og?title=${encodeURIComponent(siteConfig.title)}`,
      },
    ],
  },
}

export default async function SnippetsPage() {
  return <Snippets />
}
