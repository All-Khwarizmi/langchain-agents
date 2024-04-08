import { END } from "@langchain/langgraph";

import { StateGraph } from "@langchain/langgraph";

const schema = {
  originalMessage: {
    value: null,
  },
  modifiedMessage: { value: null },
  count: { value: null },
  nextAction: { value: null },
  output: {
    value: (x: string[], y: string[]) => x.concat(y),
    default: () => [],
  },
};
interface Schema {
  originalMessage: string;
  modifiedMessage: string[];
  count: number;
  nextAction: "toUppercase" | "toLowercase";
  output: {
    value: (x: string[], y: string[]) => string[];
    default: () => string[];
  };
}
const graph = new StateGraph({ channels: schema });

graph.addNode("input", (state) => {
  console.log({ state, location: "input" });
  return {
    originalMessage: state.originalMessage,
    count: state.count ?? 1,
    nextAction: "toUppercase",
    modifiedMessage: [],
  };
});
graph.addNode("toUppercase", (state) => {
  console.log({ state, location: "toUppercase" });
  let modifiedMessage = state.modifiedMessage;
  modifiedMessage.push(state.originalMessage.toUpperCase());
  return {
    modifiedMessage,
    count: ++state.count,
    nextAction: "toLowercase",
  };
});
graph.addNode("toLowercase", (state) => {
  console.log({ state, location: "toLowercase" });
  let modifiedMessage = state.modifiedMessage;
  modifiedMessage.push(state.originalMessage.toLowerCase());
  return {
    modifiedMessage,

    nextAction: "toUppercase",
    count: ++state.count,
  };
});

graph.addNode("router", (state) => {
  console.log({ state, location: "router" });

  return {
    nextAction: state.nextAction,
    count: ++state.count,
  };
});

graph.addConditionalEdges(
  "router",
  (state: Schema) => {
    console.log({ state, location: "conditional" });

    if (state.count > 5) {
      return "END";
    }
    if (state.nextAction === "toUppercase") {
      return "toUppercase";
    }
    if (state.nextAction === "toLowercase") {
      return "toLowercase";
    }
  },
  {
    toUppercase: "toUppercase",
    toLowercase: "toLowercase",
    END: END,
  }
);
graph.addEdge("input", "router");
graph.addEdge("toUppercase", "router");
graph.addEdge("toLowercase", "router");

graph.setEntryPoint("input");

const app = graph.compile();

console.log({ graph });

(async () => {
  const res = await app.invoke({ originalMessage: "hello" });
  console.log({ res: res });
})();
