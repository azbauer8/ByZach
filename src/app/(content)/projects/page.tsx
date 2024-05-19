import type { Metadata } from "next/types"

import { pageMetadata } from "@/lib/metadata"
import { getProjects } from "@/lib/notion"
import ContentList from "@/components/ContentList"
import PageLayout from "@/components/PageLayout"

export const metadata: Metadata = {
  title: pageMetadata.projects.title,
  description: pageMetadata.projects.subtitle,
}

export default async function Projects() {
  const projects = await getProjects()

  if (!projects) return null
  return (
    <PageLayout
      title={pageMetadata.projects.title}
      subtitle={pageMetadata.projects.subtitle}
    >
      <ContentList list={projects} isExternal />
    </PageLayout>
  )
}
