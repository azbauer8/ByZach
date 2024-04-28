import "@/lib/utils"
import "@/styles/prose.css"

import Link from "next/link"
import { Button } from "@nextui-org/button"
import { PiCaretLeftBold } from "react-icons/pi"

import { capitalize, cn } from "@/lib/utils"
import { textVariants } from "@/components/ui/text"
import ContentHeader from "@/components/ContentHeader"
import { MobileSidebarToggle } from "@/components/Sidebar/MobileSidebar"

export function ContentLayout({
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
            <Button
              as={Link}
              variant="light"
              disableRipple
              href={`/${type}`}
              className={cn(
                textVariants({ affects: "small" }),
                "w-10 min-w-fit items-center rounded-lg px-1.5"
              )}
            >
              <PiCaretLeftBold size={20} />
              <span className="hidden pr-1.5 sm:block">{capitalize(type)}</span>
            </Button>
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
