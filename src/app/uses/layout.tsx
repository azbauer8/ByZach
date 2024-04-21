import { Metadata } from "next/types"
import { siteLinks } from "@/config"

import { Text } from "@/components/ui/text"
import { PageLayout } from "@/components/Layouts/PageLayout"
import { MobileSidebarToggle } from "@/components/Sidebar/MobileSidebarToggle"
import { StickyHeader } from "@/components/StickyHeader"
import Tabs from "@/app/uses/Tabs"

export const metadata: Metadata = {
  title: "Uses",
  description: "Devices, tools, and technologies I use on a daily basis.",
  openGraph: {
    title: "Uses",
    description: "Devices, tools, and technologies I use on a daily basis.",
    url: `${siteLinks.here}/uses`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Uses",
    description: "Devices, tools, and technologies I use on a daily basis.",
  },
}

export default function UsesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <StickyHeader title="Uses" isContentHeader>
        <MobileSidebarToggle />
      </StickyHeader>
      <PageLayout className="space-y-5">
        <Text variant="h2">Uses</Text>
        <Tabs />
        {children}
      </PageLayout>
    </>
  )
}
