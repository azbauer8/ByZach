import { ContentListColumn } from "@/components/Layouts"
import Uses from "@/app/(content-lists)/uses/page"

export default function ContentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex size-full">
      <ContentListColumn>
        <Uses />
      </ContentListColumn>
      <div className="flex-1">{children}</div>
    </div>
  )
}
