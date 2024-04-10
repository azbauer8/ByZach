import Link from "next/link"
import { format } from "date-fns"

import NavLink from "@/app/(content-lists)/NavList.client"

export default function NavList({
  type,
  links,
}: {
  type: "projects" | "discoveries" | "thoughts" | "uses"
  links: {
    slug: string | undefined
    title: string | undefined
    category?: string | null | undefined
    createdAt?: string | null | undefined
  }[]
}) {
  return (
    <div className="flex flex-col gap-0.5">
      {links.map((link) => {
        const fullLink = `/${type}/${link.slug}`
        return (
          <Link key={link.slug ?? ""} href={`/${type}/${link.slug}` ?? ""}>
            <NavLink link={fullLink}>
              <div className="flex flex-col gap-1">
                <h1 className="font-medium">{link.title}</h1>
                <h3 className="text-sm text-default-500">
                  {link.category ??
                    format(new Date(link.createdAt ?? ""), "PPP")}
                </h3>
              </div>
            </NavLink>
          </Link>
        )
      })}
    </div>
  )
}
