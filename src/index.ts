import { Bot } from "grammy";
import { addHandlers } from "./handlers";

const bot = new Bot(process.env.BOT_TOKEN || "");

bot.catch((error) => {
  console.log(error.error);
});

addHandlers(bot);

(async () => {
  bot.start({ drop_pending_updates: true });
})();
