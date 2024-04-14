import React from "react"
import { twcn } from "@/utils/tailwind/twc"

import "@/styles/prose.css"

import Link from "next/link"
import { FaChevronLeft } from "react-icons/fa6"

import { DynamicHeader } from "@/components/DynamicHeader"
import ThemeToggle from "@/components/ThemeToggle"

export const PageLayout = twcn.div`mx-auto max-w-2xl px-4 py-12 md:px-8`

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
        rightContent={<ThemeToggle className="md:hidden" align="end" />}
      >
        <Link
          href={`/${type}`}
          className="absolute left-2 flex items-center rounded-md p-1.5 text-sm text-primary hover:bg-default/40 md:hidden"
        >
          <FaChevronLeft size={15} className="translate-y-[-0.5px]" />
          Back
        </Link>
      </DynamicHeader>
      <PageLayout className={className}>{children}</PageLayout>
    </>
  )
}
