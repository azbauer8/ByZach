import { siteLinks } from "@/config"

import { getSnippet, getSnippets } from "@/lib/getLocalContent"
import { Text } from "@/components/ui/text"
import { ContentLayout } from "@/components/ContentLayout"
import { MDXContent } from "@/components/MdxContent"

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
    <ContentLayout title={snippet.metadata.title} type="snippets" hasList>
      <div className="space-y-0.5">
        <Text variant="h2">{snippet.metadata.title}</Text>
        <Text variant="p" affects="muted">
          {snippet.metadata.description}
        </Text>
      </div>
      <main className="prose prose-neutral dark:prose-invert">
        <MDXContent source={snippet.content} />
      </main>
    </ContentLayout>
  )
}
