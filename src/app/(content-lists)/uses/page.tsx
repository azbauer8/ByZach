import { Metadata } from "next/types"

import Uses from "@/app/(content-lists)/uses/Uses"

export const metadata: Metadata = {
  title: "Uses",
}

export default async function UsesPage() {
  return <Uses />
}
