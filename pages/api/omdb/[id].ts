import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await axios.get(
      `http://img.omdbapi.com/?apikey=${process.env.OMDB_API}&i=${req.query.id}`,
      {
        responseType: "arraybuffer", // Set the response type to receive binary data
      }
    );

    // Assuming the response contains binary image data (e.g., a PNG or JPEG image)
    const imageBuffer = Buffer.from(response.data, "binary");

    // Set appropriate headers to indicate the image content type
    res.setHeader("Content-Type", "image/jpeg"); // Replace 'image/jpeg' with the appropriate content type
    res.setHeader("Cache-Control", "public, max-age=86400"); // Example cache control for one day

    // Send the image data as a buffer
    res.end(imageBuffer);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch image" });
  }
}
