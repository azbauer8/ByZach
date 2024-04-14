import React from "react"
import { Metadata } from "next/types"

import { PageHeader } from "@/components/StickyHeader"
import About from "@/app/(home)/About"
import Activity from "@/app/(home)/Activity/Activity"
import RecentContent from "@/app/(home)/RecentContent"

export const metadata: Metadata = {
  title: "Home",
}

export default function Home() {
  return (
    <>
      <PageHeader className="bg-background/10" />
      <div className="mx-auto max-w-2xl space-y-8 px-4 py-12 md:px-8">
        <About />
        <RecentContent />
        <Activity />
      </div>
    </>
  )
}
