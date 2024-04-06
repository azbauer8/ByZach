import { Dots } from "@/components/ui/bg-patterns"
import Thoughts from "@/app/(content-lists)/thoughts/ThoughtsList"
import { ContentListColumn } from "@/app/(content)/ContentWrapper"

export default function ContentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex">
      <ContentListColumn title="Thoughts" list={<Thoughts />} />
      <Dots className="flex-1" childClassName="size-full">
        {children}
      </Dots>
    </div>
  )
}
