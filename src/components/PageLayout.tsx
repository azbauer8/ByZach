import Link from "next/link"

import { cn } from "@/lib/utils"
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
  className,
  previousPage,
  title,
  subtitle,
}: {
  children: React.ReactNode
  className?: string
  previousPage?: { link: string; title: string }
  title: string
  subtitle?: string
}) {
  return (
    <div className={cn("space-y-5", className)}>
      <div className="space-y-1.5 px-2">
        {previousPage && (
          <>
            <Button
              asChild
              variant="ghost"
              className="-ml-2 gap-1 pl-2 pr-2.5 text-base min-[900px]:hidden"
            >
              <Link href={previousPage.link}>
                <BackIcon />
                {previousPage.title}
              </Link>
            </Button>
            <div className="fixed left-3 top-4 hidden w-dvw min-[900px]:block">
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
                        <Link href={previousPage.link}>
                          <Back2Icon />
                        </Link>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent side="left">
                      <p>{previousPage.title}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          </>
        )}
        <Typography variant="h2">{title}</Typography>
        {subtitle && <Typography affects="lead">{subtitle}</Typography>}
      </div>
      {children}
    </div>
  )
}
