import type { Metadata } from "next/types"
import { pageMetadata } from "@/siteData"

import { getCMSContent } from "@/lib/dato"
import ContentList from "@/components/ContentList"
import PageLayout from "@/components/PageLayout"

export const metadata: Metadata = {
  title: pageMetadata.thoughts.title,
  description: pageMetadata.thoughts.subtitle,
}

export default async function Thoughts() {
  const thoughts = await getCMSContent("Thoughts")
  if (!thoughts) return null

  return (
    <PageLayout
      title={pageMetadata.thoughts.title}
      subtitle={pageMetadata.thoughts.subtitle}
    >
      <ContentList list={thoughts} />
    </PageLayout>
  )
}
