import log from "./utils/logger";
import { chat, chatModel } from "./chat/chat";

(async () => {
  const response = await chat({ chatModel, query: "Dime una broma" });
  log(response);
})();
