import type { ImageProps, StaticImageData } from "next/image"
import { getPlaiceholder } from "plaiceholder"

import DynamicClientImage from "@/components/DynamicImage.client"

export interface DynamicImageProps extends ImageProps {
  fallbackSrc?: StaticImageData
  blurDataURL?: string
}

export default async function DynamicImage(props: DynamicImageProps) {
  let blurData = undefined
  if (props.placeholder === "blur" && typeof props.src === "string") {
    blurData = await getBase64(props.src)
  }

  return <DynamicClientImage {...props} blurDataURL={blurData} />
}

async function getBase64(url: string) {
  try {
    const res = await fetch(url)
    if (!res.ok) throw new Error(`unexpected response ${res.status}`)
    const buffer = await res.arrayBuffer()
    const { base64 } = await getPlaiceholder(Buffer.from(buffer))
    return base64
  } catch (error) {
    console.log(error)
  }
}
