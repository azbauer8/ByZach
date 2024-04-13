import { Icon } from "@iconify-icon/react/dist/iconify.mjs"
import { DocumentRenderer } from "@keystatic/core/renderer"

import { getProject, getProjects } from "@/lib/getContent"
import { formatUrl } from "@/lib/utils"
import Badge from "@/components/ui/badge"
import { Typography } from "@/components/ui/typography"
import { ContentWrapper } from "@/app/(content)/ContentWrapper"

export const dynamicParams = false

export async function generateStaticParams() {
  const projects = await getProjects()
  return (
    projects?.map((project) => ({
      project: project.slug,
    })) ?? []
  )
}

export default async function Project({
  params,
}: {
  params: { project: string }
}) {
  const project = await getProject(params.project)
  if (!project) return null
  return (
    <ContentWrapper
      title={project.title}
      type="projects"
      className="content-wrapper"
    >
      <div className="space-y-0.5 pb-5">
        <Badge>{project.category}</Badge>
        <Typography variant="h2">{project.title}</Typography>
        {project.link ? (
          <a
            href={project.link ?? ""}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5"
          >
            <Icon icon="fa6-solid:link" width={16} height={16} />
            <Typography affects="muted">{formatUrl(project.link)}</Typography>
          </a>
        ) : null}
        <Typography variant="p" affects="muted">
          {project.descShort}
        </Typography>
      </div>
      <main className="prose prose-neutral dark:prose-invert">
        <DocumentRenderer document={await project.content()} />
      </main>
    </ContentWrapper>
  )
}
