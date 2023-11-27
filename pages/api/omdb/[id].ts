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
        responseType: "stream",
      }
    );
    await new Promise<void>((resolve) => {
      response.data.pipe(res);
      response.data.on("end", () => {
        resolve();
      });
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch image" });
  }
}
