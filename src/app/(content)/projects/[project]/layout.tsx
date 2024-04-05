import { Dots } from "@/components/ui/bg-patterns"
import Projects from "@/app/(content-lists)/projects/page"
import ContentListColumn from "@/app/(content)/ContentListColumn"

export default function ContentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Dots className="flex size-full">
      <ContentListColumn title="Projects" list={<Projects />} />
      {children}
    </Dots>
  )
}
