import React from "react"
import { Metadata } from "next/types"

import { DynamicHeader } from "@/components/DynamicHeader"
import { SidebarToggle } from "@/components/Sidebar.client"
import About from "@/app/(home)/About"
import Activity from "@/app/(home)/Activity/Activity"
import RecentContent from "@/app/(home)/RecentContent"
import { PageLayout } from "@/app/PageLayout"

export const metadata: Metadata = {
  title: "Home",
}

export default function Home() {
  return (
    <>
      <DynamicHeader title="Zach Bauer">
        <SidebarToggle />
      </DynamicHeader>
      <PageLayout className="space-y-6">
        <About />
        <RecentContent />
        <Activity />
      </PageLayout>
    </>
  )
}
