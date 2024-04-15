import React from "react"
import { twcn } from "@/utils/tailwind/twc"

import "@/styles/prose.css"

import Link from "next/link"
import { FaChevronLeft } from "react-icons/fa6"

import { DynamicHeader } from "@/components/DynamicHeader"
import ThemeToggle from "@/components/ThemeToggle"

export const PageLayout = twcn.div`mx-auto max-w-2xl px-4 pt-0 pb-12 md:px-8`

export function ContentWrapper({
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
        rightContent={<ThemeToggle className="md:hidden" />}
      >
        <Link
          href={`/${type}`}
          className="absolute left-2 flex items-center gap-0.5 rounded-md p-1.5 text-primary hover:bg-default1/40 active:bg-default1/40 md:hidden"
        >
          <FaChevronLeft size={18} />
          Back
        </Link>
      </DynamicHeader>
      <PageLayout className={className}>{children}</PageLayout>
    </>
  )
}
