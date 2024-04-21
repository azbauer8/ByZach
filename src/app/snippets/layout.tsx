import { getSnippets } from "@/lib/getContent"
import ContentList from "@/components/ContentListColumn/ContentList"
import ContentListLayout from "@/components/ContentListColumn/ContentListLayout"

export default function ContentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex">
      <Snippets />
      <div className="flex-1">{children}</div>
    </div>
  )
}

function Snippets() {
  const snippets = getSnippets()
  if (!snippets) return null

  return (
    <ContentListLayout id="snippets" type="Snippets">
      <ContentList type="snippets" links={snippets} />
    </ContentListLayout>
  )
}
