import { Metadata } from "next/types"
import { siteLinks } from "@/config"

export const metadata: Metadata = {
  title: "Snippets",
  description: "Bits of code I often refer back to.",
  openGraph: {
    title: "Snippets",
    description: "Bits of code I often refer back to.",
    url: `${siteLinks.here}/uses`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Snippets",
    description: "Bits of code I often refer back to.",
  },
}

export default function SnippetsPage() {
  return null
}