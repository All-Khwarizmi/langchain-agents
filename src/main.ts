import { simpleAgentQuery } from "./agents/simple-query-agent.js";

(async () => {
  await simpleAgentQuery({ query: "What is the capital of France?" });
})();
