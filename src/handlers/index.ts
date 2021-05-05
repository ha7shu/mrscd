import { Bot } from "grammy";
import start from "./start";
import inline from "./inline";
import morse from "./morse";
import text from "./text";

export const addHandlers = (bot: Bot) => {
  bot.use(start);
  bot.use(inline);
  bot.use(morse);
  bot.use(text);
};
