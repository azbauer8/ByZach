import type { Metadata } from "next/types"
import { pageMetadata } from "@/siteData"

import { getCMSContent } from "@/lib/dato"
import ContentList from "@/components/ContentList"
import PageLayout from "@/components/PageLayout"

export const metadata: Metadata = {
  title: pageMetadata.snippets.title,
  description: pageMetadata.snippets.subtitle,
}

export default async function Snippets() {
  const snippets = await getCMSContent("Snippets")
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
