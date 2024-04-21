import React from "react"
import { Metadata } from "next/types"

import { PageLayout } from "@/components/Layouts/PageLayout"
import { MobileSidebarToggle } from "@/components/Sidebar/MobileSidebarToggle"
import { StickyHeader } from "@/components/StickyHeader"
import About from "@/app/(home)/About"
import Activity from "@/app/(home)/Activity/Activity"
import RecentContent from "@/app/(home)/RecentContent"

export const metadata: Metadata = {
  title: "Home",
}

export default function Home() {
  return (
    <>
      <StickyHeader title="Zach Bauer" isContentHeader>
        <MobileSidebarToggle />
      </StickyHeader>
      <PageLayout className="space-y-6">
        <About />
        <RecentContent />
        <Activity />
      </PageLayout>
    </>
  )
}
