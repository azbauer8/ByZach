import { Metadata } from "next/types"

import Projects from "@/app/(content-lists)/projects/Projects"

export const metadata: Metadata = {
  title: "Projects",
  description: "My latest work and experiments.",
}

export default async function ProjectsPage() {
  return <Projects />
}
