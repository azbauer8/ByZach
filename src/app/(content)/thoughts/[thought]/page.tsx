import { format } from "date-fns"
import { TinaMarkdown } from "tinacms/dist/rich-text"

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
  return (
    <ContentWrapper
      title={thought.title}
      type="thoughts"
      className="content-wrapper flex flex-col gap-5"
    >
      <div className="space-y-1.5">
        <Typography variant="h2">{thought.title}</Typography>
        <Typography affects="muted">
          {format(new Date(thought.createdAt ?? ""), "PPP")}
        </Typography>
      </div>
      <main className="prose prose-neutral dark:prose-invert">
        <TinaMarkdown content={thought.body} />
      </main>
    </ContentWrapper>
  )
}
