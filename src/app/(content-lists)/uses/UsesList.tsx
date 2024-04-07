import { getUses } from "@/lib/getContent"
import NavList from "@/app/(content-lists)/NavList"

export default async function UsesList() {
  const uses = await getUses()
  if (!uses) return null

  return <NavList type="uses" links={uses} />
}
