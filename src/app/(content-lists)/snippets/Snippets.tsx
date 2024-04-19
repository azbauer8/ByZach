import { getSnippets } from "@/lib/getContent"
import ContentListLayout from "@/app/(content-lists)/ContentListLayout"
import NavList from "@/app/(content-lists)/NavList"

export default async function Snippets({
  isContentPage,
}: {
  isContentPage?: boolean
}) {
  const snippets = getSnippets()
  if (!snippets) return null

  return (
    <ContentListLayout
      id="snippets"
      type="Snippets"
      isContentPage={isContentPage}
    >
      <NavList type="snippets" links={snippets} />
    </ContentListLayout>
  )
}
