import { Metadata } from "next/types"

import Discoveries from "@/app/(content-lists)/discoveries/Discoveries"

export const metadata: Metadata = {
  title: "Discoveries",
}

export default async function DiscoveriesPage() {
  return <Discoveries />
}
