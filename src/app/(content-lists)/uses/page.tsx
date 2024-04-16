import { getUses } from "@/utils/getContent"

import ContentListWrapper from "@/components/ContentListWrapper"
import NavList from "@/components/NavList"

export default async function UsesPage() {
  return <Uses />
}

export async function Uses({ isContentPage }: { isContentPage?: boolean }) {
  const uses = getUses()
  if (!uses) return null

  return (
    <ContentListWrapper id="uses" type="Uses" isContentPage={isContentPage}>
      <NavList type="uses" links={uses} />
    </ContentListWrapper>
  )
}
