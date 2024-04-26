import Link from "next/link"
import { PiArrowUpRightBold } from "react-icons/pi"

import { getProjects, getSnippets, getThoughts } from "@/lib/getLocalContent"
import { cn, formatDate } from "@/lib/utils"
import { Anchor } from "@/components/ui/anchor"
import { Text, textVariants } from "@/components/ui/text"

export default async function RecentContent() {
  const projects = getProjects(5)
  const thoughts = await getThoughts(5)
  const snippets = await getSnippets(5)

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
        isExternal
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
        {route ? (
          <Anchor
            href={route}
            className={cn(textVariants({ variant: "h3" }), "w-full")}
          >
            {title}
          </Anchor>
        ) : (
          <Text
            variant="h3"
            className={
              route
                ? "underline-offset-2 hover:underline active:underline"
                : undefined
            }
          >
            {title}
          </Text>
        )}

        <Text variant="p" affects="muted">
          {subtitle}
        </Text>
      </div>
      <div className="flex flex-col">
        {list.map((item) => (
          <Link
            key={item.slug}
            href={item.entry.link ?? `${route}/${item.slug}`}
            className="group py-2"
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noreferrer" : undefined}
            prefetch={!isExternal}
          >
            <div className="flex items-center gap-0.5">
              <Text className="underline decoration-foreground-muted/35 decoration-2 underline-offset-2 transition-colors group-hover:decoration-foreground/75 group-active:decoration-foreground/75">
                {item.entry.title}
              </Text>
              {isExternal && (
                <span className="translate-y-[-0.5px] text-[0.9em] text-foreground-muted transition-colors group-hover:text-foreground group-active:text-foreground">
                  <PiArrowUpRightBold />
                </span>
              )}
            </div>
            <Text affects="muted">
              {itemSubtitle === "description"
                ? item.entry.description
                : formatDate(item.entry.dateTime)}
            </Text>
          </Link>
        ))}
      </div>
    </div>
  )
}
