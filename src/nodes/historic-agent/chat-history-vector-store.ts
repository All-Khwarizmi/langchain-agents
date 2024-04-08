import { HNSWLib } from "@langchain/community/vectorstores/hnswlib";
import { OpenAIEmbeddings } from "@langchain/openai";
import { BaseMessage } from "langchain/schema";

/* MODULE: Create index for chat history */
export async function createIndexForChatHistory({
  chatHistory,
  embeddings,
  directory,
}: {
  chatHistory: BaseMessage[];
  embeddings: OpenAIEmbeddings;
  directory: string;
}) {
  const vectorStore = await HNSWLib.fromTexts(
    chatHistory.map((message) => message.content as string),
    [],
    embeddings
  );

  await vectorStore.save(directory);
  console.log(`Index created at ${directory}`);
}
