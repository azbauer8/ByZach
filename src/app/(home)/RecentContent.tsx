import Link from "next/link"
import { PiArrowUpRightBold } from "react-icons/pi"

import { getProjects, getSnippets, getThoughts } from "@/lib/getContent"
import { cn, formatDate } from "@/lib/utils"
import Anchor from "@/components/ui/Anchor"
import { Text, textVariants } from "@/components/ui/text"

export default async function RecentContent() {
  const projects = getProjects()
  const thoughts = getThoughts(5)
  const snippets = getSnippets(5)

  return (
    <div className="space-y-5">
      <RecentContentList
        title="Projects"
        subtitle="My latest work and experiments."
        list={projects}
        isExternal
      />
      <RecentContentList
        title="Thoughts"
        subtitle="Poorly conveyed ideas about technology, design, and the web."
        route="/thoughts"
        list={thoughts}
      />
      <RecentContentList
        title="Snippets"
        subtitle="Bits of code I often refer back to."
        route="/snippets"
        list={snippets}
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
}: {
  title: string
  subtitle: string
  route?: string
  list: {
    slug: string
    metadata: {
      title: string
      description?: string
      dateTime?: string | null
      category?: string
    }
  }[]
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
            href={`${route}/${item.slug}`}
            className="group py-2"
            prefetch={true}
          >
            <div className="flex items-center gap-0.5">
              <Text className="decoration-foreground-muted/35 underline decoration-2 underline-offset-2 transition-colors group-hover:decoration-foreground/75 group-active:decoration-foreground/75">
                {item.metadata.title}
              </Text>
              {isExternal && (
                <span className="text-foreground-muted translate-y-[-0.5px] text-[0.9em] transition-colors group-hover:text-foreground group-active:text-foreground">
                  <PiArrowUpRightBold />
                </span>
              )}
            </div>
            <Text affects="muted">
              {item.metadata.description ??
                item.metadata.category ??
                formatDate(item.metadata.dateTime)}
            </Text>
          </Link>
        ))}
      </div>
    </div>
  )
}
