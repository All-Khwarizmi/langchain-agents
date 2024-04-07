# Tavily
We have a built-in tool in LangChain to easily use Tavily search engine as tool. Note that this requires a Tavily API key set as an environment variable named TAVILY_API_KEY - they have a free tier 
[here](https://tavily.com/).

## Usage
Make sure to install the package first:
```bash
pnpm add @langchain/community
```

```bash
export TAVILY_API_KEY=<tvly-key>
```

```typescript
import { TavilySearchResults } from "@langchain/community/tools/tavily_search";

const searchTool = new TavilySearchResults();

const toolResult = await searchTool.invoke("what is the weather in SF?");

console.log(toolResult);

/*
  [{"title":"Weather in December 2023 in San Francisco, California, USA","url":"https://www.timeanddate.com/weather/@5391959/historic?month=12&year=2023","content":"Currently: 52 °F. Broken clouds. (Weather station: San Francisco International Airport, USA). See more current weather Select month: December 2023 Weather in San Francisco — Graph °F Sun, Dec 17 Lo:55 6 pm Hi:57 4 Mon, Dec 18 Lo:54 12 am Hi:55 7 Lo:54 6 am Hi:55 10 Lo:57 12 pm Hi:64 9 Lo:63 6 pm Hi:64 14 Tue, Dec 19 Lo:61","score":0.96006},...]
*/
```