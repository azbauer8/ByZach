import Link from "next/link"

import { getUses } from "@/lib/getContent"
import { formatUrl, getFavicon } from "@/lib/utils"
import FallbackFavicon from "@/components/FallbackFavicon"
import NavLink from "@/app/(content-lists)/NavLink"

export default async function Uses() {
  const uses = await getUses()
  if (!uses) return null

  return uses.map((use) => {
    const linkTitle = formatUrl(use.link)
    return (
      <Link key={use.slug} href={`/uses/${use.slug}`}>
        <NavLink link={`/uses/${use.slug}`}>
          <div className="flex flex-col gap-1">
            <h1 className="font-medium">{use.title}</h1>
            <div className="flex items-center gap-1.5">
              <FallbackFavicon
                src={getFavicon(use.link ?? "")}
                alt={use.title ?? ""}
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
