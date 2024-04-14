import Link from "next/link"
import { capitalize, formatDate } from "@/utils/format"

import { Typography } from "@/components/ui/typography"
import NavLink from "@/components/NavList.client"

export default function NavList({
  type,
  links,
}: {
  type: "projects" | "discoveries" | "thoughts" | "uses"
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
      <Typography variant="h3" className="pb-2">
        {capitalize(type)}
      </Typography>
      {links.map((link) => {
        const fullLink = `/${type}/${link.slug}`
        return (
          <Link key={link.slug} href={fullLink}>
            <NavLink link={fullLink}>
              <div className="flex flex-col gap-1">
                <h1 className="font-medium">{link.metadata.title}</h1>
                <h3 className="text-sm text-default-500">
                  {link.metadata.category
                    ? link.metadata.category
                    : link.metadata.dateTime
                      ? formatDate(link.metadata.dateTime)
                      : null}
                </h3>
              </div>
            </NavLink>
          </Link>
        )
      })}
    </div>
  )
}
