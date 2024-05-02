import { getSoftwareUses } from "@/lib/getRaindrop"
import BookmarkItemList from "@/components/BookmarkItem"

export default async function SoftwareUses() {
  const software = await getSoftwareUses()
  if (!software) return null
  return (
    <BookmarkItemList
      items={software.map((softwareItem) => ({
        title: softwareItem.title,
        description:
          softwareItem.note !== "" ? softwareItem.note : softwareItem.excerpt,
        link: softwareItem.link,
        shortLink: softwareItem.domain,
        img: softwareItem.cover,
      }))}
    />
  )
}
