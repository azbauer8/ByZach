import { Dots } from "@/components/ui/bg-patterns"
import Projects from "@/app/(content-lists)/projects/ProjectsList"
import { ContentListColumn } from "@/app/(content)/ContentWrapper"

export default function ContentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex">
      <ContentListColumn title="Projects" list={<Projects />} />
      <Dots className="flex-1" childClassName="size-full">
        {children}
      </Dots>
    </div>
  )
}
