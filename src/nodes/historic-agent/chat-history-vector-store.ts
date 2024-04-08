import { Collection, OpenAIEmbeddingFunction, QueryResponse } from "chromadb";
import { CHROMA_CLIENT, CHROMA_EMBBEDER } from "../../config/chroma-db.js";
import { JSONLoader } from "langchain/document_loaders/fs/json";
import { Document } from "langchain/document";
import { v4 as uuidv4 } from "uuid";

export async function createChromaCollection({
  name,
  embeddingFunction,
}: {
  name: string;
  embeddingFunction: OpenAIEmbeddingFunction;
}): Promise<Collection> {
  return await CHROMA_CLIENT.createCollection({
    name,
    embeddingFunction,
  });
}

export async function getChromaCollection({
  name,
}: {
  name: string;
}): Promise<Collection> {
  return await CHROMA_CLIENT.getOrCreateCollection({
    name: name,
    embeddingFunction: CHROMA_EMBBEDER,
  });
}

export async function retriveDocsFromChromaCollection({
  collection,
  queryTexts,
  nResults,
}: {
  collection: Collection;
  queryTexts: string[];
  nResults: number;
}): Promise<QueryResponse> {
  return await collection.query({
    queryTexts,
    nResults,
  });
}

/* MODULE: Create index for chat history */
export async function addDocsToCollection({
  collection,
  docs,
  ids,
  metadata,
}: {
  collection: Collection;
  docs: string[];
  ids?: string[];
  metadata?: Record<string, any>;
}) {
  return await collection.add({
    documents: docs,
    ids: ids || docs.map(() => uuidv4().slice(0, 8)),
    metadatas: metadata,
  });
}

/* MODULE: retrieve chat history */
export async function getChatHistoryFromJSON({
  path,
}: {
  path: string;
}): Promise<Document<Record<string, any>>[]> {
  const loader = new JSONLoader(path);
  return await loader.load();
}

/* MODULE: add message to chat history */
