import { getDiscoveries } from "@/lib/getContent"
import ContentList from "@/components/ContentList"
import ContentListLayout from "@/components/ContentListLayout"

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
  const discoveries = getDiscoveries()
  if (!discoveries) return null

  return (
    <ContentListLayout id="discoveries" type="Discoveries">
      <ContentList type="discoveries" links={discoveries} />
    </ContentListLayout>
  )
}
