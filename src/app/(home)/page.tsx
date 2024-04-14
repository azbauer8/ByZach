import React from "react"
import { Metadata } from "next/types"

import { PageHeader, PageLayout } from "@/components/Layouts"
import About from "@/app/(home)/About"
import Activity from "@/app/(home)/Activity/Activity"
import RecentContent from "@/app/(home)/RecentContent"

export const metadata: Metadata = {
  title: "Home",
}

export default function Home() {
  return (
    <>
      <PageHeader />
      <PageLayout className="space-y-8">
        <About />
        <RecentContent />
        <Activity />
      </PageLayout>
    </>
  )
}
