import type { Metadata } from "next"
import { pageMetadata } from "@/siteData"

import { getProjects } from "@/lib/raindrop"
import ContentList from "@/components/ContentList"
import PageContent from "@/components/PageContent"

export const metadata: Metadata = {
  title: pageMetadata.projects.title,
  description: pageMetadata.projects.subtitle,
}

export default async function Projects() {
  const projects = await getProjects()

  if (!projects) return null
  return (
    <PageContent
      title={pageMetadata.projects.title}
      subtitle={pageMetadata.projects.subtitle}
    >
      <ContentList list={projects} isExternal hasImage />
    </PageContent>
  )
}
