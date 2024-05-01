import { cn } from "@/lib/utils"

import "@/styles/prose.css"

import Link from "next/link"
import { Button } from "@nextui-org/button"
import { PiArrowUpLeftBold } from "react-icons/pi"

import { Typography } from "@/components/Primitives/Typography"

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
          <Button
            href={previousPage.link}
            as={Link}
            variant="light"
            startContent={<PiArrowUpLeftBold />}
            disableRipple
            className="-ml-2 gap-1 pl-2 pr-2.5 text-base text-default-500 transition-colors hover:text-foreground active:text-foreground md:hidden"
          >
            {previousPage.title}
          </Button>
        )}
        <Typography variant="h2">{title}</Typography>
        {subtitle && <Typography affects="lead">{subtitle}</Typography>}
      </div>
      {children}
    </div>
  )
}
