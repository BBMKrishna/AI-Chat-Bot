import { GoogleGenerativeAI } from "@google/generative-ai";
import * as dotenv from "dotenv";
dotenv.config();

if(process.env.AI_API_KEY === undefined) {
  console.error("Please set the AI_API_KEY environment variable.");
  console.error("You can get it from https://developers.google.com/generative-ai/getting-started");
  console.error("Make sure to set it in a .env file in the root directory.");
  process.exit(1);
}

const genAI = new GoogleGenerativeAI(process.env.AI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

export async function askGemini(prompt: string): Promise<string> {
  const result = await model.generateContent(prompt);
  const response = result.response;
  return response.text();
}
