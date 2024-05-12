"use client"

import { useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { pageMetadata } from "@/siteData"
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion"

import { cn } from "@/lib/utils"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export default function NavDock() {
  const mouseX = useMotionValue(Number.POSITIVE_INFINITY)
  const pathname = usePathname()

  return (
    <div className="fixed bottom-0 left-0 right-0 mx-auto hidden w-full max-w-3xl md:block">
      <motion.div
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Number.POSITIVE_INFINITY)}
        className="mx-auto mb-1 flex h-14 w-fit items-end justify-center gap-4 rounded-2xl border bg-background px-4 py-2 shadow-md"
      >
        <TooltipProvider delayDuration={0}>
          {Object.entries(pageMetadata).map(([, link]) => {
            const active =
              link.link === "/"
                ? pathname === link.link
                : pathname.startsWith(link.link)

            return (
              <AppIcon
                mouseX={mouseX}
                key={link.title}
                link={link}
                active={active}
              />
            )
          })}
        </TooltipProvider>
      </motion.div>
    </div>
  )
}

function AppIcon({
  mouseX,
  link,
  active,
}: {
  mouseX: MotionValue
  link: { title: string; link: string; icon: JSX.Element }
  active: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 }

    return val - bounds.x - bounds.width / 2
  })

  const widthSync = useTransform(distance, [-150, 0, 150], [40, 75, 40])
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 })

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <motion.div
          ref={ref}
          style={{ width }}
          className={
            "group relative flex aspect-square w-10 items-center justify-center rounded-lg border bg-accent p-2"
          }
        >
          <Link
            className={cn(
              "size-full transition-colors duration-500 group-hover:text-foreground [&>svg]:size-full",
              active ? "text-foreground" : "text-foreground-muted"
            )}
            href={link.link}
          >
            {link.icon}
          </Link>
          {active && (
            <motion.span
              layoutId="navIndicator"
              className="absolute -bottom-2 left-1/2 size-[5px] translate-x-[-50%] animate-pulse rounded-full bg-foreground-muted"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
        </motion.div>
      </TooltipTrigger>
      <TooltipContent>
        <p>{link.title}</p>
      </TooltipContent>
    </Tooltip>
  )
}
