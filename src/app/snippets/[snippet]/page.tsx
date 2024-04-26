import { siteLinks } from "@/config"

import { getSnippet, getSnippets } from "@/lib/getLocalContent"
import { Text } from "@/components/ui/text"
import { ContentLayout } from "@/components/ContentLayout"
import { MDXContent } from "@/components/MdxContent"

export const dynamicParams = false

export async function generateMetadata({
  params,
}: {
  params: { snippet: string }
}) {
  const snippet = await getSnippets().then((snippets) =>
    snippets.find((snippet) => snippet.slug === params.snippet)
  )
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
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  }
}

export async function generateStaticParams() {
  const snippets = await getSnippets()
  return snippets.map((snippet) => ({
    snippet: snippet.slug,
  }))
}

export default async function Snippet({
  params,
}: {
  params: { snippet: string }
}) {
  const snippet = await getSnippet(params.snippet)
  if (!snippet) return null

  const content = await snippet.content()

  return (
    <ContentLayout title={snippet.title} type="snippets" hasList>
      <div className="space-y-0.5">
        <Text variant="h2">{snippet.title}</Text>
        <Text variant="p" affects="muted">
          {snippet.description}
        </Text>
      </div>
      <main className="prose prose-neutral dark:prose-invert">
        <MDXContent source={content} />
      </main>
    </ContentLayout>
  )
}
