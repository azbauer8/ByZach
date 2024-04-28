"use client"

import Link from "next/link"
import { Button } from "@nextui-org/button"
import { PiCaretLeftBold } from "react-icons/pi"

import useScrollPosition from "@/lib/useScroll"
import { capitalize, cn } from "@/lib/utils"
import { Text, textVariants } from "@/components/ui/text"
import { MobileSidebarToggle } from "@/components/Sidebar/MobileSidebar"

export default function ContentHeader({
  title,
  list,
  scrollPos,
}: {
  title: string
  list?: string
  scrollPos?: number
}) {
  const windowScroll = useScrollPosition()

  const scroll = scrollPos ?? windowScroll

  const breakpoint = 50

  return (
    <div
      className={cn(
        "sticky top-0 z-20 flex max-h-12 min-h-12 items-center justify-between  px-3 py-2 xl:hidden",
        scroll >= 50 && "border-b bg-background"
      )}
    >
      {list ? (
        <Button
          as={Link}
          variant="light"
          disableRipple
          href={`/${list}`}
          className={cn(
            textVariants({ affects: "small" }),
            "w-10 min-w-fit items-center rounded-lg px-1.5"
          )}
        >
          <PiCaretLeftBold size={20} />
          <span className="hidden pr-1.5 sm:block">{capitalize(list)}</span>
        </Button>
      ) : (
        <MobileSidebarToggle />
      )}
      <Text
        affects="small"
        className={cn(
          "absolute left-1/2 h-full max-w-[50vw] -translate-x-1/2 content-center truncate transition-all duration-200 ease-in-out",
          scroll >= breakpoint
            ? "translate-y-0 opacity-100"
            : "-translate-y-[10px] opacity-0"
        )}
      >
        {title}
      </Text>
    </div>
  )
}
