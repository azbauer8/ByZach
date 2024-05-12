import Link from "next/link"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Back2Icon, BackIcon } from "@/components/Icons"
import { Typography } from "@/components/Typography"

export default function PageContent({
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
      <div className="space-y-1.5">
        {previousPage && (
          <>
            <Button
              asChild
              variant="ghost"
              className="-ml-2 gap-1 pl-2 pr-2.5 text-base min-[865px]:hidden"
            >
              <Link href={previousPage.link}>
                <BackIcon />
                {previousPage.title}
              </Link>
            </Button>
            <div className="absolute -top-5 left-[-4.5rem] hidden min-[865px]:block">
              <Button
                asChild
                variant="outline"
                size="icon"
                className="rounded-full bg-background"
              >
                <Link href={previousPage.link}>
                  <Back2Icon />
                </Link>
              </Button>
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
