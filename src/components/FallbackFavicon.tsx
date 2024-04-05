"use client"

import { ElementRef, forwardRef, useState } from "react"
import Image from "next/image"
import { FaLink } from "react-icons/fa6"

interface FallbackFaviconProps
  extends React.ComponentPropsWithoutRef<typeof Image> {}

const FallbackFavicon = forwardRef<
  ElementRef<typeof Image>,
  FallbackFaviconProps
>(({ src, alt, height, width, ...props }, ref) => {
  const [imageError, setImageError] = useState(false)
  console.log("🚀 ~ imageError:", imageError)
  return (
    <>
      {imageError ? (
        <FaLink height={height} width={width} />
      ) : (
        <Image
          src={src}
          alt={alt}
          height={height}
          width={width}
          ref={ref}
          {...props}
          onError={() => setImageError(true)}
        />
      )}
    </>
  )
})

FallbackFavicon.displayName = "FallbackFavicon"

export default FallbackFavicon
