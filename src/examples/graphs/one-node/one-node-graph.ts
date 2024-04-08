import { END, MessageGraph } from "@langchain/langgraph";
import { BaseMessage } from "langchain/schema";
import { LLM_MODEL } from "../../../config/constants.js";
import { promptCreator, humanMessageCreator } from "../index.js";

(async () => {
  const prompt = promptCreator({ prompt: "What is the capital of France?" });

  const agent = async (state: BaseMessage[]) => {
    return LLM_MODEL.invoke(state);
  };

  const graph = new MessageGraph();

  graph.addNode("researcher", agent);

  graph.addEdge("researcher", END);

  graph.setEntryPoint("researcher");

  const runnable = graph.compile();

  const message = humanMessageCreator({
    message: "Quelle est l'origine de l'espagnol?",
  });

  //   const res = await runnable.invoke(message);

  //   console.log(res);
})();
