import { getSoftwareUses } from "@/lib/getRaindrop"
import ProductCard from "@/components/ProductCard"

export default async function SoftwareUses() {
  const software = await getSoftwareUses()
  if (!software) return null
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {software.map((softwareItem) => (
        <ProductCard
          key={softwareItem._id}
          title={softwareItem.title}
          description={softwareItem.note}
          link={softwareItem.link}
          shortLink={softwareItem.domain}
          img={softwareItem.cover}
        />
      ))}
    </div>
  )
}
