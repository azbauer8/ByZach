import { Metadata } from "next/types"

import Discoveries from "@/app/(content-lists)/discoveries/Discoveries"

export const metadata: Metadata = {
  title: "Discoveries",
  description: "Websites, articles, and projects I've found to be useful.",
}

export default async function DiscoveriesPage() {
  return <Discoveries />
}
