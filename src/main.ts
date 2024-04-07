
import { MemoryVectorStore } from "langchain/vectorstores/memory";
import { createRetrieverTool } from "langchain/tools/retriever";
import { searchTool } from "./tools/tavily.js";
import { chatModel } from "./chat/chat.js";
import type { ChatPromptTemplate } from "@langchain/core/prompts";
import { pull } from "langchain/hub";
import { createOpenAIFunctionsAgent } from "langchain/agents";
import { AgentExecutor } from "langchain/agents";
import { hgRetriever } from "./loasders/pdf-loader.js";
import { PDF_LOADER, SPLITTER, EMBEDDINGS } from "./config/constants.js";


(async () => {

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
    llm: chatModel,
    tools,
    prompt,
  });

  const agentExecutor = new AgentExecutor({
    agent,
    tools,
  });

  const response = await agentExecutor.invoke({
    input: "What is the Histoire-Géographie programme for Seconde students?",
  });
  console.log(response);
})();
