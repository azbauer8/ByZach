import { Suspense } from "react"

import { getUses } from "@/lib/getContent"
import ProductCard from "@/components/ProductCard"

export default function SoftwareUses() {
  const software = getUses().filter((use) => use.metadata.type === "Software")
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {software.map((softwareItem) => (
        <Suspense key={softwareItem.slug} fallback={<div />}>
          <ProductCard
            key={softwareItem.slug}
            title={softwareItem.metadata.title}
            description={softwareItem.metadata.description ?? ""}
            link={softwareItem.metadata.link ?? ""}
          />
        </Suspense>
      ))}
    </div>
  )
}
