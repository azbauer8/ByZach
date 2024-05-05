import type { Metadata } from "next/types"

import { pageHeaders } from "@/lib/consts"
import { getCMSContent } from "@/lib/dato"
import ContentList from "@/components/ContentList"
import PageContent from "@/components/PageContent"

export const metadata: Metadata = {
  title: pageHeaders.snippets.title,
  description: pageHeaders.snippets.subtitle,
}

export default async function Snippets() {
  const snippets = await getCMSContent("Snippets")
  if (!snippets) return null

  return (
    <PageContent
      title={pageHeaders.snippets.title}
      subtitle={pageHeaders.snippets.subtitle}
    >
      <ContentList list={snippets} />
    </PageContent>
  )
}
