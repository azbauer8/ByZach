import { Metadata } from "next/types"

import PageHeader from "@/components/PageHeader"

export const metadata: Metadata = {
  title: "Home",
}

export default function Home() {
  return (
    <div className="relative flex max-h-dvh w-full flex-col overflow-y-auto bg-background">
      <PageHeader title="Home" />
      <div className="mx-auto max-w-3xl space-y-8 px-4 py-12 md:px-8">
        <div className="space-y-8"></div>
      </div>
    </div>
  )
}
