import Link from "next/link"
import { Icon } from "@iconify-icon/react/dist/iconify.mjs"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Typography } from "@/components/Typography"

export default function TextContentList({
  list,
  isExternal,
  longForm,
}: {
  list: {
    title?: string | undefined
    slug?: string | undefined
    subtitle: string
    link: string
    icon?: string
  }[]
  isExternal?: boolean
  longForm?: boolean
}) {
  return (
    <div
      className={cn(
        "grid gap-3 md:-mx-3",
        longForm ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"
      )}
    >
      {list.map((item) => (
        <Button
          key={item?.slug ?? item?.title}
          asChild
          variant="ghost"
          className="group -mx-3 h-auto flex-col items-start justify-start gap-1 px-3 py-2 text-base md:mx-0"
        >
          <Link
            href={item.link}
            target={isExternal ? "_blank" : undefined}
            prefetch={!isExternal}
          >
            <div className="flex w-full items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                {item?.icon && <Icon icon={item.icon} />}
                <Typography className="truncate font-medium text-foreground">
                  {item.title}
                </Typography>
              </div>
              {isExternal && (
                <Icon
                  icon="ph:arrow-up-right-bold"
                  className="text-foreground-muted transition-colors group-hover:text-foreground"
                />
              )}
            </div>
            <Typography
              affects="muted"
              className="line-clamp-2 truncate text-wrap"
            >
              {item.subtitle}
            </Typography>
          </Link>
        </Button>
      ))}
    </div>
  )
}
