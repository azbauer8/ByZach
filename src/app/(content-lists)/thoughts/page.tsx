import { Metadata } from "next/types"

import Thoughts from "@/app/(content-lists)/thoughts/Thoughts"

export const metadata: Metadata = {
  title: "Thoughts",
}

export default async function ThoughtsPage() {
  return <Thoughts />
}
