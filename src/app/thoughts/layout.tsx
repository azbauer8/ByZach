import { getThoughts } from "@/lib/getContent"
import ContentList from "@/components/ContentListColumn/ContentList"
import ContentListLayout from "@/components/ContentListColumn/ContentListLayout"

export default function ContentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex">
      <Thoughts />
      <div className="flex-1">{children}</div>
    </div>
  )
}

function Thoughts() {
  const thoughts = getThoughts()
  if (!thoughts) return null

  return (
    <ContentListLayout id="thoughts" type="Thoughts">
      <ContentList type="thoughts" links={thoughts} />
    </ContentListLayout>
  )
}
