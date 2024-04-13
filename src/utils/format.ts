export function capitalize(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export function formatUrl(url: string | undefined | null) {
  return new URL(url ?? "").hostname.replace("www.", "")
}

export function formatDate(date: string | null) {
  return new Date(date ?? "").toLocaleDateString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  })
}
