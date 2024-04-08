import { createOpenAIFunctionsAgent } from "langchain/agents";
import { ChatOpenAI } from "@langchain/openai";
import { TavilySearchResults } from "@langchain/community/tools/tavily_search";
import { ChatPromptTemplate, PromptTemplate } from "@langchain/core/prompts";
import { LLM_MODEL } from "../config/constants.js";
import { MessageGraph } from "@langchain/langgraph";
import { HumanMessage } from "langchain/schema";

const tools = [new TavilySearchResults({ maxResults: 1 })];
export const BASE_PROMPT =
  "You are linguist researcher. Given the following user request, make a search with the tool you have.  When finished, respond with FINISH.";

export function promptCreator({ prompt }: { prompt: string }) {
  return ChatPromptTemplate.fromTemplate(prompt);
}
export async function createOpenAIFunctionsAgentWrapper({
  prompt,
}: {
  prompt: ChatPromptTemplate;
}) {
  const agent = await createOpenAIFunctionsAgent({
    llm: LLM_MODEL,
    tools,
    prompt,
  });
  return agent;
}

export function humanMessageCreator({ message }: { message: string }) {
  return new HumanMessage(message);
}
