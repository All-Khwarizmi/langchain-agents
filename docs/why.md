# AI Design Patterns 

## Why AI Design Patterns?
As the applications using AI models become more prevalent, the need for patterns that help overcome some of the new model's limitations is important. AI Design Patterns provide a structured way to design AI models that can help in building better AI models and hence applications.

The limitations of AI models can be broadly classified into the following categories:

1. **Accuracy**: The model's ability to predict the correct output.
2. **Compliance**: The model's ability to comply with the regulations and standards.
3. **Performance**: The model's ability to perform well in terms of speed and resource utilization.
4. **Memory**: The model's ability to remember from past intereactions.
   
The latter being the most important to me as it seems to be the key for more personalized and context-aware applications. But all of them can be addressed by using AI Design Patterns in one way or another.

## Me an AI
My goal is to create an ITS (Intelligent Tutoring System) that can help students learn better by providing personalized and context-aware learning experiences. To achieve this goal, I cannot solely rely on the traditional AI models or chatbots powered by generative models. [Here](https://all-khwarizmi.github.io/blog_quarto/posts/road_map/) I discuss in french what is the architecture I am thinking of using to build this ITS. And whit this architecture in mind, I will be using AI Design Patterns to build the different components of this architecture. 

## AI Design Patterns
### Ressources : 
- [Generative AI Design Patterns: A Comprehensive Guide](https://towardsdatascience.com/generative-ai-design-patterns-a-comprehensive-guide-41425a40d7d0)
- [Patterns for Building LLM-based Systems & Products](https://eugeneyan.com/writing/llm-patterns/)
- [Domain-specific AI apps: A three-step design pattern for specializing LLMs](https://cloud.google.com/blog/products/ai-machine-learning/three-step-design-pattern-for-specializing-llms?hl=en)
- [Agentic Design Patterns Part 1](https://www.deeplearning.ai/the-batch/how-agents-can-improve-llm-performance/?utm_campaign=The%20Batch&utm_source=hs_email&utm_medium=email&_hsenc=p2ANqtz--9ARMthd09q0ABUi-abo6BH62BLbcwPo13LrXs9hUezs-L050Ay7b_rHdWuRIqBVOD6k_S)

There you can find some interesting and more advanced articles about AI Design Patterns that I will not cover.

### The Triad 
<div align="center" ><img src="https://storage.googleapis.com/gweb-cloudblog-publish/images/image1_mspZzWN.max-1000x1000.png" alt="An image displaying the traditional approach of personlazing llms" width="400" ></div>

At first you can try to tackle your problems starting with prompt engineering, then reach for RAG or fine-tuning when needed. But for more complex problems or in order to reduce latency, increase accuracy, or improve compliance, you may need to use a combination of these three approaches. And whenever you start creating such a combinations you might be thankful to find some patterns that help reduce the complexity of the problem you are trying to solve or allow you have a starting point to try to solve it in a more efficient way.

### The Swarm of AI Agents

The rise of AI agentic frameworks was the key to solve most of the problems I had since they allow to orchestrate multiple AI models or to design applications in a more architecture-oriented way. At first Langchain and its agents were not enough, until they released the new Langgraph API that we will explore in the next section.