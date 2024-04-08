import { PDFLoader } from "langchain/document_loaders/fs/pdf";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { ChatOpenAI, OpenAIEmbeddings } from "@langchain/openai";
import * as dotenv from "dotenv";
import { v4 as uuidv4 } from "uuid";
dotenv.config();

const uniqueId = uuidv4().slice(0, 8);
process.env.LANGCHAIN_PROJECT = `Agent - 01`;

export const MODEL_NAME = process.env.MODEL_NAME;
export const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
if (!MODEL_NAME || !OPENAI_API_KEY) {
  console.error("OPENAI_API_KEY is not set or MODEL_NAME is not set");
  process.exit(1);
}
export const BASE_PATH = `src/data/programmes/histoire-geo/programme_hg_seconde.pdf`;
export const PDF_LOADER = new PDFLoader(BASE_PATH);
export const SPLITTER = new RecursiveCharacterTextSplitter({
  chunkSize: 1000,
  chunkOverlap: 200,
});
export const EMBEDDINGS = new OpenAIEmbeddings();
export const LLM_MODEL = new ChatOpenAI({
  modelName: MODEL_NAME,
});

export const BASE_VECTOR_STORE_PATH = `src/data/vector_stores/`;
