import React from "react"
import { Metadata } from "next/types"

import { Dots } from "@/components/ui/bg-patterns"
import { Typography } from "@/components/ui/typography"
import { SidebarToggle } from "@/components/Sidebar"
import StickyHeader from "@/components/StickyHeader"
import About from "@/app/(home)/About"
import Activity from "@/app/(home)/Activity"
import RecentContent from "@/app/(home)/RecentContent"

export const metadata: Metadata = {
  title: "Home",
}

export default function Home() {
  return (
    <HomeLayout>
      <About />
      <RecentContent />
      <Activity />
    </HomeLayout>
  )
}

function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <Dots className="flex max-h-dvh min-h-dvh w-full flex-col overflow-y-auto">
      <StickyHeader className="bg-background/10 px-3">
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-0.5">
            <SidebarToggle />
          </div>
          <Typography affects="small">Home</Typography>
        </div>
      </StickyHeader>
      <div className="mx-auto max-w-2xl space-y-8 px-4 py-12 md:px-8">
        {children}
      </div>
    </Dots>
  )
}
