import Image from "next/image"
import ogs from "open-graph-scraper"
import { FaLink } from "react-icons/fa6"

import {
  getDiscoveriesInCategory,
  getDiscoveryCategories,
} from "@/lib/getContent"
import { formatUrl } from "@/lib/utils"
import Badge from "@/components/ui/badge"
import { Text } from "@/components/ui/text"
import { ContentLayout } from "@/components/Layouts/ContentLayout"

export const dynamicParams = false

// export async function generateMetadata({
//   params,
// }: {
//   params: { category: string }
// }) {
//   const discovery = getDiscoveryCategories().find(
//     (discovery) => discovery.slug === params.discovery
//   )
//   if (!discovery) return {}

//   const { description, title } = discovery.metadata

//   return {
//     title,
//     description,
//   }
// }

export async function generateStaticParams() {
  const categories = getDiscoveryCategories()
  return categories.map((category) => ({
    category: category.slug,
  }))
}
export default async function DiscoveryCategory({
  params,
}: {
  params: { category: string }
}) {
  const discoveries = getDiscoveriesInCategory(params.category)
  if (!discoveries) return null

  return discoveries.map((discovery) => (
    <div key={discovery.slug} className="space-y-0.5">
      <Text variant="h3">{discovery.metadata.title}</Text>
      <Text variant="p" affects="muted">
        {discovery.metadata.description}
      </Text>
    </div>
  ))

  // let ogImgUrl: string | undefined = undefined

  // if (discoveries.metadata.link) {
  //   const options = { url: discoveries.metadata.link }
  //   const ogImg = await ogs(options)
  //   ogImgUrl = ogImg?.result?.ogImage?.[0].url
  // }

  // return (
  //   <ContentLayout title={discoveries.metadata.title} type="discoveries">
  //     <div className="space-y-0.5">
  //       <Badge>{discoveries.metadata.category}</Badge>
  //       <Text variant="h2">{discoveries.metadata.title}</Text>
  //       {discoveries.metadata.link ? (
  //         <a
  //           href={discoveries.metadata.link}
  //           target="_blank"
  //           rel="noreferrer"
  //           className="flex items-center gap-1.5"
  //         >
  //           <FaLink width={16} height={16} />
  //           <Text affects="muted">{formatUrl(discoveries.metadata.link)}</Text>
  //         </a>
  //       ) : null}
  //       <Image
  //         src={ogImgUrl ?? ""}
  //         alt={discoveries.metadata.title}
  //         width={1200}
  //         height={630}
  //         className="rounded-lg"
  //       />
  //       <Text variant="p" affects="muted">
  //         {discoveries.metadata.description}
  //       </Text>
  //     </div>
  //   </ContentLayout>
  // )
}
