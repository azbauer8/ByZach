---
title: 'Tailwind Window Size'
status: 'draft'
author:
  name: 'Zach Bauer'
  picture: 'https://avatars.githubusercontent.com/u/8096606?v=4'
slug: 'tailwind-window-size'
description: 'Indicates the current window size and Tailwind breakpoint. Only appears in dev.'
coverImage: ''
publishedAt: '2024-05-04T15:29:29.127Z'
---

---

```tsx
"use client"

import { useEffect, useState } from "react"

export default function TailwindIndicator() {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    function updateDimensions() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    updateDimensions()
    window.addEventListener("resize", updateDimensions)

    return () => {
      window.removeEventListener("resize", updateDimensions)
    }
  }, [])

  const { width, height } = dimensions

  if (process.env.NODE_ENV !== "development") {
    return null
  }

  return (
    <div className="fixed bottom-5 left-5 z-50 flex items-center space-x-2 rounded-full bg-black px-2.5 py-1 font-mono text-xs font-medium text-white">
      <span>
        {width.toLocaleString()} x {height.toLocaleString()}
      </span>
      <div className="h-4 w-px bg-gray-800" />
      <span className="sm:hidden">XS</span>
      <span className="hidden sm:inline md:hidden">SM</span>
      <span className="hidden md:inline lg:hidden">MD</span>
      <span className="hidden lg:inline xl:hidden">LG</span>
      <span className="hidden xl:inline 2xl:hidden">XL</span>
      <span className="hidden 2xl:inline">2XL</span>
    </div>
  )
}
```