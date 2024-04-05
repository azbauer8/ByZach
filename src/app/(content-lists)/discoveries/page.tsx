import Link from "next/link"

import { getDiscoveries } from "@/lib/getContent"
import { formatUrl, getFavicon } from "@/lib/utils"
import FallbackFavicon from "@/components/FallbackFavicon"
import NavLink from "@/app/(content-lists)/NavLink"

export default async function Discoveries() {
  const discoveries = await getDiscoveries()
  if (!discoveries) return null

  return discoveries.map((discovery) => {
    const linkTitle = formatUrl(discovery.link)
    return (
      <Link
        key={discovery.slug}
        href={`/discoveries/${discovery.slug}`}
        prefetch
      >
        <NavLink link={`/discoveries/${discovery.slug}`}>
          <div className="flex flex-col gap-1">
            <h1 className="font-medium">{discovery.title}</h1>
            <div className="flex items-center gap-1.5">
              <FallbackFavicon
                src={getFavicon(discovery.link ?? "")}
                alt={discovery.title ?? ""}
                width={16}
                height={16}
              />
              <h3 className="text-sm text-muted-foreground">{linkTitle}</h3>
            </div>
          </div>
        </NavLink>
      </Link>
    )
  })
}
