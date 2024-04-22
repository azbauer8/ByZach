import { siteLinks } from "@/config"

import { getSnippets } from "@/lib/getContent"
import Badge from "@/components/ui/badge"
import { Text } from "@/components/ui/text"
import { MDXContent } from "@/components/MdxContent"
import { PageLayout } from "@/components/PageLayout"

export const dynamicParams = false

export async function generateMetadata({
  params,
}: {
  params: { snippet: string }
}) {
  const snippet = getSnippets().find(
    (snippet) => snippet.slug === params.snippet
  )
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

export async function generateStaticParams() {
  const snippets = getSnippets()
  return snippets.map((snippet) => ({
    snippet: snippet.slug,
  }))
}

export default async function Snippet({
  params,
}: {
  params: { snippet: string }
}) {
  const snippet = getSnippets().find(
    (snippet) => snippet.slug === params.snippet
  )
  if (!snippet) return null

  return (
    <PageLayout title={snippet.metadata.title} type="snippets" hasList>
      <div className="space-y-0.5">
        <Badge>{snippet.metadata.category}</Badge>
        <Text variant="h2">{snippet.metadata.title}</Text>
        <Text variant="p" affects="muted">
          {snippet.metadata.description}
        </Text>
      </div>
      <main className="prose prose-neutral dark:prose-invert">
        <MDXContent source={snippet.content} />
      </main>
    </PageLayout>
  )
}
