import { format } from "date-fns"
import { TinaMarkdown } from "tinacms/dist/rich-text"

import { getThought, getThoughts } from "@/lib/getContent"
import { Typography } from "@/components/ui/typography"
import { ContentWrapper } from "@/app/(content)/ContentWrapper"

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
  const thoughtData = await getThought(params.thought)
  const thought = thoughtData.data.thoughts
  return (
    <ContentWrapper title={thought.title} className="content-wrapper">
      <div className="space-y-2 pb-8 pt-12">
        <Typography variant="h2">{thought.title}</Typography>
        <Typography affects="muted">
          {format(new Date(thought.createdAt ?? ""), "PPP")}
        </Typography>
      </div>
      <main className="prose">
        <TinaMarkdown content={thought.body} />
      </main>
    </ContentWrapper>
  )
}
