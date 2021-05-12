import { Composer } from "grammy";
import { encode } from "../converter";

const composer = new Composer();

composer.command("start", async (ctx) => {
  if (ctx.chat.type === "private")
    await ctx.reply(
      "Hey there! I can convert text to Morse code " +
        "and vice-verca.\n\n" +
        "You can use me with the following commands:\n\n" +
        "/morse - convert the given text to Morse code\n" +
        "/text - convert the given Morse code to text\n\n" +
        "I work in groups and in inline mode too. To move to inline mode, " +
        "just type @mrscdbot in the message box in any chat you want.\n\n" +
        "Inline usage examples:\n\n@mrscdbot [m|mrs|morse] [text to convert to Morse code]\n" +
        "@mrscdbot [t|txt|text] [Morse code to convert to text]"
    );
  else
    await ctx.reply(
      `....   .   -.--      /      ${encode(ctx.from?.first_name || "you")}`
    );
});

export default composer;
