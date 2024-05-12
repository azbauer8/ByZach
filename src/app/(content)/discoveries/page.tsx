import type { Metadata } from "next/types"
import { pageMetadata } from "@/siteData"

import { getDiscoveryCategories } from "@/lib/raindrop"
import ContentList from "@/components/ContentList"
import PageContent from "@/components/PageContent"

export const metadata: Metadata = {
  title: pageMetadata.discoveries.title,
  description: pageMetadata.discoveries.subtitle,
}

export default async function DiscoveryCategories() {
  const discoveries = await getDiscoveryCategories()
  if (!discoveries) return null

  return (
    <PageContent
      title={pageMetadata.discoveries.title}
      subtitle={pageMetadata.discoveries.subtitle}
    >
      <ContentList list={discoveries} compact />
    </PageContent>
  )
}
