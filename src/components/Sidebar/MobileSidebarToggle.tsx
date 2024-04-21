"use client"

import { useAtom } from "jotai"
import { PiSidebarSimpleDuotone } from "react-icons/pi"

import { Button } from "@/components/ui/button"
import { sidebarAtom } from "@/components/Sidebar/SidebarClientWrapper"

export function MobileSidebarToggle() {
  const [, setSidebarOpen] = useAtom(sidebarAtom)
  return (
    <>
      <Button
        className="absolute left-2 xl:hidden"
        onClick={() => setSidebarOpen(true)}
        aria-label="Open sidebar"
      >
        <PiSidebarSimpleDuotone size={24} />
      </Button>
      <div className="hidden xl:block" />
    </>
  )
}
