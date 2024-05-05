import type { Metadata } from "next/types"

import { pageHeaders } from "@/lib/consts"
import { getCMSContent } from "@/lib/dato"
import ContentList from "@/components/ContentList"
import PageContent from "@/components/PageContent"

export const metadata: Metadata = {
  title: pageHeaders.thoughts.title,
  description: pageHeaders.thoughts.subtitle,
}

export default async function Thoughts() {
  const thoughts = await getCMSContent("Thoughts")
  if (!thoughts) return null

  return (
    <PageContent
      title={pageHeaders.thoughts.title}
      subtitle={pageHeaders.thoughts.subtitle}
    >
      <ContentList list={thoughts} />
    </PageContent>
  )
}