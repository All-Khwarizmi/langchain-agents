import { TavilySearchResults } from "@langchain/community/tools/tavily_search";

const searchTool = new TavilySearchResults();

export async function tavilySearch({ query }: { query: string }) {
  return searchTool.invoke(query);
}
