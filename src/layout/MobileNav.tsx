"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { links, pageMetadata, siteMetadata } from "@/lib/metadata"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { DrawerIcon } from "@/components/Icons"
import { Typography } from "@/components/Typography"

export default function MobileNav() {
  const [open, setOpen] = useState(false)
  const [pageTitle, setPageTitle] = useState<string>(pageMetadata.home.title)
  const pathname = usePathname()
  // biome-ignore lint/correctness/useExhaustiveDependencies: pathname is basically a reactive version of document.title, so this works
  useEffect(() => {
    setPageTitle(document.title.split(" | ")[0].trim())
  }, [pathname])

  function toggleOpen(value: boolean) {
    setOpen(value)
    if (value) {
      if (typeof window !== "undefined" && window.document) {
        document.body.classList.add("overflow-y-hidden")
      }
    } else {
      if (typeof window !== "undefined" && window.document) {
        document.body.classList.remove("overflow-y-hidden")
      }
    }
    // theme color change delayed to match overlay transition
    // set theme color to overlay
    setTimeout(() => {
      if (value) {
        if (typeof window !== "undefined" && window.document) {
          document.body.classList.add("overflow-y-hidden")
        }
        document
          .querySelector(
            "meta[name='theme-color'][media='(prefers-color-scheme: light)']"
          )
          ?.setAttribute("content", "#404040")
        document
          .querySelector(
            "meta[name='theme-color'][media='(prefers-color-scheme: dark)']"
          )
          ?.setAttribute("content", "#050505")
      }
      // set theme color to normal
      else {
        document
          .querySelector(
            "meta[name='theme-color'][media='(prefers-color-scheme: light)']"
          )
          ?.setAttribute("content", "#FEFEFE")
        document
          .querySelector(
            "meta[name='theme-color'][media='(prefers-color-scheme: dark)']"
          )
          ?.setAttribute("content", "#121212")
      }
    }, 100)
  }

  return (
    <>
      {/* overlay */}
      <div
        className={cn(
          "fixed inset-0 z-20 bg-black bg-opacity-75 transition-opacity duration-300",
          open ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={() => toggleOpen(false)}
      />
      {/* drawer wrapper */}
      <div
        className={cn(
          "ease-[cubic-bezier(0.4, 0, 0.2, 1)] fixed bottom-0 left-0 right-0 z-30 mx-auto w-full max-w-3xl translate-y-[calc(100%-56px)] border-t bg-background transition-transform duration-300 md:hidden md:border-x",
          open && "translate-y-0"
        )}
      >
        {/* drawer header/toggle */}
        <div
          className="group flex w-full items-center justify-between gap-2 whitespace-nowrap p-4 hover:cursor-pointer"
          onClick={() => toggleOpen(!open)}
          onKeyUp={() => toggleOpen(!open)}
        >
          <Typography className="font-medium">{pageTitle}</Typography>
          <DrawerIcon
            className={cn(
              "text-foreground-muted transition-colors group-hover:text-foreground",
              open && "rotate-180"
            )}
          />
        </div>
        {/* popup content */}
        <div className="grid grid-cols-3 gap-1 p-4 pt-1">
          {Object.entries(pageMetadata)
            .filter(([, link]) => link.title !== pageMetadata.colophon.title)
            .map(([, link]) => {
              const active =
                link.href === pageMetadata.home.href
                  ? pathname === link.href
                  : pathname.startsWith(link.href)

              const fullyActive = pathname === link.href

              return (
                <Button
                  key={link.href}
                  asChild
                  onClick={() => toggleOpen(false)}
                  variant={active ? "outline" : "ghost"}
                  className={cn(
                    "flex-col justify-center",
                    "buttonLink h-fit justify-start px-2 pb-0.5 pt-1.5 font-medium",
                    active && "bg-accent",
                    !fullyActive && "bg-transparent"
                  )}
                >
                  <Link href={link.href}>
                    <link.icon />
                    {link.title}
                  </Link>
                </Button>
              )
            })}
        </div>
        <footer className="border-t py-2.5">
          <div className="flex w-full items-center justify-between gap-2 px-5">
            <Button
              asChild
              variant="outline"
              size="sm"
              className="h-fit px-2.5 py-1 text-foreground-muted"
            >
              <Link href={links.professional.github.href}>
                {siteMetadata.footer}
              </Link>
            </Button>
            <div className="flex items-center gap-1">
              <Button
                asChild
                variant="outline"
                size="sm"
                className="h-fit px-2.5 py-1 text-foreground-muted"
                onClick={() => toggleOpen(false)}
              >
                <Link href={pageMetadata.colophon.href}>
                  {pageMetadata.colophon.title}
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="sm"
                className="h-fit px-2.5 py-1 text-foreground-muted"
                onClick={() => toggleOpen(false)}
              >
                <Link href={links.source.href} target="_blank">
                  {links.source.title}
                </Link>
              </Button>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
