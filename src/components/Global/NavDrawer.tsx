"use client"

import { Fragment, useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Transition } from "@headlessui/react"
import { atom, useAtom } from "jotai"
import { PiCaretDoubleUpBold } from "react-icons/pi"

import { navLinks, pageHeaders } from "@/lib/consts"
import { cn } from "@/lib/utils"
import ButtonLink from "@/components/Primitives/ButtonLink"
import { Typography } from "@/components/Primitives/Typography"

export const navDrawerState = atom(false)

export default function NavDrawer() {
  const [open, setOpen] = useAtom(navDrawerState)
  const [pageTitle, setPageTitle] = useState<string>(pageHeaders.about.title)
  const pathname = usePathname()
  // biome-ignore lint/correctness/useExhaustiveDependencies: pathname is basically a reactive version of document.title, so this works
  useEffect(() => {
    setPageTitle(document.title.split(" | ")[0].trim())
  }, [pathname])

  function toggleOpen(value: boolean) {
    setOpen(value)
    // theme color change delayed to match overlay transition
    // set theme color to overlay
    setTimeout(() => {
      if (value) {
        if (typeof window !== "undefined" && window.document) {
          document.body.style.overflow = "hidden"
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
        document.body.style.overflow = "unset"
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
      <Transition
        as={Fragment}
        show={open}
        enter="ease-out duration-500"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div
          className="fixed inset-0 bg-black bg-opacity-75 transition-opacity"
          onClick={() => toggleOpen(false)}
        />
      </Transition>
      {/* drawer wrapper */}
      <div
        className={cn(
          "fixed bottom-0 z-30 w-full translate-y-[calc(100%-56px)] border-t bg-background transition-transform duration-300 ease-nav md:hidden",
          open && "navDrawerOpen translate-y-0"
        )}
      >
        {/* drawer header/toggle */}
        <div
          className="group flex w-full items-center justify-between gap-2 whitespace-nowrap p-4 hover:cursor-pointer"
          onClick={() => toggleOpen(!open)}
          onKeyUp={() => toggleOpen(!open)}
        >
          <Typography className="font-medium">{pageTitle}</Typography>
          <PiCaretDoubleUpBold
            className={cn(
              "size-5 text-default-500 transition-colors group-hover:text-foreground",
              open && "rotate-180"
            )}
          />
        </div>
        {/* popup content */}
        <div className="grid grid-cols-3 gap-1 p-4 pt-1 ">
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === link.href
                : pathname.startsWith(link.href)
            return (
              <ButtonLink
                key={link.href}
                as={Link}
                href={link.href}
                onClick={() => toggleOpen(false)}
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
      </div>
    </>
  )
}
