import { Dots } from "@/components/ui/bg-patterns"
import Discoveries from "@/app/(content-lists)/discoveries/page"
import ContentListColumn from "@/app/(content)/ContentListColumn"

export default function ContentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Dots className="flex size-full">
      <ContentListColumn title="Discoveries" list={<Discoveries />} />
      {children}
    </Dots>
  )
}
