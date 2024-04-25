import "@/lib/utils"
import "@/styles/prose.css"

import Link from "next/link"
import { PiCaretLeftBold } from "react-icons/pi"

import { capitalize, cn } from "@/lib/utils"
import { textVariants } from "@/components/ui/text"
import { MobileSidebarToggle } from "@/components/Sidebar/MobileSidebar"
import dynamic from "next/dynamic"
const StickyHeader = dynamic(() => import("@/components/StickyHeader"))
const ThemeToggle = dynamic(() => import("@/components/ThemeToggle"))


export function PageLayout({
  title,
  type,
  children,
  hasList,
}: {
  title: string
  children: React.ReactNode
  hasList: boolean
  type?: string
}) {
  return (
    <>
      <StickyHeader
        title={title}
        isContentHeader
        leftContent={
          hasList && type ? (
            <Link
              href={`/${type}`}
              className={cn(
                textVariants({ affects: "small" }),
                "hover:bg-neutral/40 active:bg-neutral/40 absolute left-2 flex items-center  rounded-lg p-1.5"
              )}
              prefetch={true}
            >
              <PiCaretLeftBold size={20} />
              <span className="hidden sm:block">{capitalize(type)}</span>
            </Link>
          ) : (
            <MobileSidebarToggle />
          )
        }
        rightContent={
          hasList && <ThemeToggle className="text-foreground" iconSize={20} />
        }
      />
      <div className="mx-auto max-w-3xl space-y-5 px-4 py-12 md:px-8">
        {children}
      </div>
    </>
  )
}
