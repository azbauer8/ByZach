export default async function fetchTraktData() {
  try {
    const response = await fetch("/api/trakt");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log("Trakt data:", data);
    return data;
  } catch (error) {
    console.error("Error fetching Trakt data:", error);
    return;
  }
}
