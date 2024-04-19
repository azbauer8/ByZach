import { Metadata } from "next/types"

import Snippets from "@/app/(content-lists)/snippets/Snippets"

export const metadata: Metadata = {
  title: "Snippets",
  description: "Bits of code I often refer back to.",
}

export default async function SnippetsPage() {
  return <Snippets />
}
