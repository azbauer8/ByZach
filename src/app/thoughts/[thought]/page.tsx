import { siteLinks } from "@/config"

import { getThought, getThoughts } from "@/lib/getLocalContent"
import { formatDate } from "@/lib/utils"
import { Text } from "@/components/ui/text"
import { ContentLayout } from "@/components/ContentLayout"
import { MDXContent } from "@/components/MdxContent"

export const dynamicParams = false

export function generateMetadata({ params }: { params: { thought: string } }) {
  const thought = getThought(params.thought)

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

export function generateStaticParams() {
  const thoughts = getThoughts()
  return thoughts.map((thought) => ({
    thought: thought.slug,
  }))
}

export default function Thought({ params }: { params: { thought: string } }) {
  const thought = getThought(params.thought)
  if (!thought) return null

  return (
    <ContentLayout title={thought.metadata.title} list="thoughts">
      <div className="space-y-1.5">
        <Text variant="h2">{thought.metadata.title}</Text>
        <Text affects="muted">{formatDate(thought.metadata.dateTime)}</Text>
      </div>
      <main className="prose prose-neutral text-default-500 dark:prose-invert">
        <MDXContent source={thought.content} />
      </main>
    </ContentLayout>
  )
}
