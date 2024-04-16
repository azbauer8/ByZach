import { getDiscoveries } from "@/utils/getContent"

import ContentListLayout from "@/components/Layouts.client"
import NavList from "@/components/NavList"

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
