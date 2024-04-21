import { getDiscoveryCategories } from "@/lib/getContent"
import ContentList from "@/components/ContentListColumn/ContentList"
import ContentListLayout from "@/components/ContentListColumn/ContentListLayout"

export default function ContentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex">
      <Discoveries />
      <div className="flex-1">{children}</div>
    </div>
  )
}

function Discoveries() {
  const discoveries = getDiscoveryCategories()
  if (!discoveries) return null

  return (
    <ContentListLayout id="discoveries" type="Discoveries">
      <ContentList type="discoveries" links={discoveries} />
    </ContentListLayout>
  )
}
