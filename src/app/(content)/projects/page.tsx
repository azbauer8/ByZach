import type { Metadata } from "next"

import { pageHeaders } from "@/lib/consts"
import { getProjects } from "@/lib/getRaindrop"
import BookmarkCard from "@/components/BookmarkCard"
import PageLayout from "@/components/PageLayout"

export const metadata: Metadata = {
  title: pageHeaders.projects.title,
  description: pageHeaders.projects.subtitle,
}

export default async function Projects() {
  const projects = await getProjects()

  if (!projects) return null
  return (
    <PageLayout
      title={pageHeaders.projects.title}
      subtitle={pageHeaders.projects.subtitle}
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <BookmarkCard
            key={project._id}
            title={project.title}
            description={project.note !== "" ? project.note : project.excerpt}
            link={project.link}
            shortLink={project.domain}
            img={project.cover}
          />
        ))}
      </div>
    </PageLayout>
  )
}
