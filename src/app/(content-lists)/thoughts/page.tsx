import { Metadata } from "next/types"

import Thoughts from "@/app/(content-lists)/thoughts/Thoughts"

export const metadata: Metadata = {
  title: "Thoughts",
  description: "Poorly conveyed ideas about technology, design, and the web.",
}

export default async function ThoughtsPage() {
  return <Thoughts />
}
