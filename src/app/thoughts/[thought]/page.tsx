import { siteLinks } from "@/config"

import { getThoughts } from "@/lib/getContent"
import { formatDate } from "@/lib/utils"
import { Text } from "@/components/ui/text"
import { ContentLayout } from "@/components/ContentLayout"
import { MDXContent } from "@/components/MdxContent"

export const dynamicParams = false

export async function generateMetadata({
  params,
}: {
  params: { thought: string }
}) {
  const thought = getThoughts().find(
    (thought) => thought.slug === params.thought
  )
  if (!thought) return {}
  const { title } = thought.metadata

  return {
    title,
    openGraph: {
      title,
      type: "article",
      url: `${siteLinks.here}/thoughts/${thought.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title,
    },
  }
}

export async function generateStaticParams() {
  const thoughts = getThoughts()
  return thoughts.map((thought) => ({
    thought: thought.slug,
  }))
}

export default async function Thought({
  params,
}: {
  params: { thought: string }
}) {
  const thought = getThoughts().find(
    (thought) => thought.slug === params.thought
  )
  if (!thought) return null
  return (
    <ContentLayout title={thought.metadata.title} type="thoughts">
      <div className="space-y-1.5">
        <Text variant="h2">{thought.metadata.title}</Text>
        <Text affects="muted">{formatDate(thought.metadata.dateTime)}</Text>
      </div>
      <main className="prose prose-neutral dark:prose-invert">
        <MDXContent source={thought.content} />
      </main>
    </ContentLayout>
  )
}
