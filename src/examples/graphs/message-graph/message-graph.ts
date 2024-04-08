import { END, MessageGraph } from "@langchain/langgraph";


const graph = new MessageGraph();

console.log({ graph });

graph.addNode("input", (state) => {
  return ["input level"];
});

graph.addNode("output", (state) => {
  return ["output level"];
});

graph.addEdge("input", "output");

graph.addEdge("output", END);

graph.setEntryPoint("input");

const app = graph.compile();

console.log({ graph });

(async () => {
  const res = await app.invoke({ originalMessage: "hello" });
  console.log({ res });
})();
