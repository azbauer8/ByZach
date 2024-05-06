import type { Metadata } from "next/types"
import { pageMetadata } from "@/siteData"

import { getCMSContent } from "@/lib/dato"
import PageContent from "@/components/PageContent"
import TextContentList from "@/components/TextContentList"

export const metadata: Metadata = {
  title: pageMetadata.thoughts.title,
  description: pageMetadata.thoughts.subtitle,
}

export default async function Thoughts() {
  const thoughts = await getCMSContent("Thoughts")
  if (!thoughts) return null

  return (
    <PageContent
      title={pageMetadata.thoughts.title}
      subtitle={pageMetadata.thoughts.subtitle}
    >
      <TextContentList list={thoughts} longForm />
    </PageContent>
  )
}
