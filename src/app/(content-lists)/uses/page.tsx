import { Metadata } from "next/types"

import Uses from "@/app/(content-lists)/uses/Uses"

export const metadata: Metadata = {
  title: "Uses",
  description: "Devices, tools, and technologies I use on a daily basis.",
}

export default async function UsesPage() {
  return <Uses />
}
