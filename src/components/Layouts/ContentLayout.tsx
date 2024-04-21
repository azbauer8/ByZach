import "@/lib/utils"
import "@/styles/prose.css"

import Link from "next/link"
import { PiCaretLeftBold } from "react-icons/pi"

import { capitalize, cn } from "@/lib/utils"
import { textVariants } from "@/components/ui/text"
import { PageLayout } from "@/components/Layouts/PageLayout"
import { MobileSidebarToggle } from "@/components/Sidebar/MobileSidebarToggle"
import { StickyHeader } from "@/components/StickyHeader"
import ThemeToggle from "@/components/ThemeToggle"

export function ContentLayout({
  title,
  type,
  children,
  className,
  hasContentList = true,
}: {
  title: string
  type: string
  children: React.ReactNode
  className?: string
  hasContentList?: boolean
}) {
  return (
    <>
      <StickyHeader
        title={title}
        rightContent={<ThemeToggle className="text-foreground" iconSize={20} />}
        isContentHeader
      >
        {hasContentList ? (
          <Link
            href={`/${type}`}
            className={cn(
              textVariants({ affects: "small" }),
              "absolute left-2 flex items-center rounded-lg p-1.5  text-primary hover:bg-default1/40 active:bg-default1/40"
            )}
          >
            <PiCaretLeftBold size={20} />
            <span className="hidden sm:block">{capitalize(type)}</span>
          </Link>
        ) : (
          <MobileSidebarToggle />
        )}
      </StickyHeader>
      <PageLayout className={cn("space-y-5", className)}>{children}</PageLayout>
    </>
  )
}
