import React from "react"
import { Metadata } from "next/types"

import { Dots } from "@/components/ui/bg-patterns"
import { Typography } from "@/components/ui/typography"
import { SidebarToggle } from "@/components/Sidebar"
import About from "@/app/(home)/About"
import Activity from "@/app/(home)/Activity"

export const metadata: Metadata = {
  title: "Home",
}

export default function Home() {
  return (
    <HomeLayout>
      <About />
      <Activity />
    </HomeLayout>
  )
}

function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <Dots className="flex max-h-dvh min-h-dvh w-full flex-col overflow-y-auto">
      <div className="z-10">
        <div className="sticky top-0 z-10 flex max-h-12 min-h-12 items-center justify-between border-b border-border bg-background/10 px-3 py-2 backdrop-blur-lg">
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-0.5">
              <SidebarToggle />
            </div>
            <Typography affects="small">Home</Typography>
          </div>
        </div>
        <div className="mx-auto max-w-3xl space-y-8 px-4 py-12 md:px-8">
          {children}
        </div>
      </div>
    </Dots>
  )
}
