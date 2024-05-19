"use client"

import { useState } from "react"
import Image from "next/image"

import { imageSources } from "@/lib/metadata"
import { cn } from "@/lib/utils"
import type { DynamicImageProps } from "@/components/DynamicImage"

export default function DynamicClientImage({
  src,
  fallbackSrc = imageSources.fallback,
  blurDataURL,
  className,
  ...rest
}: DynamicImageProps) {
  const [imgSrc, setImgSrc] = useState(src)

  return (
    <Image
      {...rest}
      src={imgSrc}
      onError={() => {
        setImgSrc(fallbackSrc)
      }}
      placeholder={blurDataURL ? "blur" : undefined}
      blurDataURL={blurDataURL ?? undefined}
      className={cn("rounded-lg", className)}
    />
  )
}
