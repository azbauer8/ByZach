"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@nextui-org/button"
import { Divider } from "@nextui-org/divider"
import { atom, useAtom } from "jotai"
import { PiCaretDoubleUpBold } from "react-icons/pi"

import { cn } from "@/lib/utils"
import sidebarLinks from "@/components/Global/Sidebar/links"
import ButtonLink from "@/components/Primitives/ButtonLink"
import { Typography } from "@/components/Primitives/Typography"

export const navDrawerState = atom(false)

export default function NavDrawer() {
  const [open, setOpen] = useAtom(navDrawerState)
  const [pageTitle, setPageTitle] = useState("Home")
  const pathname = usePathname()
  // biome-ignore lint/correctness/useExhaustiveDependencies: pathname is basically a reactive version of document.title, so this works
  useEffect(() => {
    setPageTitle(document.title.split(" | ")[0].trim())
  }, [pathname])

  function toggleOpen(value: boolean) {
    setOpen(value)
    // theme color change delayed to match overlay transition
    // set theme color to overlay
    if (value) {
      setTimeout(() => {
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
      }, 125)
    }
    // set theme color to normal
    else {
      setTimeout(() => {
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
      }, 130)
    }
  }

  return (
    <>
      {/* overlay */}
      <div
        className={cn(
          "fixed left-0 top-0 size-full bg-black transition-all duration-400 ease-in-out",
          open ? "z-20 opacity-75" : "-z-10 opacity-0"
        )}
        onClick={() => toggleOpen(false)}
      />
      {/* drawer wrapper */}
      <div
        className={cn(
          "navDrawer fixed bottom-0 z-30 w-full translate-y-[calc(100%-56px)] border-t bg-background transition-transform duration-300 xl:hidden",
          open && "navDrawerOpen translate-y-0"
        )}
      >
        {/* drawer header/toggle */}
        <div
          className="flex w-full items-center justify-between gap-2 whitespace-nowrap p-4 hover:cursor-pointer "
          onClick={() => toggleOpen(!open)}
          onKeyUp={() => toggleOpen(!open)}
        >
          <Typography>{pageTitle}</Typography>
          <PiCaretDoubleUpBold className={cn("size-5", open && "rotate-180")} />
        </div>
        {/* popup content */}
        <div className="grid grid-cols-3 gap-1 p-4 pt-1 md:grid-cols-4 lg:grid-cols-5">
          {sidebarLinks.site.map((link) => {
            const active =
              link.href === "/"
                ? pathname === link.href
                : pathname.startsWith(link.href)
            return (
              <ButtonLink
                key={link.href}
                as={Link}
                href={link.href}
                onClick={() => setOpen(false)}
                active={active}
                variant={active ? "flat" : "light"}
                startContent={link.icon}
                className={"flex-col justify-center pt-3"}
              >
                {link.name}
              </ButtonLink>
            )
          })}
        </div>
        <div className="flex h-[57px] gap-2 border-t p-2">
          <div className="flex gap-1">
            {sidebarLinks.professional.map((link) => {
              return (
                <Button
                  key={link.href}
                  as={Link}
                  variant="light"
                  disableRipple
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="min-w-fit font-medium text-default-500"
                >
                  {link.icon}
                  <span className="hidden text-foreground md:block">
                    {link.name}
                  </span>
                </Button>
              )
            })}
          </div>
          <Divider orientation="vertical" className="-my-2 h-[57px]" />
          <div className="flex gap-1">
            {sidebarLinks.personal.map((link) => {
              return (
                <Button
                  key={link.href}
                  as={Link}
                  variant="light"
                  disableRipple
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="min-w-fit font-medium text-default-500"
                  endContent={
                    <span className="hidden text-foreground md:block">
                      {link.name}
                    </span>
                  }
                >
                  {link.icon}
                </Button>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}
