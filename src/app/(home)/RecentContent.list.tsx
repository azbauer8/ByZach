import Link from "next/link"

import { cn } from "@/lib/utils"
import { Typography, typographyVariants } from "@/components/ui/typography"

export default function RecentContentList({
  title,
  subtitle,
  route,
  list,
}: {
  title: string
  subtitle: string
  route: string
  list: {
    slug: string
    title: string
    subtitle: string
  }[]
}) {
  return (
    <div className="space-y-2">
      <div className="space-y-0.5">
        <Link
          href={`/${route}`}
          className={cn(
            typographyVariants({ variant: "h3" }),
            "underline-offset-2 hover:text-primary hover:underline active:text-primary  active:underline"
          )}
        >
          {title}
        </Link>
        {subtitle && (
          <Typography variant="p" affects="muted">
            {subtitle}
          </Typography>
        )}
      </div>
      <div className="grid w-[102%] -translate-x-2 grid-cols-2 gap-0.5 sm:grid-cols-3">
        {list?.map((item) => (
          <Link
            key={item.slug}
            href={`/${route}/${item.slug}`}
            className="group flex flex-col gap-0.5 rounded-lg p-2 hover:bg-content1 active:bg-content1"
          >
            <Typography className="truncate leading-tight underline-offset-2 group-hover:text-primary group-hover:underline group-active:text-primary group-active:underline">
              {item.title}
            </Typography>
            <Typography affects="muted">{item.subtitle}</Typography>
          </Link>
        ))}
      </div>
    </div>
  )
}
