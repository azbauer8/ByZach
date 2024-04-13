import { getThoughts } from "@/utils/getContent"

import NavList from "@/app/(content-lists)/NavList"

export default async function ThoughtsList() {
  const thoughts = await getThoughts()
  if (!thoughts) return null

  return <NavList type="thoughts" links={thoughts} />
}
