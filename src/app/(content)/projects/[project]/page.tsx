import Image from "next/image"
import { Button } from "@nextui-org/button"
import { Chip } from "@nextui-org/chip"
import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6"
import { TinaMarkdown } from "tinacms/dist/rich-text"

import { getProject, getProjects } from "@/lib/getContent"
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
    <ContentWrapper title={project.title}>
      <div className="mx-auto flex max-w-xl items-center justify-between gap-2 px-3 pb-8 pt-12">
        <div className="flex items-center gap-2">
          <Image
            src={project?.icon ?? ""}
            alt={project.title}
            width={60}
            height={60}
          />
          <div>
            <Typography variant="h2">{project.title}</Typography>
            <Chip variant="faded">{project.category}</Chip>
          </div>
        </div>
        <div className="flex items-center gap-1">
          {project.source && (
            <Button
              as="a"
              href={project.source}
              target="_blank"
              rel="noopener noreferrer"
              isIconOnly
              variant="light"
            >
              <FaGithub className="size-6" />
            </Button>
          )}
          {project.link && (
            <Button
              as="a"
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              isIconOnly
              variant="light"
            >
              <FaArrowUpRightFromSquare className="size-5" />
            </Button>
          )}
        </div>
      </div>
      <main className="content-wrapper prose">
        <TinaMarkdown content={project.description} />
      </main>
    </ContentWrapper>
  )
}
