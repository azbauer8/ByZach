import { siteLinks } from "@/lib/consts"
import { getLocalContent, getLocalContentEntry } from "@/lib/localContent"
import { Markdown } from "@/components/Markdown"
import PageContent from "@/components/PageContent"

export const dynamicParams = false

export function generateMetadata({ params }: { params: { snippet: string } }) {
  const snippet = getLocalContentEntry("snippets", params.snippet)
  if (!snippet) return {}

  const { description, title } = snippet

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      url: `${siteLinks.here}${snippet.link}`,
      publishedTime: snippet.publishedAt || undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  }
}

export function generateStaticParams() {
  const snippets = getLocalContent("snippets")
  return snippets.map((snippet) => ({
    snippet: snippet.slug,
  }))
}

export default function Snippet({ params }: { params: { snippet: string } }) {
  const snippet = getLocalContentEntry("snippets", params.snippet)
  if (!snippet) return null

  return (
    <PageContent
      title={snippet.title}
      subtitle={snippet.subtitle}
      previousPage={{ link: "/snippets", title: "Snippets" }}
    >
      <Markdown source={snippet.content} />
    </PageContent>
  )
}
