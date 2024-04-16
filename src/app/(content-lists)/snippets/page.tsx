import { getSnippets } from "@/utils/getContent"

import ContentListWrapper from "@/components/ContentListWrapper"
import NavList from "@/components/NavList"

export default async function SnippetsPage() {
  return <Snippets />
}

export async function Snippets({ isContentPage }: { isContentPage?: boolean }) {
  const snippets = getSnippets()
  if (!snippets) return null

  return (
    <ContentListWrapper
      id="snippets"
      type="Snippets"
      isContentPage={isContentPage}
    >
      <NavList type="snippets" links={snippets} />
    </ContentListWrapper>
  )
}
