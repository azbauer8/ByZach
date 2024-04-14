import { getThoughts } from "@/utils/getContent"

import { PageHeader } from "@/components/Layouts"
import NavList from "@/components/NavList"

export default async function Thoughts() {
  const thoughts = getThoughts()
  if (!thoughts) return null

  return (
    <>
      <PageHeader title="Thoughts" />
      <NavList type="thoughts" links={thoughts} />
    </>
  )
}
