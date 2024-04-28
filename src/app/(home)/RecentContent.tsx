import NextLink from "next/link"
import { Button } from "@nextui-org/button"
import { Link } from "@nextui-org/link"
import { PiArrowUpRightBold } from "react-icons/pi"

import { getProjects, getSnippets, getThoughts } from "@/lib/getLocalContent"
import { cn, formatDate } from "@/lib/utils"
import { Text, textVariants } from "@/components/ui/text"

export default function RecentContent() {
  const projects = getProjects(5)
  const thoughts = getThoughts(5)
  const snippets = getSnippets(5)

  return (
    <div className="space-y-5">
      <RecentContentList
        title="Projects"
        subtitle="My latest work and experiments."
        list={projects}
        isExternal
        itemSubtitle="description"
      />
      <RecentContentList
        title="Thoughts"
        subtitle="Poorly conveyed ideas about technology, design, and the web."
        route="/thoughts"
        list={thoughts}
        itemSubtitle="dateTime"
      />
      <RecentContentList
        title="Snippets"
        subtitle="Bits of code I often refer back to."
        route="/snippets"
        list={snippets}
        itemSubtitle="dateTime"
      />
    </div>
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
        {route ? (
          <Link
            href={route}
            className={cn(textVariants({ variant: "h3" }), "-mx-2")}
            color="foreground"
            isBlock
          >
            {title}
          </Link>
        ) : (
          <Text variant="h3">{title}</Text>
        )}

        <Text variant="p" affects="muted">
          {subtitle}
        </Text>
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
              <Text className="font-medium">{item.metadata.title}</Text>
              {isExternal && (
                <PiArrowUpRightBold className="text-default-500 transition-colors group-hover:text-foreground group-active:text-foreground" />
              )}
            </div>
            <Text affects="muted" className="text-wrap">
              {itemSubtitle === "description"
                ? item.metadata.description
                : formatDate(item.metadata.dateTime)}
            </Text>
          </Button>
        ))}
      </div>
    </div>
  )
}
