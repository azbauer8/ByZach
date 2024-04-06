import { Dots } from "@/components/ui/bg-patterns"
import Uses from "@/app/(content-lists)/uses/UsesList"
import { ContentListColumn } from "@/app/(content)/ContentWrapper"

export default function ContentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex">
      <ContentListColumn title="Uses" list={<Uses />} />
      <Dots className="flex-1" childClassName="size-full">
        {children}
      </Dots>
    </div>
  )
}
