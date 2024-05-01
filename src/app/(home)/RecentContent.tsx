import Link from "next/link"
import { Button } from "@nextui-org/react"
import { PiArrowUpRightBold } from "react-icons/pi"

import { pageHeaders } from "@/lib/consts"
import { getSnippets, getThoughts } from "@/lib/getLocalContent"
import { getProjects } from "@/lib/getRaindrop"
import ContentList from "@/components/ContentList"
import { Typography } from "@/components/Primitives/Typography"

export default async function RecentContent() {
  const projects = await getProjects(4).then((projects) =>
    projects?.map((project) => ({
      slug: project._id.toString(),
      entry: {
        title: project.title,
        link: project.link,
        description: project.note !== "" ? project.note : project.excerpt,
      },
    }))
  )
  const thoughts = getThoughts(4)
  const snippets = getSnippets(4)

  return (
    <>
      {projects && (
        <RecentContentList
          title={pageHeaders.projects.title}
          subtitle={pageHeaders.projects.subtitle}
          route="/projects"
          list={projects}
          isExternal
          itemSubtitle="description"
        />
      )}
      <RecentContentList
        title={pageHeaders.thoughts.title}
        subtitle={pageHeaders.thoughts.subtitle}
        route="/thoughts"
        list={thoughts}
        itemSubtitle="dateTime"
      />
      <RecentContentList
        title={pageHeaders.snippets.title}
        subtitle={pageHeaders.snippets.subtitle}
        route="/snippets"
        list={snippets}
        itemSubtitle="dateTime"
      />
    </>
  )
}

function RecentContentList({
  title,
  subtitle,
  route,
  list,
  itemSubtitle,
  isExternal,
}: {
  title: string
  subtitle: string
  route?: string
  list: {
    slug: string
    entry: {
      title: string
      link?: string
      dateTime?: string | null
      description?: string
    }
  }[]
  itemSubtitle: "description" | "dateTime"
  isExternal?: boolean
}) {
  return (
    <div className="space-y-2">
      <div className="space-y-0.5">
        <div className="flex items-center justify-between gap-2">
          <Typography className="font-semibold leading-none">
            {title}
          </Typography>
          {route && (
            <Button
              as={Link}
              href={route}
              className="-mr-2 h-auto min-w-fit gap-1 rounded-md px-2 py-1 text-right text-base text-default-500 transition-colors hover:text-foreground"
              variant="light"
              endContent={<PiArrowUpRightBold />}
            >
              More
            </Button>
          )}
        </div>
        <Typography variant="p" affects="muted">
          {subtitle}
        </Typography>
      </div>
      <ContentList
        route={route}
        list={list}
        itemSubtitle={itemSubtitle}
        isExternal={isExternal}
      />
    </div>
  )
}
