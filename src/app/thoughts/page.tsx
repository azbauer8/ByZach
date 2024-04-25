import type { Metadata } from "next/types"
import { siteLinks } from "@/config"

export const metadata: Metadata = {
  title: "Thoughts",
  description: "Poorly conveyed ideas about technology, design, and the web.",
  openGraph: {
    title: "Thoughts",
    description: "Poorly conveyed ideas about technology, design, and the web.",
    url: `${siteLinks.here}/uses`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Thoughts",
    description: "Poorly conveyed ideas about technology, design, and the web.",
  },
}

export default function ThoughtsPage() {
  return null
}
