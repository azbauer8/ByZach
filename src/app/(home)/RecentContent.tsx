import NextLink from "next/link"
import { Button } from "@nextui-org/button"
import { Link } from "@nextui-org/link"
import { PiArrowUpRightBold } from "react-icons/pi"

import { pageHeaders } from "@/lib/consts"
import { getSnippets, getThoughts } from "@/lib/getLocalContent"
import { getProjects } from "@/lib/getRaindrop"
import { formatDate } from "@/lib/utils"
import { Typography } from "@/components/Primitives/Typography"

export default async function RecentContent() {
  const projects = await getProjects(3).then((projects) =>
    projects?.map((project) => ({
      slug: project._id.toString(),
      metadata: {
        title: project.title,
        link: project.link,
        description: project.note !== "" ? project.note : project.excerpt,
      },
    }))
  )
  const thoughts = getThoughts(3)
  const snippets = getSnippets(3)

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
  isExternal,
  itemSubtitle,
}: {
  title: string
  subtitle: string
  route?: string
  list: {
    slug: string
    metadata: {
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
          <Typography variant="h3">{title}</Typography>
          {route && (
            <Link
              href={route}
              className="gap-1 text-right text-default-500 transition-colors hover:text-foreground"
              color="foreground"
              isBlock
              showAnchorIcon
              anchorIcon={<PiArrowUpRightBold />}
            >
              More
            </Link>
          )}
        </div>
        <Typography variant="p" affects="muted">
          {subtitle}
        </Typography>
      </div>
      <div className="flex flex-col space-y-0.5">
        {list.map((item) => (
          <Button
            key={item.slug}
            as={NextLink}
            disableRipple
            variant="light"
            href={item.metadata.link ?? `${route}/${item.slug}`}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noreferrer" : undefined}
            prefetch={!isExternal}
            className="group -mx-3 h-auto flex-col items-start gap-1 px-3 py-2 text-base"
          >
            <div className="flex w-full items-center justify-between">
              <Typography className="font-medium">
                {item.metadata.title}
              </Typography>
              {isExternal && (
                <PiArrowUpRightBold className="text-default-500 transition-colors group-hover:text-foreground group-active:text-foreground" />
              )}
            </div>
            <Typography affects="muted" className="text-wrap">
              {itemSubtitle === "description"
                ? item.metadata.description
                : formatDate(item.metadata.dateTime)}
            </Typography>
          </Button>
        ))}
      </div>
    </div>
  )
}
