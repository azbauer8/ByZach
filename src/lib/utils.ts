import { clsx, type ClassValue } from "clsx"
import { createTwc } from "react-twc"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const twx = createTwc({ compose: cn })

export function capitalize(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export function getFavicon(url: string) {
  return `https://www.google.com/s2/favicons?domain=${url}&sz=512`
}
