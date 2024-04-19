import { Metadata } from "next/types"
import { siteConfig, siteLinks } from "@/config"

import Uses from "@/app/(content-lists)/uses/Uses"

export const metadata: Metadata = {
  title: "Uses",
  description: "Devices, tools, and technologies I use on a daily basis.",
  openGraph: {
    title: "Uses",
    description: "Devices, tools, and technologies I use on a daily basis.",
    url: `${siteLinks.here}/uses`,
    images: [
      {
        url: siteConfig.favicon,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Uses",
    description: "Devices, tools, and technologies I use on a daily basis.",
    images: [
      {
        url: siteConfig.favicon,
      },
    ],
  },
}

export default async function UsesPage() {
  return <Uses />
}
