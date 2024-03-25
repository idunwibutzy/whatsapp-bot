const { Client, CommandHandler } = require("@mengkodingan/ckptw");
const { Events, MessageType } = require("@mengkodingan/ckptw/lib/Constant");
const path = require("path");
const { inspect } = require("util");
require("./extra/config.js");
const { listCmd } = require("./extra/library.js");

const bot = new Client({
  name: "Idun Von Einzbern",
  prefix: ".",
  printQRInTerminal: true,
  readIncommingMsg: true,
});

bot.ev.once(Events.ClientReady, (msg) => {
  console.log(`Client ready => ${msg.user.id}`);
});

const cmd = new CommandHandler(bot, __dirname + "/commands");
cmd.load();

bot.ev.on(Events.MessagesUpsert, async (msg, ctx) => {
  try {
    if (!msg.content || msg.key.fromMe) return;
    else if (listCmd(msg, ctx)) {
      ctx.simulateTyping();
    }

    if (ctx._sender.jid.includes(global.owner.number)) {
      if (msg.content.startsWith("> ")) {
        const code = msg.content.slice(2);
        const result = await eval(code);
        await ctx.reply(inspect(result));
      } else if (msg.content.startsWith("$ ")) {
        await ctx.reply("Dalam pengambangan");
      }
    }
  } catch (err) {
    console.error(err);
  }
});

bot.launch();
