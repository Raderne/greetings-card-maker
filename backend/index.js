import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { generateText } from "./controllers/PromptsHandler.js";

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());

const apiKey = process.env.GOOGLE_GEMINI_API_KEY;

app.post("/generate-text", async (req, res) => {
  const { prompt } = req.body;

  try {
    const text = await generateText(apiKey, prompt);
    res.status(200).json(text);
  } catch (error) {
    console.log(error);
  }
});

// app.get("/", (req, res) => {
//   console.log(apiKey);
//   res.send("Hello World!" + process.env.GOOGLE_GEMINI_API_KEY);
// });

app.listen(8800, () => {
  console.log("Server is running on http://localhost:3000");
});
