import type { Metadata } from "next/types"

import { PageLayout } from "@/components/PageLayout"
import About from "@/app/(home)/About"
import Activity from "@/app/(home)/Activity/Activity"
import RecentContent from "@/app/(home)/RecentContent"

export const metadata: Metadata = {
  title: "Home",
}

export default function Home() {
  return (
    <PageLayout title="Zach Bauer" hasList={false}>
      <About />
      <RecentContent />
      <Activity />
    </PageLayout>
  )
}
