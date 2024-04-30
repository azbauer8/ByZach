import type { Metadata } from "next/types"

import { pageHeaders } from "@/lib/consts"

export const metadata: Metadata = {
  title: pageHeaders.snippets.title,
  description: pageHeaders.snippets.subtitle,
}

export default function SnippetsPage() {
  return null
}
