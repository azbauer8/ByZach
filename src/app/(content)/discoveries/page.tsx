import type { Metadata } from "next/types"
import { pageMetadata } from "@/siteData"

import { getDiscoveryCategories } from "@/lib/raindrop"
import PageContent from "@/components/PageContent"
import TextContentList from "@/components/TextContentList"

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
      <TextContentList list={discoveries} />
    </PageContent>
  )
}
