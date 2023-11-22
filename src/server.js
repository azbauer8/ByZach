import express from "express";
import cors from "cors";
//import axios from "axios";
const app = express();

//const API_KEY = "YOUR_API_KEY"; // Replace with your actual API key
app.use(cors());
app.get("/api/data", async (req, res) => {
  try {
    // const response = await axios.get("https://external-service.com/api/data", {
    //   headers: {
    //     Authorization: `Bearer ${API_KEY}`,
    //   },
    //   params: req.query, // Pass query parameters if needed
    // });
    res.json("Hello world");
  } catch (error) {
    res.status(500);
  }
});

// Other routes as needed...

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
