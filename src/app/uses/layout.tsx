import { getUses } from "@/lib/getContent"
import ContentList from "@/components/ContentList"
import ContentListLayout from "@/components/ContentListLayout"

export default function UsesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex">
      <Uses />
      <div className="flex-1">{children}</div>
    </div>
  )
}

function Uses() {
  const uses = getUses()
  if (!uses) return null

  return (
    <ContentListLayout id="uses" type="Uses">
      <ContentList type="uses" links={uses} />
    </ContentListLayout>
  )
}
