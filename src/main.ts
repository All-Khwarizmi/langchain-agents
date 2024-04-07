import log from "./utils/logger";
import { chat, chatModel } from "./chat/chat";
import { tavilySearch } from "./tools/tavily";

(async () => {
  //   const response = await chat({ chatModel, query: "Dime una broma" });
  //   log(response);

  const response = await tavilySearch({ query: "Cuál fue el resultado de la copa del Rey de fútbol 2024" });
  
})();
