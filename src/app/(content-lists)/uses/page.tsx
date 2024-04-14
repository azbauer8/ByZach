import { getUses } from "@/utils/getContent"

import { PageHeader } from "@/components/Layouts"
import NavList from "@/components/NavList"

export default async function Uses() {
  const uses = getUses()
  if (!uses) return null

  return (
    <>
      <PageHeader title="Uses" />
      <NavList type="uses" links={uses} />
    </>
  )
}
