import "@/lib/utils"
import "@/styles/prose.css"

import Link from "next/link"
import { PiCaretLeftBold } from "react-icons/pi"

import { capitalize, cn } from "@/lib/utils"
import { textVariants } from "@/components/ui/text"
import ContentHeader from "@/components/ContentHeader"
import { MobileSidebarToggle } from "@/components/Sidebar/MobileSidebar"

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
      <ContentHeader
        title={title}
        isContentHeader
        leftContent={
          hasList && type ? (
            <Link
              href={`/${type}`}
              className={cn(
                textVariants({ affects: "small" }),
                "flex items-center rounded-lg p-1.5  hover:bg-neutral/40 active:bg-neutral/40"
              )}
            >
              <PiCaretLeftBold size={20} />
              <span className="hidden sm:block">{capitalize(type)}</span>
            </Link>
          ) : (
            <MobileSidebarToggle />
          )
        }
      />
      <div className="mx-auto max-w-3xl space-y-5 px-4 py-12 md:px-8">
        {children}
      </div>
    </>
  )
}
