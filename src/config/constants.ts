import { PDFLoader } from "langchain/document_loaders/fs/pdf";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { OpenAIEmbeddings } from "@langchain/openai";
import * as dotenv from "dotenv";

dotenv.config();
const API_KEY = process.env.OPENAI_API_KEY;
const MODEL_NAME = process.env.MODEL_NAME;
if (!API_KEY || !MODEL_NAME) {
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
