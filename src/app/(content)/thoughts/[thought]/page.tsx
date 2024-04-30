import { siteLinks } from "@/lib/consts"
import { getThought, getThoughts } from "@/lib/getLocalContent"
import { formatDate } from "@/lib/utils"
import { Markdown } from "@/components/Markdown"
import PageLayout from "@/components/PageLayout"

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
      publishedTime: thought.metadata.dateTime || undefined,
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
    <PageLayout
      title={thought.metadata.title}
      subtitle={formatDate(thought.metadata.dateTime)}
      previousPage={{ link: "/thoughts", title: "Thoughts" }}
    >
      <Markdown source={thought.content} />
    </PageLayout>
  )
}
