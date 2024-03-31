import { Metadata } from "next/types"

import PageHeader from "@/components/PageHeader"

export const metadata: Metadata = {
  title: "Test",
}

export default function PageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="size-full bg-background">
      <div className="relative max-h-dvh min-h-dvh w-full overflow-y-auto border-r border-border bg-accent transition-all duration-200 ease-in-out lg:w-80 xl:w-96">
        <PageHeader />
        <div className="lg:space-y-1 lg:p-3">{children}</div>
      </div>
    </div>
  )
}
