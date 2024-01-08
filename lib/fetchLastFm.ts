export default async function fetchLastFm() {
  try {
    const response = await fetch("/api/lastfm")
    if (!response.ok) {
      throw new Error("Network response was not ok")
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error("Error fetching LastFM data:", error)
    return
  }
}
