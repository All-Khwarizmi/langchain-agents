import { Graph, StateGraph, StateGraphArgs } from "@langchain/langgraph";
import { StateGraphArgsCustom } from "./types.js";

const schema: {
  message: string;
} = {
  message: "",
};

const schemaB: {
  input: string;
  messages: {
    value: (a: string, b: string) => string;
    default?: () => string;
  };
} = {
  input: "",
  messages: {
    value: (a: string, b: string) => a + b, // or => null
    default: () => "",
  },
};

const schemaC: {
  messages: {
    value: (a: unknown) => unknown;
    default?: () => unknown;
  };
} = {
  messages: {
    value: (a: unknown) => null, // or => unknown
    default: () => null, // or => unknown
  },
};

const graph = new StateGraph({ channels: schema });
const graphB = new StateGraph({ channels: schemaB });
const graphC = new StateGraph({ channels: schemaC });

graph.addNode("researcher", async (state: typeof schemaB) => {
  return {
    messages: state.input.toUpperCase(),
  };
});

graphB.addEdge("researcher", "researcher");
