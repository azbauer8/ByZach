import Link from "next/link"
import { siteConfig } from "@/config"

import { Text } from "@/components/ui/text"
import MobileSidebar from "@/components/Sidebar/MobileSidebar"
import SidebarClientWrapper from "@/components/Sidebar/SidebarClientWrapper"
import SidebarLink from "@/components/Sidebar/SidebarLink"
import sidebarLinks from "@/components/Sidebar/sidebarLinks"

export default function Sidebar() {
  return (
    <>
      <SidebarClientWrapper>
        <SidebarLinks />
      </SidebarClientWrapper>

      <MobileSidebar>
        <SidebarLinks mobile />
      </MobileSidebar>
    </>
  )
}

function SidebarLinks({ mobile }: { mobile?: boolean }) {
  return (
    <div className="flex-1 space-y-2 p-3 pt-0 text-sm">
      <Text variant="h3" className="pl-1">
        {siteConfig.title}
      </Text>
      <div className="space-y-5">
        <div className="flex flex-col gap-1">
          {sidebarLinks.site.map((link) => (
            <Link href={link.href} key={link.name}>
              <SidebarLink link={link} isMobile={mobile} />
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-2.5">
          <Text affects="small" className="pl-2">
            Personal
          </Text>
          <div className="flex flex-col gap-0.5">
            {sidebarLinks.personal.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noreferrer"
              >
                <SidebarLink link={link} isExternal />
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2.5">
          <Text affects="small" className="pl-2">
            Professional
          </Text>
          <div className="flex flex-col gap-0.5">
            {sidebarLinks.professional.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noreferrer"
              >
                <SidebarLink link={link} isExternal />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
