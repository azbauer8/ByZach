"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useAtom } from "jotai"
import { PiArrowUpRightBold } from "react-icons/pi"

import { cn } from "@/lib/utils"
import { Text } from "@/components/ui/text"
import sidebarLinks from "@/components/Sidebar/links"
import { mobileSidebarState } from "@/components/Sidebar/MobileSidebar"

export default function SidebarLinks({ mobile }: { mobile?: boolean }) {
  return (
    <div className="flex-1 space-y-2 p-3 text-sm">
      <div className="space-y-5">
        <div className="flex flex-col gap-1">
          {sidebarLinks.site.map((link) => (
            <SidebarLink key={link.name} link={link} isMobile={mobile} />
          ))}
        </div>
        <div className="flex flex-col gap-2.5">
          <Text affects="small" className="pl-2">
            Professional
          </Text>
          <div className="flex flex-col gap-1">
            {sidebarLinks.professional.map((link) => (
              <SidebarLink key={link.name} link={link} isExternal />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2.5">
          <Text affects="small" className="pl-2">
            Personal
          </Text>
          <div className="flex flex-col gap-1">
            {sidebarLinks.personal.map((link) => (
              <SidebarLink key={link.name} link={link} isExternal />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function SidebarLink({
  link,
  isMobile,
  isExternal,
}: {
  link: {
    name: string
    href: string
    icon: JSX.Element
  }
  isMobile?: boolean
  isExternal?: boolean
}) {
  const pathname = usePathname()
  const [, setMobileSidebarOpen] = useAtom(mobileSidebarState)
  const active =
    link.href === "/" ? pathname === link.href : pathname.startsWith(link.href)

  return (
    <Link
      href={link.href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      onClick={() => isMobile && setMobileSidebarOpen(false)}
      className={cn(
        "flex size-full items-center gap-3 rounded-lg px-2 py-1.5 font-medium hover:bg-accent-secondary/55 active:bg-accent-secondary/55",
        active && "bg-accent-secondary"
      )}
      prefetch={!isExternal}
    >
      <div className="text-foreground-muted">{link.icon}</div>
      <div className="flex flex-1 items-center justify-between">
        {link.name}
        {isExternal && (
          <PiArrowUpRightBold
            size={14}
            strokeWidth={8}
            className="text-foreground-muted"
          />
        )}
      </div>
    </Link>
  )
}
