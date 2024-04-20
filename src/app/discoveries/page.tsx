import { Metadata } from "next/types"
import { siteLinks } from "@/config"

export const metadata: Metadata = {
  title: "Discoveries",
  description: "Websites, articles, and projects I've found to be useful.",
  openGraph: {
    title: "Discoveries",
    description: "Websites, articles, and projects I've found to be useful.",
    url: `${siteLinks.here}/uses`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Discoveries",
    description: "Websites, articles, and projects I've found to be useful.",
  },
}

export default function DiscoveriesPage() {
  return null
}
