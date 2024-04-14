import Link from "next/link"
import { cn } from "@/utils/tailwind/cn"
import { twcn } from "@/utils/tailwind/twc"
import { FaChevronLeft } from "react-icons/fa6"

import { Typography } from "@/components/ui/typography"
import { SidebarToggle } from "@/components/Sidebar.client"

export const StickyHeader = twcn.div`sticky top-0 z-10 flex max-h-12 min-h-12 items-center justify-between border-b-[0.5px] px-3 py-2 backdrop-blur-lg`

export function PageHeader({
  title,
  type,
  className,
}: {
  title?: string
  type?: string
  className?: string
}) {
  return (
    <StickyHeader className={cn("bg-content1/10", className)}>
      {type ? (
        <Link
          href={`/${type}`}
          className="absolute left-2 flex items-center rounded-md p-1.5 text-sm text-primary hover:bg-default/40 md:hidden"
        >
          <FaChevronLeft size={15} />
          Back
        </Link>
      ) : (
        <SidebarToggle />
      )}

      <Typography
        affects="small"
        className="absolute left-1/2 -translate-x-1/2"
      >
        {title}
      </Typography>
    </StickyHeader>
  )
}
