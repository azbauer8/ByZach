import { clsx, type ClassValue } from "clsx"
import { createTwc } from "react-twc"
import { twMerge } from "tailwind-merge"

export function formatDate(dateString?: string | null | undefined) {
  const date = dateString ? new Date(dateString) : new Date()
  return date.toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })
}

export function slugify(input: string) {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "")
}

export function unslugify(slug: string) {
  // acronyms to account for
  const acronyms = ["UI", "API", "HTTP", "CSS", "HTML"]

  return slug
    .replace(/-/g, " ")
    .split(" ")
    .map((word) => {
      if (acronyms.includes(word.toUpperCase())) {
        return word.toUpperCase()
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    })
    .join(" ")
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const twcn = createTwc({ compose: cn })

export default clsx
