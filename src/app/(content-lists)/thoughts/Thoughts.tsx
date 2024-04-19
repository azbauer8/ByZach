import { getThoughts } from "@/lib/getContent"
import ContentListLayout from "@/app/(content-lists)/ContentListLayout"
import NavList from "@/app/(content-lists)/NavList"

export default async function Thoughts({
  isContentPage,
}: {
  isContentPage?: boolean
}) {
  const thoughts = getThoughts()
  if (!thoughts) return null

  return (
    <ContentListLayout
      id="thoughts"
      type="Thoughts"
      isContentPage={isContentPage}
    >
      <NavList type="thoughts" links={thoughts} />
    </ContentListLayout>
  )
}
