import type { Metadata } from "next/types"
import { pageMetadata } from "@/siteData"

import { getCMSContent } from "@/lib/dato"
import PageContent from "@/components/PageContent"
import TextContentList from "@/components/TextContentList"

export const metadata: Metadata = {
  title: pageMetadata.snippets.title,
  description: pageMetadata.snippets.subtitle,
}

export default async function Snippets() {
  const snippets = await getCMSContent("Snippets")
  if (!snippets) return null

  return (
    <PageContent
      title={pageMetadata.snippets.title}
      subtitle={pageMetadata.snippets.subtitle}
    >
      <TextContentList list={snippets} longForm />
    </PageContent>
  )
}
