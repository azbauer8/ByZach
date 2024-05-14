"use client"

import React, { useState } from "react"
import Image, { type ImageProps } from "next/image"

import { cn } from "@/lib/utils"

interface ImageWithFallbackProps extends ImageProps {
  fallbackSrc?: string
}

export default function ImageWithFallback({
  src,
  fallbackSrc = "/fallback.png",
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
      className={cn("animate-reveal rounded-lg", className)}
    />
  )
}
