import Projects from "@/app/(content-lists)/projects/ProjectsList"
import { ContentListColumn } from "@/app/(content)/ContentWrapper"

export default function ContentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex size-full">
      <ContentListColumn title="Projects" list={<Projects />} />
      <div className="flex-1">{children}</div>
    </div>
  )
}
