import { Metadata } from "next/types"
import { siteConfig, siteLinks } from "@/config"

import Projects from "@/app/(content-lists)/projects/Projects"

export const metadata: Metadata = {
  title: "Projects",
  description: "My latest work and experiments.",
  openGraph: {
    title: "Projects",
    description: "My latest work and experiments.",
    url: `${siteLinks.here}/uses`,
    images: [
      {
        url: siteConfig.favicon,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects",
    description: "My latest work and experiments.",
    images: [
      {
        url: siteConfig.favicon,
      },
    ],
  },
}

export default async function ProjectsPage() {
  return <Projects />
}
