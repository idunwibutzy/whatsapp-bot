module.exports = {
  name: "ping",
  aliases: "p",
  code: async (ctx) => {
    ctx.reply("pong");
  },
};
