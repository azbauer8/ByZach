import { FaLink } from "react-icons/fa6"

import { getProjects } from "@/lib/getContent"
import { formatUrl } from "@/lib/utils"
import Badge from "@/components/ui/badge"
import { Typography } from "@/components/ui/typography"
import { ContentLayout } from "@/components/Layouts"
import { MDXContent } from "@/components/MdxContent"

export const dynamicParams = false

export async function generateMetadata({
  params,
}: {
  params: { project: string }
}) {
  const project = getProjects().find(
    (project) => project.slug === params.project
  )
  if (!project) return {}

  const { descShort, title } = project.metadata

  return {
    title,
    description: descShort,
  }
}

export async function generateStaticParams() {
  const projects = getProjects()
  return projects.map((project) => ({
    project: project.slug,
  }))
}

export default async function Project({
  params,
}: {
  params: { project: string }
}) {
  const project = getProjects().find(
    (project) => project.slug === params.project
  )

  if (!project) return null
  return (
    <ContentLayout title={project.metadata.title} type="projects">
      <div className="space-y-0.5">
        <Badge>{project.metadata.category}</Badge>
        <Typography variant="h2">{project.metadata.title}</Typography>
        {project.metadata.link ? (
          <a
            href={project.metadata.link}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5"
          >
            <FaLink width={16} height={16} />
            <Typography affects="muted">
              {formatUrl(project.metadata.link)}
            </Typography>
          </a>
        ) : null}
        <Typography variant="p" affects="muted">
          {project.metadata.descShort}
        </Typography>
      </div>
      <main className="prose prose-neutral dark:prose-invert">
        <MDXContent source={project.content} />
      </main>
    </ContentLayout>
  )
}
