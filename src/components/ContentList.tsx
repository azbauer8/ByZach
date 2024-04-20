import Link from "next/link"

import { capitalize, formatDate } from "@/lib/utils"
import { Typography } from "@/components/ui/typography"
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
      <Typography variant="h3" className="pb-2 pl-1">
        {capitalize(type)}
      </Typography>
      {links.map((link) => {
        const fullLink = `/${type}/${link.slug}`
        return (
          <Link key={link.slug} href={fullLink}>
            <ListLink link={fullLink}>
              <div className="flex flex-col gap-1">
                <Typography className="text-sm font-medium">
                  {link.metadata.title}
                </Typography>
                <Typography className="text-sm text-default3">
                  {link.metadata.category
                    ? link.metadata.category
                    : link.metadata.dateTime
                      ? formatDate(link.metadata.dateTime)
                      : null}
                </Typography>
              </div>
            </ListLink>
          </Link>
        )
      })}
    </div>
  )
}
