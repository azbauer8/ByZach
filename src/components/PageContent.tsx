import { cn } from "@/lib/utils"

import "@/styles/prose.css"

import Link from "next/link"
import { Icon } from "@iconify-icon/react/dist/iconify.mjs"

import { Button } from "@/components/ui/button"
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
          <Button
            asChild
            variant="ghost"
            className="-ml-2 gap-1 pl-2 pr-2.5 text-base md:hidden"
          >
            <Link href={previousPage.link}>
              <Icon icon="ph:arrow-up-left-bold" size={20} />
              {previousPage.title}
            </Link>
          </Button>
        )}
        <Typography variant="h2">{title}</Typography>
        {subtitle && <Typography affects="lead">{subtitle}</Typography>}
      </div>
      {children}
    </div>
  )
}
