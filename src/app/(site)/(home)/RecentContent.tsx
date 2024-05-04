import Link from "next/link"
import { Button } from "@nextui-org/button"

import { pageHeaders } from "@/lib/consts"
import { getSnippets, getThoughts } from "@/lib/localContent"
import { getProjects } from "@/lib/raindrop"
import ContentList from "@/components/ContentList"
import { Typography } from "@/components/Typography"

export default async function RecentContent() {
  const projects = await getProjects(4)
  const thoughts = getThoughts(4)
  const snippets = getSnippets(4)

  return (
    <>
      {projects && (
        <RecentContentList
          title={pageHeaders.projects.title}
          route="/projects"
          list={projects}
          isExternal
        />
      )}
      <RecentContentList
        title={pageHeaders.thoughts.title}
        route="/thoughts"
        list={thoughts}
      />
      <RecentContentList
        title={pageHeaders.snippets.title}
        route="/snippets"
        list={snippets}
      />
    </>
  )
}

function RecentContentList({
  title,
  route,
  list,
  isExternal,
}: {
  title: string
  route?: string
  list: {
    slug: string
    title: string
    subtitle: string
    link: string
  }[]
  isExternal?: boolean
}) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between gap-2">
        <Typography className="font-semibold leading-none">{title}</Typography>
        {route && (
          <Button
            as={Link}
            href={route}
            className="-mr-2 h-auto min-w-fit rounded-md px-2 py-1 text-right text-base text-default-500 transition-colors hover:text-foreground"
            variant="light"
          >
            More
          </Button>
        )}
      </div>
      <ContentList list={list} isExternal={isExternal} />
    </div>
  )
}
