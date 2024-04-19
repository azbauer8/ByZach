import { Metadata } from "next/types"

import Projects from "@/app/(content-lists)/projects/Projects"

export const metadata: Metadata = {
  title: "Projects",
}

export default async function ProjectsPage() {
  return <Projects />
}
