import type { Metadata } from "next/types"
import { pageMetadata } from "@/siteData"

import PageLayout from "@/components/PageLayout"

import UsesTabs from "./UsesTabs"

export const metadata: Metadata = {
  title: pageMetadata.uses.title,
  description: pageMetadata.uses.subtitle,
}

export default function UsesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <PageLayout
      title={pageMetadata.uses.title}
      subtitle={pageMetadata.uses.subtitle}
    >
      <UsesTabs />
      {children}
    </PageLayout>
  )
}
