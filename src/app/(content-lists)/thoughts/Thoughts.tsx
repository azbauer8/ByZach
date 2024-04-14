import { getThoughts } from "@/utils/getContent"

import ContentListWrapper from "@/components/ContentListWrapper"
import NavList from "@/components/NavList"

export default async function Thoughts({
  isContentPage,
}: {
  isContentPage?: boolean
}) {
  const thoughts = getThoughts()
  if (!thoughts) return null

  return (
    <ContentListWrapper
      id="thoughts"
      type="Thoughts"
      isContentPage={isContentPage}
    >
      <NavList type="thoughts" links={thoughts} />
    </ContentListWrapper>
  )
}
