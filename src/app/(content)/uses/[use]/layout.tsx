import { Dots } from "@/components/ui/bg-patterns"
import Uses from "@/app/(content-lists)/uses/page"
import ContentListColumn from "@/app/(content)/ContentListColumn"

export default function ContentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Dots className="flex size-full">
      <ContentListColumn title="Uses" list={<Uses />} />
      {children}
    </Dots>
  )
}
