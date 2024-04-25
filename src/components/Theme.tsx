"use client"

import { useEffect } from "react"
import { useTheme } from "next-themes"

export default function ThemeInit() {
  const { setTheme } = useTheme()
  useEffect(() => {
    setTheme("system")
  }, [setTheme])
  return <></>
}
