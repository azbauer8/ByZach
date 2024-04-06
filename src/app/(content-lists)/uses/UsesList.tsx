import Link from "next/link"

import { getUses } from "@/lib/getContent"
import NavLink from "@/app/(content-lists)/NavLink"

export default async function UsesList() {
  const uses = await getUses()
  if (!uses) return null

  return uses.map((use) => {
    return (
      <Link key={use.slug} href={`/uses/${use.slug}`}>
        <NavLink link={`/uses/${use.slug}`}>
          <div className="flex flex-col gap-1">
            <h1 className="font-medium">{use.title}</h1>
            <h3 className="text-sm text-muted-foreground">{use.category}</h3>
          </div>
        </NavLink>
      </Link>
    )
  })
}
