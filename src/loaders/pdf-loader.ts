import { PDFLoader } from "langchain/document_loaders/fs/pdf";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { MemoryVectorStore } from "langchain/vectorstores/memory";
import { OpenAIEmbeddings } from "@langchain/openai";

export async function hgRetriever({
  loader,
  splitter,
  memoryVectorStore,
  openAIEmbeddings,
}: {
  loader: PDFLoader;
  splitter: RecursiveCharacterTextSplitter;
  memoryVectorStore: typeof MemoryVectorStore;
  openAIEmbeddings: OpenAIEmbeddings;
}) {
  const text = await loader.load();
  const docs = await splitter.splitDocuments(text);
  const store = await memoryVectorStore.fromDocuments(docs, openAIEmbeddings);

  const retriever = store.asRetriever();
  return retriever;
}
