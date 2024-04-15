# Getting started with Langchain LangSmith and Typescript for Agentic AI applications

## Introduction
LangChain is a framework for developing applications powered by language models.

This framework consists of several parts.

- LangChain Libraries: The Python and JavaScript libraries. Contains interfaces and integrations for a myriad of components, a basic run time for combining these components into chains and agents, and off-the-shelf implementations of chains and agents.
- LangChain Templates: A collection of easily deployable reference architectures for a wide variety of tasks. (Python only)
- LangServe: A library for deploying LangChain chains as a REST API. (Python only)
- LangSmith: A developer platform that lets you debug, test, evaluate, and monitor chains built on any LLM framework and seamlessly integrates with LangChain.
Create an API key
To create an API key head to the setting pages. Then click Create API Key.

### Setup your environment
Create directory and navigate to it
```shell
pnpm add -D typescript tsx && tsc --init
```

Install the framework packages
```shell
pnpm add dotenv langchain langsmith @langchain/openai
```

Create a .env file in the root of your project and add the following
```shell
LANGCHAIN_TRACING_V2=true
LANGCHAIN_API_KEY=<your-api-key>
OPENAI_API_KEY=<your-openai-api-key>
```
or 
```shell
export LANGCHAIN_TRACING_V2=true
export LANGCHAIN_API_KEY=<your-api-key>
export LANGCHAIN_CALLBACKS_BACKGROUND=true;
```

Set the following scripts in your package.json
```json
{
    "scripts": {
    "dev": "tsx watch ./src/main.ts",
    "build": "tsx build ./src/main.ts",
    "start": "node ./dist/main.js",
    "dry": "tsx ./src/main.ts"
  },
}
```

