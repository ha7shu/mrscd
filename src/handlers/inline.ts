import { Composer } from "grammy";
import { v4 } from "uuid";
import { encode, decode } from "../converter";

const composer = new Composer();

composer.on("inline_query", async (ctx) => {
  const method = ctx.inlineQuery.query.split(" ", 1)[0].toLowerCase(),
    input = ctx.inlineQuery.query.slice(
      method.length + 1,
      ctx.inlineQuery.query.length
    );
  if (!input) return;
  else if (method == "m" || method == "mrs" || method == "morse") {
    await ctx.answerInlineQuery([
      {
        id: v4(),
        type: "article",
        title: "Converted text",
        input_message_content: { message_text: encode(input) },
      },
    ]);
  } else if (method == "t" || method == "txt" || method == "text") {
    await ctx.answerInlineQuery([
      {
        id: v4(),
        type: "article",
        title: "Converted morse",
        input_message_content: { message_text: decode(input) },
      },
    ]);
  }
});

export default composer;
