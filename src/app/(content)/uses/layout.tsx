import Uses from "@/app/(content-lists)/uses/UsesList"
import { ContentListColumn } from "@/app/(content)/ContentWrapper"

export const dynamic = "force-static"

export default function ContentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex size-full">
      <ContentListColumn title="Uses" list={<Uses />} />
      <div className="flex-1">{children}</div>
    </div>
  )
}
