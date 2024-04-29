import { siteLinks } from "@/config"

import { getSnippet, getSnippets } from "@/lib/getLocalContent"
import { Markdown } from "@/components/Markdown"
import PageLayout from "@/components/PageLayout"

export const dynamicParams = false

export function generateMetadata({ params }: { params: { snippet: string } }) {
  const snippet = getSnippet(params.snippet)
  if (!snippet) return {}

  const { description, title } = snippet.metadata

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      url: `${siteLinks.here}/snippets/${snippet.slug}`,
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
    <PageLayout
      title={snippet.metadata.title}
      subtitle={snippet.metadata.description}
      previousPage={{ link: "/snippets", title: "Snippets" }}
    >
      <Markdown source={snippet.content} />
    </PageLayout>
  )
}
