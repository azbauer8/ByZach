import type { Metadata } from "next"

import { pageHeaders } from "@/lib/consts"
import { getProjects } from "@/lib/getRaindrop"
import BookmarkItemList from "@/components/BookmarkItem"
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
      <BookmarkItemList
        items={projects.map((project) => ({
          title: project.title,
          description: project.note !== "" ? project.note : project.excerpt,
          link: project.link,
          shortLink: project.domain,
          img: project.cover,
        }))}
      />
    </PageContent>
  )
}
