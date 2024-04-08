import { ChromaClient, OpenAIEmbeddingFunction } from "chromadb";
import { OPENAI_API_KEY } from "./constants.js";

export const CHROMA_CLIENT = new ChromaClient();
export const CHROMA_EMBBEDER = new OpenAIEmbeddingFunction({
  openai_api_key: OPENAI_API_KEY || "",
});

