import { ChatOpenAI, ChatOpenAICallOptions } from "@langchain/openai";
import type { BaseMessageChunk } from "langchain/schema";
import * as dotenv from "dotenv";

dotenv.config();
const API_KEY = process.env.OPENAI_API_KEY;
const MODEL_NAME = process.env.MODEL_NAME;
if (!API_KEY || !MODEL_NAME) {
  console.error("OPENAI_API_KEY is not set or MODEL_NAME is not set");
  process.exit(1);
}
export const chatModel = new ChatOpenAI({
  openAIApiKey: API_KEY,
  modelName: MODEL_NAME,
});

export async function chat({
  chatModel,
  query,
}: {
  chatModel: ChatOpenAI<ChatOpenAICallOptions>;
  query: string;
}): Promise<string> {
  const response = await chatModel.invoke(query);
  return response.content.concat().toString();
}
