---
title: 'useScrollPosition'
status: 'published'
author:
  name: 'Zach Bauer'
  picture: 'https://avatars.githubusercontent.com/u/8096606?v=4'
slug: 'usescrollposition'
description: 'To listen for the vertical scroll position of the browser window.'
coverImage: ''
publishedAt: '2024-05-04T16:21:16.387Z'
---

```jsx
import { useEffect, useState } from "react"

const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.scrollY)
    }
    window.addEventListener("scroll", updatePosition)
    updatePosition()
    return () => window.removeEventListener("scroll", updatePosition)
  }, [])

  return scrollPosition
}
```