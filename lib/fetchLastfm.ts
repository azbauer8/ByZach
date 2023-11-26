export default async function fetchLastfmData() {
  try {
    const response = await fetch("/api/lastfm");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log("LastfM data:", data);
    return data;
  } catch (error) {
    console.error("Error fetching LastFM data:", error);
    return;
  }
}
