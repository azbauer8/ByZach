"use client"

import React, { useState } from "react"
import Image, { type ImageProps, type StaticImageData } from "next/image"

import { imageSources } from "@/lib/metadata"
import { cn } from "@/lib/utils"

interface ImageWithFallbackProps extends ImageProps {
  fallbackSrc?: StaticImageData
  blurDataURL?: string
}

export default function ImageWithFallback({
  src,
  fallbackSrc = imageSources.fallback,
  blurDataURL,
  className,
  ...rest
}: ImageWithFallbackProps) {
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
