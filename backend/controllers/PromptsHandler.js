import { GoogleGenerativeAI } from "@google/generative-ai";

export const generateText = async (apiKey, prompt) => {
  if (!apiKey) {
    throw new Error("API key is required");
  }

  if (!prompt) {
    throw new Error("Prompt is required");
  }

  let modifiedPrompt =
    "Write a short message for my greeting card that says: " +
    prompt +
    ". make it heartfelt and sincere with maximum 300 characters.";

  const genAI = new GoogleGenerativeAI(apiKey);
  //   The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" });

  const result = await model.generateContent(modifiedPrompt);
  const response = await result.response;
  const text = response.text();

  return text;
};
