import { siteConfig } from "@/config"

import sidebarLinks from "@/components/Global/Sidebar/links"
import SidebarLink from "@/components/Global/Sidebar/SidebarLink"
import { Typography } from "@/components/Primitives/Typography"

export default function Sidebar() {
  return (
    <nav className="absolute top-0 z-30 flex max-h-dvh min-h-dvh w-60 min-w-60 max-w-60 -translate-x-full flex-col overflow-y-auto border-r-[0.5px] bg-accent xl:sticky xl:translate-x-0">
      <div className="flex-1 space-y-2 p-3 text-sm">
        <Typography variant="h3" className="pl-1">
          {siteConfig.title}
        </Typography>
        <div className="space-y-5">
          <div className="flex flex-col gap-1">
            {sidebarLinks.site.map((link) => (
              <SidebarLink key={link.name} link={link} />
            ))}
          </div>
          <div className="flex flex-col gap-2.5">
            <Typography affects="small" className="pl-2">
              Professional
            </Typography>
            <div className="flex flex-col gap-1">
              {sidebarLinks.professional.map((link) => (
                <SidebarLink key={link.name} link={link} isExternal />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2.5">
            <Typography affects="small" className="pl-2">
              Personal
            </Typography>
            <div className="flex flex-col gap-1">
              {sidebarLinks.personal.map((link) => (
                <SidebarLink key={link.name} link={link} isExternal />
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
