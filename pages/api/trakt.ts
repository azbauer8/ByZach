import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let response = await axios.get(
    `https://api.trakt.tv/users/zacharlatan/watching?extended=full`,
    {
      headers: {
        "Content-Type": "application/json",
        "trakt-api-key": `${process.env.TRAKT_API}`,
        "trakt-api-version": "2",
      },
    }
  );
  if (response.status == 204) {
    response = await axios.get(
      `https://api.trakt.tv/users/zacharlatan/history?extended=full`,
      {
        headers: {
          "Content-Type": "application/json",
          "trakt-api-key": `${process.env.TRAKT_API}`,
          "trakt-api-version": "2",
        },
      }
    );
  }

  res.json(response.data);
}
