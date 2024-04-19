import { getUses } from "@/lib/getContent"
import ContentListLayout from "@/app/(content-lists)/ContentListLayout"
import NavList from "@/app/(content-lists)/NavList"

export default async function Uses({
  isContentPage,
}: {
  isContentPage?: boolean
}) {
  const uses = getUses()
  if (!uses) return null

  return (
    <ContentListLayout id="uses" type="Uses" isContentPage={isContentPage}>
      <NavList type="uses" links={uses} />
    </ContentListLayout>
  )
}
