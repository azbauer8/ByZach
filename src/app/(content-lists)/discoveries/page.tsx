import { getDiscoveries } from "@/utils/getContent"

import { PageHeader } from "@/components/Layouts"
import NavList from "@/components/NavList"

export default async function Discoveries() {
  const discoveries = getDiscoveries()
  if (!discoveries) return null

  return (
    <>
      <PageHeader title="Discoveries" />
      <NavList type="discoveries" links={discoveries} />
    </>
  )
}
