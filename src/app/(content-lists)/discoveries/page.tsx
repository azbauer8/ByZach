import Link from "next/link"
import { FaLink } from "react-icons/fa6"

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
            <div className="flex items-center gap-1.5">
              <FaLink width={16} height={16} />
              <h3 className="text-sm text-muted-foreground">
                {discovery.category}
              </h3>
            </div>
          </div>
        </NavLink>
      </Link>
    )
  })
}
