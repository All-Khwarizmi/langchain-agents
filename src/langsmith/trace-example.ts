import { OpenAI } from "openai";
import { traceable } from "langsmith/traceable";
import { wrapOpenAI } from "langsmith/wrappers";

// Auto-trace LLM calls in-context
const client = wrapOpenAI(new OpenAI());
// Auto-trace this function
const pipeline = traceable(async (user_input) => {
  const result = await client.chat.completions.create({
    messages: [{ role: "user", content: user_input }],
    model: "gpt-3.5-turbo",
  });
  return result.choices[0].message.content;
});

(async () => {
  const response = await pipeline("Hello there!");
  console.log(response);
}
)();
// Out: Hello there! How can I assist you today?
