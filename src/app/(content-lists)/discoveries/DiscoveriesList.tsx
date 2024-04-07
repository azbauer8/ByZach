import { getDiscoveries } from "@/lib/getContent"
import NavList from "@/app/(content-lists)/NavList"

export default async function DiscoveriesList() {
  const discoveries = await getDiscoveries()
  if (!discoveries) return null

  return <NavList type="discoveries" links={discoveries} />
}
