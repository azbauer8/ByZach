import { Suspense } from "react"

import { getUses } from "@/lib/getContent"
import ProductCard from "@/components/ProductCard"

export default function HardwareUses() {
  const hardware = getUses().filter((use) => use.metadata.type === "Hardware")
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {hardware.map((hardware) => (
        <Suspense key={hardware.slug} fallback={<div />}>
          <ProductCard
            key={hardware.slug}
            title={hardware.metadata.title}
            description={hardware.metadata.description ?? ""}
            link={hardware.metadata.link ?? ""}
          />
        </Suspense>
      ))}
    </div>
  )
}
