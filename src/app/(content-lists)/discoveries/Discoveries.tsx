import { getDiscoveries } from "@/lib/getContent"
import ContentListLayout from "@/app/(content-lists)/ContentListLayout"
import NavList from "@/app/(content-lists)/NavList"

export default function Discoveries({
  isContentPage,
}: {
  isContentPage?: boolean
}) {
  const discoveries = getDiscoveries()
  if (!discoveries) return null

  return (
    <ContentListLayout
      id="discoveries"
      type="Discoveries"
      isContentPage={isContentPage}
    >
      <NavList type="discoveries" links={discoveries} />
    </ContentListLayout>
  )
}
