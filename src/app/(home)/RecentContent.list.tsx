import NextLink from "next/link"
import { PiArrowUpRightBold } from "react-icons/pi"

import { formatDate } from "@/lib/utils"
import Link from "@/components/ui/link"
import { Text } from "@/components/ui/text"

export default function RecentContentList({
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
        <Text
          variant="h3"
          className={
            route
              ? "underline-offset-2 hover:underline active:underline"
              : undefined
          }
        >
          {route ? <Link href={route}>{title}</Link> : title}
        </Text>
        <Text variant="p" affects="muted">
          {subtitle}
        </Text>
      </div>
      <div className="flex flex-col">
        {list.map((item) => (
          <NextLink
            key={item.slug}
            href={`/thoughts/${item.slug}`}
            className="group py-2"
          >
            <div className="flex items-center gap-0.5">
              <Text className="underline decoration-default3/35 decoration-2 underline-offset-2 transition-colors group-hover:decoration-foreground/75 group-active:decoration-foreground/75">
                {item.metadata.title}
              </Text>
              {isExternal && (
                <span className="translate-y-[-0.5px] text-[0.9em] text-default3 transition-colors group-hover:text-foreground group-active:text-foreground">
                  <PiArrowUpRightBold />
                </span>
              )}
            </div>
            <Text affects="muted">
              {item.metadata.description ??
                item.metadata.category ??
                formatDate(item.metadata.dateTime)}
            </Text>
          </NextLink>
        ))}
      </div>
    </div>
  )
}
