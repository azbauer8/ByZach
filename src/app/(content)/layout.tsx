import { Dots } from "@/components/ui/bg-patterns"

import "@/styles/prose.css"

import ContentListColumn from "@/app/(content)/ContentListColumn"

export default function ContentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Dots className="flex size-full">
      <ContentListColumn />
      {children}
    </Dots>
  )
}
