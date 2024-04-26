import type { Metadata } from "next/types"

import { ContentLayout } from "@/components/ContentLayout"
import About from "@/app/(home)/About"
import Activity from "@/app/(home)/Activity/Activity"
import RecentContent from "@/app/(home)/RecentContent"

export const metadata: Metadata = {
  title: "Home",
}

export default function Home() {
  return (
    <ContentLayout title="Zach Bauer" hasList={false}>
      <About />
      <RecentContent />
      <Activity />
    </ContentLayout>
  )
}
