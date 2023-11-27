export default async function fetchImdb(id: string) {
  try {
    const response = await fetch(`/api/omdb/${id}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const blob = await response.blob();
    const imageObjectURL = URL.createObjectURL(blob);
    return imageObjectURL;
  } catch (error) {
    console.error("Error fetching Imdb image:", error);
    return;
  }
}
