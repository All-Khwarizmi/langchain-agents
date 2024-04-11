# Langgraph API 

From as far as I can tell one could not easily create a agentic flow involving multiple agents. Now Langgraph offers the ability to create a stateful graph of agents and to orchestrate them in a cyclic manner.

Let's explore the new API from the ground up. I will start by creating by implementing the API without using LLMs in order to step by step grasp all the concepts and then I will show how to use it with LLMs. Along the way I will try to cover some of the architectural patterns that I will use in my ITS application.


## Building blocks

**We are not going to instantiate an llm instance for now**

### The Graph 
In computer science a graph is a collection of nodes connected by edges. It’s used to represent relationships between different entities. 

What makes the graph of Langgraph different from a traditional graph is that it is stateful. It can store the state of the nodes and the edges. So that unlike a traditional graph where the logic is contained in the algorithm methods, the nodes and edges can have a memory of the past interactions, update the state of the graph, and trigger events to achieve a specific goal in a cyclic manner.

The documentation uses the MessaGraph to keep things simple. However, even if the MessaGraph is a good example to understand the other building blocks, I needed to mess with StateGraph class to understand the inner workings of it. So we will be implementing the StateGraph to do the same thing as the MessaGraph to explain how the graph class works. We are also going to try to add typesafety which something that the API lacks.


#### The StateGraph
```typescript
import { StateGraph } from 'langgraph';
```

To be able to work the the class, we will need to define a schema that fulfills the `StateGraph` interface. The schema is used to define the structure of the graph.

```typescript
export type BinaryOperator<Value> = (a: Value, b: Value) => Value;

export interface StateGraphArgs<Channels extends Record<string, any>> {
    channels: {
        [K in keyof Channels]: {
            value: BinaryOperator<Channels[K]> | null;
            default?: () => Channels[K];
        } | string;
    } | {
        value: BinaryOperator<unknown> | null;
        default?: () => unknown;
    };
}
export declare class StateGraph<Channels extends Record<string, any>> extends Graph<Channels> {
    channels: Record<string, BaseChannel>;
    constructor(fields: StateGraphArgs<Channels>);
    addNode(key: string, action: RunnableLike): void;
    compile(checkpointer?: BaseCheckpointSaver): Pregel;
}
```

So our schema could have one of the following structures like definition:

```typescript
const schema: {
  message: string;
} = {
  message: "",
};
```
```typescript
const schemaB: {
  input: string;
  output: string;
  messages: {
    value: (a: string) => string;
    default?: () => string;
  };
} = {
  input: "",
  output: "",
  messages: {
    value: (a: string) => a, // or => null
    default: () => "",
  },
};
```

Where the default method, must be a factory that returns the default value for that attribute, is optional and will be null by default. The value method is a binary operator that takes one or two arguments and returns a value of the same type. It is also optional and will be null by default.

```typescript
// This provides the most type safety
// const graph: StateGraph<{
//    messages: string;
//}>
const graph = new StateGraph({
  channels: schemaB,
});
```

#### The Node
The node is the basic building block of the graph. The `addNode` method is used to add a node to the graph. It takes a key and an action as arguments. The key is a unique identifier for the node. The action is a function that takes the state of the graph as input and returns a new state.

```typescript
// Here we have to manually specify the type of the state. It would be nice if the API could infer it.
graph.addNode("date", async (state: typeof schema) => {
  return {
    output: state.input + " " + new Date().toISOString(),
  };
});
graph.addNode("toUpperCase", async (state: typeof schema) => {
  return {
    messages: state.input.toUpperCase(),
  };
});
```


#### The Edge

The edge is used to connect two nodes. The `addEdge` method is used to add an edge to the graph. It takes a source key and a target key as arguments. The source key is the key of the source node. The target key is the key of the target node. 

You have to make sure to specify a graph flow that ends somehow. Otherwise the graph will throw an error. For instance here we could add an edge from the input node to the toUpperCase node and then from the toUpperCase node `END` builin.

```typescript
import { END } from "@langchain/langgraph";

graph.addEdge("date", "toUpperCase");
graph.addEdge("toUpperCase", END);
```

#### The Compiler

You have to specify an entry point for the graph. The entry point is the key of the node where the graph will start.
The `compile` method is used to compile the graph into an object. The object is used to run the graph. You can invoke it as it is a `Runnable`.

```typescript
graph.setEntryPoint("date");
const runnable = graph.compile();
```

```typescript
const state = await runnable.invoke({
  input: "hello",
});
console.log(state);

/* 
{
  input: 'hello',
  output: 'hello 2024-04-11T12:22:25.649Z',
  messages: ''
}
*/
```

### Conclusions

Here we have seen how to build a simple graph using the `StateGraph` class. We have defined a schema, added nodes to the graph, connected them using edges, and compiled the graph into an object. We have run the graph and seen the output.




