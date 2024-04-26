import { siteLinks } from "@/config"

import { getThought, getThoughts } from "@/lib/getLocalContent"
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
  const thought = await getThoughts().then((thoughts) =>
    thoughts.find((thought) => thought.slug === params.thought)
  )
  if (!thought) return {}
  const { title } = thought.entry

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
  const thoughts = await getThoughts()
  return thoughts.map((thought) => ({
    thought: thought.slug,
  }))
}

export default async function Thought({
  params,
}: {
  params: { thought: string }
}) {
  const thought = await getThought(params.thought)
  if (!thought) return null

  const content = await thought.content()

  return (
    <ContentLayout title={thought.title} type="thoughts" hasList>
      <div className="space-y-1.5">
        <Text variant="h2">{thought.title}</Text>
        <Text affects="muted">{formatDate(thought.dateTime)}</Text>
      </div>
      <main className="prose prose-neutral dark:prose-invert">
        <MDXContent source={content} />
      </main>
    </ContentLayout>
  )
}
