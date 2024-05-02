import type { Metadata } from "next/types"

import { pageHeaders } from "@/lib/consts"
import { getDiscoveryCategories } from "@/lib/getRaindrop"
import ContentList from "@/components/ContentList"
import PageContent from "@/components/PageContent"

export const metadata: Metadata = {
  title: pageHeaders.discoveries.title,
  description: pageHeaders.discoveries.subtitle,
}

export default async function DiscoveryCategories() {
  const discoveries = await getDiscoveryCategories()
  if (!discoveries) return null

  return (
    <PageContent
      title={pageHeaders.discoveries.title}
      subtitle={pageHeaders.discoveries.subtitle}
    >
      <ContentList
        route="/discoveries"
        list={discoveries}
        itemSubtitle="subtitle"
      />
    </PageContent>
  )
}
