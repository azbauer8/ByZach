import type { Metadata } from "next/types"

import { pageHeaders } from "@/lib/consts"
import PageContent from "@/components/PageContent"

import UsesTabs from "./UsesTabs"

export const revalidate = 60

export const metadata: Metadata = {
  title: pageHeaders.uses.title,
  description: pageHeaders.uses.subtitle,
}

export default function UsesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <PageContent
      title={pageHeaders.uses.title}
      subtitle={pageHeaders.uses.subtitle}
    >
      <UsesTabs />
      {children}
    </PageContent>
  )
}
