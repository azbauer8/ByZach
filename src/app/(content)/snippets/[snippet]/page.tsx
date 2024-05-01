import { siteLinks } from "@/lib/consts"
import { getSnippet, getSnippets } from "@/lib/getLocalContent"
import { Markdown } from "@/components/Markdown"
import PageContent from "@/components/PageContent"

export const dynamicParams = false

export function generateMetadata({ params }: { params: { snippet: string } }) {
  const snippet = getSnippet(params.snippet)
  if (!snippet) return {}

  const { description, title } = snippet.entry

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      url: `${siteLinks.here}/snippets/${snippet.slug}`,
      publishedTime: snippet.entry.dateTime || undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  }
}

export function generateStaticParams() {
  const snippets = getSnippets()
  return snippets.map((snippet) => ({
    snippet: snippet.slug,
  }))
}

export default function Snippet({ params }: { params: { snippet: string } }) {
  const snippet = getSnippet(params.snippet)
  if (!snippet) return null

  return (
    <PageContent
      title={snippet.entry.title}
      subtitle={snippet.entry.description}
      previousPage={{ link: "/snippets", title: "Snippets" }}
    >
      <Markdown source={snippet.content} />
    </PageContent>
  )
}
