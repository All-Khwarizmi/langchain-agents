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

import { getChromaCollection } from "./chat-history-vector-store.js";

export type STINodes =
  | "AgentHistorique"
  | "AgentApprenant"
  | "AgentDomaine"
  | "AgentRapporteur"
  | "AgentSynthetiseur"
  | "AgentEvaluateur"
  | "AgentConfiance"
  | "AgentExpert";

export interface STIState {
  userQuery: string;
  steps: string[];
  nextNode: STINodes;
  messages: string[];
}

export async function historicAgent(state: STIState) {
  console.log("---CALL AGENT---");
  const collection = await getChromaCollection({ name: "chat-history" });
  const queryTexts = [state.userQuery];
  const nResults = 10;
  const queryResponse = await collection.query({
    queryTexts,
    nResults,
  });
  state.messages = queryResponse.documents.flatMap((doc) =>
    doc.map((d) => d || "")
  );
  state.nextNode = "AgentSynthetiseur";
  state.steps.push("Get User History");
  return state;
}
