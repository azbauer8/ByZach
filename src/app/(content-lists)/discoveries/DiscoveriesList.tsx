import { getDiscoveries } from "@/utils/getContent"

import NavList from "@/app/(content-lists)/NavList"

export default async function DiscoveriesList() {
  const discoveries = getDiscoveries()
  if (!discoveries) return null

  return <NavList type="discoveries" links={discoveries} />
}
