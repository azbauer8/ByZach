import React from "react"

import "@/lib/utils"
import "@/styles/prose.css"

import Link from "next/link"
import { PiCaretLeftBold } from "react-icons/pi"

import { capitalize, cn } from "@/lib/utils"
import { DynamicHeader } from "@/components/DynamicHeader"
import ThemeToggle from "@/components/ThemeToggle"
import { PageLayout } from "@/app/PageLayout"

export function ContentLayout({
  title,
  type,
  children,
  className,
}: {
  title: string
  type: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <>
      <DynamicHeader
        title={title}
        rightContent={
          <ThemeToggle className="text-foreground md:hidden" iconSize={22} />
        }
      >
        <Link
          href={`/${type}`}
          className="absolute left-2 flex items-center rounded-md p-1.5  text-primary hover:bg-default1/40 active:bg-default1/40 md:hidden"
        >
          <PiCaretLeftBold size={24} />
          {capitalize(type)}
        </Link>
      </DynamicHeader>
      <PageLayout className={cn("space-y-5", className)}>{children}</PageLayout>
    </>
  )
}
