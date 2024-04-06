import Dots from "@/components/ui/bg-patterns"
import Discoveries from "@/app/(content-lists)/discoveries/DiscoveriesList"
import { ContentListColumn } from "@/app/(content)/ContentWrapper"

export default function ContentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex size-full">
      <ContentListColumn title="Discoveries" list={<Discoveries />} />
      <Dots className="flex-1">{children}</Dots>
    </div>
  )
}
