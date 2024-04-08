import { ChatPromptTemplate } from "@langchain/core/prompts";
import { createOpenAIFunctionsAgent, AgentExecutor } from "langchain/agents";
import { pull } from "langchain/hub";
import { createRetrieverTool } from "langchain/tools/retriever";
import { MemoryVectorStore } from "langchain/vectorstores/memory";
import {
  PDF_LOADER,
  SPLITTER,
  EMBEDDINGS,
  LLM_MODEL,
} from "../../config/constants.js";
import { hgRetriever } from "../../loaders/pdf-loader.js";
import { searchTool } from "../../tools/tavily.js";

export async function simpleAgentQuery({ query }: { query: string }) {
  const retriever = await hgRetriever({
    loader: PDF_LOADER,
    splitter: SPLITTER,
    memoryVectorStore: MemoryVectorStore,
    openAIEmbeddings: EMBEDDINGS,
  });

  const retrieverTool = createRetrieverTool(retriever, {
    name: "programme_hg_seconde",
    description:
      "Retriever for the Histoire-Géographie programme for Seconde students",
  });

  const tools = [searchTool, retrieverTool];
  const prompt = await pull<ChatPromptTemplate>(
    "hwchase17/openai-functions-agent"
  );

  const agent = await createOpenAIFunctionsAgent({
    llm: LLM_MODEL,
    tools,
    prompt,
  });

  const agentExecutor = new AgentExecutor({
    agent,
    tools,
  });

  const response = await agentExecutor.invoke({
    input: query,
  });
  console.log(response);
}
