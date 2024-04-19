import Link from "next/link"

import { capitalize, formatDate } from "@/lib/utils"
import { Typography } from "@/components/ui/typography"
import NavLink from "@/app/(content-lists)/NavList.client"

export default function NavList({
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
            <NavLink link={fullLink}>
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
            </NavLink>
          </Link>
        )
      })}
    </div>
  )
}
