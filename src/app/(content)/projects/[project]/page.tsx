import Image from "next/image"
import { FaArrowUpRightFromSquare, FaGithub, FaLink } from "react-icons/fa6"
import { TinaMarkdown } from "tinacms/dist/rich-text"

import { getProject, getProjects } from "@/lib/getContent"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Typography } from "@/components/ui/typography"
import { ContentWrapper } from "@/app/(content)/ContentWrapper"

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
  const projectData = await getProject(params.project)
  const project = projectData.data.projects
  return (
    <ContentWrapper title={params.project}>
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <Image
            src={project?.icon ?? ""}
            alt={project.title}
            width={60}
            height={60}
          />
          <div>
            <Typography variant="h2">{project.title}</Typography>
            <Badge variant="secondary">{project.category}</Badge>
          </div>
        </div>
        <div className="flex items-center gap-1">
          {project.source && (
            <Button asChild variant="ghost" size="icon">
              <a
                href={project.source}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="size-6" />
              </a>
            </Button>
          )}
          {project.link && (
            <Button asChild variant="ghost" size="icon">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <FaArrowUpRightFromSquare className="size-5" />
              </a>
            </Button>
          )}
        </div>
      </div>

      <div className="prose prose-neutral dark:prose-invert pt-8">
        <TinaMarkdown content={project.description} />
      </div>
    </ContentWrapper>
  )
}
