import { Dots } from "@/components/ui/bg-patterns"
import Thoughts from "@/app/(content-lists)/thoughts/ThoughtsList"
import ContentListColumn from "@/app/(content)/ContentListColumn"

export default function ContentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Dots className="flex size-full">
      <ContentListColumn title="Thoughts" list={<Thoughts />} />
      {children}
    </Dots>
  )
}
