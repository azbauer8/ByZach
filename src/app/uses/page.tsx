import { getUses } from "@/lib/getContent"
import ProductCard from "@/components/ProductCard"

export default async function SoftwareUses() {
  const hardware = getUses().filter((use) => use.metadata.type === "Software")
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {hardware.map((hardware) => (
        <ProductCard
          key={hardware.slug}
          title={hardware.metadata.title}
          description={hardware.metadata.description ?? ""}
          link={hardware.metadata.link ?? ""}
        />
      ))}
    </div>
  )
}
