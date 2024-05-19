import type { Metadata } from "next/types"

import { pageMetadata } from "@/lib/metadata"
import { getDiscoveryCategories } from "@/lib/notion"
import ContentList from "@/components/ContentList"
import PageLayout from "@/components/PageLayout"

export const metadata: Metadata = {
  title: pageMetadata.discoveries.title,
  description: pageMetadata.discoveries.subtitle,
}

export default async function DiscoveryCategories() {
  const discoveries = await getDiscoveryCategories()
  if (!discoveries) return null

  return (
    <PageLayout
      title={pageMetadata.discoveries.title}
      subtitle={pageMetadata.discoveries.subtitle}
    >
      <ContentList list={discoveries} compact />
    </PageLayout>
  )
}
