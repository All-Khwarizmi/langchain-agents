
import { END, StateGraph } from "@langchain/langgraph";


const schema = {
  originalMessage: {
    value: null,
  },
  modifiedMessage: {
    value: null,
  },
  output: {
    value: (x: string, y: string) => x + y,
  },
};

const graph = new StateGraph({ channels: schema });

graph.addNode("input", (state, inputs) => {
  return state;
});
graph.addNode("toUppercase", (state) => {
  return { modifiedMessage: state.originalMessage.toUpperCase() };
});
graph.addEdge("input", "toUppercase");

graph.addEdge("toUppercase", END);

graph.setEntryPoint("input");

const app = graph.compile();

console.log({ graph });

(async () => {
  const res = await app.invoke({ originalMessage: "hello" });
  console.log({ res });
})();
