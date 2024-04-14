import { ContentListColumn } from "@/components/Layouts"
import Discoveries from "@/app/(content-lists)/discoveries/page"

export default function ContentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex size-full">
      <ContentListColumn>
        <Discoveries />
      </ContentListColumn>
      <div className="flex-1">{children}</div>
    </div>
  )
}
