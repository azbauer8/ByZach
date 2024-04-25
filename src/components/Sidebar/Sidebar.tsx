import { siteConfig } from "@/config"

import { Text } from "@/components/ui/text"
import SidebarLinks from "@/components/Sidebar/SidebarLinks"
import StickyHeader from "@/components/StickyHeader"

export default function Sidebar() {
  return (
    <nav className="absolute top-0 z-30 flex max-h-dvh min-h-dvh w-60 min-w-60 max-w-60 -translate-x-full flex-col overflow-y-auto border-r-[0.5px] bg-accent xl:sticky xl:translate-x-0">
      <StickyHeader className="bg-accent">
        <Text affects="large">{siteConfig.title}</Text>
      </StickyHeader>
      <SidebarLinks />
    </nav>
  )
}
