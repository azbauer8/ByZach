"use client"

import { useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion"

import { pageMetadata } from "@/lib/metadata"
import { cn } from "@/lib/utils"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import type { Icon } from "@/components/Icons"

export default function NavDock() {
  const mouseX = useMotionValue(Number.POSITIVE_INFINITY)
  const pathname = usePathname()

  return (
    <div className="fixed bottom-0 left-0 right-0 mx-auto hidden w-full max-w-3xl md:block">
      <motion.div
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Number.POSITIVE_INFINITY)}
        className="mx-auto mb-2 flex h-14 w-fit items-end justify-center gap-4 rounded-lg border bg-background p-2 shadow-md"
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
  link: { title: string; link: string; icon: Icon }
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
      <TooltipTrigger>
        <motion.div
          ref={ref}
          style={{ width }}
          className={
            "group relative flex aspect-square w-10 items-center justify-center rounded-lg border bg-accent"
          }
        >
          <Link
            className={cn(
              "size-full p-2 transition-colors duration-500 group-hover:text-foreground",
              active ? "text-foreground" : "text-foreground-muted"
            )}
            href={link.link}
          >
            <link.icon className="size-full" />
          </Link>
          {active && (
            <motion.span
              layoutId="navIndicator"
              className="absolute bottom-[-7px] h-[3px] w-full rounded-full bg-foreground/60"
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
