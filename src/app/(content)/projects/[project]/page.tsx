import { Chip } from "@nextui-org/chip"
import { Link } from "@nextui-org/link"
import { FaLink } from "react-icons/fa6"
import { TinaMarkdown } from "tinacms/dist/rich-text"

import { getProject, getProjects } from "@/lib/getContent"
import { formatUrl } from "@/lib/utils"
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
  return (
    <ContentWrapper title={project.title} className="content-wrapper">
      <div className="space-y-0.5">
        <Chip variant="faded" size="sm">
          {project.category}
        </Chip>
        <Typography variant="h2">{project.title}</Typography>
        {project.link ? (
          <Link
            href={project.link ?? ""}
            isExternal
            className="flex items-center gap-1.5"
          >
            <FaLink width={16} height={16} />
            <Typography affects="muted">{formatUrl(project.link)}</Typography>
          </Link>
        ) : null}
      </div>
      <main className="prose">
        <TinaMarkdown content={project.description} />
      </main>
    </ContentWrapper>
  )
}
