import { getUses } from "@/utils/getContent"

import ContentListLayout from "@/components/Layouts.client"
import NavList from "@/components/NavList"

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
