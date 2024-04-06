import Link from "next/link"

import { getDiscoveries } from "@/lib/getContent"
import NavLink from "@/app/(content-lists)/NavLink"

export default async function Discoveries() {
  const discoveries = await getDiscoveries()
  if (!discoveries) return null

  return discoveries.map((discovery) => {
    return (
      <Link key={discovery.slug} href={`/discoveries/${discovery.slug}`}>
        <NavLink link={`/discoveries/${discovery.slug}`}>
          <div className="flex flex-col gap-1">
            <h1 className="font-medium">{discovery.title}</h1>
            <h3 className="text-sm text-muted-foreground">
              {discovery.category}
            </h3>
          </div>
        </NavLink>
      </Link>
    )
  })
}
