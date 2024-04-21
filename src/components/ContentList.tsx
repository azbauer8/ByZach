import Link from "next/link"

import { capitalize, formatDate } from "@/lib/utils"
import { Text } from "@/components/ui/text"
import ListLink from "@/components/ContentList.client"

export default function ContentList({
  type,
  links,
}: {
  type: "projects" | "discoveries" | "thoughts" | "uses" | "snippets"
  links: {
    slug: string
    metadata: {
      title: string
      category?: string | null
      dateTime?: string | null
    }
  }[]
}) {
  return (
    <div className="flex flex-col gap-0.5 p-3 pt-0">
      <Text variant="h3" className="pb-2 pl-1">
        {capitalize(type)}
      </Text>
      {links.map((link) => {
        const fullLink = `/${type}/${link.slug}`
        return (
          <Link key={link.slug} href={fullLink}>
            <ListLink link={fullLink}>
              <div className="flex flex-col gap-1">
                <Text className="text-sm font-medium">
                  {link.metadata.title}
                </Text>
                <Text className="text-sm text-default3">
                  {link.metadata.category
                    ? link.metadata.category
                    : link.metadata.dateTime
                      ? formatDate(link.metadata.dateTime)
                      : null}
                </Text>
              </div>
            </ListLink>
          </Link>
        )
      })}
    </div>
  )
}
