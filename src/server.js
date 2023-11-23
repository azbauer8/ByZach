import express from "express";
import cors from "cors";
import axios from "axios";
import * as dotenv from "dotenv";
dotenv.config();

const app = express();
const LAST_FM_API = dotenv.config().parsed.LAST_FM_API;
const TRAKT_API = dotenv.config().parsed.TRAKT_API;

app.use(cors());
app.get("/api/lastfm", async (req, res) => {
  try {
    const response = await axios.get(
      `http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=zacharlatanz&api_key=${LAST_FM_API}&format=json`,
      {},
    );
    res.json(response.data);
  } catch (error) {
    res.status(500);
  }
});

app.get("/api/trakt", async (req, res) => {
  let response = await axios.get(
    `https://api.trakt.tv/users/zacharlatan/watching/`,
    {
      headers: {
        "Content-Type": "application/json",
        "trakt-api-key": `${TRAKT_API}`,
        "trakt-api-version": "2",
      },
    },
  );
  if (response.status == 204) {
    response = await axios.get(
      `https://api.trakt.tv/users/zacharlatan/history/`,
      {
        headers: {
          "Content-Type": "application/json",
          "trakt-api-key": `${TRAKT_API}`,
          "trakt-api-version": "2",
        },
      },
    );
  }

  res.json(response.data);
});

const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
