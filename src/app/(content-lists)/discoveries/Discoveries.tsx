import { getDiscoveries } from "@/utils/getContent"

import ContentListWrapper from "@/components/ContentListWrapper"
import NavList from "@/components/NavList"

export default function Discoveries({
  isContentPage,
}: {
  isContentPage?: boolean
}) {
  const discoveries = getDiscoveries()
  if (!discoveries) return null

  return (
    <ContentListWrapper
      id="discoveries"
      type="Discoveries"
      isContentPage={isContentPage}
    >
      <NavList type="discoveries" links={discoveries} />
    </ContentListWrapper>
  )
}
