import { siteLinks } from "@/config"

import { getThoughts } from "@/lib/getContent"
import { formatDate } from "@/lib/utils"
import { Typography } from "@/components/ui/typography"
import { ContentLayout } from "@/components/Layouts"
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
  if (!thought) return null
  const { dateTime, title } = thought.metadata
  const ogImage = `${siteLinks.here}/og?title=${encodeURIComponent(title)}`

  return {
    title,
    openGraph: {
      title,
      type: "article",
      dateTime,
      url: `${siteLinks.here}/thoughts/${thought.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      images: [ogImage],
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
        <Typography variant="h2">{thought.metadata.title}</Typography>
        <Typography affects="muted">
          {formatDate(thought.metadata.dateTime)}
        </Typography>
      </div>
      <main className="prose prose-neutral dark:prose-invert">
        <MDXContent source={thought.content} />
      </main>
    </ContentLayout>
  )
}
