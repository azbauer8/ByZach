import { DocumentRenderer } from "@keystatic/core/renderer"
import { format } from "date-fns"

import { getThought, getThoughts } from "@/lib/getContent"
import { Typography } from "@/components/ui/typography"
import { ContentWrapper } from "@/app/(content)/ContentWrapper"

export const dynamicParams = false
export async function generateStaticParams() {
  const thoughts = await getThoughts()
  return (
    thoughts?.map((thought) => ({
      thought: thought.slug,
    })) ?? []
  )
}
export default async function Thought({
  params,
}: {
  params: { thought: string }
}) {
  const thought = await getThought(params.thought)
  if (!thought) return null
  return (
    <ContentWrapper
      title={thought.title}
      type="thoughts"
      className="content-wrapper flex flex-col gap-5"
    >
      <div className="space-y-1.5">
        <Typography variant="h2">{thought.title}</Typography>
        <Typography affects="muted">
          {format(new Date(thought.datetime ?? ""), "PPP")}
        </Typography>
      </div>
      <main className="prose prose-neutral dark:prose-invert">
        <DocumentRenderer document={await thought.body()} />
      </main>
    </ContentWrapper>
  )
}
