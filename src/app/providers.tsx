"use client"

import { SpeedInsights } from "@vercel/speed-insights/next"
import { ThemeProvider } from "next-themes"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}                
      <SpeedInsights />
    </ThemeProvider>
  )
}
