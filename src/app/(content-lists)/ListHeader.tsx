import { cn } from "@/utils/tailwind/cn"

import { Typography } from "@/components/ui/typography"
import { SidebarToggle } from "@/components/Sidebar.client"
import StickyHeader from "@/components/StickyHeader"

export function ListColumnHeader({ title }: { title: string }) {
  return (
    <StickyHeader
      className={cn(
        title && title === "Home" ? "bg-background/10" : "bg-content1/10"
      )}
    >
      <div className="flex items-center space-x-0.5">
        <SidebarToggle />
      </div>
      <Typography affects="small">{title}</Typography>
      <div />
    </StickyHeader>
  )
}
