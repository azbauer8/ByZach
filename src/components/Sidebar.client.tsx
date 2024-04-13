"use client"

import { usePathname } from "next/navigation"
import { siteConfig } from "@/config"
import { Icon } from "@iconify-icon/react"
import { atom, useAtom } from "jotai"
import { Drawer } from "vaul"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Typography } from "@/components/ui/typography"
import StickyHeader from "@/components/StickyHeader"
import ThemeToggle from "@/components/ThemeToggle"

const sidebarAtom = atom(false)

export function SidebarToggle() {
  const [, setSidebarOpen] = useAtom(sidebarAtom)
  return (
    <>
      <Button className="lg:hidden" onClick={() => setSidebarOpen(true)}>
        <Icon icon="ph:sidebar-simple" size={22} />
      </Button>
      <div className="hidden lg:block" />
    </>
  )
}

export function MobileSidebar({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useAtom(sidebarAtom)
  return (
    <Drawer.Root
      open={sidebarOpen}
      onOpenChange={setSidebarOpen}
      direction="left"
      shouldScaleBackground
    >
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 z-50 bg-black/80" />
        <Drawer.Content className="bg-content1 fixed left-0 z-50 flex h-[100dvh] w-80 flex-col border-r sm:w-72 md:w-64 lg:w-56">
          <StickyHeader className="bg-content1/10">
            <div className="flex items-center space-x-1.5">
              <Button onClick={() => setSidebarOpen(false)}>
                <Icon icon="fa6-solid:xmark" size={14} />
              </Button>
              <Typography affects="small">{siteConfig.title}</Typography>
            </div>
            <ThemeToggle />
          </StickyHeader>
          {children}
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  )
}

export function SidebarLink({
  link,
}: {
  link: {
    name: string
    href: string
    icon: JSX.Element
  }
}) {
  const pathname = usePathname()
  const active =
    link.href === "/" ? pathname === link.href : pathname?.startsWith(link.href)

  return (
    <div
      className={cn(
        "hover:!border-default hover:bg-default-100 hover:text-primary  flex size-full items-center gap-3 rounded-md  border !border-transparent py-1.5 px-2",
        active && "!border-default bg-default-100 text-primary"
      )}
    >
      <div className={cn(active ? "text-primary" : "text-default-500")}>
        {link.icon}
      </div>
      {link.name}
    </div>
  )
}

export function MobileSidebarLink({
  link,
}: {
  link: {
    name: string
    href: string
    icon: JSX.Element
  }
}) {
  const pathname = usePathname()
  const [, setSidebarOpen] = useAtom(sidebarAtom)
  const active =
    link.href === "/" ? pathname === link.href : pathname?.startsWith(link.href)

  return (
    <div
      onClick={() => setSidebarOpen(false)}
      className={cn(
        "hover:!border-default hover:bg-default-100 hover:text-primary  flex size-full items-center gap-3 rounded-md  border !border-transparent py-1.5 px-2",
        active && "!border-default bg-default-100 text-primary"
      )}
    >
      <div className={cn(active ? "text-primary" : "text-default-500")}>
        {link.icon}
      </div>
      {link.name}
    </div>
  )
}
