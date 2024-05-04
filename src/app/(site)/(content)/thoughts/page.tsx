import type { Metadata } from "next/types"

import { pageHeaders } from "@/lib/consts"
import { getLocalContent } from "@/lib/localContent"
import ContentList from "@/components/ContentList"
import PageContent from "@/components/PageContent"

export const metadata: Metadata = {
  title: pageHeaders.thoughts.title,
  description: pageHeaders.thoughts.subtitle,
}

export default function Thoughts() {
  const thoughts = getLocalContent("thoughts")

  return (
    <PageContent
      title={pageHeaders.thoughts.title}
      subtitle={pageHeaders.thoughts.subtitle}
    >
      <ContentList list={thoughts} />
    </PageContent>
  )
}
