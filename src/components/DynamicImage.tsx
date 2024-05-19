import type { ImageProps, StaticImageData } from "next/image"

import getBase64 from "@/lib/getBase64"
import DynamicClientImage from "@/components/DynamicImage.client"

export interface DynamicImageProps extends ImageProps {
  fallbackSrc?: StaticImageData
  blurDataURL?: string
}

export default async function DynamicImage(props: DynamicImageProps) {
  let blurData = undefined
  if (typeof props.src === "string") {
    blurData = await getBase64(props.src)
  }

  return <DynamicClientImage {...props} blurDataURL={blurData} />
}
