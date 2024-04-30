import type { Metadata } from "next/types"

import { pageHeaders } from "@/lib/consts"

export const metadata: Metadata = {
  title: pageHeaders.thoughts.title,
  description: pageHeaders.thoughts.subtitle,
}

export default function ThoughtsPage() {
  return null
}
