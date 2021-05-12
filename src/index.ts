import { Bot } from "grammy";
import { addHandlers } from "./handlers";

const bot = new Bot(process.env.BOT_TOKEN || "");

addHandlers(bot);

bot.catch((error) => {
  console.log(error.error);
});

bot.start({ drop_pending_updates: true });
