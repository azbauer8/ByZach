import Discoveries from "@/app/(content-lists)/discoveries/DiscoveriesList"
import { ContentListColumn } from "@/app/(content)/ContentWrapper"

export const dynamic = "force-static"

export default function ContentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex size-full">
      <ContentListColumn title="Discoveries" list={<Discoveries />} />
      <div className="flex-1">{children}</div>
    </div>
  )
}
