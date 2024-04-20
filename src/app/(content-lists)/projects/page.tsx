import { Metadata } from "next/types"
import { siteLinks } from "@/config"

import Projects from "@/app/(content-lists)/projects/Projects"

export const metadata: Metadata = {
  title: "Projects",
  description: "My latest work and experiments.",
  openGraph: {
    title: "Projects",
    description: "My latest work and experiments.",
    url: `${siteLinks.here}/uses`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects",
    description: "My latest work and experiments.",
  },
}

export default function ProjectsPage() {
  return <Projects />
}
