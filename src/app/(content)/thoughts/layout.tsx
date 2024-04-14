import { ContentListColumn } from "@/components/Layouts"
import Thoughts from "@/app/(content-lists)/thoughts/page"

export default function ContentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex size-full">
      <ContentListColumn>
        <Thoughts />
      </ContentListColumn>
      <div className="flex-1">{children}</div>
    </div>
  )
}
