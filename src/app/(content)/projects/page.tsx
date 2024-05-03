import type { Metadata } from "next"

import { pageHeaders } from "@/lib/consts"
import { getProjects } from "@/lib/raindrop"
import ContentList from "@/components/ContentList"
import PageContent from "@/components/PageContent"

export const metadata: Metadata = {
  title: pageHeaders.projects.title,
  description: pageHeaders.projects.subtitle,
}

export default async function Projects() {
  const projects = await getProjects()

  if (!projects) return null
  return (
    <PageContent
      title={pageHeaders.projects.title}
      subtitle={pageHeaders.projects.subtitle}
    >
      <ContentList list={projects} isExternal />
    </PageContent>
  )
}
