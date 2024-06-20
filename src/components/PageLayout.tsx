import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Back2Icon, BackIcon } from "@/components/Icons"
import { Typography } from "@/components/Typography"

export default function PageLayout({
  children,
  previousPage,
  title,
  subtitle,
  updatedAt,
}: {
  children: React.ReactNode
  previousPage?: { href: string; title: string }
  title: string
  subtitle?: string
  updatedAt?: string
}) {
  return (
    <div className="flex flex-col gap-4">
      {/* header */}
      {previousPage && (
        <div className="fixed left-3 top-6 hidden w-dvw min-[900px]:block">
          <div className="mx-auto w-full max-w-4xl">
            <TooltipProvider delayDuration={0}>
              <Tooltip>
                <TooltipTrigger>
                  <Button
                    asChild
                    variant="outline"
                    size="icon"
                    className="bg-background"
                  >
                    <Link href={previousPage.href}>
                      <Back2Icon />
                    </Link>
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="left">
                  <p className="text-sm">{previousPage.title}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      )}
      <div className="flex flex-col gap-1.5">
        {previousPage && (
          <Button
            asChild
            variant="ghost"
            className="-ml-2 w-fit gap-1 pl-2 pr-2.5 text-base min-[900px]:hidden"
          >
            <Link href={previousPage.href}>
              <BackIcon />
              {previousPage.title}
            </Link>
          </Button>
        )}
        <Typography variant="h2">{title}</Typography>
        {subtitle && <Typography affects="lead">{subtitle}</Typography>}
      </div>

      {/* body */}
      {children}

      {/* footer */}
      {updatedAt && (
        <Typography affects="muted" className="text-right text-sm">
          Last updated: {updatedAt}
        </Typography>
      )}
    </div>
  )
}
