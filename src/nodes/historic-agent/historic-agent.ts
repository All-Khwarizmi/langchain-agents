/* 
- **Agent Historique**: Processes the starting point of the conversation, analyzing the chat history to provide context for the current interaction.


steps:
- **Get User History**: Fetches the user's chat history from the database.
- **Determines the pertinent information**: Analyzes the user's chat history to determine the pertinent information.
- **Passes the pertinent information to the next node**: Passes the pertinent information to the next node in the conversation (Learner Agent and Domain Agent).

Modules: 
- **Get User History**: Fetches the user's chat history from the vector store.
- **Set User History**: Sets the user's chat history in the vector store.
- **Evaluate the relevant information**: Evaluates the relevant information from the user's chat history.

*/

import { HNSWLib } from "@langchain/community/vectorstores/hnswlib";
import { OpenAIEmbeddings } from "@langchain/openai";
import { AIMessage, BaseMessage, HumanMessage } from "langchain/schema";
import { BASE_CHAT_HISTORY } from "./chat-history.js";
import { BASE_VECTOR_STORE_PATH, EMBEDDINGS } from "../../config/constants.js";


/* MODULE: retrieve chat history */
export async function retrieveChatHistory() {}
