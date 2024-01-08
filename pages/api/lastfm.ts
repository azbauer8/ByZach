import { NextApiRequest, NextApiResponse } from "next"
import axios from "axios"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await axios.get(
      `http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=zacharlatanz&api_key=${process.env.LAST_FM_API}&format=json`,
      {}
    )
    res.json(response.data)
  } catch (error) {
    res.status(500)
  }
}
