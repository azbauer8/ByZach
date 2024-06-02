import { Link as TransitionLink } from "next-view-transitions"

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
  previousPage?: { link: string; title: string }
  title: string
  subtitle?: string
  updatedAt?: string
}) {
  return (
    <div className="space-y-4">
      {/* header */}
      <div className="space-y-1.5">
        {previousPage && (
          <>
            <Button
              asChild
              variant="ghost"
              className="-ml-2 gap-1 pl-2 pr-2.5 text-base min-[900px]:hidden"
            >
              <TransitionLink href={previousPage.link}>
                <BackIcon />
                {previousPage.title}
              </TransitionLink>
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
                        <TransitionLink href={previousPage.link}>
                          <Back2Icon />
                        </TransitionLink>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent side="left">
                      <p className="text-sm">{previousPage.title}</p>
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
