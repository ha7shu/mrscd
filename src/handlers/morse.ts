import { Composer } from "grammy";
import { encode } from "../converter";

const composer = new Composer();

composer.command("morse", async (ctx) => {
  let input;

  if (ctx.message?.reply_to_message) {
    input =
      ctx.message.reply_to_message.text || ctx.message.reply_to_message.caption;
  } else {
    input = ctx.message?.text.slice(
      ctx.message.text.split(" ", 1)[0].length + 1,
      ctx.message.text.length
    );
  }

  if (!input) return;
  const result = encode(input);
  if (!result) return;
  await ctx.reply(result);
});

export default composer;
