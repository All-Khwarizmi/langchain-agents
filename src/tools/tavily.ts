import { TavilySearchResults } from "@langchain/community/tools/tavily_search";

export const searchTool = new TavilySearchResults();

export async function tavilySearch({ query }: { query: string }) {
  return searchTool.invoke(query);
}
