import Thoughts from "@/app/(content-lists)/thoughts/ThoughtsList"
import { ContentListColumn } from "@/app/(content)/ContentWrapper"

export default function ContentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex size-full">
      <ContentListColumn title="Thoughts" list={<Thoughts />} />
      <div className="flex-1">{children}</div>
    </div>
  )
}
