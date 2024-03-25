const { bold } = require("@mengkodingan/ckptw");

module.exports = {
  name: "everyone",
  aliases: ["semua", "all"],
  category: "info",
  code: async (ctx) => {
    const id = ctx._msg.key.remoteJid.split("@")[1];
    if (id === "g.us") {
      var data = await ctx._client.groupMetadata(ctx.id);
      var len = data.participants.length;
      var mentions = [];
      for (let i = 0; i < len; i++) {
        var serialized = data.participants[i].id.split("@")[0];
        mentions.push({
          tag: `@${serialized}`,
          mention: `${serialized}@s.whatsapp.net`,
        });
      }
      var messageText = mentions.map((mention) => mention.tag).join(" ");
      return ctx.reply({
        text: messageText,
        mentions: mentions.map((mention) => mention.mention),
      });
    } else {
      return ctx.reply(`${bold("[ ! ]")} Hanya berlaku di dalam grup`);
    }
  },
};
