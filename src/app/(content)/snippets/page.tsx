import type { Metadata } from "next/types"
import { pageMetadata } from "@/siteData"

import { getSnippets } from "@/lib/notion"
import ContentList from "@/components/ContentList"
import PageLayout from "@/components/PageLayout"

export const metadata: Metadata = {
  title: pageMetadata.snippets.title,
  description: pageMetadata.snippets.subtitle,
}

export default async function Snippets() {
  const snippets = await getSnippets()
  if (!snippets) return null

  return (
    <PageLayout
      title={pageMetadata.snippets.title}
      subtitle={pageMetadata.snippets.subtitle}
    >
      <ContentList list={snippets} />
    </PageLayout>
  )
}
