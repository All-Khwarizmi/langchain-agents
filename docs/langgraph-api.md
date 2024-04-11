# Langgraph API 

From as far as I can tell one could not easily create a agentic flow involving multiple agents. Now Langgraph offers the ability to create a stateful graph of agents and to orchestrate them in a cyclic manner.

Let's explore the new API from the ground up. I will start by creating by implementing the API without using LLMs in order to step by step grasp all the concepts and then I will show how to use it with LLMs. Along the way I will try to cover some of the architectural patterns that I will use in my ITS application.