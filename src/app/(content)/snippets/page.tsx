import type { Metadata } from "next/types"

import { pageHeaders } from "@/lib/consts"
import { getSnippets } from "@/lib/getLocalContent"
import ContentList from "@/components/ContentList"
import PageContent from "@/components/PageContent"

export const metadata: Metadata = {
  title: pageHeaders.snippets.title,
  description: pageHeaders.snippets.subtitle,
}

export default async function Snippets() {
  const snippets = getSnippets().map((snippet) => ({
    slug: snippet.slug,
    entry: {
      title: snippet.entry.title,
      dateTime: snippet.entry.dateTime,
    },
  }))

  return (
    <PageContent
      title={pageHeaders.snippets.title}
      subtitle={pageHeaders.snippets.subtitle}
    >
      <ContentList route="/snippets" list={snippets} itemSubtitle="dateTime" />
    </PageContent>
  )
}
